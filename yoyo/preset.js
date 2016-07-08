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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _babelPluginSyntaxJsx = __webpack_require__(67);

	var _babelPluginSyntaxJsx2 = _interopRequireDefault(_babelPluginSyntaxJsx);

	var _babelPluginTransformReactJsx = __webpack_require__(152);

	var _babelPluginTransformReactJsx2 = _interopRequireDefault(_babelPluginTransformReactJsx);

	var _babelPluginJsxPragmatic = __webpack_require__(151);

	var _babelPluginJsxPragmatic2 = _interopRequireDefault(_babelPluginJsxPragmatic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  plugins: [_babelPluginSyntaxJsx2.default, [_babelPluginTransformReactJsx2.default, { pragma: 'jsx' }], [_babelPluginJsxPragmatic2.default, { module: 'relm/yoyo/jsx', import: 'jsx', export: 'jsx' }]]
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(208), __esModule: true };

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.createTypeAnnotationBasedOnTypeof = exports.removeTypeDuplicates = exports.createUnionTypeAnnotation = exports.valueToNode = exports.toBlock = exports.toExpression = exports.toStatement = exports.toBindingIdentifierName = exports.toIdentifier = exports.toKeyAlias = exports.toSequenceExpression = exports.toComputedKey = exports.isImmutable = exports.isScope = exports.isSpecifierDefault = exports.isVar = exports.isBlockScoped = exports.isLet = exports.isValidIdentifier = exports.isReferenced = exports.isBinding = exports.getOuterBindingIdentifiers = exports.getBindingIdentifiers = exports.TYPES = exports.react = exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _keys = __webpack_require__(68);

	var _keys2 = _interopRequireDefault(_keys);

	var _stringify = __webpack_require__(39);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _constants = __webpack_require__(70);

	Object.defineProperty(exports, "STATEMENT_OR_BLOCK_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.STATEMENT_OR_BLOCK_KEYS;
	  }
	});
	Object.defineProperty(exports, "FLATTENABLE_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.FLATTENABLE_KEYS;
	  }
	});
	Object.defineProperty(exports, "FOR_INIT_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.FOR_INIT_KEYS;
	  }
	});
	Object.defineProperty(exports, "COMMENT_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.COMMENT_KEYS;
	  }
	});
	Object.defineProperty(exports, "LOGICAL_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.LOGICAL_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "UPDATE_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.UPDATE_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "BOOLEAN_NUMBER_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BOOLEAN_NUMBER_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "EQUALITY_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.EQUALITY_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "COMPARISON_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.COMPARISON_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "BOOLEAN_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BOOLEAN_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "NUMBER_BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.NUMBER_BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "BINARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BINARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "BOOLEAN_UNARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BOOLEAN_UNARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "NUMBER_UNARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.NUMBER_UNARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "STRING_UNARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.STRING_UNARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "UNARY_OPERATORS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.UNARY_OPERATORS;
	  }
	});
	Object.defineProperty(exports, "INHERIT_KEYS", {
	  enumerable: true,
	  get: function get() {
	    return _constants.INHERIT_KEYS;
	  }
	});
	Object.defineProperty(exports, "BLOCK_SCOPED_SYMBOL", {
	  enumerable: true,
	  get: function get() {
	    return _constants.BLOCK_SCOPED_SYMBOL;
	  }
	});
	Object.defineProperty(exports, "NOT_LOCAL_BINDING", {
	  enumerable: true,
	  get: function get() {
	    return _constants.NOT_LOCAL_BINDING;
	  }
	});
	exports.is = is;
	exports.isType = isType;
	exports.validate = validate;
	exports.shallowEqual = shallowEqual;
	exports.appendToMemberExpression = appendToMemberExpression;
	exports.prependToMemberExpression = prependToMemberExpression;
	exports.ensureBlock = ensureBlock;
	exports.clone = clone;
	exports.cloneWithoutLoc = cloneWithoutLoc;
	exports.cloneDeep = cloneDeep;
	exports.buildMatchMemberExpression = buildMatchMemberExpression;
	exports.removeComments = removeComments;
	exports.inheritsComments = inheritsComments;
	exports.inheritTrailingComments = inheritTrailingComments;
	exports.inheritLeadingComments = inheritLeadingComments;
	exports.inheritInnerComments = inheritInnerComments;
	exports.inherits = inherits;
	exports.assertNode = assertNode;
	exports.isNode = isNode;

	var _retrievers = __webpack_require__(105);

	Object.defineProperty(exports, "getBindingIdentifiers", {
	  enumerable: true,
	  get: function get() {
	    return _retrievers.getBindingIdentifiers;
	  }
	});
	Object.defineProperty(exports, "getOuterBindingIdentifiers", {
	  enumerable: true,
	  get: function get() {
	    return _retrievers.getOuterBindingIdentifiers;
	  }
	});

	var _validators = __webpack_require__(193);

	Object.defineProperty(exports, "isBinding", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isBinding;
	  }
	});
	Object.defineProperty(exports, "isReferenced", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isReferenced;
	  }
	});
	Object.defineProperty(exports, "isValidIdentifier", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isValidIdentifier;
	  }
	});
	Object.defineProperty(exports, "isLet", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isLet;
	  }
	});
	Object.defineProperty(exports, "isBlockScoped", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isBlockScoped;
	  }
	});
	Object.defineProperty(exports, "isVar", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isVar;
	  }
	});
	Object.defineProperty(exports, "isSpecifierDefault", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isSpecifierDefault;
	  }
	});
	Object.defineProperty(exports, "isScope", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isScope;
	  }
	});
	Object.defineProperty(exports, "isImmutable", {
	  enumerable: true,
	  get: function get() {
	    return _validators.isImmutable;
	  }
	});

	var _converters = __webpack_require__(183);

	Object.defineProperty(exports, "toComputedKey", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toComputedKey;
	  }
	});
	Object.defineProperty(exports, "toSequenceExpression", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toSequenceExpression;
	  }
	});
	Object.defineProperty(exports, "toKeyAlias", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toKeyAlias;
	  }
	});
	Object.defineProperty(exports, "toIdentifier", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toIdentifier;
	  }
	});
	Object.defineProperty(exports, "toBindingIdentifierName", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toBindingIdentifierName;
	  }
	});
	Object.defineProperty(exports, "toStatement", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toStatement;
	  }
	});
	Object.defineProperty(exports, "toExpression", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toExpression;
	  }
	});
	Object.defineProperty(exports, "toBlock", {
	  enumerable: true,
	  get: function get() {
	    return _converters.toBlock;
	  }
	});
	Object.defineProperty(exports, "valueToNode", {
	  enumerable: true,
	  get: function get() {
	    return _converters.valueToNode;
	  }
	});

	var _flow = __webpack_require__(191);

	Object.defineProperty(exports, "createUnionTypeAnnotation", {
	  enumerable: true,
	  get: function get() {
	    return _flow.createUnionTypeAnnotation;
	  }
	});
	Object.defineProperty(exports, "removeTypeDuplicates", {
	  enumerable: true,
	  get: function get() {
	    return _flow.removeTypeDuplicates;
	  }
	});
	Object.defineProperty(exports, "createTypeAnnotationBasedOnTypeof", {
	  enumerable: true,
	  get: function get() {
	    return _flow.createTypeAnnotationBasedOnTypeof;
	  }
	});

	var _toFastProperties = __webpack_require__(384);

	var _toFastProperties2 = _interopRequireDefault(_toFastProperties);

	var _compact = __webpack_require__(357);

	var _compact2 = _interopRequireDefault(_compact);

	var _clone = __webpack_require__(143);

	var _clone2 = _interopRequireDefault(_clone);

	var _each = __webpack_require__(359);

	var _each2 = _interopRequireDefault(_each);

	var _uniq = __webpack_require__(379);

	var _uniq2 = _interopRequireDefault(_uniq);

	__webpack_require__(188);

	var _definitions = __webpack_require__(19);

	var _react2 = __webpack_require__(192);

	var _react = _interopRequireWildcard(_react2);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var t = exports;

	/**
	 * Registers `is[Type]` and `assert[Type]` generated functions for a given `type`.
	 * Pass `skipAliasCheck` to force it to directly compare `node.type` with `type`.
	 */

	function registerType(type) {
	  var is = t["is" + type];
	  if (!is) {
	    is = t["is" + type] = function (node, opts) {
	      return t.is(type, node, opts);
	    };
	  }

	  t["assert" + type] = function (node, opts) {
	    opts = opts || {};
	    if (!is(node, opts)) {
	      throw new Error("Expected type " + (0, _stringify2.default)(type) + " with option " + (0, _stringify2.default)(opts));
	    }
	  };
	}

	//

	exports.VISITOR_KEYS = _definitions.VISITOR_KEYS;
	exports.ALIAS_KEYS = _definitions.ALIAS_KEYS;
	exports.NODE_FIELDS = _definitions.NODE_FIELDS;
	exports.BUILDER_KEYS = _definitions.BUILDER_KEYS;
	exports.DEPRECATED_KEYS = _definitions.DEPRECATED_KEYS;
	exports.react = _react;

	/**
	 * Registers `is[Type]` and `assert[Type]` for all types.
	 */

	for (var type in t.VISITOR_KEYS) {
	  registerType(type);
	}

	/**
	 * Flip `ALIAS_KEYS` for faster access in the reverse direction.
	 */

	t.FLIPPED_ALIAS_KEYS = {};

	(0, _each2.default)(t.ALIAS_KEYS, function (aliases, type) {
	  (0, _each2.default)(aliases, function (alias) {
	    var types = t.FLIPPED_ALIAS_KEYS[alias] = t.FLIPPED_ALIAS_KEYS[alias] || [];
	    types.push(type);
	  });
	});

	/**
	 * Registers `is[Alias]` and `assert[Alias]` functions for all aliases.
	 */

	(0, _each2.default)(t.FLIPPED_ALIAS_KEYS, function (types, type) {
	  t[type.toUpperCase() + "_TYPES"] = types;
	  registerType(type);
	});

	var TYPES = exports.TYPES = (0, _keys2.default)(t.VISITOR_KEYS).concat((0, _keys2.default)(t.FLIPPED_ALIAS_KEYS)).concat((0, _keys2.default)(t.DEPRECATED_KEYS));

	/**
	 * Returns whether `node` is of given `type`.
	 *
	 * For better performance, use this instead of `is[Type]` when `type` is unknown.
	 * Optionally, pass `skipAliasCheck` to directly compare `node.type` with `type`.
	 */

	function is(type, node, opts) {
	  if (!node) return false;

	  var matches = isType(node.type, type);
	  if (!matches) return false;

	  if (typeof opts === "undefined") {
	    return true;
	  } else {
	    return t.shallowEqual(node, opts);
	  }
	}

	/**
	 * Test if a `nodeType` is a `targetType` or if `targetType` is an alias of `nodeType`.
	 */

	function isType(nodeType, targetType) {
	  if (nodeType === targetType) return true;

	  // This is a fast-path. If the test above failed, but an alias key is found, then the
	  // targetType was a primary node type, so there's no need to check the aliases.
	  if (t.ALIAS_KEYS[targetType]) return false;

	  var aliases = t.FLIPPED_ALIAS_KEYS[targetType];
	  if (aliases) {
	    if (aliases[0] === nodeType) return true;

	    for (var _iterator = aliases, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var alias = _ref;

	      if (nodeType === alias) return true;
	    }
	  }

	  return false;
	}

	/**
	 * Description
	 */

	(0, _each2.default)(t.BUILDER_KEYS, function (keys, type) {
	  function builder() {
	    if (arguments.length > keys.length) {
	      throw new Error("t." + type + ": Too many arguments passed. Received " + arguments.length + " but can receive " + ("no more than " + keys.length));
	    }

	    var node = {};
	    node.type = type;

	    var i = 0;

	    for (var _iterator2 = keys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var _key = _ref2;

	      var field = t.NODE_FIELDS[type][_key];

	      var arg = arguments[i++];
	      if (arg === undefined) arg = (0, _clone2.default)(field.default);

	      node[_key] = arg;
	    }

	    for (var key in node) {
	      validate(node, key, node[key]);
	    }

	    return node;
	  }

	  t[type] = builder;
	  t[type[0].toLowerCase() + type.slice(1)] = builder;
	});

	/**
	 * Description
	 */

	var _loop = function _loop(_type) {
	  var newType = t.DEPRECATED_KEYS[_type];

	  function proxy(fn) {
	    return function () {
	      console.trace("The node type " + _type + " has been renamed to " + newType);
	      return fn.apply(this, arguments);
	    };
	  }

	  t[_type] = t[_type[0].toLowerCase() + _type.slice(1)] = proxy(t[newType]);
	  t["is" + _type] = proxy(t["is" + newType]);
	  t["assert" + _type] = proxy(t["assert" + newType]);
	};

	for (var _type in t.DEPRECATED_KEYS) {
	  _loop(_type);
	}

	/**
	 * Description
	 */

	function validate(node, key, val) {
	  if (!node) return;

	  var fields = t.NODE_FIELDS[node.type];
	  if (!fields) return;

	  var field = fields[key];
	  if (!field || !field.validate) return;
	  if (field.optional && val == null) return;

	  field.validate(node, key, val);
	}

	/**
	 * Test if an object is shallowly equal.
	 */

	function shallowEqual(actual, expected) {
	  var keys = (0, _keys2.default)(expected);

	  for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	    var _ref3;

	    if (_isArray3) {
	      if (_i3 >= _iterator3.length) break;
	      _ref3 = _iterator3[_i3++];
	    } else {
	      _i3 = _iterator3.next();
	      if (_i3.done) break;
	      _ref3 = _i3.value;
	    }

	    var key = _ref3;

	    if (actual[key] !== expected[key]) {
	      return false;
	    }
	  }

	  return true;
	}

	/**
	 * Append a node to a member expression.
	 */

	function appendToMemberExpression(member, append, computed) {
	  member.object = t.memberExpression(member.object, member.property, member.computed);
	  member.property = append;
	  member.computed = !!computed;
	  return member;
	}

	/**
	 * Prepend a node to a member expression.
	 */

	function prependToMemberExpression(member, prepend) {
	  member.object = t.memberExpression(prepend, member.object);
	  return member;
	}

	/**
	 * Ensure the `key` (defaults to "body") of a `node` is a block.
	 * Casting it to a block if it is not.
	 */

	function ensureBlock(node) {
	  var key = arguments.length <= 1 || arguments[1] === undefined ? "body" : arguments[1];

	  return node[key] = t.toBlock(node[key], node);
	}

	/**
	 * Create a shallow clone of a `node` excluding `_private` properties.
	 */

	function clone(node) {
	  var newNode = {};
	  for (var key in node) {
	    if (key[0] === "_") continue;
	    newNode[key] = node[key];
	  }
	  return newNode;
	}

	/**
	 * Create a shallow clone of a `node` excluding `_private` and location properties.
	 */

	function cloneWithoutLoc(node) {
	  var newNode = clone(node);
	  delete newNode.loc;
	  return newNode;
	}

	/**
	 * Create a deep clone of a `node` and all of it's child nodes
	 * exluding `_private` properties.
	 */

	function cloneDeep(node) {
	  var newNode = {};

	  for (var key in node) {
	    if (key[0] === "_") continue;

	    var val = node[key];

	    if (val) {
	      if (val.type) {
	        val = t.cloneDeep(val);
	      } else if (Array.isArray(val)) {
	        val = val.map(t.cloneDeep);
	      }
	    }

	    newNode[key] = val;
	  }

	  return newNode;
	}

	/**
	 * Build a function that when called will return whether or not the
	 * input `node` `MemberExpression` matches the input `match`.
	 *
	 * For example, given the match `React.createClass` it would match the
	 * parsed nodes of `React.createClass` and `React["createClass"]`.
	 */

	function buildMatchMemberExpression(match, allowPartial) {
	  var parts = match.split(".");

	  return function (member) {
	    // not a member expression
	    if (!t.isMemberExpression(member)) return false;

	    var search = [member];
	    var i = 0;

	    while (search.length) {
	      var node = search.shift();

	      if (allowPartial && i === parts.length) {
	        return true;
	      }

	      if (t.isIdentifier(node)) {
	        // this part doesn't match
	        if (parts[i] !== node.name) return false;
	      } else if (t.isStringLiteral(node)) {
	        // this part doesn't match
	        if (parts[i] !== node.value) return false;
	      } else if (t.isMemberExpression(node)) {
	        if (node.computed && !t.isStringLiteral(node.property)) {
	          // we can't deal with this
	          return false;
	        } else {
	          search.push(node.object);
	          search.push(node.property);
	          continue;
	        }
	      } else {
	        // we can't deal with this
	        return false;
	      }

	      // too many parts
	      if (++i > parts.length) {
	        return false;
	      }
	    }

	    return true;
	  };
	}

	/**
	 * Remove comment properties from a node.
	 */

	function removeComments(node) {
	  for (var _iterator4 = t.COMMENT_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	    var _ref4;

	    if (_isArray4) {
	      if (_i4 >= _iterator4.length) break;
	      _ref4 = _iterator4[_i4++];
	    } else {
	      _i4 = _iterator4.next();
	      if (_i4.done) break;
	      _ref4 = _i4.value;
	    }

	    var key = _ref4;

	    delete node[key];
	  }
	  return node;
	}

	/**
	 * Inherit all unique comments from `parent` node to `child` node.
	 */

	function inheritsComments(child, parent) {
	  inheritTrailingComments(child, parent);
	  inheritLeadingComments(child, parent);
	  inheritInnerComments(child, parent);
	  return child;
	}

	function inheritTrailingComments(child, parent) {
	  _inheritComments("trailingComments", child, parent);
	}

	function inheritLeadingComments(child, parent) {
	  _inheritComments("leadingComments", child, parent);
	}

	function inheritInnerComments(child, parent) {
	  _inheritComments("innerComments", child, parent);
	}

	function _inheritComments(key, child, parent) {
	  if (child && parent) {
	    child[key] = (0, _uniq2.default)((0, _compact2.default)([].concat(child[key], parent[key])));
	  }
	}

	// Can't use import because of cyclic dependency between babel-traverse
	// and this module (babel-types). This require needs to appear after
	// we export the TYPES constant, so we lazy-initialize it before use.
	var traverse = void 0;

	/**
	 * Inherit all contextual properties from `parent` node to `child` node.
	 */

	function inherits(child, parent) {
	  if (!traverse) traverse = __webpack_require__(26).default;

	  if (!child || !parent) return child;

	  // optionally inherit specific properties if not null
	  for (var _iterator5 = t.INHERIT_KEYS.optional, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
	    var _ref5;

	    if (_isArray5) {
	      if (_i5 >= _iterator5.length) break;
	      _ref5 = _iterator5[_i5++];
	    } else {
	      _i5 = _iterator5.next();
	      if (_i5.done) break;
	      _ref5 = _i5.value;
	    }

	    var _key2 = _ref5;

	    if (child[_key2] == null) {
	      child[_key2] = parent[_key2];
	    }
	  }

	  // force inherit "private" properties
	  for (var key in parent) {
	    if (key[0] === "_") child[key] = parent[key];
	  }

	  // force inherit select properties
	  for (var _iterator6 = t.INHERIT_KEYS.force, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
	    var _ref6;

	    if (_isArray6) {
	      if (_i6 >= _iterator6.length) break;
	      _ref6 = _iterator6[_i6++];
	    } else {
	      _i6 = _iterator6.next();
	      if (_i6.done) break;
	      _ref6 = _i6.value;
	    }

	    var _key3 = _ref6;

	    child[_key3] = parent[_key3];
	  }

	  t.inheritsComments(child, parent);
	  traverse.copyCache(parent, child);

	  return child;
	}

	/**
	 * TODO
	 */

	function assertNode(node) {
	  if (!isNode(node)) {
	    // $FlowFixMe
	    throw new TypeError("Not a valid node " + (node && node.type));
	  }
	}

	/**
	 * TODO
	 */

	function isNode(node) {
	  return !!(node && _definitions.VISITOR_KEYS[node.type]);
	}

	// Optimize property access.
	(0, _toFastProperties2.default)(t);
	(0, _toFastProperties2.default)(t.VISITOR_KEYS);

	//

/***/ },
/* 3 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(82)('wks')
	  , uid        = __webpack_require__(49)
	  , Symbol     = __webpack_require__(9).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.plugins = undefined;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _getPrototypeOf = __webpack_require__(157);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(40);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(164);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(163);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _identifier = __webpack_require__(33);

	var _options = __webpack_require__(195);

	var _tokenizer = __webpack_require__(106);

	var _tokenizer2 = _interopRequireDefault(_tokenizer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var plugins = exports.plugins = {};

	var Parser = function (_Tokenizer) {
	  (0, _inherits3.default)(Parser, _Tokenizer);

	  function Parser(options, input) {
	    (0, _classCallCheck3.default)(this, Parser);

	    options = (0, _options.getOptions)(options);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Parser).call(this, options, input));

	    _this.options = options;
	    _this.inModule = _this.options.sourceType === "module";
	    _this.isReservedWord = _identifier.reservedWords[6];
	    _this.input = input;
	    _this.plugins = _this.loadPlugins(_this.options.plugins);
	    _this.filename = options.sourceFilename;

	    // If enabled, skip leading hashbang line.
	    if (_this.state.pos === 0 && _this.input[0] === "#" && _this.input[1] === "!") {
	      _this.skipLineComment(2);
	    }
	    return _this;
	  }

	  (0, _createClass3.default)(Parser, [{
	    key: "hasPlugin",
	    value: function hasPlugin(name) {
	      return !!(this.plugins["*"] || this.plugins[name]);
	    }
	  }, {
	    key: "extend",
	    value: function extend(name, f) {
	      this[name] = f(this[name]);
	    }
	  }, {
	    key: "loadPlugins",
	    value: function loadPlugins(plugins) {
	      var pluginMap = {};

	      if (plugins.indexOf("flow") >= 0) {
	        // ensure flow plugin loads last
	        plugins = plugins.filter(function (plugin) {
	          return plugin !== "flow";
	        });
	        plugins.push("flow");
	      }

	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(plugins), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var name = _step.value;

	          if (!pluginMap[name]) {
	            pluginMap[name] = true;

	            var plugin = exports.plugins[name];
	            if (plugin) plugin(this);
	          }
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

	      return pluginMap;
	    }
	  }, {
	    key: "parse",
	    value: function parse() {
	      var file = this.startNode();
	      var program = this.startNode();
	      this.nextToken();
	      return this.parseTopLevel(file, program);
	    }
	  }]);
	  return Parser;
	}(_tokenizer2.default);

	exports.default = Parser;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.keywords = exports.types = exports.TokenType = undefined;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// ## Token types

	// The assignment of fine-grained, information-carrying type objects
	// allows the tokenizer to store the information it has about a
	// token in a way that is very cheap for the parser to look up.

	// All token type variables start with an underscore, to make them
	// easy to recognize.

	// The `beforeExpr` property is used to disambiguate between regular
	// expressions and divisions. It is set on all token types that can
	// be followed by an expression (thus, a slash after them would be a
	// regular expression).
	//
	// `isLoop` marks a keyword as starting a loop, which is important
	// to know when parsing a label, in order to allow or disallow
	// continue jumps to that label.

	var TokenType = exports.TokenType = function TokenType(label) {
	  var conf = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	  (0, _classCallCheck3.default)(this, TokenType);

	  this.label = label;
	  this.keyword = conf.keyword;
	  this.beforeExpr = !!conf.beforeExpr;
	  this.startsExpr = !!conf.startsExpr;
	  this.rightAssociative = !!conf.rightAssociative;
	  this.isLoop = !!conf.isLoop;
	  this.isAssign = !!conf.isAssign;
	  this.prefix = !!conf.prefix;
	  this.postfix = !!conf.postfix;
	  this.binop = conf.binop || null;
	  this.updateContext = null;
	};

	function binop(name, prec) {
	  return new TokenType(name, { beforeExpr: true, binop: prec });
	}
	var beforeExpr = { beforeExpr: true },
	    startsExpr = { startsExpr: true };

	var types = exports.types = {
	  num: new TokenType("num", startsExpr),
	  regexp: new TokenType("regexp", startsExpr),
	  string: new TokenType("string", startsExpr),
	  name: new TokenType("name", startsExpr),
	  eof: new TokenType("eof"),

	  // Punctuation token types.
	  bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
	  bracketR: new TokenType("]"),
	  braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
	  braceR: new TokenType("}"),
	  parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
	  parenR: new TokenType(")"),
	  comma: new TokenType(",", beforeExpr),
	  semi: new TokenType(";", beforeExpr),
	  colon: new TokenType(":", beforeExpr),
	  doubleColon: new TokenType("::", beforeExpr),
	  dot: new TokenType("."),
	  question: new TokenType("?", beforeExpr),
	  arrow: new TokenType("=>", beforeExpr),
	  template: new TokenType("template"),
	  ellipsis: new TokenType("...", beforeExpr),
	  backQuote: new TokenType("`", startsExpr),
	  dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
	  at: new TokenType("@"),

	  // Operators. These carry several kinds of properties to help the
	  // parser use them properly (the presence of these properties is
	  // what categorizes them as operators).
	  //
	  // `binop`, when present, specifies that this operator is a binary
	  // operator, and will refer to its precedence.
	  //
	  // `prefix` and `postfix` mark the operator as a prefix or postfix
	  // unary operator.
	  //
	  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
	  // binary operators with a very low precedence, that should result
	  // in AssignmentExpression nodes.

	  eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
	  assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
	  incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
	  prefix: new TokenType("prefix", { beforeExpr: true, prefix: true, startsExpr: true }),
	  logicalOR: binop("||", 1),
	  logicalAND: binop("&&", 2),
	  bitwiseOR: binop("|", 3),
	  bitwiseXOR: binop("^", 4),
	  bitwiseAND: binop("&", 5),
	  equality: binop("==/!=", 6),
	  relational: binop("</>", 7),
	  bitShift: binop("<</>>", 8),
	  plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
	  modulo: binop("%", 10),
	  star: binop("*", 10),
	  slash: binop("/", 10),
	  exponent: new TokenType("**", { beforeExpr: true, binop: 11, rightAssociative: true })
	};

	// Map keyword names to token types.

	var keywords = exports.keywords = {};

	// Succinct definitions of keyword token types
	function kw(name) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  options.keyword = name;
	  keywords[name] = types["_" + name] = new TokenType(name, options);
	}

	kw("break");
	kw("case", beforeExpr);
	kw("catch");
	kw("continue");
	kw("debugger");
	kw("default", beforeExpr);
	kw("do", { isLoop: true, beforeExpr: true });
	kw("else", beforeExpr);
	kw("finally");
	kw("for", { isLoop: true });
	kw("function", startsExpr);
	kw("if");
	kw("return", beforeExpr);
	kw("switch");
	kw("throw", beforeExpr);
	kw("try");
	kw("var");
	kw("let");
	kw("const");
	kw("while", { isLoop: true });
	kw("with");
	kw("new", { beforeExpr: true, startsExpr: true });
	kw("this", startsExpr);
	kw("super", startsExpr);
	kw("class");
	kw("extends", beforeExpr);
	kw("export");
	kw("import");
	kw("yield", { beforeExpr: true, startsExpr: true });
	kw("null", startsExpr);
	kw("true", startsExpr);
	kw("false", startsExpr);
	kw("in", { beforeExpr: true, binop: 7 });
	kw("instanceof", { beforeExpr: true, binop: 7 });
	kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true });
	kw("void", { beforeExpr: true, prefix: true, startsExpr: true });
	kw("delete", { beforeExpr: true, prefix: true, startsExpr: true });

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(23)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(13)
	  , IE8_DOM_DEFINE = __webpack_require__(110)
	  , toPrimitive    = __webpack_require__(85)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var checkGlobal = __webpack_require__(304);

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(typeof self == 'object' && self);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(typeof this == 'object' && this);

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(9)
	  , core      = __webpack_require__(3)
	  , ctx       = __webpack_require__(34)
	  , hide      = __webpack_require__(16)
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

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(10)
	  , createDesc = __webpack_require__(47);
	module.exports = __webpack_require__(8) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.DEPRECATED_KEYS = exports.BUILDER_KEYS = exports.NODE_FIELDS = exports.ALIAS_KEYS = exports.VISITOR_KEYS = undefined;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _stringify = __webpack_require__(39);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _typeof2 = __webpack_require__(21);

	var _typeof3 = _interopRequireDefault(_typeof2);

	exports.assertEach = assertEach;
	exports.assertOneOf = assertOneOf;
	exports.assertNodeType = assertNodeType;
	exports.assertNodeOrValueType = assertNodeOrValueType;
	exports.assertValueType = assertValueType;
	exports.chain = chain;
	exports.default = defineType;

	var _index = __webpack_require__(2);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VISITOR_KEYS = exports.VISITOR_KEYS = {};
	var ALIAS_KEYS = exports.ALIAS_KEYS = {};
	var NODE_FIELDS = exports.NODE_FIELDS = {};
	var BUILDER_KEYS = exports.BUILDER_KEYS = {};
	var DEPRECATED_KEYS = exports.DEPRECATED_KEYS = {};

	function getType(val) {
	  if (Array.isArray(val)) {
	    return "array";
	  } else if (val === null) {
	    return "null";
	  } else if (val === undefined) {
	    return "undefined";
	  } else {
	    return typeof val === "undefined" ? "undefined" : (0, _typeof3.default)(val);
	  }
	}

	function assertEach(callback) {
	  function validator(node, key, val) {
	    if (!Array.isArray(val)) return;

	    for (var i = 0; i < val.length; i++) {
	      callback(node, key + "[" + i + "]", val[i]);
	    }
	  }
	  validator.each = callback;
	  return validator;
	}

	function assertOneOf() {
	  for (var _len = arguments.length, vals = Array(_len), _key = 0; _key < _len; _key++) {
	    vals[_key] = arguments[_key];
	  }

	  function validate(node, key, val) {
	    if (vals.indexOf(val) < 0) {
	      throw new TypeError("Property " + key + " expected value to be one of " + (0, _stringify2.default)(vals) + " but got " + (0, _stringify2.default)(val));
	    }
	  }

	  validate.oneOf = vals;

	  return validate;
	}

	function assertNodeType() {
	  for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    types[_key2] = arguments[_key2];
	  }

	  function validate(node, key, val) {
	    var valid = false;

	    for (var _iterator = types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var type = _ref;

	      if (t.is(type, val)) {
	        valid = true;
	        break;
	      }
	    }

	    if (!valid) {
	      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
	    }
	  }

	  validate.oneOfNodeTypes = types;

	  return validate;
	}

	function assertNodeOrValueType() {
	  for (var _len3 = arguments.length, types = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    types[_key3] = arguments[_key3];
	  }

	  function validate(node, key, val) {
	    var valid = false;

	    for (var _iterator2 = types, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var type = _ref2;

	      if (getType(val) === type || t.is(type, val)) {
	        valid = true;
	        break;
	      }
	    }

	    if (!valid) {
	      throw new TypeError("Property " + key + " of " + node.type + " expected node to be of a type " + (0, _stringify2.default)(types) + " " + ("but instead got " + (0, _stringify2.default)(val && val.type)));
	    }
	  }

	  validate.oneOfNodeOrValueTypes = types;

	  return validate;
	}

	function assertValueType(type) {
	  function validate(node, key, val) {
	    var valid = getType(val) === type;

	    if (!valid) {
	      throw new TypeError("Property " + key + " expected type of " + type + " but got " + getType(val));
	    }
	  }

	  validate.type = type;

	  return validate;
	}

	function chain() {
	  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    fns[_key4] = arguments[_key4];
	  }

	  function validate() {
	    for (var _iterator3 = fns, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var fn = _ref3;

	      fn.apply(undefined, arguments);
	    }
	  }
	  validate.chainOf = fns;
	  return validate;
	}

	function defineType(type) {
	  var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  var inherits = opts.inherits && store[opts.inherits] || {};

	  opts.fields = opts.fields || inherits.fields || {};
	  opts.visitor = opts.visitor || inherits.visitor || [];
	  opts.aliases = opts.aliases || inherits.aliases || [];
	  opts.builder = opts.builder || inherits.builder || opts.visitor || [];

	  if (opts.deprecatedAlias) {
	    DEPRECATED_KEYS[opts.deprecatedAlias] = type;
	  }

	  // ensure all field keys are represented in `fields`
	  for (var _iterator4 = opts.visitor.concat(opts.builder), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	    var _ref4;

	    if (_isArray4) {
	      if (_i4 >= _iterator4.length) break;
	      _ref4 = _iterator4[_i4++];
	    } else {
	      _i4 = _iterator4.next();
	      if (_i4.done) break;
	      _ref4 = _i4.value;
	    }

	    var _key5 = _ref4;

	    opts.fields[_key5] = opts.fields[_key5] || {};
	  }

	  for (var key in opts.fields) {
	    var field = opts.fields[key];

	    if (opts.builder.indexOf(key) === -1) {
	      field.optional = true;
	    }
	    if (field.default === undefined) {
	      field.default = null;
	    } else if (!field.validate) {
	      field.validate = assertValueType(getType(field.default));
	    }
	  }

	  VISITOR_KEYS[type] = opts.visitor;
	  BUILDER_KEYS[type] = opts.builder;
	  NODE_FIELDS[type] = opts.fields;
	  ALIAS_KEYS[type] = opts.aliases;

	  store[type] = opts;
	}

	var store = {};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(128),
	    baseKeys = __webpack_require__(293),
	    indexKeys = __webpack_require__(137),
	    isArrayLike = __webpack_require__(30),
	    isIndex = __webpack_require__(56),
	    isPrototype = __webpack_require__(58);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(161);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(159);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _virtualTypes = __webpack_require__(103);

	var virtualTypes = _interopRequireWildcard(_virtualTypes);

	var _debug2 = __webpack_require__(257);

	var _debug3 = _interopRequireDefault(_debug2);

	var _invariant = __webpack_require__(265);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _index = __webpack_require__(26);

	var _index2 = _interopRequireDefault(_index);

	var _assign = __webpack_require__(355);

	var _assign2 = _interopRequireDefault(_assign);

	var _scope = __webpack_require__(69);

	var _scope2 = _interopRequireDefault(_scope);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	var _cache = __webpack_require__(41);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint max-len: 0 */

	var _debug = (0, _debug3.default)("babel");

	var NodePath = function () {
	  function NodePath(hub, parent) {
	    (0, _classCallCheck3.default)(this, NodePath);

	    this.parent = parent;
	    this.hub = hub;
	    this.contexts = [];
	    this.data = {};
	    this.shouldSkip = false;
	    this.shouldStop = false;
	    this.removed = false;
	    this.state = null;
	    this.opts = null;
	    this.skipKeys = null;
	    this.parentPath = null;
	    this.context = null;
	    this.container = null;
	    this.listKey = null;
	    this.inList = false;
	    this.parentKey = null;
	    this.key = null;
	    this.node = null;
	    this.scope = null;
	    this.type = null;
	    this.typeAnnotation = null;
	  }

	  NodePath.get = function get(_ref) {
	    var hub = _ref.hub;
	    var parentPath = _ref.parentPath;
	    var parent = _ref.parent;
	    var container = _ref.container;
	    var listKey = _ref.listKey;
	    var key = _ref.key;

	    if (!hub && parentPath) {
	      hub = parentPath.hub;
	    }

	    (0, _invariant2.default)(parent, "To get a node path the parent needs to exist");

	    var targetNode = container[key];

	    var paths = _cache.path.get(parent) || [];
	    if (!_cache.path.has(parent)) {
	      _cache.path.set(parent, paths);
	    }

	    var path = void 0;

	    for (var i = 0; i < paths.length; i++) {
	      var pathCheck = paths[i];
	      if (pathCheck.node === targetNode) {
	        path = pathCheck;
	        break;
	      }
	    }

	    if (!path) {
	      path = new NodePath(hub, parent);
	      paths.push(path);
	    }

	    path.setup(parentPath, container, listKey, key);

	    return path;
	  };

	  NodePath.prototype.getScope = function getScope(scope) {
	    var ourScope = scope;

	    // we're entering a new scope so let's construct it!
	    if (this.isScope()) {
	      ourScope = new _scope2.default(this, scope);
	    }

	    return ourScope;
	  };

	  NodePath.prototype.setData = function setData(key, val) {
	    return this.data[key] = val;
	  };

	  NodePath.prototype.getData = function getData(key, def) {
	    var val = this.data[key];
	    if (!val && def) val = this.data[key] = def;
	    return val;
	  };

	  NodePath.prototype.buildCodeFrameError = function buildCodeFrameError(msg) {
	    var Error = arguments.length <= 1 || arguments[1] === undefined ? SyntaxError : arguments[1];

	    return this.hub.file.buildCodeFrameError(this.node, msg, Error);
	  };

	  NodePath.prototype.traverse = function traverse(visitor, state) {
	    (0, _index2.default)(this.node, visitor, this.scope, state, this);
	  };

	  NodePath.prototype.mark = function mark(type, message) {
	    this.hub.file.metadata.marked.push({
	      type: type,
	      message: message,
	      loc: this.node.loc
	    });
	  };

	  NodePath.prototype.set = function set(key, node) {
	    t.validate(this.node, key, node);
	    this.node[key] = node;
	  };

	  NodePath.prototype.getPathLocation = function getPathLocation() {
	    var parts = [];
	    var path = this;
	    do {
	      var key = path.key;
	      if (path.inList) key = path.listKey + "[" + key + "]";
	      parts.unshift(key);
	    } while (path = path.parentPath);
	    return parts.join(".");
	  };

	  NodePath.prototype.debug = function debug(buildMessage) {
	    if (!_debug.enabled) return;
	    _debug(this.getPathLocation() + " " + this.type + ": " + buildMessage());
	  };

	  return NodePath;
	}();

	exports.default = NodePath;


	(0, _assign2.default)(NodePath.prototype, __webpack_require__(166));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(172));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(180));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(170));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(169));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(175));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(168));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(179));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(178));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(171));
	(0, _assign2.default)(NodePath.prototype, __webpack_require__(167));

	var _loop2 = function _loop2() {
	  if (_isArray) {
	    if (_i >= _iterator.length) return "break";
	    _ref2 = _iterator[_i++];
	  } else {
	    _i = _iterator.next();
	    if (_i.done) return "break";
	    _ref2 = _i.value;
	  }

	  var type = _ref2;

	  var typeKey = "is" + type;
	  NodePath.prototype[typeKey] = function (opts) {
	    return t[typeKey](this.node, opts);
	  };

	  NodePath.prototype["assert" + type] = function (opts) {
	    if (!this[typeKey](opts)) {
	      throw new TypeError("Expected node path of type " + type);
	    }
	  };
	};

	for (var _iterator = t.TYPES, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	  var _ref2;

	  var _ret2 = _loop2();

	  if (_ret2 === "break") break;
	}

	var _loop = function _loop(type) {
	  if (type[0] === "_") return "continue";
	  if (t.TYPES.indexOf(type) < 0) t.TYPES.push(type);

	  var virtualType = virtualTypes[type];

	  NodePath.prototype["is" + type] = function (opts) {
	    return virtualType.checkPath(this, opts);
	  };
	};

	for (var type in virtualTypes) {
	  var _ret = _loop(type);

	  if (_ret === "continue") continue;
	}
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(75)
	  , defined = __webpack_require__(43);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.visitors = exports.Hub = exports.Scope = exports.NodePath = undefined;

	var _getOwnPropertySymbols = __webpack_require__(156);

	var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _path = __webpack_require__(22);

	Object.defineProperty(exports, "NodePath", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_path).default;
	  }
	});

	var _scope = __webpack_require__(69);

	Object.defineProperty(exports, "Scope", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_scope).default;
	  }
	});

	var _hub = __webpack_require__(102);

	Object.defineProperty(exports, "Hub", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_hub).default;
	  }
	});
	exports.default = traverse;

	var _context = __webpack_require__(165);

	var _context2 = _interopRequireDefault(_context);

	var _visitors = __webpack_require__(182);

	var visitors = _interopRequireWildcard(_visitors);

	var _babelMessages = __webpack_require__(66);

	var messages = _interopRequireWildcard(_babelMessages);

	var _includes = __webpack_require__(98);

	var _includes2 = _interopRequireDefault(_includes);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	var _cache = __webpack_require__(41);

	var cache = _interopRequireWildcard(_cache);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.visitors = visitors;
	function traverse(parent, opts, scope, state, parentPath) {
	  if (!parent) return;
	  if (!opts) opts = {};

	  if (!opts.noScope && !scope) {
	    if (parent.type !== "Program" && parent.type !== "File") {
	      throw new Error(messages.get("traverseNeedsParent", parent.type));
	    }
	  }

	  visitors.explode(opts);

	  traverse.node(parent, opts, scope, state, parentPath);
	}

	traverse.visitors = visitors;
	traverse.verify = visitors.verify;
	traverse.explode = visitors.explode;

	traverse.NodePath = __webpack_require__(22);
	traverse.Scope = __webpack_require__(69);
	traverse.Hub = __webpack_require__(102);

	traverse.cheap = function (node, enter) {
	  if (!node) return;

	  var keys = t.VISITOR_KEYS[node.type];
	  if (!keys) return;

	  enter(node);

	  for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var key = _ref;

	    var subNode = node[key];

	    if (Array.isArray(subNode)) {
	      for (var _iterator2 = subNode, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	        var _ref2;

	        if (_isArray2) {
	          if (_i2 >= _iterator2.length) break;
	          _ref2 = _iterator2[_i2++];
	        } else {
	          _i2 = _iterator2.next();
	          if (_i2.done) break;
	          _ref2 = _i2.value;
	        }

	        var _node = _ref2;

	        traverse.cheap(_node, enter);
	      }
	    } else {
	      traverse.cheap(subNode, enter);
	    }
	  }
	};

	traverse.node = function (node, opts, scope, state, parentPath, skipKeys) {
	  var keys = t.VISITOR_KEYS[node.type];
	  if (!keys) return;

	  var context = new _context2.default(scope, opts, state, parentPath);
	  for (var _iterator3 = keys, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	    var _ref3;

	    if (_isArray3) {
	      if (_i3 >= _iterator3.length) break;
	      _ref3 = _iterator3[_i3++];
	    } else {
	      _i3 = _iterator3.next();
	      if (_i3.done) break;
	      _ref3 = _i3.value;
	    }

	    var key = _ref3;

	    if (skipKeys && skipKeys[key]) continue;
	    if (context.visit(node, key)) return;
	  }
	};

	var CLEAR_KEYS = t.COMMENT_KEYS.concat(["tokens", "comments", "start", "end", "loc", "raw", "rawValue"]);

	traverse.clearNode = function (node) {
	  for (var _iterator4 = CLEAR_KEYS, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	    var _ref4;

	    if (_isArray4) {
	      if (_i4 >= _iterator4.length) break;
	      _ref4 = _iterator4[_i4++];
	    } else {
	      _i4 = _iterator4.next();
	      if (_i4.done) break;
	      _ref4 = _i4.value;
	    }

	    var _key = _ref4;

	    if (node[_key] != null) node[_key] = undefined;
	  }

	  for (var key in node) {
	    if (key[0] === "_" && node[key] != null) node[key] = undefined;
	  }

	  cache.path.delete(node);

	  var syms = (0, _getOwnPropertySymbols2.default)(node);
	  for (var _iterator5 = syms, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
	    var _ref5;

	    if (_isArray5) {
	      if (_i5 >= _iterator5.length) break;
	      _ref5 = _iterator5[_i5++];
	    } else {
	      _i5 = _iterator5.next();
	      if (_i5.done) break;
	      _ref5 = _i5.value;
	    }

	    var sym = _ref5;

	    node[sym] = null;
	  }
	};

	traverse.removeProperties = function (tree) {
	  traverse.cheap(tree, traverse.clearNode);
	  return tree;
	};

	function hasBlacklistedType(path, state) {
	  if (path.node.type === state.type) {
	    state.has = true;
	    path.stop();
	  }
	}

	traverse.hasType = function (tree, scope, type, blacklistTypes) {
	  // the node we're searching in is blacklisted
	  if ((0, _includes2.default)(blacklistTypes, tree.type)) return false;

	  // the type we're looking for is the same as the passed node
	  if (tree.type === type) return true;

	  var state = {
	    has: false,
	    type: type
	  };

	  traverse(tree, {
	    blacklist: blacklistTypes,
	    enter: hasBlacklistedType
	  }, scope, state);

	  return state.has;
	};

	traverse.clearCache = function () {
	  cache.clear();
	};

	traverse.copyCache = function (source, destination) {
	  if (cache.path.has(source)) {
	    cache.path.set(destination, cache.path.get(source));
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isNewLine = isNewLine;
	// Matches a whole line break (where CRLF is considered a single
	// line break). Used to count lines.

	var lineBreak = exports.lineBreak = /\r\n?|\n|\u2028|\u2029/;
	var lineBreakG = exports.lineBreakG = new RegExp(lineBreak.source, "g");

	function isNewLine(code) {
	  return code === 10 || code === 13 || code === 0x2028 || code === 0x2029;
	}

	var nonASCIIwhitespace = exports.nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(116)
	  , enumBugKeys = __webpack_require__(74);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(291),
	    getValue = __webpack_require__(323);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(321),
	    isFunction = __webpack_require__(99),
	    isLength = __webpack_require__(63);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(212), __esModule: true };

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.types = exports.TokContext = undefined;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _types = __webpack_require__(7);

	var _whitespace = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// The algorithm used to determine whether a regexp can appear at a
	// given point in the program is loosely based on sweet.js' approach.
	// See https://github.com/mozilla/sweet.js/wiki/design

	var TokContext = exports.TokContext = function TokContext(token, isExpr, preserveSpace, override) {
	  (0, _classCallCheck3.default)(this, TokContext);

	  this.token = token;
	  this.isExpr = !!isExpr;
	  this.preserveSpace = !!preserveSpace;
	  this.override = override;
	};

	var types = exports.types = {
	  braceStatement: new TokContext("{", false),
	  braceExpression: new TokContext("{", true),
	  templateQuasi: new TokContext("${", true),
	  parenStatement: new TokContext("(", false),
	  parenExpression: new TokContext("(", true),
	  template: new TokContext("`", true, true, function (p) {
	    return p.readTmplToken();
	  }),
	  functionExpression: new TokContext("function", true)
	};

	// Token-specific context update code

	_types.types.parenR.updateContext = _types.types.braceR.updateContext = function () {
	  if (this.state.context.length === 1) {
	    this.state.exprAllowed = true;
	    return;
	  }

	  var out = this.state.context.pop();
	  if (out === types.braceStatement && this.curContext() === types.functionExpression) {
	    this.state.context.pop();
	    this.state.exprAllowed = false;
	  } else if (out === types.templateQuasi) {
	    this.state.exprAllowed = true;
	  } else {
	    this.state.exprAllowed = !out.isExpr;
	  }
	};

	_types.types.name.updateContext = function (prevType) {
	  this.state.exprAllowed = false;

	  if (prevType === _types.types._let || prevType === _types.types._const || prevType === _types.types._var) {
	    if (_whitespace.lineBreak.test(this.input.slice(this.state.end))) {
	      this.state.exprAllowed = true;
	    }
	  }
	};

	_types.types.braceL.updateContext = function (prevType) {
	  this.state.context.push(this.braceIsBlock(prevType) ? types.braceStatement : types.braceExpression);
	  this.state.exprAllowed = true;
	};

	_types.types.dollarBraceL.updateContext = function () {
	  this.state.context.push(types.templateQuasi);
	  this.state.exprAllowed = true;
	};

	_types.types.parenL.updateContext = function (prevType) {
	  var statementParens = prevType === _types.types._if || prevType === _types.types._for || prevType === _types.types._with || prevType === _types.types._while;
	  this.state.context.push(statementParens ? types.parenStatement : types.parenExpression);
	  this.state.exprAllowed = true;
	};

	_types.types.incDec.updateContext = function () {
	  // tokExprAllowed stays unchanged
	};

	_types.types._function.updateContext = function () {
	  if (this.curContext() !== types.braceStatement) {
	    this.state.context.push(types.functionExpression);
	  }

	  this.state.exprAllowed = false;
	};

	_types.types.backQuote.updateContext = function () {
	  if (this.curContext() === types.template) {
	    this.state.context.pop();
	  } else {
	    this.state.context.push(types.template);
	  }
	  this.state.exprAllowed = false;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isIdentifierStart = isIdentifierStart;
	exports.isIdentifierChar = isIdentifierChar;
	/* eslint max-len: 0 */

	// This is a trick taken from Esprima. It turns out that, on
	// non-Chrome browsers, to check whether a string is in a set, a
	// predicate containing a big ugly `switch` statement is faster than
	// a regular expression, and on Chrome the two are about on par.
	// This function uses `eval` (non-lexical) to produce such a
	// predicate from a space-separated string of words.
	//
	// It starts by sorting the words by length.

	function makePredicate(words) {
	  words = words.split(" ");
	  return function (str) {
	    return words.indexOf(str) >= 0;
	  };
	}

	// Reserved word lists for various dialects of the language

	var reservedWords = exports.reservedWords = {
	  6: makePredicate("enum await"),
	  strict: makePredicate("implements interface let package private protected public static yield"),
	  strictBind: makePredicate("eval arguments")
	};

	// And the keywords

	var isKeyword = exports.isKeyword = makePredicate("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this let const class extends export import yield super");

	// ## Character categories

	// Big ugly regular expressions that match characters in the
	// whitespace, identifier, and identifier-start categories. These
	// are only applied when a character is found to actually have a
	// code point above 128.
	// Generated by `bin/generate-identifier-regex.js`.

	var nonASCIIidentifierStartChars = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿕ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ";
	var nonASCIIidentifierChars = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഁ-ഃാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳸᳹᷀-᷵᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿";

	var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
	var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

	nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

	// These are a run-length and offset encoded representation of the
	// >0xffff code points that are a valid part of identifiers. The
	// offset starts at 0x10000, and each pair of numbers represents an
	// offset to the next range, and then a size of the range. They were
	// generated by `bin/generate-identifier-regex.js`.
	var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 17, 26, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 449, 56, 264, 8, 2, 36, 18, 0, 50, 29, 881, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 0, 32, 6124, 20, 754, 9486, 1, 3071, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 10591, 541];
	var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 838, 7, 2, 7, 17, 9, 57, 21, 2, 13, 19882, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];

	// This has a complexity linear to the value of the code. The
	// assumption is that looking up astral identifier characters is
	// rare.
	function isInAstralSet(code, set) {
	  var pos = 0x10000;
	  for (var i = 0; i < set.length; i += 2) {
	    pos += set[i];
	    if (pos > code) return false;

	    pos += set[i + 1];
	    if (pos >= code) return true;
	  }
	}

	// Test whether a given character code starts an identifier.

	function isIdentifierStart(code) {
	  if (code < 65) return code === 36;
	  if (code < 91) return true;
	  if (code < 97) return code === 95;
	  if (code < 123) return true;
	  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code));
	  return isInAstralSet(code, astralIdentifierStartCodes);
	}

	// Test whether a given character is part of an identifier.

	function isIdentifierChar(code) {
	  if (code < 48) return code === 36;
	  if (code < 58) return true;
	  if (code < 65) return false;
	  if (code < 91) return true;
	  if (code < 97) return code === 95;
	  if (code < 123) return true;
	  if (code <= 0xffff) return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code));
	  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(222);
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
/* 35 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(49)('meta')
	  , isObject = __webpack_require__(17)
	  , has      = __webpack_require__(15)
	  , setDesc  = __webpack_require__(10).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(23)(function(){
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(43);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	  try {
	    cachedSetTimeout = setTimeout;
	  } catch (e) {
	    cachedSetTimeout = function () {
	      throw new Error('setTimeout is not defined');
	    }
	  }
	  try {
	    cachedClearTimeout = clearTimeout;
	  } catch (e) {
	    cachedClearTimeout = function () {
	      throw new Error('clearTimeout is not defined');
	    }
	  }
	} ())
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = cachedSetTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    cachedClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        cachedSetTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(209), __esModule: true };

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(155);

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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.scope = exports.path = undefined;

	var _weakMap = __webpack_require__(162);

	var _weakMap2 = _interopRequireDefault(_weakMap);

	exports.clear = clear;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var path = exports.path = new _weakMap2.default();
	var scope = exports.scope = new _weakMap2.default();

	function clear() {
	  exports.path = path = new _weakMap2.default();
	  exports.scope = scope = new _weakMap2.default();
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SourceLocation = exports.Position = undefined;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	exports.getLineInfo = getLineInfo;

	var _whitespace = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// These are used when `options.locations` is on, for the
	// `startLoc` and `endLoc` properties.

	var Position = exports.Position = function Position(line, col) {
	  (0, _classCallCheck3.default)(this, Position);

	  this.line = line;
	  this.column = col;
	};

	var SourceLocation = exports.SourceLocation = function SourceLocation(start, end) {
	  (0, _classCallCheck3.default)(this, SourceLocation);

	  this.start = start;
	  this.end = end;
	};

	// The `getLineInfo` function is mostly useful when the
	// `locations` option is off (for performance reasons) and you
	// want to find the line/column position for a given character
	// offset. `input` should be the code string that the offset refers
	// into.

	function getLineInfo(input, offset) {
	  for (var line = 1, cur = 0;;) {
	    _whitespace.lineBreakG.lastIndex = cur;
	    var match = _whitespace.lineBreakG.exec(input);
	    if (match && match.index < offset) {
	      ++line;
	      cur = match.index + match[0].length;
	    } else {
	      return new Position(line, offset - cur);
	    }
	  }
	}

/***/ },
/* 43 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(34)
	  , call        = __webpack_require__(234)
	  , isArrayIter = __webpack_require__(233)
	  , anObject    = __webpack_require__(13)
	  , toLength    = __webpack_require__(84)
	  , getIterFn   = __webpack_require__(118)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(13)
	  , dPs         = __webpack_require__(238)
	  , enumBugKeys = __webpack_require__(74)
	  , IE_PROTO    = __webpack_require__(81)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(109)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(232).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
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
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 47 */
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(10).f
	  , has = __webpack_require__(15)
	  , TAG = __webpack_require__(5)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(245);
	var global        = __webpack_require__(9)
	  , hide          = __webpack_require__(16)
	  , Iterators     = __webpack_require__(35)
	  , TO_STRING_TAG = __webpack_require__(5)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(337),
	    listCacheDelete = __webpack_require__(338),
	    listCacheGet = __webpack_require__(339),
	    listCacheHas = __webpack_require__(340),
	    listCacheSet = __webpack_require__(341);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(62);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(95);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];

	    assignValue(object, key, newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(334);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(12),
	    isSymbol = __webpack_require__(65);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 58 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(65);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(12),
	    isObjectLike = __webpack_require__(25);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(25);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/"use strict";

	exports.__esModule = true;
	exports.MESSAGES = undefined;

	var _stringify = __webpack_require__(39);

	var _stringify2 = _interopRequireDefault(_stringify);

	exports.get = get;
	/*istanbul ignore next*/exports.parseArgs = parseArgs;

	var /*istanbul ignore next*/_util = __webpack_require__(386);

	/*istanbul ignore next*/
	var util = _interopRequireWildcard(_util);

	/*istanbul ignore next*/
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Mapping of messages to be used in Babel.
	 * Messages can include $0-style placeholders.
	 */

	var MESSAGES = /*istanbul ignore next*/exports.MESSAGES = {
	  tailCallReassignmentDeopt: "Function reference has been reassigned, so it will probably be dereferenced, therefore we can't optimise this with confidence",
	  classesIllegalBareSuper: "Illegal use of bare super",
	  classesIllegalSuperCall: "Direct super call is illegal in non-constructor, use super.$1() instead",
	  scopeDuplicateDeclaration: "Duplicate declaration $1",
	  settersNoRest: "Setters aren't allowed to have a rest",
	  noAssignmentsInForHead: "No assignments allowed in for-in/of head",
	  expectedMemberExpressionOrIdentifier: "Expected type MemberExpression or Identifier",
	  invalidParentForThisNode: "We don't know how to handle this node within the current parent - please open an issue",
	  readOnly: "$1 is read-only",
	  unknownForHead: "Unknown node type $1 in ForStatement",
	  didYouMean: "Did you mean $1?",
	  codeGeneratorDeopt: "Note: The code generator has deoptimised the styling of $1 as it exceeds the max of $2.",
	  missingTemplatesDirectory: "no templates directory - this is most likely the result of a broken `npm publish`. Please report to https://github.com/babel/babel/issues",
	  unsupportedOutputType: "Unsupported output type $1",
	  illegalMethodName: "Illegal method name $1",
	  lostTrackNodePath: "We lost track of this node's position, likely because the AST was directly manipulated",

	  modulesIllegalExportName: "Illegal export $1",
	  modulesDuplicateDeclarations: "Duplicate module declarations with the same source but in different scopes",

	  undeclaredVariable: "Reference to undeclared variable $1",
	  undeclaredVariableType: "Referencing a type alias outside of a type annotation",
	  undeclaredVariableSuggestion: "Reference to undeclared variable $1 - did you mean $2?",

	  traverseNeedsParent: "You must pass a scope and parentPath unless traversing a Program/File. Instead of that you tried to traverse a $1 node without passing scope and parentPath.",
	  traverseVerifyRootFunction: "You passed `traverse()` a function when it expected a visitor object, are you sure you didn't mean `{ enter: Function }`?",
	  traverseVerifyVisitorProperty: "You passed `traverse()` a visitor object with the property $1 that has the invalid property $2",
	  traverseVerifyNodeType: "You gave us a visitor for the node type $1 but it's not a valid type",

	  pluginNotObject: "Plugin $2 specified in $1 was expected to return an object when invoked but returned $3",
	  pluginNotFunction: "Plugin $2 specified in $1 was expected to return a function but returned $3",
	  pluginUnknown: "Unknown plugin $1 specified in $2 at $3, attempted to resolve relative to $4",
	  pluginInvalidProperty: "Plugin $2 specified in $1 provided an invalid property of $3"
	};

	/**
	 * Get a message with $0 placeholders replaced by arguments.
	 */

	/* eslint max-len: 0 */

	function get(key) {
	  /*istanbul ignore next*/
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }

	  var msg = MESSAGES[key];
	  if (!msg) throw new ReferenceError( /*istanbul ignore next*/"Unknown message " + /*istanbul ignore next*/(0, _stringify2.default)(key));

	  // stringify args
	  args = parseArgs(args);

	  // replace $0 placeholders with args
	  return msg.replace(/\$(\d+)/g, function (str, i) {
	    return args[i - 1];
	  });
	}

	/**
	 * Stingify arguments to be used inside messages.
	 */

	function parseArgs(args) {
	  return args.map(function (val) {
	    if (val != null && val.inspect) {
	      return val.inspect();
	    } else {
	      try {
	        return (/*istanbul ignore next*/(0, _stringify2.default)(val) || val + ""
	        );
	      } catch (e) {
	        return util.inspect(val);
	      }
	    }
	  });
	}

/***/ },
/* 67 */
/***/ function(module, exports) {

	/*istanbul ignore next*/"use strict";

	exports.__esModule = true;

	exports.default = function () {
	  return { /*istanbul ignore next*/
	    manipulateOptions: function manipulateOptions(opts, parserOpts) {
	      parserOpts.plugins.push("jsx");
	    }
	  };
	};

	/*istanbul ignore next*/module.exports = exports["default"];

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(216), __esModule: true };

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _keys = __webpack_require__(68);

	var _keys2 = _interopRequireDefault(_keys);

	var _create = __webpack_require__(31);

	var _create2 = _interopRequireDefault(_create);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _includes = __webpack_require__(98);

	var _includes2 = _interopRequireDefault(_includes);

	var _repeat = __webpack_require__(374);

	var _repeat2 = _interopRequireDefault(_repeat);

	var _renamer = __webpack_require__(181);

	var _renamer2 = _interopRequireDefault(_renamer);

	var _index = __webpack_require__(26);

	var _index2 = _interopRequireDefault(_index);

	var _defaults = __webpack_require__(358);

	var _defaults2 = _interopRequireDefault(_defaults);

	var _babelMessages = __webpack_require__(66);

	var messages = _interopRequireWildcard(_babelMessages);

	var _binding2 = __webpack_require__(104);

	var _binding3 = _interopRequireDefault(_binding2);

	var _globals = __webpack_require__(262);

	var _globals2 = _interopRequireDefault(_globals);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	var _cache = __webpack_require__(41);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Number of calls to the crawl method to figure out whether we're
	// somewhere inside a call that was trigerred by call. This is meant
	// to be used to figure out whether a warning should be trigerred.
	// See `warnOnFlowBinding`.
	/* eslint max-len: 0 */

	var _crawlCallsCount = 0;

	/**
	 * To avoid creating a new Scope instance for each traversal, we maintain a cache on the
	 * node itself containing all scopes it has been associated with.
	 */

	function getCache(path, parentScope, self) {
	  var scopes = _cache.scope.get(path.node) || [];

	  for (var _iterator = scopes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var scope = _ref;

	    if (scope.parent === parentScope && scope.path === path) return scope;
	  }

	  scopes.push(self);

	  if (!_cache.scope.has(path.node)) {
	    _cache.scope.set(path.node, scopes);
	  }
	}

	//

	var collectorVisitor = {
	  For: function For(path) {
	    for (var _iterator2 = t.FOR_INIT_KEYS, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var key = _ref2;

	      var declar = path.get(key);
	      if (declar.isVar()) path.scope.getFunctionParent().registerBinding("var", declar);
	    }
	  },
	  Declaration: function Declaration(path) {
	    // delegate block scope handling to the `blockVariableVisitor`
	    if (path.isBlockScoped()) return;

	    // this will be hit again once we traverse into it after this iteration
	    if (path.isExportDeclaration() && path.get("declaration").isDeclaration()) return;

	    // TODO(amasad): remove support for flow as bindings (See warning below).
	    //if (path.isFlow()) return;

	    // we've ran into a declaration!
	    path.scope.getFunctionParent().registerDeclaration(path);
	  },
	  ReferencedIdentifier: function ReferencedIdentifier(path, state) {
	    state.references.push(path);
	  },
	  ForXStatement: function ForXStatement(path, state) {
	    var left = path.get("left");
	    if (left.isPattern() || left.isIdentifier()) {
	      state.constantViolations.push(left);
	    }
	  },


	  ExportDeclaration: {
	    exit: function exit(_ref3) {
	      var node = _ref3.node;
	      var scope = _ref3.scope;

	      var declar = node.declaration;
	      if (t.isClassDeclaration(declar) || t.isFunctionDeclaration(declar)) {
	        var _id = declar.id;
	        if (!_id) return;

	        var binding = scope.getBinding(_id.name);
	        if (binding) binding.reference();
	      } else if (t.isVariableDeclaration(declar)) {
	        for (var _iterator3 = declar.declarations, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	          var _ref4;

	          if (_isArray3) {
	            if (_i3 >= _iterator3.length) break;
	            _ref4 = _iterator3[_i3++];
	          } else {
	            _i3 = _iterator3.next();
	            if (_i3.done) break;
	            _ref4 = _i3.value;
	          }

	          var decl = _ref4;

	          var ids = t.getBindingIdentifiers(decl);
	          for (var name in ids) {
	            var _binding = scope.getBinding(name);
	            if (_binding) _binding.reference();
	          }
	        }
	      }
	    }
	  },

	  LabeledStatement: function LabeledStatement(path) {
	    path.scope.getProgramParent().addGlobal(path.node);
	    path.scope.getBlockParent().registerDeclaration(path);
	  },
	  AssignmentExpression: function AssignmentExpression(path, state) {
	    state.assignments.push(path);
	  },
	  UpdateExpression: function UpdateExpression(path, state) {
	    state.constantViolations.push(path.get("argument"));
	  },
	  UnaryExpression: function UnaryExpression(path, state) {
	    if (path.node.operator === "delete") {
	      state.constantViolations.push(path.get("argument"));
	    }
	  },
	  BlockScoped: function BlockScoped(path) {
	    var scope = path.scope;
	    if (scope.path === path) scope = scope.parent;
	    scope.getBlockParent().registerDeclaration(path);
	  },
	  ClassDeclaration: function ClassDeclaration(path) {
	    var id = path.node.id;
	    if (!id) return;

	    var name = id.name;
	    path.scope.bindings[name] = path.scope.getBinding(name);
	  },
	  Block: function Block(path) {
	    var paths = path.get("body");
	    for (var _iterator4 = paths, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	      var _ref5;

	      if (_isArray4) {
	        if (_i4 >= _iterator4.length) break;
	        _ref5 = _iterator4[_i4++];
	      } else {
	        _i4 = _iterator4.next();
	        if (_i4.done) break;
	        _ref5 = _i4.value;
	      }

	      var bodyPath = _ref5;

	      if (bodyPath.isFunctionDeclaration()) {
	        path.scope.getBlockParent().registerDeclaration(bodyPath);
	      }
	    }
	  }
	};

	var uid = 0;

	var Scope = function () {

	  /**
	   * This searches the current "scope" and collects all references/bindings
	   * within.
	   */

	  function Scope(path, parentScope) {
	    (0, _classCallCheck3.default)(this, Scope);

	    if (parentScope && parentScope.block === path.node) {
	      return parentScope;
	    }

	    var cached = getCache(path, parentScope, this);
	    if (cached) return cached;

	    this.uid = uid++;
	    this.parent = parentScope;
	    this.hub = path.hub;

	    this.parentBlock = path.parent;
	    this.block = path.node;
	    this.path = path;
	  }

	  /**
	   * Globals.
	   */

	  /**
	   * Variables available in current context.
	   */

	  /**
	   * Traverse node with current scope and path.
	   */

	  Scope.prototype.traverse = function traverse(node, opts, state) {
	    (0, _index2.default)(node, opts, this, state, this.path);
	  };

	  /**
	   * Generate a unique identifier and add it to the current scope.
	   */

	  Scope.prototype.generateDeclaredUidIdentifier = function generateDeclaredUidIdentifier() {
	    var name = arguments.length <= 0 || arguments[0] === undefined ? "temp" : arguments[0];

	    var id = this.generateUidIdentifier(name);
	    this.push({ id: id });
	    return id;
	  };

	  /**
	   * Generate a unique identifier.
	   */

	  Scope.prototype.generateUidIdentifier = function generateUidIdentifier() {
	    var name = arguments.length <= 0 || arguments[0] === undefined ? "temp" : arguments[0];

	    return t.identifier(this.generateUid(name));
	  };

	  /**
	   * Generate a unique `_id1` binding.
	   */

	  Scope.prototype.generateUid = function generateUid() {
	    var name = arguments.length <= 0 || arguments[0] === undefined ? "temp" : arguments[0];

	    name = t.toIdentifier(name).replace(/^_+/, "").replace(/[0-9]+$/g, "");

	    var uid = void 0;
	    var i = 0;
	    do {
	      uid = this._generateUid(name, i);
	      i++;
	    } while (this.hasBinding(uid) || this.hasGlobal(uid) || this.hasReference(uid));

	    var program = this.getProgramParent();
	    program.references[uid] = true;
	    program.uids[uid] = true;

	    return uid;
	  };

	  /**
	   * Generate an `_id1`.
	   */

	  Scope.prototype._generateUid = function _generateUid(name, i) {
	    var id = name;
	    if (i > 1) id += i;
	    return "_" + id;
	  };

	  /**
	   * Generate a unique identifier based on a node.
	   */

	  Scope.prototype.generateUidIdentifierBasedOnNode = function generateUidIdentifierBasedOnNode(parent, defaultName) {
	    var node = parent;

	    if (t.isAssignmentExpression(parent)) {
	      node = parent.left;
	    } else if (t.isVariableDeclarator(parent)) {
	      node = parent.id;
	    } else if (t.isObjectProperty(node) || t.isObjectMethod(node)) {
	      node = node.key;
	    }

	    var parts = [];

	    var add = function add(node) {
	      if (t.isModuleDeclaration(node)) {
	        if (node.source) {
	          add(node.source);
	        } else if (node.specifiers && node.specifiers.length) {
	          for (var _iterator5 = node.specifiers, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
	            var _ref6;

	            if (_isArray5) {
	              if (_i5 >= _iterator5.length) break;
	              _ref6 = _iterator5[_i5++];
	            } else {
	              _i5 = _iterator5.next();
	              if (_i5.done) break;
	              _ref6 = _i5.value;
	            }

	            var specifier = _ref6;

	            add(specifier);
	          }
	        } else if (node.declaration) {
	          add(node.declaration);
	        }
	      } else if (t.isModuleSpecifier(node)) {
	        add(node.local);
	      } else if (t.isMemberExpression(node)) {
	        add(node.object);
	        add(node.property);
	      } else if (t.isIdentifier(node)) {
	        parts.push(node.name);
	      } else if (t.isLiteral(node)) {
	        parts.push(node.value);
	      } else if (t.isCallExpression(node)) {
	        add(node.callee);
	      } else if (t.isObjectExpression(node) || t.isObjectPattern(node)) {
	        for (var _iterator6 = node.properties, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : (0, _getIterator3.default)(_iterator6);;) {
	          var _ref7;

	          if (_isArray6) {
	            if (_i6 >= _iterator6.length) break;
	            _ref7 = _iterator6[_i6++];
	          } else {
	            _i6 = _iterator6.next();
	            if (_i6.done) break;
	            _ref7 = _i6.value;
	          }

	          var prop = _ref7;

	          add(prop.key || prop.argument);
	        }
	      }
	    };

	    add(node);

	    var id = parts.join("$");
	    id = id.replace(/^_/, "") || defaultName || "ref";

	    return this.generateUidIdentifier(id.slice(0, 20));
	  };

	  /**
	   * Determine whether evaluating the specific input `node` is a consequenceless reference. ie.
	   * evaluating it wont result in potentially arbitrary code from being ran. The following are
	   * whitelisted and determined not to cause side effects:
	   *
	   *  - `this` expressions
	   *  - `super` expressions
	   *  - Bound identifiers
	   */

	  Scope.prototype.isStatic = function isStatic(node) {
	    if (t.isThisExpression(node) || t.isSuper(node)) {
	      return true;
	    }

	    if (t.isIdentifier(node)) {
	      var binding = this.getBinding(node.name);
	      if (binding) {
	        return binding.constant;
	      } else {
	        return this.hasBinding(node.name);
	      }
	    }

	    return false;
	  };

	  /**
	   * Possibly generate a memoised identifier if it is not static and has consequences.
	   */

	  Scope.prototype.maybeGenerateMemoised = function maybeGenerateMemoised(node, dontPush) {
	    if (this.isStatic(node)) {
	      return null;
	    } else {
	      var _id2 = this.generateUidIdentifierBasedOnNode(node);
	      if (!dontPush) this.push({ id: _id2 });
	      return _id2;
	    }
	  };

	  Scope.prototype.checkBlockScopedCollisions = function checkBlockScopedCollisions(local, kind, name, id) {
	    // ignore parameters
	    if (kind === "param") return;

	    // ignore hoisted functions if there's also a local let
	    if (kind === "hoisted" && local.kind === "let") return;

	    var duplicate = false;

	    // don't allow duplicate bindings to exist alongside
	    if (!duplicate) duplicate = kind === "let" || local.kind === "let" || local.kind === "const" || local.kind === "module";

	    // don't allow a local of param with a kind of let
	    if (!duplicate) duplicate = local.kind === "param" && (kind === "let" || kind === "const");

	    if (duplicate) {
	      throw this.hub.file.buildCodeFrameError(id, messages.get("scopeDuplicateDeclaration", name), TypeError);
	    }
	  };

	  Scope.prototype.rename = function rename(oldName, newName, block) {
	    var binding = this.getBinding(oldName);
	    if (binding) {
	      newName = newName || this.generateUidIdentifier(oldName).name;
	      return new _renamer2.default(binding, oldName, newName).rename(block);
	    }
	  };

	  Scope.prototype._renameFromMap = function _renameFromMap(map, oldName, newName, value) {
	    if (map[oldName]) {
	      map[newName] = value;
	      map[oldName] = null;
	    }
	  };

	  Scope.prototype.dump = function dump() {
	    var sep = (0, _repeat2.default)("-", 60);
	    console.log(sep);
	    var scope = this;
	    do {
	      console.log("#", scope.block.type);
	      for (var name in scope.bindings) {
	        var binding = scope.bindings[name];
	        console.log(" -", name, {
	          constant: binding.constant,
	          references: binding.references,
	          violations: binding.constantViolations.length,
	          kind: binding.kind
	        });
	      }
	    } while (scope = scope.parent);
	    console.log(sep);
	  };

	  Scope.prototype.toArray = function toArray(node, i) {
	    var file = this.hub.file;

	    if (t.isIdentifier(node)) {
	      var binding = this.getBinding(node.name);
	      if (binding && binding.constant && binding.path.isGenericType("Array")) return node;
	    }

	    if (t.isArrayExpression(node)) {
	      return node;
	    }

	    if (t.isIdentifier(node, { name: "arguments" })) {
	      return t.callExpression(t.memberExpression(t.memberExpression(t.memberExpression(t.identifier("Array"), t.identifier("prototype")), t.identifier("slice")), t.identifier("call")), [node]);
	    }

	    var helperName = "toArray";
	    var args = [node];
	    if (i === true) {
	      helperName = "toConsumableArray";
	    } else if (i) {
	      args.push(t.numericLiteral(i));
	      helperName = "slicedToArray";
	      // TODO if (this.hub.file.isLoose("es6.forOf")) helperName += "-loose";
	    }
	    return t.callExpression(file.addHelper(helperName), args);
	  };

	  Scope.prototype.registerDeclaration = function registerDeclaration(path) {
	    if (path.isLabeledStatement()) {
	      this.registerBinding("label", path);
	    } else if (path.isFunctionDeclaration()) {
	      this.registerBinding("hoisted", path.get("id"), path);
	    } else if (path.isVariableDeclaration()) {
	      var declarations = path.get("declarations");
	      for (var _iterator7 = declarations, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : (0, _getIterator3.default)(_iterator7);;) {
	        var _ref8;

	        if (_isArray7) {
	          if (_i7 >= _iterator7.length) break;
	          _ref8 = _iterator7[_i7++];
	        } else {
	          _i7 = _iterator7.next();
	          if (_i7.done) break;
	          _ref8 = _i7.value;
	        }

	        var declar = _ref8;

	        this.registerBinding(path.node.kind, declar);
	      }
	    } else if (path.isClassDeclaration()) {
	      this.registerBinding("let", path);
	    } else if (path.isImportDeclaration()) {
	      var specifiers = path.get("specifiers");
	      for (var _iterator8 = specifiers, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : (0, _getIterator3.default)(_iterator8);;) {
	        var _ref9;

	        if (_isArray8) {
	          if (_i8 >= _iterator8.length) break;
	          _ref9 = _iterator8[_i8++];
	        } else {
	          _i8 = _iterator8.next();
	          if (_i8.done) break;
	          _ref9 = _i8.value;
	        }

	        var specifier = _ref9;

	        this.registerBinding("module", specifier);
	      }
	    } else if (path.isExportDeclaration()) {
	      var _declar = path.get("declaration");
	      if (_declar.isClassDeclaration() || _declar.isFunctionDeclaration() || _declar.isVariableDeclaration()) {
	        this.registerDeclaration(_declar);
	      }
	    } else {
	      this.registerBinding("unknown", path);
	    }
	  };

	  Scope.prototype.buildUndefinedNode = function buildUndefinedNode() {
	    if (this.hasBinding("undefined")) {
	      return t.unaryExpression("void", t.numericLiteral(0), true);
	    } else {
	      return t.identifier("undefined");
	    }
	  };

	  Scope.prototype.registerConstantViolation = function registerConstantViolation(path) {
	    var ids = path.getBindingIdentifiers();
	    for (var name in ids) {
	      var binding = this.getBinding(name);
	      if (binding) binding.reassign(path);
	    }
	  };

	  Scope.prototype.registerBinding = function registerBinding(kind, path) {
	    var bindingPath = arguments.length <= 2 || arguments[2] === undefined ? path : arguments[2];

	    if (!kind) throw new ReferenceError("no `kind`");

	    if (path.isVariableDeclaration()) {
	      var declarators = path.get("declarations");
	      for (var _iterator9 = declarators, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : (0, _getIterator3.default)(_iterator9);;) {
	        var _ref10;

	        if (_isArray9) {
	          if (_i9 >= _iterator9.length) break;
	          _ref10 = _iterator9[_i9++];
	        } else {
	          _i9 = _iterator9.next();
	          if (_i9.done) break;
	          _ref10 = _i9.value;
	        }

	        var declar = _ref10;

	        this.registerBinding(kind, declar);
	      }
	      return;
	    }

	    var parent = this.getProgramParent();
	    var ids = path.getBindingIdentifiers(true);

	    for (var name in ids) {
	      for (var _iterator10 = ids[name], _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : (0, _getIterator3.default)(_iterator10);;) {
	        var _ref11;

	        if (_isArray10) {
	          if (_i10 >= _iterator10.length) break;
	          _ref11 = _iterator10[_i10++];
	        } else {
	          _i10 = _iterator10.next();
	          if (_i10.done) break;
	          _ref11 = _i10.value;
	        }

	        var _id3 = _ref11;

	        var local = this.getOwnBinding(name);
	        if (local) {
	          // same identifier so continue safely as we're likely trying to register it
	          // multiple times
	          if (local.identifier === _id3) continue;

	          this.checkBlockScopedCollisions(local, kind, name, _id3);
	        }

	        // It's erroneous that we currently consider flow a binding, however, we can't
	        // remove it because people might be depending on it. See warning section
	        // in `warnOnFlowBinding`.
	        if (local && local.path.isFlow()) local = null;

	        parent.references[name] = true;

	        this.bindings[name] = new _binding3.default({
	          identifier: _id3,
	          existing: local,
	          scope: this,
	          path: bindingPath,
	          kind: kind
	        });
	      }
	    }
	  };

	  Scope.prototype.addGlobal = function addGlobal(node) {
	    this.globals[node.name] = node;
	  };

	  Scope.prototype.hasUid = function hasUid(name) {
	    var scope = this;

	    do {
	      if (scope.uids[name]) return true;
	    } while (scope = scope.parent);

	    return false;
	  };

	  Scope.prototype.hasGlobal = function hasGlobal(name) {
	    var scope = this;

	    do {
	      if (scope.globals[name]) return true;
	    } while (scope = scope.parent);

	    return false;
	  };

	  Scope.prototype.hasReference = function hasReference(name) {
	    var scope = this;

	    do {
	      if (scope.references[name]) return true;
	    } while (scope = scope.parent);

	    return false;
	  };

	  Scope.prototype.isPure = function isPure(node, constantsOnly) {
	    if (t.isIdentifier(node)) {
	      var binding = this.getBinding(node.name);
	      if (!binding) return false;
	      if (constantsOnly) return binding.constant;
	      return true;
	    } else if (t.isClass(node)) {
	      if (node.superClass && !this.isPure(node.superClass, constantsOnly)) return false;
	      return this.isPure(node.body, constantsOnly);
	    } else if (t.isClassBody(node)) {
	      for (var _iterator11 = node.body, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : (0, _getIterator3.default)(_iterator11);;) {
	        var _ref12;

	        if (_isArray11) {
	          if (_i11 >= _iterator11.length) break;
	          _ref12 = _iterator11[_i11++];
	        } else {
	          _i11 = _iterator11.next();
	          if (_i11.done) break;
	          _ref12 = _i11.value;
	        }

	        var method = _ref12;

	        if (!this.isPure(method, constantsOnly)) return false;
	      }
	      return true;
	    } else if (t.isBinary(node)) {
	      return this.isPure(node.left, constantsOnly) && this.isPure(node.right, constantsOnly);
	    } else if (t.isArrayExpression(node)) {
	      for (var _iterator12 = node.elements, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : (0, _getIterator3.default)(_iterator12);;) {
	        var _ref13;

	        if (_isArray12) {
	          if (_i12 >= _iterator12.length) break;
	          _ref13 = _iterator12[_i12++];
	        } else {
	          _i12 = _iterator12.next();
	          if (_i12.done) break;
	          _ref13 = _i12.value;
	        }

	        var elem = _ref13;

	        if (!this.isPure(elem, constantsOnly)) return false;
	      }
	      return true;
	    } else if (t.isObjectExpression(node)) {
	      for (var _iterator13 = node.properties, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : (0, _getIterator3.default)(_iterator13);;) {
	        var _ref14;

	        if (_isArray13) {
	          if (_i13 >= _iterator13.length) break;
	          _ref14 = _iterator13[_i13++];
	        } else {
	          _i13 = _iterator13.next();
	          if (_i13.done) break;
	          _ref14 = _i13.value;
	        }

	        var prop = _ref14;

	        if (!this.isPure(prop, constantsOnly)) return false;
	      }
	      return true;
	    } else if (t.isClassMethod(node)) {
	      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
	      if (node.kind === "get" || node.kind === "set") return false;
	      return true;
	    } else if (t.isClassProperty(node) || t.isObjectProperty(node)) {
	      if (node.computed && !this.isPure(node.key, constantsOnly)) return false;
	      return this.isPure(node.value, constantsOnly);
	    } else if (t.isUnaryExpression(node)) {
	      return this.isPure(node.argument, constantsOnly);
	    } else {
	      return t.isPureish(node);
	    }
	  };

	  /**
	   * Set some arbitrary data on the current scope.
	   */

	  Scope.prototype.setData = function setData(key, val) {
	    return this.data[key] = val;
	  };

	  /**
	   * Recursively walk up scope tree looking for the data `key`.
	   */

	  Scope.prototype.getData = function getData(key) {
	    var scope = this;
	    do {
	      var data = scope.data[key];
	      if (data != null) return data;
	    } while (scope = scope.parent);
	  };

	  /**
	   * Recursively walk up scope tree looking for the data `key` and if it exists,
	   * remove it.
	   */

	  Scope.prototype.removeData = function removeData(key) {
	    var scope = this;
	    do {
	      var data = scope.data[key];
	      if (data != null) scope.data[key] = null;
	    } while (scope = scope.parent);
	  };

	  Scope.prototype.init = function init() {
	    if (!this.references) this.crawl();
	  };

	  Scope.prototype.crawl = function crawl() {
	    _crawlCallsCount++;
	    this._crawl();
	    _crawlCallsCount--;
	  };

	  Scope.prototype._crawl = function _crawl() {
	    var path = this.path;

	    //

	    this.references = (0, _create2.default)(null);
	    this.bindings = (0, _create2.default)(null);
	    this.globals = (0, _create2.default)(null);
	    this.uids = (0, _create2.default)(null);
	    this.data = (0, _create2.default)(null);

	    // ForStatement - left, init

	    if (path.isLoop()) {
	      for (var _iterator14 = t.FOR_INIT_KEYS, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : (0, _getIterator3.default)(_iterator14);;) {
	        var _ref15;

	        if (_isArray14) {
	          if (_i14 >= _iterator14.length) break;
	          _ref15 = _iterator14[_i14++];
	        } else {
	          _i14 = _iterator14.next();
	          if (_i14.done) break;
	          _ref15 = _i14.value;
	        }

	        var key = _ref15;

	        var node = path.get(key);
	        if (node.isBlockScoped()) this.registerBinding(node.node.kind, node);
	      }
	    }

	    // FunctionExpression - id

	    if (path.isFunctionExpression() && path.has("id")) {
	      if (!path.get("id").node[t.NOT_LOCAL_BINDING]) {
	        this.registerBinding("local", path.get("id"), path);
	      }
	    }

	    // Class

	    if (path.isClassExpression() && path.has("id")) {
	      if (!path.get("id").node[t.NOT_LOCAL_BINDING]) {
	        this.registerBinding("local", path);
	      }
	    }

	    // Function - params, rest

	    if (path.isFunction()) {
	      var params = path.get("params");
	      for (var _iterator15 = params, _isArray15 = Array.isArray(_iterator15), _i15 = 0, _iterator15 = _isArray15 ? _iterator15 : (0, _getIterator3.default)(_iterator15);;) {
	        var _ref16;

	        if (_isArray15) {
	          if (_i15 >= _iterator15.length) break;
	          _ref16 = _iterator15[_i15++];
	        } else {
	          _i15 = _iterator15.next();
	          if (_i15.done) break;
	          _ref16 = _i15.value;
	        }

	        var param = _ref16;

	        this.registerBinding("param", param);
	      }
	    }

	    // CatchClause - param

	    if (path.isCatchClause()) {
	      this.registerBinding("let", path);
	    }

	    // Program

	    var parent = this.getProgramParent();
	    if (parent.crawling) return;

	    var state = {
	      references: [],
	      constantViolations: [],
	      assignments: []
	    };

	    this.crawling = true;
	    path.traverse(collectorVisitor, state);
	    this.crawling = false;

	    // register assignments
	    for (var _iterator16 = state.assignments, _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : (0, _getIterator3.default)(_iterator16);;) {
	      var _ref17;

	      if (_isArray16) {
	        if (_i16 >= _iterator16.length) break;
	        _ref17 = _iterator16[_i16++];
	      } else {
	        _i16 = _iterator16.next();
	        if (_i16.done) break;
	        _ref17 = _i16.value;
	      }

	      var _path = _ref17;

	      // register undeclared bindings as globals
	      var ids = _path.getBindingIdentifiers();
	      var programParent = void 0;
	      for (var name in ids) {
	        if (_path.scope.getBinding(name)) continue;

	        programParent = programParent || _path.scope.getProgramParent();
	        programParent.addGlobal(ids[name]);
	      }

	      // register as constant violation
	      _path.scope.registerConstantViolation(_path);
	    }

	    // register references
	    for (var _iterator17 = state.references, _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : (0, _getIterator3.default)(_iterator17);;) {
	      var _ref18;

	      if (_isArray17) {
	        if (_i17 >= _iterator17.length) break;
	        _ref18 = _iterator17[_i17++];
	      } else {
	        _i17 = _iterator17.next();
	        if (_i17.done) break;
	        _ref18 = _i17.value;
	      }

	      var ref = _ref18;

	      var binding = ref.scope.getBinding(ref.node.name);
	      if (binding) {
	        binding.reference(ref);
	      } else {
	        ref.scope.getProgramParent().addGlobal(ref.node);
	      }
	    }

	    // register constant violations
	    for (var _iterator18 = state.constantViolations, _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : (0, _getIterator3.default)(_iterator18);;) {
	      var _ref19;

	      if (_isArray18) {
	        if (_i18 >= _iterator18.length) break;
	        _ref19 = _iterator18[_i18++];
	      } else {
	        _i18 = _iterator18.next();
	        if (_i18.done) break;
	        _ref19 = _i18.value;
	      }

	      var _path2 = _ref19;

	      _path2.scope.registerConstantViolation(_path2);
	    }
	  };

	  Scope.prototype.push = function push(opts) {
	    var path = this.path;

	    if (!path.isBlockStatement() && !path.isProgram()) {
	      path = this.getBlockParent().path;
	    }

	    if (path.isSwitchStatement()) {
	      path = this.getFunctionParent().path;
	    }

	    if (path.isLoop() || path.isCatchClause() || path.isFunction()) {
	      t.ensureBlock(path.node);
	      path = path.get("body");
	    }

	    var unique = opts.unique;
	    var kind = opts.kind || "var";
	    var blockHoist = opts._blockHoist == null ? 2 : opts._blockHoist;

	    var dataKey = "declaration:" + kind + ":" + blockHoist;
	    var declarPath = !unique && path.getData(dataKey);

	    if (!declarPath) {
	      var declar = t.variableDeclaration(kind, []);
	      declar._generated = true;
	      declar._blockHoist = blockHoist;

	      var _path$unshiftContaine = path.unshiftContainer("body", [declar]);

	      declarPath = _path$unshiftContaine[0];

	      if (!unique) path.setData(dataKey, declarPath);
	    }

	    var declarator = t.variableDeclarator(opts.id, opts.init);
	    declarPath.node.declarations.push(declarator);
	    this.registerBinding(kind, declarPath.get("declarations").pop());
	  };

	  /**
	   * Walk up to the top of the scope tree and get the `Program`.
	   */

	  Scope.prototype.getProgramParent = function getProgramParent() {
	    var scope = this;
	    do {
	      if (scope.path.isProgram()) {
	        return scope;
	      }
	    } while (scope = scope.parent);
	    throw new Error("We couldn't find a Function or Program...");
	  };

	  /**
	   * Walk up the scope tree until we hit either a Function or reach the
	   * very top and hit Program.
	   */

	  Scope.prototype.getFunctionParent = function getFunctionParent() {
	    var scope = this;
	    do {
	      if (scope.path.isFunctionParent()) {
	        return scope;
	      }
	    } while (scope = scope.parent);
	    throw new Error("We couldn't find a Function or Program...");
	  };

	  /**
	   * Walk up the scope tree until we hit either a BlockStatement/Loop/Program/Function/Switch or reach the
	   * very top and hit Program.
	   */

	  Scope.prototype.getBlockParent = function getBlockParent() {
	    var scope = this;
	    do {
	      if (scope.path.isBlockParent()) {
	        return scope;
	      }
	    } while (scope = scope.parent);
	    throw new Error("We couldn't find a BlockStatement, For, Switch, Function, Loop or Program...");
	  };

	  /**
	   * Walks the scope tree and gathers **all** bindings.
	   */

	  Scope.prototype.getAllBindings = function getAllBindings() {
	    var ids = (0, _create2.default)(null);

	    var scope = this;
	    do {
	      (0, _defaults2.default)(ids, scope.bindings);
	      scope = scope.parent;
	    } while (scope);

	    return ids;
	  };

	  /**
	   * Walks the scope tree and gathers all declarations of `kind`.
	   */

	  Scope.prototype.getAllBindingsOfKind = function getAllBindingsOfKind() {
	    var ids = (0, _create2.default)(null);

	    for (var _iterator19 = arguments, _isArray19 = Array.isArray(_iterator19), _i19 = 0, _iterator19 = _isArray19 ? _iterator19 : (0, _getIterator3.default)(_iterator19);;) {
	      var _ref20;

	      if (_isArray19) {
	        if (_i19 >= _iterator19.length) break;
	        _ref20 = _iterator19[_i19++];
	      } else {
	        _i19 = _iterator19.next();
	        if (_i19.done) break;
	        _ref20 = _i19.value;
	      }

	      var kind = _ref20;

	      var scope = this;
	      do {
	        for (var name in scope.bindings) {
	          var binding = scope.bindings[name];
	          if (binding.kind === kind) ids[name] = binding;
	        }
	        scope = scope.parent;
	      } while (scope);
	    }

	    return ids;
	  };

	  Scope.prototype.bindingIdentifierEquals = function bindingIdentifierEquals(name, node) {
	    return this.getBindingIdentifier(name) === node;
	  };

	  Scope.prototype.warnOnFlowBinding = function warnOnFlowBinding(binding) {
	    if (_crawlCallsCount === 0 && binding && binding.path.isFlow()) {
	      console.warn("\n        You or one of the Babel plugins you are using are using Flow declarations as bindings.\n        Support for this will be removed in version 6.8. To find out the caller, grep for this\n        message and change it to a `console.trace()`.\n      ");
	    }
	    return binding;
	  };

	  Scope.prototype.getBinding = function getBinding(name) {
	    var scope = this;

	    do {
	      var binding = scope.getOwnBinding(name);
	      if (binding) return this.warnOnFlowBinding(binding);
	    } while (scope = scope.parent);
	  };

	  Scope.prototype.getOwnBinding = function getOwnBinding(name) {
	    return this.warnOnFlowBinding(this.bindings[name]);
	  };

	  Scope.prototype.getBindingIdentifier = function getBindingIdentifier(name) {
	    var info = this.getBinding(name);
	    return info && info.identifier;
	  };

	  Scope.prototype.getOwnBindingIdentifier = function getOwnBindingIdentifier(name) {
	    var binding = this.bindings[name];
	    return binding && binding.identifier;
	  };

	  Scope.prototype.hasOwnBinding = function hasOwnBinding(name) {
	    return !!this.getOwnBinding(name);
	  };

	  Scope.prototype.hasBinding = function hasBinding(name, noGlobals) {
	    if (!name) return false;
	    if (this.hasOwnBinding(name)) return true;
	    if (this.parentHasBinding(name, noGlobals)) return true;
	    if (this.hasUid(name)) return true;
	    if (!noGlobals && (0, _includes2.default)(Scope.globals, name)) return true;
	    if (!noGlobals && (0, _includes2.default)(Scope.contextVariables, name)) return true;
	    return false;
	  };

	  Scope.prototype.parentHasBinding = function parentHasBinding(name, noGlobals) {
	    return this.parent && this.parent.hasBinding(name, noGlobals);
	  };

	  /**
	   * Move a binding of `name` to another `scope`.
	   */

	  Scope.prototype.moveBindingTo = function moveBindingTo(name, scope) {
	    var info = this.getBinding(name);
	    if (info) {
	      info.scope.removeOwnBinding(name);
	      info.scope = scope;
	      scope.bindings[name] = info;
	    }
	  };

	  Scope.prototype.removeOwnBinding = function removeOwnBinding(name) {
	    delete this.bindings[name];
	  };

	  Scope.prototype.removeBinding = function removeBinding(name) {
	    // clear literal binding
	    var info = this.getBinding(name);
	    if (info) {
	      info.scope.removeOwnBinding(name);
	    }

	    // clear uids with this name - https://github.com/babel/babel/issues/2101
	    var scope = this;
	    do {
	      if (scope.uids[name]) {
	        scope.uids[name] = false;
	      }
	    } while (scope = scope.parent);
	  };

	  return Scope;
	}();

	Scope.globals = (0, _keys2.default)(_globals2.default.builtin);
	Scope.contextVariables = ["arguments", "undefined", "Infinity", "NaN"];
	exports.default = Scope;
	module.exports = exports["default"];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.NOT_LOCAL_BINDING = exports.BLOCK_SCOPED_SYMBOL = exports.INHERIT_KEYS = exports.UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = exports.BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = exports.UPDATE_OPERATORS = exports.LOGICAL_OPERATORS = exports.COMMENT_KEYS = exports.FOR_INIT_KEYS = exports.FLATTENABLE_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = undefined;

	var _for = __webpack_require__(160);

	var _for2 = _interopRequireDefault(_for);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint max-len: 0 */

	var STATEMENT_OR_BLOCK_KEYS = exports.STATEMENT_OR_BLOCK_KEYS = ["consequent", "body", "alternate"];
	var FLATTENABLE_KEYS = exports.FLATTENABLE_KEYS = ["body", "expressions"];
	var FOR_INIT_KEYS = exports.FOR_INIT_KEYS = ["left", "init"];
	var COMMENT_KEYS = exports.COMMENT_KEYS = ["leadingComments", "trailingComments", "innerComments"];

	var LOGICAL_OPERATORS = exports.LOGICAL_OPERATORS = ["||", "&&"];
	var UPDATE_OPERATORS = exports.UPDATE_OPERATORS = ["++", "--"];

	var BOOLEAN_NUMBER_BINARY_OPERATORS = exports.BOOLEAN_NUMBER_BINARY_OPERATORS = [">", "<", ">=", "<="];
	var EQUALITY_BINARY_OPERATORS = exports.EQUALITY_BINARY_OPERATORS = ["==", "===", "!=", "!=="];
	var COMPARISON_BINARY_OPERATORS = exports.COMPARISON_BINARY_OPERATORS = [].concat(EQUALITY_BINARY_OPERATORS, ["in", "instanceof"]);
	var BOOLEAN_BINARY_OPERATORS = exports.BOOLEAN_BINARY_OPERATORS = [].concat(COMPARISON_BINARY_OPERATORS, BOOLEAN_NUMBER_BINARY_OPERATORS);
	var NUMBER_BINARY_OPERATORS = exports.NUMBER_BINARY_OPERATORS = ["-", "/", "%", "*", "**", "&", "|", ">>", ">>>", "<<", "^"];
	var BINARY_OPERATORS = exports.BINARY_OPERATORS = ["+"].concat(NUMBER_BINARY_OPERATORS, BOOLEAN_BINARY_OPERATORS);

	var BOOLEAN_UNARY_OPERATORS = exports.BOOLEAN_UNARY_OPERATORS = ["delete", "!"];
	var NUMBER_UNARY_OPERATORS = exports.NUMBER_UNARY_OPERATORS = ["+", "-", "++", "--", "~"];
	var STRING_UNARY_OPERATORS = exports.STRING_UNARY_OPERATORS = ["typeof"];
	var UNARY_OPERATORS = exports.UNARY_OPERATORS = ["void"].concat(BOOLEAN_UNARY_OPERATORS, NUMBER_UNARY_OPERATORS, STRING_UNARY_OPERATORS);

	var INHERIT_KEYS = exports.INHERIT_KEYS = {
	  optional: ["typeAnnotation", "typeParameters", "returnType"],
	  force: ["start", "loc", "end"]
	};

	var BLOCK_SCOPED_SYMBOL = exports.BLOCK_SCOPED_SYMBOL = (0, _for2.default)("var used to be block scoped");
	var NOT_LOCAL_BINDING = exports.NOT_LOCAL_BINDING = (0, _for2.default)("should not be considered a local binding");

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(34)
	  , IObject  = __webpack_require__(75)
	  , toObject = __webpack_require__(37)
	  , toLength = __webpack_require__(84)
	  , asc      = __webpack_require__(227);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(73);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(77)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(80)
	  , hide           = __webpack_require__(16)
	  , has            = __webpack_require__(15)
	  , Iterators      = __webpack_require__(35)
	  , $iterCreate    = __webpack_require__(235)
	  , setToStringTag = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(115)
	  , ITERATOR       = __webpack_require__(5)('iterator')
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
/* 77 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 78 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(16);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(82)('keys')
	  , uid    = __webpack_require__(49);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(83)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(17);
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(9)
	  , core           = __webpack_require__(3)
	  , LIBRARY        = __webpack_require__(77)
	  , wksExt         = __webpack_require__(87)
	  , defineProperty = __webpack_require__(10).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(5);

/***/ },
/* 88 */
/***/ function(module, exports) {

	

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(242)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(76)(String, 'String', function(iterated){
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(9)
	  , has            = __webpack_require__(15)
	  , DESCRIPTORS    = __webpack_require__(8)
	  , $export        = __webpack_require__(14)
	  , redefine       = __webpack_require__(80)
	  , META           = __webpack_require__(36).KEY
	  , $fails         = __webpack_require__(23)
	  , shared         = __webpack_require__(82)
	  , setToStringTag = __webpack_require__(48)
	  , uid            = __webpack_require__(49)
	  , wks            = __webpack_require__(5)
	  , wksExt         = __webpack_require__(87)
	  , wksDefine      = __webpack_require__(86)
	  , keyOf          = __webpack_require__(236)
	  , enumKeys       = __webpack_require__(231)
	  , isArray        = __webpack_require__(111)
	  , anObject       = __webpack_require__(13)
	  , toIObject      = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(85)
	  , createDesc     = __webpack_require__(47)
	  , _create        = __webpack_require__(45)
	  , gOPNExt        = __webpack_require__(239)
	  , $GOPD          = __webpack_require__(113)
	  , $DP            = __webpack_require__(10)
	  , $keys          = __webpack_require__(28)
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
	  __webpack_require__(114).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(46).f  = $propertyIsEnumerable;
	  __webpack_require__(78).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(77)){
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
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/


	(function () {
	    'use strict';

	    exports.ast = __webpack_require__(260);
	    exports.code = __webpack_require__(119);
	    exports.keyword = __webpack_require__(261);
	}());
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(342),
	    mapCacheDelete = __webpack_require__(343),
	    mapCacheGet = __webpack_require__(344),
	    mapCacheHas = __webpack_require__(345),
	    mapCacheSet = __webpack_require__(346);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(51),
	    stackClear = __webpack_require__(349),
	    stackDelete = __webpack_require__(350),
	    stackGet = __webpack_require__(351),
	    stackHas = __webpack_require__(352),
	    stackSet = __webpack_require__(353);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(62);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(123);

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


/***/ },
/* 97 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(129),
	    isArrayLike = __webpack_require__(30),
	    isString = __webpack_require__(64),
	    toInteger = __webpack_require__(100),
	    values = __webpack_require__(380);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Checks if `value` is in `collection`. If `collection` is a string, it's
	 * checked for a substring of `value`, otherwise
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * is used for equality comparisons. If `fromIndex` is negative, it's used as
	 * the offset from the end of `collection`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to search.
	 * @param {*} value The value to search for.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	 * @returns {boolean} Returns `true` if `value` is found, else `false`.
	 * @example
	 *
	 * _.includes([1, 2, 3], 1);
	 * // => true
	 *
	 * _.includes([1, 2, 3], 1, 2);
	 * // => false
	 *
	 * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	 * // => true
	 *
	 * _.includes('pebbles', 'eb');
	 * // => true
	 */
	function includes(collection, value, fromIndex, guard) {
	  collection = isArrayLike(collection) ? collection : values(collection);
	  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

	  var length = collection.length;
	  if (fromIndex < 0) {
	    fromIndex = nativeMax(length + fromIndex, 0);
	  }
	  return isString(collection)
	    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
	    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
	}

	module.exports = includes;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toFinite = __webpack_require__(377);

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? (remainder ? result - remainder : result) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 101 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function () {
		return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
	};


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Hub = function Hub(file, options) {
	  (0, _classCallCheck3.default)(this, Hub);

	  this.file = file;
	  this.options = options;
	};

	exports.default = Hub;
	module.exports = exports["default"];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Flow = exports.Pure = exports.Generated = exports.User = exports.Var = exports.BlockScoped = exports.Referenced = exports.Scope = exports.Expression = exports.Statement = exports.BindingIdentifier = exports.ReferencedMemberExpression = exports.ReferencedIdentifier = undefined;

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var ReferencedIdentifier = exports.ReferencedIdentifier = {
	  types: ["Identifier", "JSXIdentifier"],
	  checkPath: function checkPath(_ref, opts) {
	    var node = _ref.node;
	    var parent = _ref.parent;

	    if (!t.isIdentifier(node, opts)) {
	      if (t.isJSXIdentifier(node, opts)) {
	        if (_babelTypes.react.isCompatTag(node.name)) return false;
	      } else {
	        // not a JSXIdentifier or an Identifier
	        return false;
	      }
	    }

	    // check if node is referenced
	    return t.isReferenced(node, parent);
	  }
	};

	var ReferencedMemberExpression = exports.ReferencedMemberExpression = {
	  types: ["MemberExpression"],
	  checkPath: function checkPath(_ref2) {
	    var node = _ref2.node;
	    var parent = _ref2.parent;

	    return t.isMemberExpression(node) && t.isReferenced(node, parent);
	  }
	};

	var BindingIdentifier = exports.BindingIdentifier = {
	  types: ["Identifier"],
	  checkPath: function checkPath(_ref3) {
	    var node = _ref3.node;
	    var parent = _ref3.parent;

	    return t.isIdentifier(node) && t.isBinding(node, parent);
	  }
	};

	var Statement = exports.Statement = {
	  types: ["Statement"],
	  checkPath: function checkPath(_ref4) {
	    var node = _ref4.node;
	    var parent = _ref4.parent;

	    if (t.isStatement(node)) {
	      if (t.isVariableDeclaration(node)) {
	        if (t.isForXStatement(parent, { left: node })) return false;
	        if (t.isForStatement(parent, { init: node })) return false;
	      }

	      return true;
	    } else {
	      return false;
	    }
	  }
	};

	var Expression = exports.Expression = {
	  types: ["Expression"],
	  checkPath: function checkPath(path) {
	    if (path.isIdentifier()) {
	      return path.isReferencedIdentifier();
	    } else {
	      return t.isExpression(path.node);
	    }
	  }
	};

	var Scope = exports.Scope = {
	  types: ["Scopable"],
	  checkPath: function checkPath(path) {
	    return t.isScope(path.node, path.parent);
	  }
	};

	var Referenced = exports.Referenced = {
	  checkPath: function checkPath(path) {
	    return t.isReferenced(path.node, path.parent);
	  }
	};

	var BlockScoped = exports.BlockScoped = {
	  checkPath: function checkPath(path) {
	    return t.isBlockScoped(path.node);
	  }
	};

	var Var = exports.Var = {
	  types: ["VariableDeclaration"],
	  checkPath: function checkPath(path) {
	    return t.isVar(path.node);
	  }
	};

	var User = exports.User = {
	  checkPath: function checkPath(path) {
	    return path.node && !!path.node.loc;
	  }
	};

	var Generated = exports.Generated = {
	  checkPath: function checkPath(path) {
	    return !path.isUser();
	  }
	};

	var Pure = exports.Pure = {
	  checkPath: function checkPath(path, opts) {
	    return path.scope.isPure(path.node, opts);
	  }
	};

	var Flow = exports.Flow = {
	  types: ["Flow", "ImportDeclaration", "ExportDeclaration"],
	  checkPath: function checkPath(_ref5) {
	    var node = _ref5.node;

	    if (t.isFlow(node)) {
	      return true;
	    } else if (t.isImportDeclaration(node)) {
	      return node.importKind === "type" || node.importKind === "typeof";
	    } else if (t.isExportDeclaration(node)) {
	      return node.exportKind === "type";
	    } else {
	      return false;
	    }
	  }
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This class is responsible for a binding inside of a scope.
	 *
	 * It tracks the following:
	 *
	 *  * Node path.
	 *  * Amount of times referenced by other nodes.
	 *  * Paths to nodes that reassign or modify this binding.
	 *  * The kind of binding. (Is it a parameter, declaration etc)
	 */

	var Binding = function () {
	  function Binding(_ref) {
	    var existing = _ref.existing;
	    var identifier = _ref.identifier;
	    var scope = _ref.scope;
	    var path = _ref.path;
	    var kind = _ref.kind;
	    (0, _classCallCheck3.default)(this, Binding);

	    this.identifier = identifier;
	    this.scope = scope;
	    this.path = path;
	    this.kind = kind;

	    this.constantViolations = [];
	    this.constant = true;

	    this.referencePaths = [];
	    this.referenced = false;
	    this.references = 0;

	    this.clearValue();

	    if (existing) {
	      this.constantViolations = [].concat(existing.path, existing.constantViolations, this.constantViolations);
	    }
	  }

	  Binding.prototype.deoptValue = function deoptValue() {
	    this.clearValue();
	    this.hasDeoptedValue = true;
	  };

	  Binding.prototype.setValue = function setValue(value) {
	    if (this.hasDeoptedValue) return;
	    this.hasValue = true;
	    this.value = value;
	  };

	  Binding.prototype.clearValue = function clearValue() {
	    this.hasDeoptedValue = false;
	    this.hasValue = false;
	    this.value = null;
	  };

	  /**
	   * Register a constant violation with the provided `path`.
	   */

	  Binding.prototype.reassign = function reassign(path) {
	    this.constant = false;
	    if (this.constantViolations.indexOf(path) !== -1) {
	      return;
	    }
	    this.constantViolations.push(path);
	  };

	  /**
	   * Increment the amount of references to this binding.
	   */

	  Binding.prototype.reference = function reference(path) {
	    if (this.referencePaths.indexOf(path) !== -1) {
	      return;
	    }
	    this.referenced = true;
	    this.references++;
	    this.referencePaths.push(path);
	  };

	  /**
	   * Decrement the amount of references to this binding.
	   */

	  Binding.prototype.dereference = function dereference() {
	    this.references--;
	    this.referenced = !!this.references;
	  };

	  return Binding;
	}();

	exports.default = Binding;
	module.exports = exports["default"];

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _create = __webpack_require__(31);

	var _create2 = _interopRequireDefault(_create);

	exports.getBindingIdentifiers = getBindingIdentifiers;
	exports.getOuterBindingIdentifiers = getOuterBindingIdentifiers;

	var _index = __webpack_require__(2);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Return a list of binding identifiers associated with the input `node`.
	 */

	function getBindingIdentifiers(node, duplicates, outerOnly) {
	  var search = [].concat(node);
	  var ids = (0, _create2.default)(null);

	  while (search.length) {
	    var id = search.shift();
	    if (!id) continue;

	    var keys = t.getBindingIdentifiers.keys[id.type];

	    if (t.isIdentifier(id)) {
	      if (duplicates) {
	        var _ids = ids[id.name] = ids[id.name] || [];
	        _ids.push(id);
	      } else {
	        ids[id.name] = id;
	      }
	      continue;
	    }

	    if (t.isExportDeclaration(id)) {
	      if (t.isDeclaration(node.declaration)) {
	        search.push(node.declaration);
	      }
	      continue;
	    }

	    if (outerOnly) {
	      if (t.isFunctionDeclaration(id)) {
	        search.push(id.id);
	        continue;
	      }

	      if (t.isFunctionExpression(id)) {
	        continue;
	      }
	    }

	    if (keys) {
	      for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        if (id[key]) {
	          search = search.concat(id[key]);
	        }
	      }
	    }
	  }

	  return ids;
	}

	/**
	 * Mapping of types to their identifier keys.
	 */

	getBindingIdentifiers.keys = {
	  DeclareClass: ["id"],
	  DeclareFunction: ["id"],
	  DeclareModule: ["id"],
	  DeclareVariable: ["id"],
	  InterfaceDeclaration: ["id"],
	  TypeAlias: ["id"],

	  CatchClause: ["param"],
	  LabeledStatement: ["label"],
	  UnaryExpression: ["argument"],
	  AssignmentExpression: ["left"],

	  ImportSpecifier: ["local"],
	  ImportNamespaceSpecifier: ["local"],
	  ImportDefaultSpecifier: ["local"],
	  ImportDeclaration: ["specifiers"],

	  ExportSpecifier: ["exported"],
	  ExportNamespaceSpecifier: ["exported"],
	  ExportDefaultSpecifier: ["exported"],

	  FunctionDeclaration: ["id", "params"],
	  FunctionExpression: ["id", "params"],

	  ClassDeclaration: ["id"],
	  ClassExpression: ["id"],

	  RestElement: ["argument"],
	  UpdateExpression: ["argument"],

	  RestProperty: ["argument"],
	  ObjectProperty: ["value"],

	  AssignmentPattern: ["left"],
	  ArrayPattern: ["elements"],
	  ObjectPattern: ["properties"],

	  VariableDeclaration: ["declarations"],
	  VariableDeclarator: ["id"]
	};

	function getOuterBindingIdentifiers(node, duplicates) {
	  return getBindingIdentifiers(node, duplicates, true);
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Token = undefined;

	var _createClass2 = __webpack_require__(40);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _identifier = __webpack_require__(33);

	var _types = __webpack_require__(7);

	var _context = __webpack_require__(32);

	var _location = __webpack_require__(42);

	var _whitespace = __webpack_require__(27);

	var _state = __webpack_require__(206);

	var _state2 = _interopRequireDefault(_state);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Object type used to represent tokens. Note that normally, tokens
	// simply exist as properties on the parser object. This is only
	// used for the onToken callback and the external tokenizer.

	var Token = exports.Token = function Token(state) {
	  (0, _classCallCheck3.default)(this, Token);

	  this.type = state.type;
	  this.value = state.value;
	  this.start = state.start;
	  this.end = state.end;
	  this.loc = new _location.SourceLocation(state.startLoc, state.endLoc);
	};

	// ## Tokenizer

	/* eslint max-len: 0 */
	/* eslint indent: 0 */

	function codePointToString(code) {
	  // UTF-16 Decoding
	  if (code <= 0xFFFF) {
	    return String.fromCharCode(code);
	  } else {
	    return String.fromCharCode((code - 0x10000 >> 10) + 0xD800, (code - 0x10000 & 1023) + 0xDC00);
	  }
	}

	var Tokenizer = function () {
	  function Tokenizer(options, input) {
	    (0, _classCallCheck3.default)(this, Tokenizer);

	    this.state = new _state2.default();
	    this.state.init(options, input);
	  }

	  // Move to the next token

	  (0, _createClass3.default)(Tokenizer, [{
	    key: "next",
	    value: function next() {
	      if (!this.isLookahead) {
	        this.state.tokens.push(new Token(this.state));
	      }

	      this.state.lastTokEnd = this.state.end;
	      this.state.lastTokStart = this.state.start;
	      this.state.lastTokEndLoc = this.state.endLoc;
	      this.state.lastTokStartLoc = this.state.startLoc;
	      this.nextToken();
	    }

	    // TODO

	  }, {
	    key: "eat",
	    value: function eat(type) {
	      if (this.match(type)) {
	        this.next();
	        return true;
	      } else {
	        return false;
	      }
	    }

	    // TODO

	  }, {
	    key: "match",
	    value: function match(type) {
	      return this.state.type === type;
	    }

	    // TODO

	  }, {
	    key: "isKeyword",
	    value: function isKeyword(word) {
	      return (0, _identifier.isKeyword)(word);
	    }

	    // TODO

	  }, {
	    key: "lookahead",
	    value: function lookahead() {
	      var old = this.state;
	      this.state = old.clone(true);

	      this.isLookahead = true;
	      this.next();
	      this.isLookahead = false;

	      var curr = this.state.clone(true);
	      this.state = old;
	      return curr;
	    }

	    // Toggle strict mode. Re-reads the next number or string to please
	    // pedantic tests (`"use strict"; 010;` should fail).

	  }, {
	    key: "setStrict",
	    value: function setStrict(strict) {
	      this.state.strict = strict;
	      if (!this.match(_types.types.num) && !this.match(_types.types.string)) return;
	      this.state.pos = this.state.start;
	      while (this.state.pos < this.state.lineStart) {
	        this.state.lineStart = this.input.lastIndexOf("\n", this.state.lineStart - 2) + 1;
	        --this.state.curLine;
	      }
	      this.nextToken();
	    }
	  }, {
	    key: "curContext",
	    value: function curContext() {
	      return this.state.context[this.state.context.length - 1];
	    }

	    // Read a single token, updating the parser object's token-related
	    // properties.

	  }, {
	    key: "nextToken",
	    value: function nextToken() {
	      var curContext = this.curContext();
	      if (!curContext || !curContext.preserveSpace) this.skipSpace();

	      this.state.containsOctal = false;
	      this.state.octalPosition = null;
	      this.state.start = this.state.pos;
	      this.state.startLoc = this.state.curPosition();
	      if (this.state.pos >= this.input.length) return this.finishToken(_types.types.eof);

	      if (curContext.override) {
	        return curContext.override(this);
	      } else {
	        return this.readToken(this.fullCharCodeAtPos());
	      }
	    }
	  }, {
	    key: "readToken",
	    value: function readToken(code) {
	      // Identifier or keyword. '\uXXXX' sequences are allowed in
	      // identifiers, so '\' also dispatches to that.
	      if ((0, _identifier.isIdentifierStart)(code) || code === 92 /* '\' */) {
	          return this.readWord();
	        } else {
	        return this.getTokenFromCode(code);
	      }
	    }
	  }, {
	    key: "fullCharCodeAtPos",
	    value: function fullCharCodeAtPos() {
	      var code = this.input.charCodeAt(this.state.pos);
	      if (code <= 0xd7ff || code >= 0xe000) return code;

	      var next = this.input.charCodeAt(this.state.pos + 1);
	      return (code << 10) + next - 0x35fdc00;
	    }
	  }, {
	    key: "pushComment",
	    value: function pushComment(block, text, start, end, startLoc, endLoc) {
	      var comment = {
	        type: block ? "CommentBlock" : "CommentLine",
	        value: text,
	        start: start,
	        end: end,
	        loc: new _location.SourceLocation(startLoc, endLoc)
	      };

	      if (!this.isLookahead) {
	        this.state.tokens.push(comment);
	        this.state.comments.push(comment);
	      }

	      this.addComment(comment);
	    }
	  }, {
	    key: "skipBlockComment",
	    value: function skipBlockComment() {
	      var startLoc = this.state.curPosition();
	      var start = this.state.pos,
	          end = this.input.indexOf("*/", this.state.pos += 2);
	      if (end === -1) this.raise(this.state.pos - 2, "Unterminated comment");

	      this.state.pos = end + 2;
	      _whitespace.lineBreakG.lastIndex = start;
	      var match = void 0;
	      while ((match = _whitespace.lineBreakG.exec(this.input)) && match.index < this.state.pos) {
	        ++this.state.curLine;
	        this.state.lineStart = match.index + match[0].length;
	      }

	      this.pushComment(true, this.input.slice(start + 2, end), start, this.state.pos, startLoc, this.state.curPosition());
	    }
	  }, {
	    key: "skipLineComment",
	    value: function skipLineComment(startSkip) {
	      var start = this.state.pos;
	      var startLoc = this.state.curPosition();
	      var ch = this.input.charCodeAt(this.state.pos += startSkip);
	      while (this.state.pos < this.input.length && ch !== 10 && ch !== 13 && ch !== 8232 && ch !== 8233) {
	        ++this.state.pos;
	        ch = this.input.charCodeAt(this.state.pos);
	      }

	      this.pushComment(false, this.input.slice(start + startSkip, this.state.pos), start, this.state.pos, startLoc, this.state.curPosition());
	    }

	    // Called at the start of the parse and after every token. Skips
	    // whitespace and comments, and.

	  }, {
	    key: "skipSpace",
	    value: function skipSpace() {
	      loop: while (this.state.pos < this.input.length) {
	        var ch = this.input.charCodeAt(this.state.pos);
	        switch (ch) {
	          case 32:case 160:
	            // ' '
	            ++this.state.pos;
	            break;

	          case 13:
	            if (this.input.charCodeAt(this.state.pos + 1) === 10) {
	              ++this.state.pos;
	            }

	          case 10:case 8232:case 8233:
	            ++this.state.pos;
	            ++this.state.curLine;
	            this.state.lineStart = this.state.pos;
	            break;

	          case 47:
	            // '/'
	            switch (this.input.charCodeAt(this.state.pos + 1)) {
	              case 42:
	                // '*'
	                this.skipBlockComment();
	                break;

	              case 47:
	                this.skipLineComment(2);
	                break;

	              default:
	                break loop;
	            }
	            break;

	          default:
	            if (ch > 8 && ch < 14 || ch >= 5760 && _whitespace.nonASCIIwhitespace.test(String.fromCharCode(ch))) {
	              ++this.state.pos;
	            } else {
	              break loop;
	            }
	        }
	      }
	    }

	    // Called at the end of every token. Sets `end`, `val`, and
	    // maintains `context` and `exprAllowed`, and skips the space after
	    // the token, so that the next one's `start` will point at the
	    // right position.

	  }, {
	    key: "finishToken",
	    value: function finishToken(type, val) {
	      this.state.end = this.state.pos;
	      this.state.endLoc = this.state.curPosition();
	      var prevType = this.state.type;
	      this.state.type = type;
	      this.state.value = val;

	      this.updateContext(prevType);
	    }

	    // ### Token reading

	    // This is the function that is called to fetch the next token. It
	    // is somewhat obscure, because it works in character codes rather
	    // than characters, and because operator parsing has been inlined
	    // into it.
	    //
	    // All in the name of speed.
	    //

	  }, {
	    key: "readToken_dot",
	    value: function readToken_dot() {
	      var next = this.input.charCodeAt(this.state.pos + 1);
	      if (next >= 48 && next <= 57) {
	        return this.readNumber(true);
	      }

	      var next2 = this.input.charCodeAt(this.state.pos + 2);
	      if (next === 46 && next2 === 46) {
	        // 46 = dot '.'
	        this.state.pos += 3;
	        return this.finishToken(_types.types.ellipsis);
	      } else {
	        ++this.state.pos;
	        return this.finishToken(_types.types.dot);
	      }
	    }
	  }, {
	    key: "readToken_slash",
	    value: function readToken_slash() {
	      // '/'
	      if (this.state.exprAllowed) {
	        ++this.state.pos;
	        return this.readRegexp();
	      }

	      var next = this.input.charCodeAt(this.state.pos + 1);
	      if (next === 61) {
	        return this.finishOp(_types.types.assign, 2);
	      } else {
	        return this.finishOp(_types.types.slash, 1);
	      }
	    }
	  }, {
	    key: "readToken_mult_modulo",
	    value: function readToken_mult_modulo(code) {
	      // '%*'
	      var type = code === 42 ? _types.types.star : _types.types.modulo;
	      var width = 1;
	      var next = this.input.charCodeAt(this.state.pos + 1);

	      if (next === 42 && this.hasPlugin("exponentiationOperator")) {
	        // '*'
	        width++;
	        next = this.input.charCodeAt(this.state.pos + 2);
	        type = _types.types.exponent;
	      }

	      if (next === 61) {
	        width++;
	        type = _types.types.assign;
	      }

	      return this.finishOp(type, width);
	    }
	  }, {
	    key: "readToken_pipe_amp",
	    value: function readToken_pipe_amp(code) {
	      // '|&'
	      var next = this.input.charCodeAt(this.state.pos + 1);
	      if (next === code) return this.finishOp(code === 124 ? _types.types.logicalOR : _types.types.logicalAND, 2);
	      if (next === 61) return this.finishOp(_types.types.assign, 2);
	      return this.finishOp(code === 124 ? _types.types.bitwiseOR : _types.types.bitwiseAND, 1);
	    }
	  }, {
	    key: "readToken_caret",
	    value: function readToken_caret() {
	      // '^'
	      var next = this.input.charCodeAt(this.state.pos + 1);
	      if (next === 61) {
	        return this.finishOp(_types.types.assign, 2);
	      } else {
	        return this.finishOp(_types.types.bitwiseXOR, 1);
	      }
	    }
	  }, {
	    key: "readToken_plus_min",
	    value: function readToken_plus_min(code) {
	      // '+-'
	      var next = this.input.charCodeAt(this.state.pos + 1);

	      if (next === code) {
	        if (next === 45 && this.input.charCodeAt(this.state.pos + 2) === 62 && _whitespace.lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.pos))) {
	          // A `-->` line comment
	          this.skipLineComment(3);
	          this.skipSpace();
	          return this.nextToken();
	        }
	        return this.finishOp(_types.types.incDec, 2);
	      }

	      if (next === 61) {
	        return this.finishOp(_types.types.assign, 2);
	      } else {
	        return this.finishOp(_types.types.plusMin, 1);
	      }
	    }
	  }, {
	    key: "readToken_lt_gt",
	    value: function readToken_lt_gt(code) {
	      // '<>'
	      var next = this.input.charCodeAt(this.state.pos + 1);
	      var size = 1;

	      if (next === code) {
	        size = code === 62 && this.input.charCodeAt(this.state.pos + 2) === 62 ? 3 : 2;
	        if (this.input.charCodeAt(this.state.pos + size) === 61) return this.finishOp(_types.types.assign, size + 1);
	        return this.finishOp(_types.types.bitShift, size);
	      }

	      if (next === 33 && code === 60 && this.input.charCodeAt(this.state.pos + 2) === 45 && this.input.charCodeAt(this.state.pos + 3) === 45) {
	        if (this.inModule) this.unexpected();
	        // `<!--`, an XML-style comment that should be interpreted as a line comment
	        this.skipLineComment(4);
	        this.skipSpace();
	        return this.nextToken();
	      }

	      if (next === 61) {
	        // <= | >=
	        size = 2;
	      }

	      return this.finishOp(_types.types.relational, size);
	    }
	  }, {
	    key: "readToken_eq_excl",
	    value: function readToken_eq_excl(code) {
	      // '=!'
	      var next = this.input.charCodeAt(this.state.pos + 1);
	      if (next === 61) return this.finishOp(_types.types.equality, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
	      if (code === 61 && next === 62) {
	        // '=>'
	        this.state.pos += 2;
	        return this.finishToken(_types.types.arrow);
	      }
	      return this.finishOp(code === 61 ? _types.types.eq : _types.types.prefix, 1);
	    }
	  }, {
	    key: "getTokenFromCode",
	    value: function getTokenFromCode(code) {
	      switch (code) {
	        // The interpretation of a dot depends on whether it is followed
	        // by a digit or another two dots.
	        case 46:
	          // '.'
	          return this.readToken_dot();

	        // Punctuation tokens.
	        case 40:
	          ++this.state.pos;return this.finishToken(_types.types.parenL);
	        case 41:
	          ++this.state.pos;return this.finishToken(_types.types.parenR);
	        case 59:
	          ++this.state.pos;return this.finishToken(_types.types.semi);
	        case 44:
	          ++this.state.pos;return this.finishToken(_types.types.comma);
	        case 91:
	          ++this.state.pos;return this.finishToken(_types.types.bracketL);
	        case 93:
	          ++this.state.pos;return this.finishToken(_types.types.bracketR);
	        case 123:
	          ++this.state.pos;return this.finishToken(_types.types.braceL);
	        case 125:
	          ++this.state.pos;return this.finishToken(_types.types.braceR);

	        case 58:
	          if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
	            return this.finishOp(_types.types.doubleColon, 2);
	          } else {
	            ++this.state.pos;
	            return this.finishToken(_types.types.colon);
	          }

	        case 63:
	          ++this.state.pos;return this.finishToken(_types.types.question);
	        case 64:
	          ++this.state.pos;return this.finishToken(_types.types.at);

	        case 96:
	          // '`'
	          ++this.state.pos;
	          return this.finishToken(_types.types.backQuote);

	        case 48:
	          // '0'
	          var next = this.input.charCodeAt(this.state.pos + 1);
	          if (next === 120 || next === 88) return this.readRadixNumber(16); // '0x', '0X' - hex number
	          if (next === 111 || next === 79) return this.readRadixNumber(8); // '0o', '0O' - octal number
	          if (next === 98 || next === 66) return this.readRadixNumber(2); // '0b', '0B' - binary number
	        // Anything else beginning with a digit is an integer, octal
	        // number, or float.
	        case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
	          // 1-9
	          return this.readNumber(false);

	        // Quotes produce strings.
	        case 34:case 39:
	          // '"', "'"
	          return this.readString(code);

	        // Operators are parsed inline in tiny state machines. '=' (61) is
	        // often referred to. `finishOp` simply skips the amount of
	        // characters it is given as second argument, and returns a token
	        // of the type given by its first argument.

	        case 47:
	          // '/'
	          return this.readToken_slash();

	        case 37:case 42:
	          // '%*'
	          return this.readToken_mult_modulo(code);

	        case 124:case 38:
	          // '|&'
	          return this.readToken_pipe_amp(code);

	        case 94:
	          // '^'
	          return this.readToken_caret();

	        case 43:case 45:
	          // '+-'
	          return this.readToken_plus_min(code);

	        case 60:case 62:
	          // '<>'
	          return this.readToken_lt_gt(code);

	        case 61:case 33:
	          // '=!'
	          return this.readToken_eq_excl(code);

	        case 126:
	          // '~'
	          return this.finishOp(_types.types.prefix, 1);
	      }

	      this.raise(this.state.pos, "Unexpected character '" + codePointToString(code) + "'");
	    }
	  }, {
	    key: "finishOp",
	    value: function finishOp(type, size) {
	      var str = this.input.slice(this.state.pos, this.state.pos + size);
	      this.state.pos += size;
	      return this.finishToken(type, str);
	    }
	  }, {
	    key: "readRegexp",
	    value: function readRegexp() {
	      var escaped = void 0,
	          inClass = void 0,
	          start = this.state.pos;
	      for (;;) {
	        if (this.state.pos >= this.input.length) this.raise(start, "Unterminated regular expression");
	        var ch = this.input.charAt(this.state.pos);
	        if (_whitespace.lineBreak.test(ch)) {
	          this.raise(start, "Unterminated regular expression");
	        }
	        if (escaped) {
	          escaped = false;
	        } else {
	          if (ch === "[") {
	            inClass = true;
	          } else if (ch === "]" && inClass) {
	            inClass = false;
	          } else if (ch === "/" && !inClass) {
	            break;
	          }
	          escaped = ch === "\\";
	        }
	        ++this.state.pos;
	      }
	      var content = this.input.slice(start, this.state.pos);
	      ++this.state.pos;
	      // Need to use `readWord1` because '\uXXXX' sequences are allowed
	      // here (don't ask).
	      var mods = this.readWord1();
	      if (mods) {
	        var validFlags = /^[gmsiyu]*$/;
	        if (!validFlags.test(mods)) this.raise(start, "Invalid regular expression flag");
	      }
	      return this.finishToken(_types.types.regexp, {
	        pattern: content,
	        flags: mods
	      });
	    }

	    // Read an integer in the given radix. Return null if zero digits
	    // were read, the integer value otherwise. When `len` is given, this
	    // will return `null` unless the integer has exactly `len` digits.

	  }, {
	    key: "readInt",
	    value: function readInt(radix, len) {
	      var start = this.state.pos,
	          total = 0;
	      for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
	        var code = this.input.charCodeAt(this.state.pos),
	            val = void 0;
	        if (code >= 97) {
	          val = code - 97 + 10; // a
	        } else if (code >= 65) {
	            val = code - 65 + 10; // A
	          } else if (code >= 48 && code <= 57) {
	              val = code - 48; // 0-9
	            } else {
	                val = Infinity;
	              }
	        if (val >= radix) break;
	        ++this.state.pos;
	        total = total * radix + val;
	      }
	      if (this.state.pos === start || len != null && this.state.pos - start !== len) return null;

	      return total;
	    }
	  }, {
	    key: "readRadixNumber",
	    value: function readRadixNumber(radix) {
	      this.state.pos += 2; // 0x
	      var val = this.readInt(radix);
	      if (val == null) this.raise(this.state.start + 2, "Expected number in radix " + radix);
	      if ((0, _identifier.isIdentifierStart)(this.fullCharCodeAtPos())) this.raise(this.state.pos, "Identifier directly after number");
	      return this.finishToken(_types.types.num, val);
	    }

	    // Read an integer, octal integer, or floating-point number.

	  }, {
	    key: "readNumber",
	    value: function readNumber(startsWithDot) {
	      var start = this.state.pos,
	          isFloat = false,
	          octal = this.input.charCodeAt(this.state.pos) === 48;
	      if (!startsWithDot && this.readInt(10) === null) this.raise(start, "Invalid number");
	      var next = this.input.charCodeAt(this.state.pos);
	      if (next === 46) {
	        // '.'
	        ++this.state.pos;
	        this.readInt(10);
	        isFloat = true;
	        next = this.input.charCodeAt(this.state.pos);
	      }
	      if (next === 69 || next === 101) {
	        // 'eE'
	        next = this.input.charCodeAt(++this.state.pos);
	        if (next === 43 || next === 45) ++this.state.pos; // '+-'
	        if (this.readInt(10) === null) this.raise(start, "Invalid number");
	        isFloat = true;
	      }
	      if ((0, _identifier.isIdentifierStart)(this.fullCharCodeAtPos())) this.raise(this.state.pos, "Identifier directly after number");

	      var str = this.input.slice(start, this.state.pos),
	          val = void 0;
	      if (isFloat) {
	        val = parseFloat(str);
	      } else if (!octal || str.length === 1) {
	        val = parseInt(str, 10);
	      } else if (/[89]/.test(str) || this.state.strict) {
	        this.raise(start, "Invalid number");
	      } else {
	        val = parseInt(str, 8);
	      }
	      return this.finishToken(_types.types.num, val);
	    }

	    // Read a string value, interpreting backslash-escapes.

	  }, {
	    key: "readCodePoint",
	    value: function readCodePoint() {
	      var ch = this.input.charCodeAt(this.state.pos),
	          code = void 0;

	      if (ch === 123) {
	        var codePos = ++this.state.pos;
	        code = this.readHexChar(this.input.indexOf("}", this.state.pos) - this.state.pos);
	        ++this.state.pos;
	        if (code > 0x10FFFF) this.raise(codePos, "Code point out of bounds");
	      } else {
	        code = this.readHexChar(4);
	      }
	      return code;
	    }
	  }, {
	    key: "readString",
	    value: function readString(quote) {
	      var out = "",
	          chunkStart = ++this.state.pos;
	      for (;;) {
	        if (this.state.pos >= this.input.length) this.raise(this.state.start, "Unterminated string constant");
	        var ch = this.input.charCodeAt(this.state.pos);
	        if (ch === quote) break;
	        if (ch === 92) {
	          // '\'
	          out += this.input.slice(chunkStart, this.state.pos);
	          out += this.readEscapedChar(false);
	          chunkStart = this.state.pos;
	        } else {
	          if ((0, _whitespace.isNewLine)(ch)) this.raise(this.state.start, "Unterminated string constant");
	          ++this.state.pos;
	        }
	      }
	      out += this.input.slice(chunkStart, this.state.pos++);
	      return this.finishToken(_types.types.string, out);
	    }

	    // Reads template string tokens.

	  }, {
	    key: "readTmplToken",
	    value: function readTmplToken() {
	      var out = "",
	          chunkStart = this.state.pos;
	      for (;;) {
	        if (this.state.pos >= this.input.length) this.raise(this.state.start, "Unterminated template");
	        var ch = this.input.charCodeAt(this.state.pos);
	        if (ch === 96 || ch === 36 && this.input.charCodeAt(this.state.pos + 1) === 123) {
	          // '`', '${'
	          if (this.state.pos === this.state.start && this.match(_types.types.template)) {
	            if (ch === 36) {
	              this.state.pos += 2;
	              return this.finishToken(_types.types.dollarBraceL);
	            } else {
	              ++this.state.pos;
	              return this.finishToken(_types.types.backQuote);
	            }
	          }
	          out += this.input.slice(chunkStart, this.state.pos);
	          return this.finishToken(_types.types.template, out);
	        }
	        if (ch === 92) {
	          // '\'
	          out += this.input.slice(chunkStart, this.state.pos);
	          out += this.readEscapedChar(true);
	          chunkStart = this.state.pos;
	        } else if ((0, _whitespace.isNewLine)(ch)) {
	          out += this.input.slice(chunkStart, this.state.pos);
	          ++this.state.pos;
	          switch (ch) {
	            case 13:
	              if (this.input.charCodeAt(this.state.pos) === 10) ++this.state.pos;
	            case 10:
	              out += "\n";
	              break;
	            default:
	              out += String.fromCharCode(ch);
	              break;
	          }
	          ++this.state.curLine;
	          this.state.lineStart = this.state.pos;
	          chunkStart = this.state.pos;
	        } else {
	          ++this.state.pos;
	        }
	      }
	    }

	    // Used to read escaped characters

	  }, {
	    key: "readEscapedChar",
	    value: function readEscapedChar(inTemplate) {
	      var ch = this.input.charCodeAt(++this.state.pos);
	      ++this.state.pos;
	      switch (ch) {
	        case 110:
	          return "\n"; // 'n' -> '\n'
	        case 114:
	          return "\r"; // 'r' -> '\r'
	        case 120:
	          return String.fromCharCode(this.readHexChar(2)); // 'x'
	        case 117:
	          return codePointToString(this.readCodePoint()); // 'u'
	        case 116:
	          return "\t"; // 't' -> '\t'
	        case 98:
	          return "\b"; // 'b' -> '\b'
	        case 118:
	          return "\u000b"; // 'v' -> '\u000b'
	        case 102:
	          return "\f"; // 'f' -> '\f'
	        case 13:
	          if (this.input.charCodeAt(this.state.pos) === 10) ++this.state.pos; // '\r\n'
	        case 10:
	          // ' \n'
	          this.state.lineStart = this.state.pos;
	          ++this.state.curLine;
	          return "";
	        default:
	          if (ch >= 48 && ch <= 55) {
	            var octalStr = this.input.substr(this.state.pos - 1, 3).match(/^[0-7]+/)[0];
	            var octal = parseInt(octalStr, 8);
	            if (octal > 255) {
	              octalStr = octalStr.slice(0, -1);
	              octal = parseInt(octalStr, 8);
	            }
	            if (octal > 0) {
	              if (!this.state.containsOctal) {
	                this.state.containsOctal = true;
	                this.state.octalPosition = this.state.pos - 2;
	              }
	              if (this.state.strict || inTemplate) {
	                this.raise(this.state.pos - 2, "Octal literal in strict mode");
	              }
	            }
	            this.state.pos += octalStr.length - 1;
	            return String.fromCharCode(octal);
	          }
	          return String.fromCharCode(ch);
	      }
	    }

	    // Used to read character escape sequences ('\x', '\u', '\U').

	  }, {
	    key: "readHexChar",
	    value: function readHexChar(len) {
	      var codePos = this.state.pos;
	      var n = this.readInt(16, len);
	      if (n === null) this.raise(codePos, "Bad character escape sequence");
	      return n;
	    }

	    // Read an identifier, and return it as a string. Sets `this.state.containsEsc`
	    // to whether the word contained a '\u' escape.
	    //
	    // Incrementally adds only escaped chars, adding other chunks as-is
	    // as a micro-optimization.

	  }, {
	    key: "readWord1",
	    value: function readWord1() {
	      this.state.containsEsc = false;
	      var word = "",
	          first = true,
	          chunkStart = this.state.pos;
	      while (this.state.pos < this.input.length) {
	        var ch = this.fullCharCodeAtPos();
	        if ((0, _identifier.isIdentifierChar)(ch)) {
	          this.state.pos += ch <= 0xffff ? 1 : 2;
	        } else if (ch === 92) {
	          // "\"
	          this.state.containsEsc = true;

	          word += this.input.slice(chunkStart, this.state.pos);
	          var escStart = this.state.pos;

	          if (this.input.charCodeAt(++this.state.pos) !== 117) {
	            // "u"
	            this.raise(this.state.pos, "Expecting Unicode escape sequence \\uXXXX");
	          }

	          ++this.state.pos;
	          var esc = this.readCodePoint();
	          if (!(first ? _identifier.isIdentifierStart : _identifier.isIdentifierChar)(esc, true)) {
	            this.raise(escStart, "Invalid Unicode escape");
	          }

	          word += codePointToString(esc);
	          chunkStart = this.state.pos;
	        } else {
	          break;
	        }
	        first = false;
	      }
	      return word + this.input.slice(chunkStart, this.state.pos);
	    }

	    // Read an identifier or keyword token. Will check for reserved
	    // words when necessary.

	  }, {
	    key: "readWord",
	    value: function readWord() {
	      var word = this.readWord1();
	      var type = _types.types.name;
	      if (!this.state.containsEsc && this.isKeyword(word)) {
	        type = _types.keywords[word];
	      }
	      return this.finishToken(type, word);
	    }
	  }, {
	    key: "braceIsBlock",
	    value: function braceIsBlock(prevType) {
	      if (prevType === _types.types.colon) {
	        var parent = this.curContext();
	        if (parent === _context.types.braceStatement || parent === _context.types.braceExpression) {
	          return !parent.isExpr;
	        }
	      }

	      if (prevType === _types.types._return) {
	        return _whitespace.lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
	      }

	      if (prevType === _types.types._else || prevType === _types.types.semi || prevType === _types.types.eof || prevType === _types.types.parenR) {
	        return true;
	      }

	      if (prevType === _types.types.braceL) {
	        return this.curContext() === _context.types.braceStatement;
	      }

	      return !this.state.exprAllowed;
	    }
	  }, {
	    key: "updateContext",
	    value: function updateContext(prevType) {
	      var update = void 0,
	          type = this.state.type;
	      if (type.keyword && prevType === _types.types.dot) {
	        this.state.exprAllowed = false;
	      } else if (update = type.updateContext) {
	        update.call(this, prevType);
	      } else {
	        this.state.exprAllowed = type.beforeExpr;
	      }
	    }
	  }]);
	  return Tokenizer;
	}();

	exports.default = Tokenizer;

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(73)
	  , TAG = __webpack_require__(5)('toStringTag')
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(9)
	  , $export        = __webpack_require__(14)
	  , meta           = __webpack_require__(36)
	  , fails          = __webpack_require__(23)
	  , hide           = __webpack_require__(16)
	  , redefineAll    = __webpack_require__(79)
	  , forOf          = __webpack_require__(44)
	  , anInstance     = __webpack_require__(71)
	  , isObject       = __webpack_require__(17)
	  , setToStringTag = __webpack_require__(48)
	  , dP             = __webpack_require__(10).f
	  , each           = __webpack_require__(72)(0)
	  , DESCRIPTORS    = __webpack_require__(8);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    C = wrapper(function(target, iterable){
	      anInstance(target, C, NAME, '_c');
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        anInstance(this, C, KEY);
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)dP(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17)
	  , document = __webpack_require__(9).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(8) && !__webpack_require__(23)(function(){
	  return Object.defineProperty(__webpack_require__(109)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(73);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(46)
	  , createDesc     = __webpack_require__(47)
	  , toIObject      = __webpack_require__(24)
	  , toPrimitive    = __webpack_require__(85)
	  , has            = __webpack_require__(15)
	  , IE8_DOM_DEFINE = __webpack_require__(110)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(116)
	  , hiddenKeys = __webpack_require__(74).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(15)
	  , toObject    = __webpack_require__(37)
	  , IE_PROTO    = __webpack_require__(81)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(15)
	  , toIObject    = __webpack_require__(24)
	  , arrayIndexOf = __webpack_require__(225)(false)
	  , IE_PROTO     = __webpack_require__(81)('IE_PROTO');

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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(14)
	  , core    = __webpack_require__(3)
	  , fails   = __webpack_require__(23);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(107)
	  , ITERATOR  = __webpack_require__(5)('iterator')
	  , Iterators = __webpack_require__(35);
	module.exports = __webpack_require__(3).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 119 */
/***/ function(module, exports) {

	/*
	  Copyright (C) 2013-2014 Yusuke Suzuki <utatane.tea@gmail.com>
	  Copyright (C) 2014 Ivan Nikulin <ifaaan@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    var ES6Regex, ES5Regex, NON_ASCII_WHITESPACES, IDENTIFIER_START, IDENTIFIER_PART, ch;

	    // See `tools/generate-identifier-regex.js`.
	    ES5Regex = {
	        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierStart:
	        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	        // ECMAScript 5.1/Unicode v7.0.0 NonAsciiIdentifierPart:
	        NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
	    };

	    ES6Regex = {
	        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierStart:
	        NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B2\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDE00-\uDE11\uDE13-\uDE2B\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDE00-\uDE2F\uDE44\uDE80-\uDEAA]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/,
	        // ECMAScript 6/Unicode v7.0.0 NonAsciiIdentifierPart:
	        NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B2\u08E4-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58\u0C59\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D60-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA69D\uA69F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA7AD\uA7B0\uA7B1\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB5F\uAB64\uAB65\uABC0-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2D\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDD0-\uDDDA\uDE00-\uDE11\uDE13-\uDE37\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF01-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF98]|\uD809[\uDC00-\uDC6E]|[\uD80C\uD840-\uD868\uD86A-\uD86C][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
	    };

	    function isDecimalDigit(ch) {
	        return 0x30 <= ch && ch <= 0x39;  // 0..9
	    }

	    function isHexDigit(ch) {
	        return 0x30 <= ch && ch <= 0x39 ||  // 0..9
	            0x61 <= ch && ch <= 0x66 ||     // a..f
	            0x41 <= ch && ch <= 0x46;       // A..F
	    }

	    function isOctalDigit(ch) {
	        return ch >= 0x30 && ch <= 0x37;  // 0..7
	    }

	    // 7.2 White Space

	    NON_ASCII_WHITESPACES = [
	        0x1680, 0x180E,
	        0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A,
	        0x202F, 0x205F,
	        0x3000,
	        0xFEFF
	    ];

	    function isWhiteSpace(ch) {
	        return ch === 0x20 || ch === 0x09 || ch === 0x0B || ch === 0x0C || ch === 0xA0 ||
	            ch >= 0x1680 && NON_ASCII_WHITESPACES.indexOf(ch) >= 0;
	    }

	    // 7.3 Line Terminators

	    function isLineTerminator(ch) {
	        return ch === 0x0A || ch === 0x0D || ch === 0x2028 || ch === 0x2029;
	    }

	    // 7.6 Identifier Names and Identifiers

	    function fromCodePoint(cp) {
	        if (cp <= 0xFFFF) { return String.fromCharCode(cp); }
	        var cu1 = String.fromCharCode(Math.floor((cp - 0x10000) / 0x400) + 0xD800);
	        var cu2 = String.fromCharCode(((cp - 0x10000) % 0x400) + 0xDC00);
	        return cu1 + cu2;
	    }

	    IDENTIFIER_START = new Array(0x80);
	    for(ch = 0; ch < 0x80; ++ch) {
	        IDENTIFIER_START[ch] =
	            ch >= 0x61 && ch <= 0x7A ||  // a..z
	            ch >= 0x41 && ch <= 0x5A ||  // A..Z
	            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
	    }

	    IDENTIFIER_PART = new Array(0x80);
	    for(ch = 0; ch < 0x80; ++ch) {
	        IDENTIFIER_PART[ch] =
	            ch >= 0x61 && ch <= 0x7A ||  // a..z
	            ch >= 0x41 && ch <= 0x5A ||  // A..Z
	            ch >= 0x30 && ch <= 0x39 ||  // 0..9
	            ch === 0x24 || ch === 0x5F;  // $ (dollar) and _ (underscore)
	    }

	    function isIdentifierStartES5(ch) {
	        return ch < 0x80 ? IDENTIFIER_START[ch] : ES5Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
	    }

	    function isIdentifierPartES5(ch) {
	        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES5Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
	    }

	    function isIdentifierStartES6(ch) {
	        return ch < 0x80 ? IDENTIFIER_START[ch] : ES6Regex.NonAsciiIdentifierStart.test(fromCodePoint(ch));
	    }

	    function isIdentifierPartES6(ch) {
	        return ch < 0x80 ? IDENTIFIER_PART[ch] : ES6Regex.NonAsciiIdentifierPart.test(fromCodePoint(ch));
	    }

	    module.exports = {
	        isDecimalDigit: isDecimalDigit,
	        isHexDigit: isHexDigit,
	        isOctalDigit: isOctalDigit,
	        isWhiteSpace: isWhiteSpace,
	        isLineTerminator: isLineTerminator,
	        isIdentifierStartES5: isIdentifierStartES5,
	        isIdentifierPartES5: isIdentifierPartES5,
	        isIdentifierStartES6: isIdentifierStartES6,
	        isIdentifierPartES6: isIdentifierPartES6
	    };
	}());
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(11);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(11);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(92),
	    setCacheAdd = __webpack_require__(347),
	    setCacheHas = __webpack_require__(348);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 124 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 125 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 126 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(132),
	    isKey = __webpack_require__(57),
	    toKey = __webpack_require__(61);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(97);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null &&
	    (hasOwnProperty.call(object, key) ||
	      (typeof object == 'object' && key in object && getPrototype(object) === null));
	}

	module.exports = baseHas;


/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(330);

	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(289),
	    isObject = __webpack_require__(18),
	    isObjectLike = __webpack_require__(25);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(12),
	    stringToPath = __webpack_require__(354);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(138),
	    rest = __webpack_require__(145);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(122),
	    arraySome = __webpack_require__(279);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	var stubArray = __webpack_require__(375);

	/** Built-in value references. */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	function getSymbols(object) {
	  // Coerce `object` to an object to avoid non-object errors in V8.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
	  return getOwnPropertySymbols(Object(object));
	}

	// Fallback for IE < 11.
	if (!getOwnPropertySymbols) {
	  getSymbols = stubArray;
	}

	module.exports = getSymbols;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(268),
	    Map = __webpack_require__(120),
	    Promise = __webpack_require__(270),
	    Set = __webpack_require__(121),
	    WeakMap = __webpack_require__(272),
	    toSource = __webpack_require__(142);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(299),
	    isArguments = __webpack_require__(144),
	    isArray = __webpack_require__(12),
	    isLength = __webpack_require__(63),
	    isString = __webpack_require__(64);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(62),
	    isArrayLike = __webpack_require__(30),
	    isIndex = __webpack_require__(56),
	    isObject = __webpack_require__(18);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 140 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 141 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 142 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(282);

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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(364);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(124),
	    toInteger = __webpack_require__(100);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(300);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	function assembleStyles () {
		var styles = {
			modifiers: {
				reset: [0, 0],
				bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
				dim: [2, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				hidden: [8, 28],
				strikethrough: [9, 29]
			},
			colors: {
				black: [30, 39],
				red: [31, 39],
				green: [32, 39],
				yellow: [33, 39],
				blue: [34, 39],
				magenta: [35, 39],
				cyan: [36, 39],
				white: [37, 39],
				gray: [90, 39]
			},
			bgColors: {
				bgBlack: [40, 49],
				bgRed: [41, 49],
				bgGreen: [42, 49],
				bgYellow: [43, 49],
				bgBlue: [44, 49],
				bgMagenta: [45, 49],
				bgCyan: [46, 49],
				bgWhite: [47, 49]
			}
		};

		// fix humans
		styles.colors.grey = styles.colors.gray;

		Object.keys(styles).forEach(function (groupName) {
			var group = styles[groupName];

			Object.keys(group).forEach(function (styleName) {
				var style = group[styleName];

				styles[styleName] = group[styleName] = {
					open: '\u001b[' + style[0] + 'm',
					close: '\u001b[' + style[1] + 'm'
				};
			});

			Object.defineProperty(styles, groupName, {
				value: group,
				enumerable: false
			});
		});

		return styles;
	}

	Object.defineProperty(module, 'exports', {
		enumerable: true,
		get: assembleStyles
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(147)(module)))

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (rawLines, lineNumber, colNumber) {
	  var opts = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  colNumber = Math.max(colNumber, 0);

	  var highlighted = opts.highlightCode && _chalk2.default.supportsColor;
	  if (highlighted) rawLines = highlight(rawLines);

	  var lines = rawLines.split(NEWLINE);
	  var start = Math.max(lineNumber - 3, 0);
	  var end = Math.min(lines.length, lineNumber + 3);

	  if (!lineNumber && !colNumber) {
	    start = 0;
	    end = lines.length;
	  }

	  var numberMaxWidth = String(end).length;

	  var frame = lines.slice(start, end).map(function (line, index) {
	    var number = start + 1 + index;
	    var paddedNumber = (" " + number).slice(-numberMaxWidth);
	    var gutter = " " + paddedNumber + " | ";
	    if (number === lineNumber) {
	      var markerLine = "";
	      if (colNumber) {
	        var markerSpacing = line.slice(0, colNumber - 1).replace(/[^\t]/g, " ");
	        markerLine = "\n " + gutter.replace(/\d/g, " ") + markerSpacing + "^";
	      }
	      return ">" + gutter + line + markerLine;
	    } else {
	      return " " + gutter + line;
	    }
	  }).join("\n");

	  if (highlighted) {
	    return _chalk2.default.reset(frame);
	  } else {
	    return frame;
	  }
	};

	var _jsTokens = __webpack_require__(266);

	var _jsTokens2 = _interopRequireDefault(_jsTokens);

	var _esutils = __webpack_require__(91);

	var _esutils2 = _interopRequireDefault(_esutils);

	var _chalk = __webpack_require__(207);

	var _chalk2 = _interopRequireDefault(_chalk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Chalk styles for token types.
	 */

	var defs = {
	  string: _chalk2.default.red,
	  punctuator: _chalk2.default.bold,
	  curly: _chalk2.default.green,
	  parens: _chalk2.default.blue.bold,
	  square: _chalk2.default.yellow,
	  keyword: _chalk2.default.cyan,
	  number: _chalk2.default.magenta,
	  regex: _chalk2.default.magenta,
	  comment: _chalk2.default.grey,
	  invalid: _chalk2.default.inverse
	};

	/**
	 * RegExp to test for newlines in terminal.
	 */

	var NEWLINE = /\r\n|[\n\r\u2028\u2029]/;

	/**
	 * Get the type of token, specifying punctuator type.
	 */

	function getTokenType(match) {
	  var token = _jsTokens2.default.matchToToken(match);
	  if (token.type === "name" && _esutils2.default.keyword.isReservedWordES6(token.value)) {
	    return "keyword";
	  }

	  if (token.type === "punctuator") {
	    switch (token.value) {
	      case "{":
	      case "}":
	        return "curly";
	      case "(":
	      case ")":
	        return "parens";
	      case "[":
	      case "]":
	        return "square";
	    }
	  }

	  return token.type;
	}

	/**
	 * Highlight `text`.
	 */

	function highlight(text) {
	  return text.replace(_jsTokens2.default, function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var type = getTokenType(args);
	    var colorize = defs[type];
	    if (colorize) {
	      return args[0].split(NEWLINE).map(function (str) {
	        return colorize(str);
	      }).join("\n");
	    } else {
	      return args[0];
	    }
	  });
	}

	/**
	 * Create a code frame, adding line numbers, code highlighting, and pointing to a given position.
	 */

	module.exports = exports["default"];

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/"use strict";

	exports.__esModule = true;

	exports.default = function (opts) {
	  var visitor = {};

	  visitor.JSXNamespacedName = function (path) {
	    throw path.buildCodeFrameError("Namespace tags are not supported. ReactJSX is not XML.");
	  };

	  visitor.JSXElement = { /*istanbul ignore next*/
	    exit: function exit(path, file) {
	      var callExpr = buildElementCall(path.get("openingElement"), file);

	      callExpr.arguments = callExpr.arguments.concat(path.node.children);

	      if (callExpr.arguments.length >= 3) {
	        callExpr._prettyCall = true;
	      }

	      path.replaceWith(t.inherits(callExpr, path.node));
	    }
	  };

	  return visitor;

	  function convertJSXIdentifier(node, parent) {
	    if (t.isJSXIdentifier(node)) {
	      if (node.name === "this" && t.isReferenced(node, parent)) {
	        return t.thisExpression();
	      } else if ( /*istanbul ignore next*/_esutils2.default.keyword.isIdentifierNameES6(node.name)) {
	        node.type = "Identifier";
	      } else {
	        return t.stringLiteral(node.name);
	      }
	    } else if (t.isJSXMemberExpression(node)) {
	      return t.memberExpression(convertJSXIdentifier(node.object, node), convertJSXIdentifier(node.property, node));
	    }

	    return node;
	  }

	  function convertAttributeValue(node) {
	    if (t.isJSXExpressionContainer(node)) {
	      return node.expression;
	    } else {
	      return node;
	    }
	  }

	  function convertAttribute(node) {
	    var value = convertAttributeValue(node.value || t.booleanLiteral(true));

	    if (t.isStringLiteral(value) && !t.isJSXExpressionContainer(node.value)) {
	      value.value = value.value.replace(/\n\s+/g, " ");
	    }

	    if (t.isValidIdentifier(node.name.name)) {
	      node.name.type = "Identifier";
	    } else {
	      node.name = t.stringLiteral(node.name.name);
	    }

	    return t.inherits(t.objectProperty(node.name, value), node);
	  }

	  function buildElementCall(path, file) {
	    path.parent.children = t.react.buildChildren(path.parent);

	    var tagExpr = convertJSXIdentifier(path.node.name, path.node);
	    var args = [];

	    var tagName = /*istanbul ignore next*/void 0;
	    if (t.isIdentifier(tagExpr)) {
	      tagName = tagExpr.name;
	    } else if (t.isLiteral(tagExpr)) {
	      tagName = tagExpr.value;
	    }

	    var state = {
	      tagExpr: tagExpr,
	      tagName: tagName,
	      args: args
	    };

	    if (opts.pre) {
	      opts.pre(state, file);
	    }

	    var attribs = path.node.attributes;
	    if (attribs.length) {
	      attribs = buildOpeningElementAttributes(attribs, file);
	    } else {
	      attribs = t.nullLiteral();
	    }

	    args.push(attribs);

	    if (opts.post) {
	      opts.post(state, file);
	    }

	    return state.call || t.callExpression(state.callee, args);
	  }

	  /**
	   * The logic for this is quite terse. It's because we need to
	   * support spread elements. We loop over all attributes,
	   * breaking on spreads, we then push a new object containg
	   * all prior attributes to an array for later processing.
	   */

	  function buildOpeningElementAttributes(attribs, file) {
	    var _props = [];
	    var objs = [];

	    function pushProps() {
	      if (!_props.length) return;

	      objs.push(t.objectExpression(_props));
	      _props = [];
	    }

	    while (attribs.length) {
	      var prop = attribs.shift();
	      if (t.isJSXSpreadAttribute(prop)) {
	        pushProps();
	        objs.push(prop.argument);
	      } else {
	        _props.push(convertAttribute(prop));
	      }
	    }

	    pushProps();

	    if (objs.length === 1) {
	      // only one object
	      attribs = objs[0];
	    } else {
	      // looks like we have multiple objects
	      if (!t.isObjectExpression(objs[0])) {
	        objs.unshift(t.objectExpression([]));
	      }

	      // spread it
	      attribs = t.callExpression(file.addHelper("extends"), objs);
	    }

	    return attribs;
	  }
	};

	var /*istanbul ignore next*/_esutils = __webpack_require__(91);

	/*istanbul ignore next*/
	var _esutils2 = _interopRequireDefault(_esutils);

	var /*istanbul ignore next*/_babelTypes = __webpack_require__(2);

	/*istanbul ignore next*/
	var t = _interopRequireWildcard(_babelTypes);

	/*istanbul ignore next*/
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports["default"]; // function called with (state: ElementState) after building attribs

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Insert code to load a module when JSX is detected.
	 * This is supposed to load a module corresponding to the `pragma` option of
	 * the JSX transform.
	 */

	module.exports = function jsxPragmatic (babel) {
	  var
	    t = babel.types,
	    visitor = {};

	  function getPragmaImport (state) {
	    return t.importDeclaration(
	      [t.importSpecifier(
	        t.identifier(state.opts.import),
	        t.identifier(state.opts.export || "default")
	      )],
	      t.stringLiteral(state.opts.module)
	    );
	  }
	  // getPragmaImport

	  visitor = {
	    Program: {
	      exit: function (path, state) {
	        if (! state.get('jsxDetected')) return;

	        // Apparently it's now safe to do this even if Program begins with
	        // directives.
	        path.unshiftContainer('body', getPragmaImport(state));
	      },
	      // exit
	    },
	    // Program

	    // It seems pretty hokey that this'll work even if JSX has already been
	    // transformed, but apparently that's the basis for the whole plugin
	    // architecture for babel@6, so I'm rolling with it and maybe it'll make
	    // more sense to me once I understand it better.
	    JSXElement: function (path, state) {
	      state.set('jsxDetected', true);
	    },
	    // JSXElement
	  };

	  return {
	    pre: function () {
	      if (! (this.opts.module && this.opts.import)) {
	        throw new Error("babel-plugin-jsx-pragmatic: You must specify `module` and `import`");
	      }
	    },
	    inherits: __webpack_require__(67),
	    visitor: visitor,
	  };
	};
	// jsxPragmatic


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.default = function ( /*istanbul ignore next*/_ref) {
	  /*istanbul ignore next*/var t = _ref.types;

	  var JSX_ANNOTATION_REGEX = /\*?\s*@jsx\s+([^\s]+)/;

	  var visitor = __webpack_require__(150)({ /*istanbul ignore next*/
	    pre: function pre(state) {
	      var tagName = state.tagName;
	      var args = state.args;
	      if (t.react.isCompatTag(tagName)) {
	        args.push(t.stringLiteral(tagName));
	      } else {
	        args.push(state.tagExpr);
	      }
	    },
	    /*istanbul ignore next*/post: function post(state, pass) {
	      state.callee = pass.get("jsxIdentifier")();
	    }
	  });

	  visitor.Program = function (path, state) {
	    /*istanbul ignore next*/var file = state.file;

	    var id = state.opts.pragma || "React.createElement";

	    for ( /*istanbul ignore next*/var _iterator = file.ast.comments, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      /*istanbul ignore next*/
	      var _ref2;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref2 = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref2 = _i.value;
	      }

	      var comment = _ref2;

	      var matches = JSX_ANNOTATION_REGEX.exec(comment.value);
	      if (matches) {
	        id = matches[1];
	        if (id === "React.DOM") {
	          throw file.buildCodeFrameError(comment, "The @jsx React.DOM pragma has been deprecated as of React 0.12");
	        } else {
	          break;
	        }
	      }
	    }

	    state.set("jsxIdentifier", function () /*istanbul ignore next*/{
	      return id.split(".").map(function (name) /*istanbul ignore next*/{
	        return t.identifier(name);
	      }).reduce(function (object, property) /*istanbul ignore next*/{
	        return t.memberExpression(object, property);
	      });
	    });
	  };

	  return {
	    inherits: __webpack_require__(67),
	    visitor: visitor
	  };
	};

	/*istanbul ignore next*/
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports["default"]; /* eslint max-len: 0 */

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(210), __esModule: true };

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(211), __esModule: true };

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(213), __esModule: true };

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(214), __esModule: true };

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(215), __esModule: true };

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(217), __esModule: true };

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(219), __esModule: true };

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(218), __esModule: true };

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(220), __esModule: true };

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(221), __esModule: true };

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(158);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(31);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(21);

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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(21);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _path2 = __webpack_require__(22);

	var _path3 = _interopRequireDefault(_path2);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var testing = process.env.NODE_ENV === "test";

	var TraversalContext = function () {
	  function TraversalContext(scope, opts, state, parentPath) {
	    (0, _classCallCheck3.default)(this, TraversalContext);
	    this.queue = null;

	    this.parentPath = parentPath;
	    this.scope = scope;
	    this.state = state;
	    this.opts = opts;
	  }

	  /**
	   * This method does a simple check to determine whether or not we really need to attempt
	   * visit a node. This will prevent us from constructing a NodePath.
	   */

	  TraversalContext.prototype.shouldVisit = function shouldVisit(node) {
	    var opts = this.opts;
	    if (opts.enter || opts.exit) return true;

	    // check if we have a visitor for this node
	    if (opts[node.type]) return true;

	    // check if we're going to traverse into this node
	    var keys = t.VISITOR_KEYS[node.type];
	    if (!keys || !keys.length) return false;

	    // we need to traverse into this node so ensure that it has children to traverse into!
	    for (var _iterator = keys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var key = _ref;

	      if (node[key]) return true;
	    }

	    return false;
	  };

	  TraversalContext.prototype.create = function create(node, obj, key, listKey) {
	    return _path3.default.get({
	      parentPath: this.parentPath,
	      parent: node,
	      container: obj,
	      key: key,
	      listKey: listKey
	    });
	  };

	  TraversalContext.prototype.maybeQueue = function maybeQueue(path, notPriority) {
	    if (this.trap) {
	      throw new Error("Infinite cycle detected");
	    }

	    if (this.queue) {
	      if (notPriority) {
	        this.queue.push(path);
	      } else {
	        this.priorityQueue.push(path);
	      }
	    }
	  };

	  TraversalContext.prototype.visitMultiple = function visitMultiple(container, parent, listKey) {
	    // nothing to traverse!
	    if (container.length === 0) return false;

	    var queue = [];

	    // build up initial queue
	    for (var key = 0; key < container.length; key++) {
	      var node = container[key];
	      if (node && this.shouldVisit(node)) {
	        queue.push(this.create(parent, container, key, listKey));
	      }
	    }

	    return this.visitQueue(queue);
	  };

	  TraversalContext.prototype.visitSingle = function visitSingle(node, key) {
	    if (this.shouldVisit(node[key])) {
	      return this.visitQueue([this.create(node, node, key)]);
	    } else {
	      return false;
	    }
	  };

	  TraversalContext.prototype.visitQueue = function visitQueue(queue) {
	    // set queue
	    this.queue = queue;
	    this.priorityQueue = [];

	    var visited = [];
	    var stop = false;

	    // visit the queue
	    for (var _iterator2 = queue, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var path = _ref2;

	      path.resync();

	      if (path.contexts.length === 0 || path.contexts[path.contexts.length - 1] !== this) {
	        // The context might already have been pushed when this path was inserted and queued.
	        // If we always re-pushed here, we could get duplicates and risk leaving contexts
	        // on the stack after the traversal has completed, which could break things.
	        path.pushContext(this);
	      }

	      // this path no longer belongs to the tree
	      if (path.key === null) continue;

	      if (testing && queue.length >= 1000) {
	        this.trap = true;
	      }

	      // ensure we don't visit the same node twice
	      if (visited.indexOf(path.node) >= 0) continue;
	      visited.push(path.node);

	      if (path.visit()) {
	        stop = true;
	        break;
	      }

	      if (this.priorityQueue.length) {
	        stop = this.visitQueue(this.priorityQueue);
	        this.priorityQueue = [];
	        this.queue = queue;
	        if (stop) break;
	      }
	    }

	    // clear queue
	    for (var _iterator3 = queue, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var _path = _ref3;

	      _path.popContext();
	    }

	    // clear queue
	    this.queue = null;

	    return stop;
	  };

	  TraversalContext.prototype.visit = function visit(node, key) {
	    var nodes = node[key];
	    if (!nodes) return false;

	    if (Array.isArray(nodes)) {
	      return this.visitMultiple(nodes, node, key);
	    } else {
	      return this.visitSingle(node, key);
	    }
	  };

	  return TraversalContext;
	}();

	exports.default = TraversalContext;
	module.exports = exports["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.findParent = findParent;
	exports.find = find;
	exports.getFunctionParent = getFunctionParent;
	exports.getStatementParent = getStatementParent;
	exports.getEarliestCommonAncestorFrom = getEarliestCommonAncestorFrom;
	exports.getDeepestCommonAncestorFrom = getDeepestCommonAncestorFrom;
	exports.getAncestry = getAncestry;
	exports.inType = inType;
	exports.inShadow = inShadow;

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	var _index = __webpack_require__(22);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Call the provided `callback` with the `NodePath`s of all the parents.
	 * When the `callback` returns a truthy value, we return that node path.
	 */

	// This file contains that retrieve or validate anything related to the current paths ancestry.

	function findParent(callback) {
	  var path = this;
	  while (path = path.parentPath) {
	    if (callback(path)) return path;
	  }
	  return null;
	}

	/**
	 * Description
	 */

	function find(callback) {
	  var path = this;
	  do {
	    if (callback(path)) return path;
	  } while (path = path.parentPath);
	  return null;
	}

	/**
	 * Get the parent function of the current path.
	 */

	function getFunctionParent() {
	  return this.findParent(function (path) {
	    return path.isFunction() || path.isProgram();
	  });
	}

	/**
	 * Walk up the tree until we hit a parent node path in a list.
	 */

	function getStatementParent() {
	  var path = this;
	  do {
	    if (Array.isArray(path.container)) {
	      return path;
	    }
	  } while (path = path.parentPath);
	}

	/**
	 * Get the deepest common ancestor and then from it, get the earliest relationship path
	 * to that ancestor.
	 *
	 * Earliest is defined as being "before" all the other nodes in terms of list container
	 * position and visiting key.
	 */

	function getEarliestCommonAncestorFrom(paths) {
	  return this.getDeepestCommonAncestorFrom(paths, function (deepest, i, ancestries) {
	    var earliest = void 0;
	    var keys = t.VISITOR_KEYS[deepest.type];

	    for (var _iterator = ancestries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var ancestry = _ref;

	      var path = ancestry[i + 1];

	      // first path
	      if (!earliest) {
	        earliest = path;
	        continue;
	      }

	      // handle containers
	      if (path.listKey && earliest.listKey === path.listKey) {
	        // we're in the same container so check if we're earlier
	        if (path.key < earliest.key) {
	          earliest = path;
	          continue;
	        }
	      }

	      // handle keys
	      var earliestKeyIndex = keys.indexOf(earliest.parentKey);
	      var currentKeyIndex = keys.indexOf(path.parentKey);
	      if (earliestKeyIndex > currentKeyIndex) {
	        // key appears before so it's earlier
	        earliest = path;
	      }
	    }

	    return earliest;
	  });
	}

	/**
	 * Get the earliest path in the tree where the provided `paths` intersect.
	 *
	 * TODO: Possible optimisation target.
	 */

	function getDeepestCommonAncestorFrom(paths, filter) {
	  var _this = this;

	  if (!paths.length) {
	    return this;
	  }

	  if (paths.length === 1) {
	    return paths[0];
	  }

	  // minimum depth of the tree so we know the highest node
	  var minDepth = Infinity;

	  // last common ancestor
	  var lastCommonIndex = void 0,
	      lastCommon = void 0;

	  // get the ancestors of the path, breaking when the parent exceeds ourselves
	  var ancestries = paths.map(function (path) {
	    var ancestry = [];

	    do {
	      ancestry.unshift(path);
	    } while ((path = path.parentPath) && path !== _this);

	    // save min depth to avoid going too far in
	    if (ancestry.length < minDepth) {
	      minDepth = ancestry.length;
	    }

	    return ancestry;
	  });

	  // get the first ancestry so we have a seed to assess all other ancestries with
	  var first = ancestries[0];

	  // check ancestor equality
	  depthLoop: for (var i = 0; i < minDepth; i++) {
	    var shouldMatch = first[i];

	    for (var _iterator2 = ancestries, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var ancestry = _ref2;

	      if (ancestry[i] !== shouldMatch) {
	        // we've hit a snag
	        break depthLoop;
	      }
	    }

	    // next iteration may break so store these so they can be returned
	    lastCommonIndex = i;
	    lastCommon = shouldMatch;
	  }

	  if (lastCommon) {
	    if (filter) {
	      return filter(lastCommon, lastCommonIndex, ancestries);
	    } else {
	      return lastCommon;
	    }
	  } else {
	    throw new Error("Couldn't find intersection");
	  }
	}

	/**
	 * Build an array of node paths containing the entire ancestry of the current node path.
	 *
	 * NOTE: The current node path is included in this.
	 */

	function getAncestry() {
	  var path = this;
	  var paths = [];
	  do {
	    paths.push(path);
	  } while (path = path.parentPath);
	  return paths;
	}

	function inType() {
	  var path = this;
	  while (path) {
	    for (var _iterator3 = arguments, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var type = _ref3;

	      if (path.node.type === type) return true;
	    }
	    path = path.parentPath;
	  }

	  return false;
	}

	/**
	 * Checks whether the binding for 'key' is a local binding in its current function context.
	 *
	 * Checks if the current path either is, or has a direct parent function that is, inside
	 * of a function that is marked for shadowing of a binding matching 'key'. Also returns
	 * the parent path if the parent path is an arrow, since arrow functions pass through
	 * binding values to their parent, meaning they have no local bindings.
	 *
	 * Shadowing means that when the given binding is transformed, it will read the binding
	 * value from the container containing the shadow function, rather than from inside the
	 * shadow function.
	 *
	 * Function shadowing is acheieved by adding a "shadow" property on "FunctionExpression"
	 * and "FunctionDeclaration" node types.
	 *
	 * Node's "shadow" props have the following behavior:
	 *
	 * - Boolean true will cause the function to shadow both "this" and "arguments".
	 * - {this: false} Shadows "arguments" but not "this".
	 * - {arguments: false} Shadows "this" but not "arguments".
	 *
	 * Separately, individual identifiers can be flagged with two flags:
	 *
	 * - _forceShadow - If truthy, this specific identifier will be bound in the closest
	 *    Function that is not flagged "shadow", or the Program.
	 * - _shadowedFunctionLiteral - When set to a NodePath, this specific identifier will be bound
	 *    to this NodePath/Node or the Program. If this path is not found relative to the
	 *    starting location path, the closest function will be used.
	 *
	 * Please Note, these flags are for private internal use only and should be avoided.
	 * Only "shadow" is a public property that other transforms may manipulate.
	 */

	function inShadow(key) {
	  var parentFn = this.isFunction() ? this : this.findParent(function (p) {
	    return p.isFunction();
	  });
	  if (!parentFn) return;

	  if (parentFn.isFunctionExpression() || parentFn.isFunctionDeclaration()) {
	    var shadow = parentFn.node.shadow;

	    // this is because sometimes we may have a `shadow` value of:
	    //
	    //   { this: false }
	    //
	    // we need to catch this case if `inShadow` has been passed a `key`
	    if (shadow && (!key || shadow[key] !== false)) {
	      return parentFn;
	    }
	  } else if (parentFn.isArrowFunctionExpression()) {
	    return parentFn;
	  }

	  // normal function, we've found our function context
	  return null;
	}

/***/ },
/* 167 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.shareCommentsWithSiblings = shareCommentsWithSiblings;
	exports.addComment = addComment;
	exports.addComments = addComments;
	// This file contains methods responsible for dealing with comments.

	/**
	 * Share comments amongst siblings.
	 */

	function shareCommentsWithSiblings() {
	  var node = this.node;
	  if (!node) return;

	  var trailing = node.trailingComments;
	  var leading = node.leadingComments;
	  if (!trailing && !leading) return;

	  var prev = this.getSibling(this.key - 1);
	  var next = this.getSibling(this.key + 1);

	  if (!prev.node) prev = next;
	  if (!next.node) next = prev;

	  prev.addComments("trailing", leading);
	  next.addComments("leading", trailing);
	}

	function addComment(type, content, line) {
	  this.addComments(type, [{
	    type: line ? "CommentLine" : "CommentBlock",
	    value: content
	  }]);
	}

	/**
	 * Give node `comments` of the specified `type`.
	 */

	function addComments(type, comments) {
	  if (!comments) return;

	  var node = this.node;
	  if (!node) return;

	  var key = type + "Comments";

	  if (node[key]) {
	    node[key] = node[key].concat(comments);
	  } else {
	    node[key] = comments;
	  }
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.call = call;
	exports._call = _call;
	exports.isBlacklisted = isBlacklisted;
	exports.visit = visit;
	exports.skip = skip;
	exports.skipKey = skipKey;
	exports.stop = stop;
	exports.setScope = setScope;
	exports.setContext = setContext;
	exports.resync = resync;
	exports._resyncParent = _resyncParent;
	exports._resyncKey = _resyncKey;
	exports._resyncList = _resyncList;
	exports._resyncRemoved = _resyncRemoved;
	exports.popContext = popContext;
	exports.pushContext = pushContext;
	exports.setup = setup;
	exports.setKey = setKey;
	exports.requeue = requeue;
	exports._getQueueContexts = _getQueueContexts;

	var _index = __webpack_require__(26);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function call(key) {
	  var opts = this.opts;

	  this.debug(function () {
	    return key;
	  });

	  if (this.node) {
	    if (this._call(opts[key])) return true;
	  }

	  if (this.node) {
	    return this._call(opts[this.node.type] && opts[this.node.type][key]);
	  }

	  return false;
	} // This file contains methods responsible for maintaining a TraversalContext.

	function _call(fns) {
	  if (!fns) return false;

	  for (var _iterator = fns, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var fn = _ref;

	    if (!fn) continue;

	    var node = this.node;
	    if (!node) return true;

	    var ret = fn.call(this.state, this, this.state);
	    if (ret) throw new Error("Unexpected return value from visitor method " + fn);

	    // node has been replaced, it will have been requeued
	    if (this.node !== node) return true;

	    if (this.shouldStop || this.shouldSkip || this.removed) return true;
	  }

	  return false;
	}

	function isBlacklisted() {
	  var blacklist = this.opts.blacklist;
	  return blacklist && blacklist.indexOf(this.node.type) > -1;
	}

	function visit() {
	  if (!this.node) {
	    return false;
	  }

	  if (this.isBlacklisted()) {
	    return false;
	  }

	  if (this.opts.shouldSkip && this.opts.shouldSkip(this)) {
	    return false;
	  }

	  if (this.call("enter") || this.shouldSkip) {
	    this.debug(function () {
	      return "Skip...";
	    });
	    return this.shouldStop;
	  }

	  this.debug(function () {
	    return "Recursing into...";
	  });
	  _index2.default.node(this.node, this.opts, this.scope, this.state, this, this.skipKeys);

	  this.call("exit");

	  return this.shouldStop;
	}

	function skip() {
	  this.shouldSkip = true;
	}

	function skipKey(key) {
	  this.skipKeys[key] = true;
	}

	function stop() {
	  this.shouldStop = true;
	  this.shouldSkip = true;
	}

	function setScope() {
	  if (this.opts && this.opts.noScope) return;

	  var target = this.context && this.context.scope;

	  if (!target) {
	    var path = this.parentPath;
	    while (path && !target) {
	      if (path.opts && path.opts.noScope) return;

	      target = path.scope;
	      path = path.parentPath;
	    }
	  }

	  this.scope = this.getScope(target);
	  if (this.scope) this.scope.init();
	}

	function setContext(context) {
	  this.shouldSkip = false;
	  this.shouldStop = false;
	  this.removed = false;
	  this.skipKeys = {};

	  if (context) {
	    this.context = context;
	    this.state = context.state;
	    this.opts = context.opts;
	  }

	  this.setScope();

	  return this;
	}

	/**
	 * Here we resync the node paths `key` and `container`. If they've changed according
	 * to what we have stored internally then we attempt to resync by crawling and looking
	 * for the new values.
	 */

	function resync() {
	  if (this.removed) return;

	  this._resyncParent();
	  this._resyncList();
	  this._resyncKey();
	  //this._resyncRemoved();
	}

	function _resyncParent() {
	  if (this.parentPath) {
	    this.parent = this.parentPath.node;
	  }
	}

	function _resyncKey() {
	  if (!this.container) return;

	  if (this.node === this.container[this.key]) return;

	  // grrr, path key is out of sync. this is likely due to a modification to the AST
	  // not done through our path APIs

	  if (Array.isArray(this.container)) {
	    for (var i = 0; i < this.container.length; i++) {
	      if (this.container[i] === this.node) {
	        return this.setKey(i);
	      }
	    }
	  } else {
	    for (var key in this.container) {
	      if (this.container[key] === this.node) {
	        return this.setKey(key);
	      }
	    }
	  }

	  // ¯\_(ツ)_/¯ who knows where it's gone lol
	  this.key = null;
	}

	function _resyncList() {
	  if (!this.parent || !this.inList) return;

	  var newContainer = this.parent[this.listKey];
	  if (this.container === newContainer) return;

	  // container is out of sync. this is likely the result of it being reassigned
	  this.container = newContainer || null;
	}

	function _resyncRemoved() {
	  if (this.key == null || !this.container || this.container[this.key] !== this.node) {
	    this._markRemoved();
	  }
	}

	function popContext() {
	  this.contexts.pop();
	  this.setContext(this.contexts[this.contexts.length - 1]);
	}

	function pushContext(context) {
	  this.contexts.push(context);
	  this.setContext(context);
	}

	function setup(parentPath, container, listKey, key) {
	  this.inList = !!listKey;
	  this.listKey = listKey;
	  this.parentKey = listKey || key;
	  this.container = container;

	  this.parentPath = parentPath || this.parentPath;
	  this.setKey(key);
	}

	function setKey(key) {
	  this.key = key;
	  this.node = this.container[this.key];
	  this.type = this.node && this.node.type;
	}

	function requeue() {
	  var pathToQueue = arguments.length <= 0 || arguments[0] === undefined ? this : arguments[0];

	  if (pathToQueue.removed) return;

	  // TODO(loganfsmyth): This should be switched back to queue in parent contexts
	  // automatically once T2892 and T7160 have been resolved. See T7166.
	  // let contexts = this._getQueueContexts();
	  var contexts = this.contexts;

	  for (var _iterator2 = contexts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	    var _ref2;

	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref2 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref2 = _i2.value;
	    }

	    var context = _ref2;

	    context.maybeQueue(pathToQueue);
	  }
	}

	function _getQueueContexts() {
	  var path = this;
	  var contexts = this.contexts;
	  while (!contexts.length) {
	    path = path.parentPath;
	    contexts = path.contexts;
	  }
	  return contexts;
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.toComputedKey = toComputedKey;
	exports.ensureBlock = ensureBlock;
	exports.arrowFunctionToShadowed = arrowFunctionToShadowed;

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function toComputedKey() {
	  var node = this.node;

	  var key = void 0;
	  if (this.isMemberExpression()) {
	    key = node.property;
	  } else if (this.isProperty() || this.isMethod()) {
	    key = node.key;
	  } else {
	    throw new ReferenceError("todo");
	  }

	  if (!node.computed) {
	    if (t.isIdentifier(key)) key = t.stringLiteral(key.name);
	  }

	  return key;
	} // This file contains methods that convert the path node into another node or some other type of data.

	function ensureBlock() {
	  return t.ensureBlock(this.node);
	}

	function arrowFunctionToShadowed() {
	  // todo: maybe error
	  if (!this.isArrowFunctionExpression()) return;

	  this.ensureBlock();

	  var node = this.node;

	  node.expression = false;
	  node.type = "FunctionExpression";
	  node.shadow = node.shadow || true;
	}

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(21);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _map = __webpack_require__(153);

	var _map2 = _interopRequireDefault(_map);

	exports.evaluateTruthy = evaluateTruthy;
	exports.evaluate = evaluate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// This file contains Babels metainterpreter that can evaluate static code.

	/* eslint eqeqeq: 0 */

	var VALID_CALLEES = ["String", "Number", "Math"]; /* eslint indent: 0 */
	/* eslint max-len: 0 */

	var INVALID_METHODS = ["random"];

	/**
	 * Walk the input `node` and statically evaluate if it's truthy.
	 *
	 * Returning `true` when we're sure that the expression will evaluate to a
	 * truthy value, `false` if we're sure that it will evaluate to a falsy
	 * value and `undefined` if we aren't sure. Because of this please do not
	 * rely on coercion when using this method and check with === if it's false.
	 *
	 * For example do:
	 *
	 *   if (t.evaluateTruthy(node) === false) falsyLogic();
	 *
	 * **AND NOT**
	 *
	 *   if (!t.evaluateTruthy(node)) falsyLogic();
	 *
	 */

	function evaluateTruthy() {
	  var res = this.evaluate();
	  if (res.confident) return !!res.value;
	}

	/**
	 * Walk the input `node` and statically evaluate it.
	 *
	 * Returns an object in the form `{ confident, value }`. `confident` indicates
	 * whether or not we had to drop out of evaluating the expression because of
	 * hitting an unknown node that we couldn't confidently find the value of.
	 *
	 * Example:
	 *
	 *   t.evaluate(parse("5 + 5")) // { confident: true, value: 10 }
	 *   t.evaluate(parse("!true")) // { confident: true, value: false }
	 *   t.evaluate(parse("foo + foo")) // { confident: false, value: undefined }
	 *
	 */

	function evaluate() {
	  var confident = true;
	  var deoptPath = void 0;
	  var seen = new _map2.default();

	  function deopt(path) {
	    if (!confident) return;
	    deoptPath = path;
	    confident = false;
	  }

	  var value = evaluate(this);
	  if (!confident) value = undefined;
	  return {
	    confident: confident,
	    deopt: deoptPath,
	    value: value
	  };

	  // we wrap the _evaluate method so we can track `seen` nodes, we push an item
	  // to the map before we actually evaluate it so we can deopt on self recursive
	  // nodes such as:
	  //
	  //   var g = a ? 1 : 2,
	  //       a = g * this.foo
	  //
	  function evaluate(path) {
	    var node = path.node;


	    if (seen.has(node)) {
	      var existing = seen.get(node);
	      if (existing.resolved) {
	        return existing.value;
	      } else {
	        deopt(path);
	        return;
	      }
	    } else {
	      var item = { resolved: false };
	      seen.set(node, item);

	      var val = _evaluate(path);
	      item.resolved = true;
	      item.value = value;
	      return val;
	    }
	  }

	  function _evaluate(path) {
	    if (!confident) return;

	    var node = path.node;


	    if (path.isSequenceExpression()) {
	      var exprs = path.get("expressions");
	      return evaluate(exprs[exprs.length - 1]);
	    }

	    if (path.isStringLiteral() || path.isNumericLiteral() || path.isBooleanLiteral()) {
	      return node.value;
	    }

	    if (path.isNullLiteral()) {
	      return null;
	    }

	    if (path.isTemplateLiteral()) {
	      var str = "";

	      var i = 0;
	      var _exprs = path.get("expressions");

	      for (var _iterator = node.quasis, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var elem = _ref;

	        // not confident, evaluated an expression we don't like
	        if (!confident) break;

	        // add on cooked element
	        str += elem.value.cooked;

	        // add on interpolated expression if it's present
	        var expr = _exprs[i++];
	        if (expr) str += String(evaluate(expr));
	      }

	      if (!confident) return;
	      return str;
	    }

	    if (path.isConditionalExpression()) {
	      var testResult = evaluate(path.get("test"));
	      if (!confident) return;
	      if (testResult) {
	        return evaluate(path.get("consequent"));
	      } else {
	        return evaluate(path.get("alternate"));
	      }
	    }

	    if (path.isExpressionWrapper()) {
	      // TypeCastExpression, ExpressionStatement etc
	      return evaluate(path.get("expression"));
	    }

	    // "foo".length
	    if (path.isMemberExpression() && !path.parentPath.isCallExpression({ callee: node })) {
	      var property = path.get("property");
	      var object = path.get("object");

	      if (object.isLiteral() && property.isIdentifier()) {
	        var _value = object.node.value;
	        var type = typeof _value === "undefined" ? "undefined" : (0, _typeof3.default)(_value);
	        if (type === "number" || type === "string") {
	          return _value[property.node.name];
	        }
	      }
	    }

	    if (path.isReferencedIdentifier()) {
	      var binding = path.scope.getBinding(node.name);
	      if (binding && binding.hasValue) {
	        return binding.value;
	      } else {
	        if (node.name === "undefined") {
	          return undefined;
	        } else if (node.name === "Infinity") {
	          return Infinity;
	        } else if (node.name === "NaN") {
	          return NaN;
	        }

	        var resolved = path.resolve();
	        if (resolved === path) {
	          return deopt(path);
	        } else {
	          return evaluate(resolved);
	        }
	      }
	    }

	    if (path.isUnaryExpression({ prefix: true })) {
	      if (node.operator === "void") {
	        // we don't need to evaluate the argument to know what this will return
	        return undefined;
	      }

	      var argument = path.get("argument");
	      if (node.operator === "typeof" && (argument.isFunction() || argument.isClass())) {
	        return "function";
	      }

	      var arg = evaluate(argument);
	      if (!confident) return;
	      switch (node.operator) {
	        case "!":
	          return !arg;
	        case "+":
	          return +arg;
	        case "-":
	          return -arg;
	        case "~":
	          return ~arg;
	        case "typeof":
	          return typeof arg === "undefined" ? "undefined" : (0, _typeof3.default)(arg);
	      }
	    }

	    if (path.isArrayExpression()) {
	      var arr = [];
	      var elems = path.get("elements");
	      for (var _iterator2 = elems, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	        var _ref2;

	        if (_isArray2) {
	          if (_i2 >= _iterator2.length) break;
	          _ref2 = _iterator2[_i2++];
	        } else {
	          _i2 = _iterator2.next();
	          if (_i2.done) break;
	          _ref2 = _i2.value;
	        }

	        var _elem = _ref2;

	        _elem = _elem.evaluate();

	        if (_elem.confident) {
	          arr.push(_elem.value);
	        } else {
	          return deopt(_elem);
	        }
	      }
	      return arr;
	    }

	    if (path.isObjectExpression()) {
	      // todo
	    }

	    if (path.isLogicalExpression()) {
	      // If we are confident that one side of an && is false, or the left
	      // side of an || is true, we can be confident about the entire expression
	      var wasConfident = confident;
	      var left = evaluate(path.get("left"));
	      var leftConfident = confident;
	      confident = wasConfident;
	      var right = evaluate(path.get("right"));
	      var rightConfident = confident;
	      confident = leftConfident && rightConfident;

	      switch (node.operator) {
	        case "||":
	          // TODO consider having a "truthy type" that doesn't bail on
	          // left uncertainity but can still evaluate to truthy.
	          if (left && leftConfident) {
	            confident = true;
	            return left;
	          }

	          if (!confident) return;

	          return left || right;
	        case "&&":
	          if (!left && leftConfident || !right && rightConfident) {
	            confident = true;
	          }

	          if (!confident) return;

	          return left && right;
	      }
	    }

	    if (path.isBinaryExpression()) {
	      var _left = evaluate(path.get("left"));
	      if (!confident) return;
	      var _right = evaluate(path.get("right"));
	      if (!confident) return;

	      switch (node.operator) {
	        case "-":
	          return _left - _right;
	        case "+":
	          return _left + _right;
	        case "/":
	          return _left / _right;
	        case "*":
	          return _left * _right;
	        case "%":
	          return _left % _right;
	        case "**":
	          return Math.pow(_left, _right);
	        case "<":
	          return _left < _right;
	        case ">":
	          return _left > _right;
	        case "<=":
	          return _left <= _right;
	        case ">=":
	          return _left >= _right;
	        case "==":
	          return _left == _right;
	        case "!=":
	          return _left != _right;
	        case "===":
	          return _left === _right;
	        case "!==":
	          return _left !== _right;
	        case "|":
	          return _left | _right;
	        case "&":
	          return _left & _right;
	        case "^":
	          return _left ^ _right;
	        case "<<":
	          return _left << _right;
	        case ">>":
	          return _left >> _right;
	        case ">>>":
	          return _left >>> _right;
	      }
	    }

	    if (path.isCallExpression()) {
	      var callee = path.get("callee");
	      var context = void 0;
	      var func = void 0;

	      // Number(1);
	      if (callee.isIdentifier() && !path.scope.getBinding(callee.node.name, true) && VALID_CALLEES.indexOf(callee.node.name) >= 0) {
	        func = global[node.callee.name];
	      }

	      if (callee.isMemberExpression()) {
	        var _object = callee.get("object");
	        var _property = callee.get("property");

	        // Math.min(1, 2)
	        if (_object.isIdentifier() && _property.isIdentifier() && VALID_CALLEES.indexOf(_object.node.name) >= 0 && INVALID_METHODS.indexOf(_property.node.name) < 0) {
	          context = global[_object.node.name];
	          func = context[_property.node.name];
	        }

	        // "abc".charCodeAt(4)
	        if (_object.isLiteral() && _property.isIdentifier()) {
	          var _type = (0, _typeof3.default)(_object.node.value);
	          if (_type === "string" || _type === "number") {
	            context = _object.node.value;
	            func = context[_property.node.name];
	          }
	        }
	      }

	      if (func) {
	        var args = path.get("arguments").map(evaluate);
	        if (!confident) return;

	        return func.apply(context, args);
	      }
	    }

	    deopt(path);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.getStatementParent = getStatementParent;
	exports.getOpposite = getOpposite;
	exports.getCompletionRecords = getCompletionRecords;
	exports.getSibling = getSibling;
	exports.get = get;
	exports._getKey = _getKey;
	exports._getPattern = _getPattern;
	exports.getBindingIdentifiers = getBindingIdentifiers;
	exports.getOuterBindingIdentifiers = getOuterBindingIdentifiers;

	var _index = __webpack_require__(22);

	var _index2 = _interopRequireDefault(_index);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getStatementParent() {
	  var path = this;

	  do {
	    if (!path.parentPath || Array.isArray(path.container) && path.isStatement()) {
	      break;
	    } else {
	      path = path.parentPath;
	    }
	  } while (path);

	  if (path && (path.isProgram() || path.isFile())) {
	    throw new Error("File/Program node, we can't possibly find a statement parent to this");
	  }

	  return path;
	} // This file contains methods responsible for dealing with/retrieving children or siblings.

	function getOpposite() {
	  if (this.key === "left") {
	    return this.getSibling("right");
	  } else if (this.key === "right") {
	    return this.getSibling("left");
	  }
	}

	function getCompletionRecords() {
	  var paths = [];

	  var add = function add(path) {
	    if (path) paths = paths.concat(path.getCompletionRecords());
	  };

	  if (this.isIfStatement()) {
	    add(this.get("consequent"));
	    add(this.get("alternate"));
	  } else if (this.isDoExpression() || this.isFor() || this.isWhile()) {
	    add(this.get("body"));
	  } else if (this.isProgram() || this.isBlockStatement()) {
	    add(this.get("body").pop());
	  } else if (this.isFunction()) {
	    return this.get("body").getCompletionRecords();
	  } else if (this.isTryStatement()) {
	    add(this.get("block"));
	    add(this.get("handler"));
	    add(this.get("finalizer"));
	  } else {
	    paths.push(this);
	  }

	  return paths;
	}

	function getSibling(key) {
	  return _index2.default.get({
	    parentPath: this.parentPath,
	    parent: this.parent,
	    container: this.container,
	    listKey: this.listKey,
	    key: key
	  });
	}

	function get(key, context) {
	  if (context === true) context = this.context;
	  var parts = key.split(".");
	  if (parts.length === 1) {
	    // "foo"
	    return this._getKey(key, context);
	  } else {
	    // "foo.bar"
	    return this._getPattern(parts, context);
	  }
	}

	function _getKey(key, context) {
	  var _this = this;

	  var node = this.node;
	  var container = node[key];

	  if (Array.isArray(container)) {
	    // requested a container so give them all the paths
	    return container.map(function (_, i) {
	      return _index2.default.get({
	        listKey: key,
	        parentPath: _this,
	        parent: node,
	        container: container,
	        key: i
	      }).setContext(context);
	    });
	  } else {
	    return _index2.default.get({
	      parentPath: this,
	      parent: node,
	      container: node,
	      key: key
	    }).setContext(context);
	  }
	}

	function _getPattern(parts, context) {
	  var path = this;
	  for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var part = _ref;

	    if (part === ".") {
	      path = path.parentPath;
	    } else {
	      if (Array.isArray(path)) {
	        path = path[part];
	      } else {
	        path = path.get(part, context);
	      }
	    }
	  }
	  return path;
	}

	function getBindingIdentifiers(duplicates) {
	  return t.getBindingIdentifiers(this.node, duplicates);
	}

	function getOuterBindingIdentifiers(duplicates) {
	  return t.getOuterBindingIdentifiers(this.node, duplicates);
	}

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.getTypeAnnotation = getTypeAnnotation;
	exports._getTypeAnnotation = _getTypeAnnotation;
	exports.isBaseType = isBaseType;
	exports.couldBeBaseType = couldBeBaseType;
	exports.baseTypeStrictlyMatches = baseTypeStrictlyMatches;
	exports.isGenericType = isGenericType;

	var _inferers = __webpack_require__(174);

	var inferers = _interopRequireWildcard(_inferers);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Infer the type of the current `NodePath`.
	 */

	function getTypeAnnotation() {
	  if (this.typeAnnotation) return this.typeAnnotation;

	  var type = this._getTypeAnnotation() || t.anyTypeAnnotation();
	  if (t.isTypeAnnotation(type)) type = type.typeAnnotation;
	  return this.typeAnnotation = type;
	}

	/**
	 * todo: split up this method
	 */

	function _getTypeAnnotation() {
	  var node = this.node;

	  if (!node) {
	    // handle initializerless variables, add in checks for loop initializers too
	    if (this.key === "init" && this.parentPath.isVariableDeclarator()) {
	      var declar = this.parentPath.parentPath;
	      var declarParent = declar.parentPath;

	      // for (let NODE in bar) {}
	      if (declar.key === "left" && declarParent.isForInStatement()) {
	        return t.stringTypeAnnotation();
	      }

	      // for (let NODE of bar) {}
	      if (declar.key === "left" && declarParent.isForOfStatement()) {
	        return t.anyTypeAnnotation();
	      }

	      return t.voidTypeAnnotation();
	    } else {
	      return;
	    }
	  }

	  if (node.typeAnnotation) {
	    return node.typeAnnotation;
	  }

	  var inferer = inferers[node.type];
	  if (inferer) {
	    return inferer.call(this, node);
	  }

	  inferer = inferers[this.parentPath.type];
	  if (inferer && inferer.validParent) {
	    return this.parentPath.getTypeAnnotation();
	  }
	}

	function isBaseType(baseName, soft) {
	  return _isBaseType(baseName, this.getTypeAnnotation(), soft);
	}

	function _isBaseType(baseName, type, soft) {
	  if (baseName === "string") {
	    return t.isStringTypeAnnotation(type);
	  } else if (baseName === "number") {
	    return t.isNumberTypeAnnotation(type);
	  } else if (baseName === "boolean") {
	    return t.isBooleanTypeAnnotation(type);
	  } else if (baseName === "any") {
	    return t.isAnyTypeAnnotation(type);
	  } else if (baseName === "mixed") {
	    return t.isMixedTypeAnnotation(type);
	  } else if (baseName === "void") {
	    return t.isVoidTypeAnnotation(type);
	  } else {
	    if (soft) {
	      return false;
	    } else {
	      throw new Error("Unknown base type " + baseName);
	    }
	  }
	}

	function couldBeBaseType(name) {
	  var type = this.getTypeAnnotation();
	  if (t.isAnyTypeAnnotation(type)) return true;

	  if (t.isUnionTypeAnnotation(type)) {
	    for (var _iterator = type.types, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var type2 = _ref;

	      if (t.isAnyTypeAnnotation(type2) || _isBaseType(name, type2, true)) {
	        return true;
	      }
	    }
	    return false;
	  } else {
	    return _isBaseType(name, type, true);
	  }
	}

	function baseTypeStrictlyMatches(right) {
	  var left = this.getTypeAnnotation();
	  right = right.getTypeAnnotation();

	  if (!t.isAnyTypeAnnotation(left) && t.isFlowBaseAnnotation(left)) {
	    return right.type === left.type;
	  }
	}

	function isGenericType(genericName) {
	  var type = this.getTypeAnnotation();
	  return t.isGenericTypeAnnotation(type) && t.isIdentifier(type.id, { name: genericName });
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.default = function (node) {
	  if (!this.isReferenced()) return;

	  // check if a binding exists of this value and if so then return a union type of all
	  // possible types that the binding could be
	  var binding = this.scope.getBinding(node.name);
	  if (binding) {
	    if (binding.identifier.typeAnnotation) {
	      return binding.identifier.typeAnnotation;
	    } else {
	      return getTypeAnnotationBindingConstantViolations(this, node.name);
	    }
	  }

	  // built-in values
	  if (node.name === "undefined") {
	    return t.voidTypeAnnotation();
	  } else if (node.name === "NaN" || node.name === "Infinity") {
	    return t.numberTypeAnnotation();
	  } else if (node.name === "arguments") {
	    // todo
	  }
	};

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getTypeAnnotationBindingConstantViolations(path, name) {
	  var binding = path.scope.getBinding(name);

	  var types = [];
	  path.typeAnnotation = t.unionTypeAnnotation(types);

	  var functionConstantViolations = [];
	  var constantViolations = getConstantViolationsBefore(binding, path, functionConstantViolations);

	  var testType = getConditionalAnnotation(path, name);
	  if (testType) {
	    (function () {
	      var testConstantViolations = getConstantViolationsBefore(binding, testType.ifStatement);

	      // remove constant violations observed before the IfStatement
	      constantViolations = constantViolations.filter(function (path) {
	        return testConstantViolations.indexOf(path) < 0;
	      });

	      // clear current types and add in observed test type
	      types.push(testType.typeAnnotation);
	    })();
	  }

	  if (constantViolations.length) {
	    // pick one constant from each scope which will represent the last possible
	    // control flow path that it could've taken/been
	    /* This code is broken for the following problems:
	     * It thinks that assignments can only happen in scopes.
	     * What about conditionals, if statements without block,
	     * or guarded assignments.
	     * It also checks to see if one of the assignments is in the
	     * same scope and uses that as the only "violation". However,
	     * the binding is returned by `getConstantViolationsBefore` so we for
	     * sure always going to return that as the only "violation".
	    let rawConstantViolations = constantViolations.reverse();
	    let visitedScopes = [];
	    constantViolations = [];
	    for (let violation of (rawConstantViolations: Array<NodePath>)) {
	      let violationScope = violation.scope;
	      if (visitedScopes.indexOf(violationScope) >= 0) continue;
	       visitedScopes.push(violationScope);
	      constantViolations.push(violation);
	       if (violationScope === path.scope) {
	        constantViolations = [violation];
	        break;
	      }
	    }*/

	    // add back on function constant violations since we can't track calls
	    constantViolations = constantViolations.concat(functionConstantViolations);

	    // push on inferred types of violated paths
	    for (var _iterator = constantViolations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var violation = _ref;

	      types.push(violation.getTypeAnnotation());
	    }
	  }

	  if (types.length) {
	    return t.createUnionTypeAnnotation(types);
	  }
	}

	function getConstantViolationsBefore(binding, path, functions) {
	  var violations = binding.constantViolations.slice();
	  violations.unshift(binding.path);
	  return violations.filter(function (violation) {
	    violation = violation.resolve();
	    var status = violation._guessExecutionStatusRelativeTo(path);
	    if (functions && status === "function") functions.push(violation);
	    return status === "before";
	  });
	}

	function inferAnnotationFromBinaryExpression(name, path) {
	  var operator = path.node.operator;

	  var right = path.get("right").resolve();
	  var left = path.get("left").resolve();

	  var target = void 0;
	  if (left.isIdentifier({ name: name })) {
	    target = right;
	  } else if (right.isIdentifier({ name: name })) {
	    target = left;
	  }
	  if (target) {
	    if (operator === "===") {
	      return target.getTypeAnnotation();
	    } else if (t.BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
	      return t.numberTypeAnnotation();
	    } else {
	      return;
	    }
	  } else {
	    if (operator !== "===") return;
	  }

	  //
	  var typeofPath = void 0;
	  var typePath = void 0;
	  if (left.isUnaryExpression({ operator: "typeof" })) {
	    typeofPath = left;
	    typePath = right;
	  } else if (right.isUnaryExpression({ operator: "typeof" })) {
	    typeofPath = right;
	    typePath = left;
	  }
	  if (!typePath && !typeofPath) return;

	  // ensure that the type path is a Literal
	  typePath = typePath.resolve();
	  if (!typePath.isLiteral()) return;

	  // and that it's a string so we can infer it
	  var typeValue = typePath.node.value;
	  if (typeof typeValue !== "string") return;

	  // and that the argument of the typeof path references us!
	  if (!typeofPath.get("argument").isIdentifier({ name: name })) return;

	  // turn type value into a type annotation
	  return t.createTypeAnnotationBasedOnTypeof(typePath.node.value);
	}

	function getParentConditionalPath(path) {
	  var parentPath = void 0;
	  while (parentPath = path.parentPath) {
	    if (parentPath.isIfStatement() || parentPath.isConditionalExpression()) {
	      if (path.key === "test") {
	        return;
	      } else {
	        return parentPath;
	      }
	    } else {
	      path = parentPath;
	    }
	  }
	}

	function getConditionalAnnotation(path, name) {
	  var ifStatement = getParentConditionalPath(path);
	  if (!ifStatement) return;

	  var test = ifStatement.get("test");
	  var paths = [test];
	  var types = [];

	  do {
	    var _path = paths.shift().resolve();

	    if (_path.isLogicalExpression()) {
	      paths.push(_path.get("left"));
	      paths.push(_path.get("right"));
	    }

	    if (_path.isBinaryExpression()) {
	      var type = inferAnnotationFromBinaryExpression(name, _path);
	      if (type) types.push(type);
	    }
	  } while (paths.length);

	  if (types.length) {
	    return {
	      typeAnnotation: t.createUnionTypeAnnotation(types),
	      ifStatement: ifStatement
	    };
	  } else {
	    return getConditionalAnnotation(ifStatement, name);
	  }
	}
	module.exports = exports["default"];

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Class = exports.Function = exports.Identifier = undefined;

	var _infererReference = __webpack_require__(173);

	Object.defineProperty(exports, "Identifier", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_infererReference).default;
	  }
	});
	exports.VariableDeclarator = VariableDeclarator;
	exports.TypeCastExpression = TypeCastExpression;
	exports.NewExpression = NewExpression;
	exports.TemplateLiteral = TemplateLiteral;
	exports.UnaryExpression = UnaryExpression;
	exports.BinaryExpression = BinaryExpression;
	exports.LogicalExpression = LogicalExpression;
	exports.ConditionalExpression = ConditionalExpression;
	exports.SequenceExpression = SequenceExpression;
	exports.AssignmentExpression = AssignmentExpression;
	exports.UpdateExpression = UpdateExpression;
	exports.StringLiteral = StringLiteral;
	exports.NumericLiteral = NumericLiteral;
	exports.BooleanLiteral = BooleanLiteral;
	exports.NullLiteral = NullLiteral;
	exports.RegExpLiteral = RegExpLiteral;
	exports.ObjectExpression = ObjectExpression;
	exports.ArrayExpression = ArrayExpression;
	exports.RestElement = RestElement;
	exports.CallExpression = CallExpression;
	exports.TaggedTemplateExpression = TaggedTemplateExpression;

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function VariableDeclarator() {
	  var id = this.get("id");

	  if (id.isIdentifier()) {
	    return this.get("init").getTypeAnnotation();
	  } else {
	    return;
	  }
	}

	function TypeCastExpression(node) {
	  return node.typeAnnotation;
	}

	TypeCastExpression.validParent = true;

	function NewExpression(node) {
	  if (this.get("callee").isIdentifier()) {
	    // only resolve identifier callee
	    return t.genericTypeAnnotation(node.callee);
	  }
	}

	function TemplateLiteral() {
	  return t.stringTypeAnnotation();
	}

	function UnaryExpression(node) {
	  var operator = node.operator;

	  if (operator === "void") {
	    return t.voidTypeAnnotation();
	  } else if (t.NUMBER_UNARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.numberTypeAnnotation();
	  } else if (t.STRING_UNARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.stringTypeAnnotation();
	  } else if (t.BOOLEAN_UNARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.booleanTypeAnnotation();
	  }
	}

	function BinaryExpression(node) {
	  var operator = node.operator;

	  if (t.NUMBER_BINARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.numberTypeAnnotation();
	  } else if (t.BOOLEAN_BINARY_OPERATORS.indexOf(operator) >= 0) {
	    return t.booleanTypeAnnotation();
	  } else if (operator === "+") {
	    var right = this.get("right");
	    var left = this.get("left");

	    if (left.isBaseType("number") && right.isBaseType("number")) {
	      // both numbers so this will be a number
	      return t.numberTypeAnnotation();
	    } else if (left.isBaseType("string") || right.isBaseType("string")) {
	      // one is a string so the result will be a string
	      return t.stringTypeAnnotation();
	    }

	    // unsure if left and right are strings or numbers so stay on the safe side
	    return t.unionTypeAnnotation([t.stringTypeAnnotation(), t.numberTypeAnnotation()]);
	  }
	}

	function LogicalExpression() {
	  return t.createUnionTypeAnnotation([this.get("left").getTypeAnnotation(), this.get("right").getTypeAnnotation()]);
	}

	function ConditionalExpression() {
	  return t.createUnionTypeAnnotation([this.get("consequent").getTypeAnnotation(), this.get("alternate").getTypeAnnotation()]);
	}

	function SequenceExpression() {
	  return this.get("expressions").pop().getTypeAnnotation();
	}

	function AssignmentExpression() {
	  return this.get("right").getTypeAnnotation();
	}

	function UpdateExpression(node) {
	  var operator = node.operator;
	  if (operator === "++" || operator === "--") {
	    return t.numberTypeAnnotation();
	  }
	}

	function StringLiteral() {
	  return t.stringTypeAnnotation();
	}

	function NumericLiteral() {
	  return t.numberTypeAnnotation();
	}

	function BooleanLiteral() {
	  return t.booleanTypeAnnotation();
	}

	function NullLiteral() {
	  return t.nullLiteralTypeAnnotation();
	}

	function RegExpLiteral() {
	  return t.genericTypeAnnotation(t.identifier("RegExp"));
	}

	function ObjectExpression() {
	  return t.genericTypeAnnotation(t.identifier("Object"));
	}

	function ArrayExpression() {
	  return t.genericTypeAnnotation(t.identifier("Array"));
	}

	function RestElement() {
	  return ArrayExpression();
	}

	RestElement.validParent = true;

	function Func() {
	  return t.genericTypeAnnotation(t.identifier("Function"));
	}

	exports.Function = Func;
	exports.Class = Func;
	function CallExpression() {
	  return resolveCall(this.get("callee"));
	}

	function TaggedTemplateExpression() {
	  return resolveCall(this.get("tag"));
	}

	function resolveCall(callee) {
	  callee = callee.resolve();

	  if (callee.isFunction()) {
	    if (callee.is("async")) {
	      if (callee.is("generator")) {
	        return t.genericTypeAnnotation(t.identifier("AsyncIterator"));
	      } else {
	        return t.genericTypeAnnotation(t.identifier("Promise"));
	      }
	    } else {
	      if (callee.node.returnType) {
	        return callee.node.returnType;
	      } else {
	        // todo: get union type of all return arguments
	      }
	    }
	  }
	}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.is = undefined;

	var _typeof2 = __webpack_require__(21);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.matchesPattern = matchesPattern;
	exports.has = has;
	exports.isStatic = isStatic;
	exports.isnt = isnt;
	exports.equals = equals;
	exports.isNodeType = isNodeType;
	exports.canHaveVariableDeclarationOrExpression = canHaveVariableDeclarationOrExpression;
	exports.canSwapBetweenExpressionAndStatement = canSwapBetweenExpressionAndStatement;
	exports.isCompletionRecord = isCompletionRecord;
	exports.isStatementOrBlock = isStatementOrBlock;
	exports.referencesImport = referencesImport;
	exports.getSource = getSource;
	exports.willIMaybeExecuteBefore = willIMaybeExecuteBefore;
	exports._guessExecutionStatusRelativeTo = _guessExecutionStatusRelativeTo;
	exports._guessExecutionStatusRelativeToDifferentFunctions = _guessExecutionStatusRelativeToDifferentFunctions;
	exports.resolve = resolve;
	exports._resolve = _resolve;

	var _includes = __webpack_require__(98);

	var _includes2 = _interopRequireDefault(_includes);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Match the current node if it matches the provided `pattern`.
	 *
	 * For example, given the match `React.createClass` it would match the
	 * parsed nodes of `React.createClass` and `React["createClass"]`.
	 */

	function matchesPattern(pattern, allowPartial) {
	  // not a member expression
	  if (!this.isMemberExpression()) return false;

	  var parts = pattern.split(".");
	  var search = [this.node];
	  var i = 0;

	  function matches(name) {
	    var part = parts[i];
	    return part === "*" || name === part;
	  }

	  while (search.length) {
	    var node = search.shift();

	    if (allowPartial && i === parts.length) {
	      return true;
	    }

	    if (t.isIdentifier(node)) {
	      // this part doesn't match
	      if (!matches(node.name)) return false;
	    } else if (t.isLiteral(node)) {
	      // this part doesn't match
	      if (!matches(node.value)) return false;
	    } else if (t.isMemberExpression(node)) {
	      if (node.computed && !t.isLiteral(node.property)) {
	        // we can't deal with this
	        return false;
	      } else {
	        search.unshift(node.property);
	        search.unshift(node.object);
	        continue;
	      }
	    } else if (t.isThisExpression(node)) {
	      if (!matches("this")) return false;
	    } else {
	      // we can't deal with this
	      return false;
	    }

	    // too many parts
	    if (++i > parts.length) {
	      return false;
	    }
	  }

	  return i === parts.length;
	}

	/**
	 * Check whether we have the input `key`. If the `key` references an array then we check
	 * if the array has any items, otherwise we just check if it's falsy.
	 */

	// This file contains methods responsible for introspecting the current path for certain values.

	function has(key) {
	  var val = this.node && this.node[key];
	  if (val && Array.isArray(val)) {
	    return !!val.length;
	  } else {
	    return !!val;
	  }
	}

	/**
	 * Description
	 */

	function isStatic() {
	  return this.scope.isStatic(this.node);
	}

	/**
	 * Alias of `has`.
	 */

	var is = exports.is = has;

	/**
	 * Opposite of `has`.
	 */

	function isnt(key) {
	  return !this.has(key);
	}

	/**
	 * Check whether the path node `key` strict equals `value`.
	 */

	function equals(key, value) {
	  return this.node[key] === value;
	}

	/**
	 * Check the type against our stored internal type of the node. This is handy when a node has
	 * been removed yet we still internally know the type and need it to calculate node replacement.
	 */

	function isNodeType(type) {
	  return t.isType(this.type, type);
	}

	/**
	 * This checks whether or not we're in one of the following positions:
	 *
	 *   for (KEY in right);
	 *   for (KEY;;);
	 *
	 * This is because these spots allow VariableDeclarations AND normal expressions so we need
	 * to tell the path replacement that it's ok to replace this with an expression.
	 */

	function canHaveVariableDeclarationOrExpression() {
	  return (this.key === "init" || this.key === "left") && this.parentPath.isFor();
	}

	/**
	 * This checks whether we are swapping an arrow function's body between an
	 * expression and a block statement (or vice versa).
	 *
	 * This is because arrow functions may implicitly return an expression, which
	 * is the same as containing a block statement.
	 */

	function canSwapBetweenExpressionAndStatement(replacement) {
	  if (this.key !== "body" || !this.parentPath.isArrowFunctionExpression()) {
	    return false;
	  }

	  if (this.isExpression()) {
	    return t.isBlockStatement(replacement);
	  } else if (this.isBlockStatement()) {
	    return t.isExpression(replacement);
	  }

	  return false;
	}

	/**
	 * Check whether the current path references a completion record
	 */

	function isCompletionRecord(allowInsideFunction) {
	  var path = this;
	  var first = true;

	  do {
	    var container = path.container;

	    // we're in a function so can't be a completion record
	    if (path.isFunction() && !first) {
	      return !!allowInsideFunction;
	    }

	    first = false;

	    // check to see if we're the last item in the container and if we are
	    // we're a completion record!
	    if (Array.isArray(container) && path.key !== container.length - 1) {
	      return false;
	    }
	  } while ((path = path.parentPath) && !path.isProgram());

	  return true;
	}

	/**
	 * Check whether or not the current `key` allows either a single statement or block statement
	 * so we can explode it if necessary.
	 */

	function isStatementOrBlock() {
	  if (this.parentPath.isLabeledStatement() || t.isBlockStatement(this.container)) {
	    return false;
	  } else {
	    return (0, _includes2.default)(t.STATEMENT_OR_BLOCK_KEYS, this.key);
	  }
	}

	/**
	 * Check if the currently assigned path references the `importName` of `moduleSource`.
	 */

	function referencesImport(moduleSource, importName) {
	  if (!this.isReferencedIdentifier()) return false;

	  var binding = this.scope.getBinding(this.node.name);
	  if (!binding || binding.kind !== "module") return false;

	  var path = binding.path;
	  var parent = path.parentPath;
	  if (!parent.isImportDeclaration()) return false;

	  // check moduleSource
	  if (parent.node.source.value === moduleSource) {
	    if (!importName) return true;
	  } else {
	    return false;
	  }

	  if (path.isImportDefaultSpecifier() && importName === "default") {
	    return true;
	  }

	  if (path.isImportNamespaceSpecifier() && importName === "*") {
	    return true;
	  }

	  if (path.isImportSpecifier() && path.node.imported.name === importName) {
	    return true;
	  }

	  return false;
	}

	/**
	 * Get the source code associated with this node.
	 */

	function getSource() {
	  var node = this.node;
	  if (node.end) {
	    return this.hub.file.code.slice(node.start, node.end);
	  } else {
	    return "";
	  }
	}

	function willIMaybeExecuteBefore(target) {
	  return this._guessExecutionStatusRelativeTo(target) !== "after";
	}

	/**
	 * Given a `target` check the execution status of it relative to the current path.
	 *
	 * "Execution status" simply refers to where or not we **think** this will execuete
	 * before or after the input `target` element.
	 */

	function _guessExecutionStatusRelativeTo(target) {
	  // check if the two paths are in different functions, we can't track execution of these
	  var targetFuncParent = target.scope.getFunctionParent();
	  var selfFuncParent = this.scope.getFunctionParent();

	  // here we check the `node` equality as sometimes we may have different paths for the
	  // same node due to path thrashing
	  if (targetFuncParent.node !== selfFuncParent.node) {
	    var status = this._guessExecutionStatusRelativeToDifferentFunctions(targetFuncParent);
	    if (status) {
	      return status;
	    } else {
	      target = targetFuncParent.path;
	    }
	  }

	  var targetPaths = target.getAncestry();
	  if (targetPaths.indexOf(this) >= 0) return "after";

	  var selfPaths = this.getAncestry();

	  // get ancestor where the branches intersect
	  var commonPath = void 0;
	  var targetIndex = void 0;
	  var selfIndex = void 0;
	  for (selfIndex = 0; selfIndex < selfPaths.length; selfIndex++) {
	    var selfPath = selfPaths[selfIndex];
	    targetIndex = targetPaths.indexOf(selfPath);
	    if (targetIndex >= 0) {
	      commonPath = selfPath;
	      break;
	    }
	  }
	  if (!commonPath) {
	    return "before";
	  }

	  // get the relationship paths that associate these nodes to their common ancestor
	  var targetRelationship = targetPaths[targetIndex - 1];
	  var selfRelationship = selfPaths[selfIndex - 1];
	  if (!targetRelationship || !selfRelationship) {
	    return "before";
	  }

	  // container list so let's see which one is after the other
	  if (targetRelationship.listKey && targetRelationship.container === selfRelationship.container) {
	    return targetRelationship.key > selfRelationship.key ? "before" : "after";
	  }

	  // otherwise we're associated by a parent node, check which key comes before the other
	  var targetKeyPosition = t.VISITOR_KEYS[targetRelationship.type].indexOf(targetRelationship.key);
	  var selfKeyPosition = t.VISITOR_KEYS[selfRelationship.type].indexOf(selfRelationship.key);
	  return targetKeyPosition > selfKeyPosition ? "before" : "after";
	}

	function _guessExecutionStatusRelativeToDifferentFunctions(targetFuncParent) {
	  var targetFuncPath = targetFuncParent.path;
	  if (!targetFuncPath.isFunctionDeclaration()) return;

	  // so we're in a completely different function, if this is a function declaration
	  // then we can be a bit smarter and handle cases where the function is either
	  // a. not called at all (part of an export)
	  // b. called directly
	  var binding = targetFuncPath.scope.getBinding(targetFuncPath.node.id.name);

	  // no references!
	  if (!binding.references) return "before";

	  var referencePaths = binding.referencePaths;

	  // verify that all of the references are calls
	  for (var _iterator = referencePaths, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var path = _ref;

	    if (path.key !== "callee" || !path.parentPath.isCallExpression()) {
	      return;
	    }
	  }

	  var allStatus = void 0;

	  // verify that all the calls have the same execution status
	  for (var _iterator2 = referencePaths, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	    var _ref2;

	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref2 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref2 = _i2.value;
	    }

	    var _path = _ref2;

	    // if a reference is a child of the function we're checking against then we can
	    // safelty ignore it
	    var childOfFunction = !!_path.find(function (path) {
	      return path.node === targetFuncPath.node;
	    });
	    if (childOfFunction) continue;

	    var status = this._guessExecutionStatusRelativeTo(_path);

	    if (allStatus) {
	      if (allStatus !== status) return;
	    } else {
	      allStatus = status;
	    }
	  }

	  return allStatus;
	}

	/**
	 * Resolve a "pointer" `NodePath` to it's absolute path.
	 */

	function resolve(dangerous, resolved) {
	  return this._resolve(dangerous, resolved) || this;
	}

	function _resolve(dangerous, resolved) {
	  var _this = this;

	  // detect infinite recursion
	  // todo: possibly have a max length on this just to be safe
	  if (resolved && resolved.indexOf(this) >= 0) return;

	  // we store all the paths we've "resolved" in this array to prevent infinite recursion
	  resolved = resolved || [];
	  resolved.push(this);

	  if (this.isVariableDeclarator()) {
	    if (this.get("id").isIdentifier()) {
	      return this.get("init").resolve(dangerous, resolved);
	    } else {
	      // otherwise it's a request for a pattern and that's a bit more tricky
	    }
	  } else if (this.isReferencedIdentifier()) {
	      var binding = this.scope.getBinding(this.node.name);
	      if (!binding) return;

	      // reassigned so we can't really resolve it
	      if (!binding.constant) return;

	      // todo - lookup module in dependency graph
	      if (binding.kind === "module") return;

	      if (binding.path !== this) {
	        var _ret = function () {
	          var ret = binding.path.resolve(dangerous, resolved);
	          // If the identifier resolves to parent node then we can't really resolve it.
	          if (_this.find(function (parent) {
	            return parent.node === ret.node;
	          })) return {
	              v: void 0
	            };
	          return {
	            v: ret
	          };
	        }();

	        if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
	      }
	    } else if (this.isTypeCastExpression()) {
	      return this.get("expression").resolve(dangerous, resolved);
	    } else if (dangerous && this.isMemberExpression()) {
	      // this is dangerous, as non-direct target assignments will mutate it's state
	      // making this resolution inaccurate

	      var targetKey = this.toComputedKey();
	      if (!t.isLiteral(targetKey)) return;

	      var targetName = targetKey.value;

	      var target = this.get("object").resolve(dangerous, resolved);

	      if (target.isObjectExpression()) {
	        var props = target.get("properties");
	        for (var _iterator3 = props, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	          var _ref3;

	          if (_isArray3) {
	            if (_i3 >= _iterator3.length) break;
	            _ref3 = _iterator3[_i3++];
	          } else {
	            _i3 = _iterator3.next();
	            if (_i3.done) break;
	            _ref3 = _i3.value;
	          }

	          var prop = _ref3;

	          if (!prop.isProperty()) continue;

	          var key = prop.get("key");

	          // { foo: obj }
	          var match = prop.isnt("computed") && key.isIdentifier({ name: targetName });

	          // { "foo": "obj" } or { ["foo"]: "obj" }
	          match = match || key.isLiteral({ value: targetName });

	          if (match) return prop.get("value").resolve(dangerous, resolved);
	        }
	      } else if (target.isArrayExpression() && !isNaN(+targetName)) {
	        var elems = target.get("elements");
	        var elem = elems[targetName];
	        if (elem) return elem.resolve(dangerous, resolved);
	      }
	    }
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var referenceVisitor = {
	  ReferencedIdentifier: function ReferencedIdentifier(path, state) {
	    if (path.isJSXIdentifier() && _babelTypes.react.isCompatTag(path.node.name)) {
	      return;
	    }

	    // direct references that we need to track to hoist this to the highest scope we can
	    var binding = path.scope.getBinding(path.node.name);
	    if (!binding) return;

	    // this binding isn't accessible from the parent scope so we can safely ignore it
	    // eg. it's in a closure etc
	    if (binding !== state.scope.getBinding(path.node.name)) return;

	    if (binding.constant) {
	      state.bindings[path.node.name] = binding;
	    } else {
	      for (var _iterator = binding.constantViolations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var violationPath = _ref;

	        state.breakOnScopePaths = state.breakOnScopePaths.concat(violationPath.getAncestry());
	      }
	    }
	  }
	};

	var PathHoister = function () {
	  function PathHoister(path, scope) {
	    (0, _classCallCheck3.default)(this, PathHoister);

	    this.breakOnScopePaths = [];
	    this.bindings = {};
	    this.scopes = [];
	    this.scope = scope;
	    this.path = path;
	  }

	  PathHoister.prototype.isCompatibleScope = function isCompatibleScope(scope) {
	    for (var key in this.bindings) {
	      var binding = this.bindings[key];
	      if (!scope.bindingIdentifierEquals(key, binding.identifier)) {
	        return false;
	      }
	    }

	    return true;
	  };

	  PathHoister.prototype.getCompatibleScopes = function getCompatibleScopes() {
	    var scope = this.path.scope;
	    do {
	      if (this.isCompatibleScope(scope)) {
	        this.scopes.push(scope);
	      } else {
	        break;
	      }

	      if (this.breakOnScopePaths.indexOf(scope.path) >= 0) {
	        break;
	      }
	    } while (scope = scope.parent);
	  };

	  PathHoister.prototype.getAttachmentPath = function getAttachmentPath() {
	    var scopes = this.scopes;

	    var scope = scopes.pop();
	    if (!scope) return;

	    if (scope.path.isFunction()) {
	      if (this.hasOwnParamBindings(scope)) {
	        // should ignore this scope since it's ourselves
	        if (this.scope === scope) return;

	        // needs to be attached to the body
	        return scope.path.get("body").get("body")[0];
	      } else {
	        // doesn't need to be be attached to this scope
	        return this.getNextScopeStatementParent();
	      }
	    } else if (scope.path.isProgram()) {
	      return this.getNextScopeStatementParent();
	    }
	  };

	  PathHoister.prototype.getNextScopeStatementParent = function getNextScopeStatementParent() {
	    var scope = this.scopes.pop();
	    if (scope) return scope.path.getStatementParent();
	  };

	  PathHoister.prototype.hasOwnParamBindings = function hasOwnParamBindings(scope) {
	    for (var name in this.bindings) {
	      if (!scope.hasOwnBinding(name)) continue;

	      var binding = this.bindings[name];
	      if (binding.kind === "param") return true;
	    }
	    return false;
	  };

	  PathHoister.prototype.run = function run() {
	    var node = this.path.node;
	    if (node._hoisted) return;
	    node._hoisted = true;

	    this.path.traverse(referenceVisitor, this);

	    this.getCompatibleScopes();

	    var attachTo = this.getAttachmentPath();
	    if (!attachTo) return;

	    // don't bother hoisting to the same function as this will cause multiple branches to be evaluated more than once leading to a bad optimisation
	    if (attachTo.getFunctionParent() === this.path.getFunctionParent()) return;

	    var uid = attachTo.scope.generateUidIdentifier("ref");

	    attachTo.insertBefore([t.variableDeclaration("var", [t.variableDeclarator(uid, this.path.node)])]);

	    var parent = this.path.parentPath;

	    if (parent.isJSXElement() && this.path.container === parent.node.children) {
	      // turning the `span` in `<div><span /></div>` to an expression so we need to wrap it with
	      // an expression container
	      uid = t.JSXExpressionContainer(uid);
	    }

	    this.path.replaceWith(uid);
	  };

	  return PathHoister;
	}();

	exports.default = PathHoister;
	module.exports = exports["default"];

/***/ },
/* 177 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	// this file contains hooks that handle ancestry cleanup of parent nodes when removing children

	/**
	 * Pre hooks should be used for either rejecting removal or delegating removal
	 */

	var hooks = exports.hooks = [function (self, parent) {
	  if (self.key === "body" && parent.isArrowFunctionExpression()) {
	    self.replaceWith(self.scope.buildUndefinedNode());
	    return true;
	  }
	}, function (self, parent) {
	  var removeParent = false;

	  // while (NODE);
	  // removing the test of a while/switch, we can either just remove it entirely *or* turn the `test` into `true`
	  // unlikely that the latter will ever be what's wanted so we just remove the loop to avoid infinite recursion
	  removeParent = removeParent || self.key === "test" && (parent.isWhile() || parent.isSwitchCase());

	  // export NODE;
	  // just remove a declaration for an export as this is no longer valid
	  removeParent = removeParent || self.key === "declaration" && parent.isExportDeclaration();

	  // label: NODE
	  // stray labeled statement with no body
	  removeParent = removeParent || self.key === "body" && parent.isLabeledStatement();

	  // let NODE;
	  // remove an entire declaration if there are no declarators left
	  removeParent = removeParent || self.listKey === "declarations" && parent.isVariableDeclaration() && parent.node.declarations.length === 1;

	  // NODE;
	  // remove the entire expression statement if there's no expression
	  removeParent = removeParent || self.key === "expression" && parent.isExpressionStatement();

	  if (removeParent) {
	    parent.remove();
	    return true;
	  }
	}, function (self, parent) {
	  if (parent.isSequenceExpression() && parent.node.expressions.length === 1) {
	    // (node, NODE);
	    // we've just removed the second element of a sequence expression so let's turn that sequence
	    // expression into a regular expression
	    parent.replaceWith(parent.node.expressions[0]);
	    return true;
	  }
	}, function (self, parent) {
	  if (parent.isBinary()) {
	    // left + NODE;
	    // NODE + right;
	    // we're in a binary expression, better remove it and replace it with the last expression
	    if (self.key === "left") {
	      parent.replaceWith(parent.node.right);
	    } else {
	      // key === "right"
	      parent.replaceWith(parent.node.left);
	    }
	    return true;
	  }
	}];

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(21);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.insertBefore = insertBefore;
	exports._containerInsert = _containerInsert;
	exports._containerInsertBefore = _containerInsertBefore;
	exports._containerInsertAfter = _containerInsertAfter;
	exports._maybePopFromStatements = _maybePopFromStatements;
	exports.insertAfter = insertAfter;
	exports.updateSiblingKeys = updateSiblingKeys;
	exports._verifyNodeList = _verifyNodeList;
	exports.unshiftContainer = unshiftContainer;
	exports.pushContainer = pushContainer;
	exports.hoist = hoist;

	var _cache = __webpack_require__(41);

	var _hoister = __webpack_require__(176);

	var _hoister2 = _interopRequireDefault(_hoister);

	var _index = __webpack_require__(22);

	var _index2 = _interopRequireDefault(_index);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Insert the provided nodes before the current one.
	 */

	/* eslint max-len: 0 */
	// This file contains methods that modify the path/node in some ways.

	function insertBefore(nodes) {
	  this._assertUnremoved();

	  nodes = this._verifyNodeList(nodes);

	  if (this.parentPath.isExpressionStatement() || this.parentPath.isLabeledStatement()) {
	    return this.parentPath.insertBefore(nodes);
	  } else if (this.isNodeType("Expression") || this.parentPath.isForStatement() && this.key === "init") {
	    if (this.node) nodes.push(this.node);
	    this.replaceExpressionWithStatements(nodes);
	  } else {
	    this._maybePopFromStatements(nodes);
	    if (Array.isArray(this.container)) {
	      return this._containerInsertBefore(nodes);
	    } else if (this.isStatementOrBlock()) {
	      if (this.node) nodes.push(this.node);
	      this._replaceWith(t.blockStatement(nodes));
	    } else {
	      throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
	    }
	  }

	  return [this];
	}

	function _containerInsert(from, nodes) {
	  this.updateSiblingKeys(from, nodes.length);

	  var paths = [];

	  for (var i = 0; i < nodes.length; i++) {
	    var to = from + i;
	    var node = nodes[i];
	    this.container.splice(to, 0, node);

	    if (this.context) {
	      var path = this.context.create(this.parent, this.container, to, this.listKey);

	      // While this path may have a context, there is currently no guarantee that the context
	      // will be the active context, because `popContext` may leave a final context in place.
	      // We should remove this `if` and always push once T7171 has been resolved.
	      if (this.context.queue) path.pushContext(this.context);
	      paths.push(path);
	    } else {
	      paths.push(_index2.default.get({
	        parentPath: this.parentPath,
	        parent: this.parent,
	        container: this.container,
	        listKey: this.listKey,
	        key: to
	      }));
	    }
	  }

	  var contexts = this._getQueueContexts();

	  for (var _iterator = paths, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var _path = _ref;

	    _path.setScope();
	    _path.debug(function () {
	      return "Inserted.";
	    });

	    for (var _iterator2 = contexts, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var context = _ref2;

	      context.maybeQueue(_path, true);
	    }
	  }

	  return paths;
	}

	function _containerInsertBefore(nodes) {
	  return this._containerInsert(this.key, nodes);
	}

	function _containerInsertAfter(nodes) {
	  return this._containerInsert(this.key + 1, nodes);
	}

	function _maybePopFromStatements(nodes) {
	  var last = nodes[nodes.length - 1];
	  var isIdentifier = t.isIdentifier(last) || t.isExpressionStatement(last) && t.isIdentifier(last.expression);

	  if (isIdentifier && !this.isCompletionRecord()) {
	    nodes.pop();
	  }
	}

	/**
	 * Insert the provided nodes after the current one. When inserting nodes after an
	 * expression, ensure that the completion record is correct by pushing the current node.
	 */

	function insertAfter(nodes) {
	  this._assertUnremoved();

	  nodes = this._verifyNodeList(nodes);

	  if (this.parentPath.isExpressionStatement() || this.parentPath.isLabeledStatement()) {
	    return this.parentPath.insertAfter(nodes);
	  } else if (this.isNodeType("Expression") || this.parentPath.isForStatement() && this.key === "init") {
	    if (this.node) {
	      var temp = this.scope.generateDeclaredUidIdentifier();
	      nodes.unshift(t.expressionStatement(t.assignmentExpression("=", temp, this.node)));
	      nodes.push(t.expressionStatement(temp));
	    }
	    this.replaceExpressionWithStatements(nodes);
	  } else {
	    this._maybePopFromStatements(nodes);
	    if (Array.isArray(this.container)) {
	      return this._containerInsertAfter(nodes);
	    } else if (this.isStatementOrBlock()) {
	      if (this.node) nodes.unshift(this.node);
	      this._replaceWith(t.blockStatement(nodes));
	    } else {
	      throw new Error("We don't know what to do with this node type. We were previously a Statement but we can't fit in here?");
	    }
	  }

	  return [this];
	}

	/**
	 * Update all sibling node paths after `fromIndex` by `incrementBy`.
	 */

	function updateSiblingKeys(fromIndex, incrementBy) {
	  if (!this.parent) return;

	  var paths = _cache.path.get(this.parent);
	  for (var i = 0; i < paths.length; i++) {
	    var path = paths[i];
	    if (path.key >= fromIndex) {
	      path.key += incrementBy;
	    }
	  }
	}

	function _verifyNodeList(nodes) {
	  if (!nodes) {
	    return [];
	  }

	  if (nodes.constructor !== Array) {
	    nodes = [nodes];
	  }

	  for (var i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    var msg = void 0;

	    if (!node) {
	      msg = "has falsy node";
	    } else if ((typeof node === "undefined" ? "undefined" : (0, _typeof3.default)(node)) !== "object") {
	      msg = "contains a non-object node";
	    } else if (!node.type) {
	      msg = "without a type";
	    } else if (node instanceof _index2.default) {
	      msg = "has a NodePath when it expected a raw object";
	    }

	    if (msg) {
	      var type = Array.isArray(node) ? "array" : typeof node === "undefined" ? "undefined" : (0, _typeof3.default)(node);
	      throw new Error("Node list " + msg + " with the index of " + i + " and type of " + type);
	    }
	  }

	  return nodes;
	}

	function unshiftContainer(listKey, nodes) {
	  this._assertUnremoved();

	  nodes = this._verifyNodeList(nodes);

	  // get the first path and insert our nodes before it, if it doesn't exist then it
	  // doesn't matter, our nodes will be inserted anyway
	  var path = _index2.default.get({
	    parentPath: this,
	    parent: this.node,
	    container: this.node[listKey],
	    listKey: listKey,
	    key: 0
	  });

	  return path.insertBefore(nodes);
	}

	function pushContainer(listKey, nodes) {
	  this._assertUnremoved();

	  nodes = this._verifyNodeList(nodes);

	  // get an invisible path that represents the last node + 1 and replace it with our
	  // nodes, effectively inlining it

	  var container = this.node[listKey];
	  var path = _index2.default.get({
	    parentPath: this,
	    parent: this.node,
	    container: container,
	    listKey: listKey,
	    key: container.length
	  });

	  return path.replaceWithMultiple(nodes);
	}

	/**
	 * Hoist the current node to the highest scope possible and return a UID
	 * referencing it.
	 */

	function hoist() {
	  var scope = arguments.length <= 0 || arguments[0] === undefined ? this.scope : arguments[0];

	  var hoister = new _hoister2.default(this, scope);
	  return hoister.run();
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.remove = remove;
	exports._callRemovalHooks = _callRemovalHooks;
	exports._remove = _remove;
	exports._markRemoved = _markRemoved;
	exports._assertUnremoved = _assertUnremoved;

	var _removalHooks = __webpack_require__(177);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function remove() {
	  this._assertUnremoved();

	  this.resync();

	  if (this._callRemovalHooks()) {
	    this._markRemoved();
	    return;
	  }

	  this.shareCommentsWithSiblings();
	  this._remove();
	  this._markRemoved();
	} // This file contains methods responsible for removing a node.

	function _callRemovalHooks() {
	  for (var _iterator = _removalHooks.hooks, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	    var _ref;

	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }

	    var fn = _ref;

	    if (fn(this, this.parentPath)) return true;
	  }
	}

	function _remove() {
	  if (Array.isArray(this.container)) {
	    this.container.splice(this.key, 1);
	    this.updateSiblingKeys(this.key, -1);
	  } else {
	    this._replaceWith(null);
	  }
	}

	function _markRemoved() {
	  this.shouldSkip = true;
	  this.removed = true;
	  this.node = null;
	}

	function _assertUnremoved() {
	  if (this.removed) {
	    throw this.buildCodeFrameError("NodePath has been removed so is read-only.");
	  }
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.replaceWithMultiple = replaceWithMultiple;
	exports.replaceWithSourceString = replaceWithSourceString;
	exports.replaceWith = replaceWith;
	exports._replaceWith = _replaceWith;
	exports.replaceExpressionWithStatements = replaceExpressionWithStatements;
	exports.replaceInline = replaceInline;

	var _babelCodeFrame = __webpack_require__(149);

	var _babelCodeFrame2 = _interopRequireDefault(_babelCodeFrame);

	var _index = __webpack_require__(26);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(22);

	var _index4 = _interopRequireDefault(_index3);

	var _babylon = __webpack_require__(194);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hoistVariablesVisitor = {
	  Function: function Function(path) {
	    path.skip();
	  },
	  VariableDeclaration: function VariableDeclaration(path) {
	    if (path.node.kind !== "var") return;

	    var bindings = path.getBindingIdentifiers();
	    for (var key in bindings) {
	      path.scope.push({ id: bindings[key] });
	    }

	    var exprs = [];

	    for (var _iterator = path.node.declarations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var declar = _ref;

	      if (declar.init) {
	        exprs.push(t.expressionStatement(t.assignmentExpression("=", declar.id, declar.init)));
	      }
	    }

	    path.replaceWithMultiple(exprs);
	  }
	};

	/**
	 * Replace a node with an array of multiple. This method performs the following steps:
	 *
	 *  - Inherit the comments of first provided node with that of the current node.
	 *  - Insert the provided nodes after the current node.
	 *  - Remove the current node.
	 */

	/* eslint max-len: 0 */
	// This file contains methods responsible for replacing a node with another.

	function replaceWithMultiple(nodes) {
	  this.resync();

	  nodes = this._verifyNodeList(nodes);
	  t.inheritLeadingComments(nodes[0], this.node);
	  t.inheritTrailingComments(nodes[nodes.length - 1], this.node);
	  this.node = this.container[this.key] = null;
	  this.insertAfter(nodes);

	  if (this.node) {
	    this.requeue();
	  } else {
	    this.remove();
	  }
	}

	/**
	 * Parse a string as an expression and replace the current node with the result.
	 *
	 * NOTE: This is typically not a good idea to use. Building source strings when
	 * transforming ASTs is an antipattern and SHOULD NOT be encouraged. Even if it's
	 * easier to use, your transforms will be extremely brittle.
	 */

	function replaceWithSourceString(replacement) {
	  this.resync();

	  try {
	    replacement = "(" + replacement + ")";
	    replacement = (0, _babylon.parse)(replacement);
	  } catch (err) {
	    var loc = err.loc;
	    if (loc) {
	      err.message += " - make sure this is an expression.";
	      err.message += "\n" + (0, _babelCodeFrame2.default)(replacement, loc.line, loc.column + 1);
	    }
	    throw err;
	  }

	  replacement = replacement.program.body[0].expression;
	  _index2.default.removeProperties(replacement);
	  return this.replaceWith(replacement);
	}

	/**
	 * Replace the current node with another.
	 */

	function replaceWith(replacement) {
	  this.resync();

	  if (this.removed) {
	    throw new Error("You can't replace this node, we've already removed it");
	  }

	  if (replacement instanceof _index4.default) {
	    replacement = replacement.node;
	  }

	  if (!replacement) {
	    throw new Error("You passed `path.replaceWith()` a falsy node, use `path.remove()` instead");
	  }

	  if (this.node === replacement) {
	    return;
	  }

	  if (this.isProgram() && !t.isProgram(replacement)) {
	    throw new Error("You can only replace a Program root node with another Program node");
	  }

	  if (Array.isArray(replacement)) {
	    throw new Error("Don't use `path.replaceWith()` with an array of nodes, use `path.replaceWithMultiple()`");
	  }

	  if (typeof replacement === "string") {
	    throw new Error("Don't use `path.replaceWith()` with a source string, use `path.replaceWithSourceString()`");
	  }

	  if (this.isNodeType("Statement") && t.isExpression(replacement)) {
	    if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement)) {
	      // replacing a statement with an expression so wrap it in an expression statement
	      replacement = t.expressionStatement(replacement);
	    }
	  }

	  if (this.isNodeType("Expression") && t.isStatement(replacement)) {
	    if (!this.canHaveVariableDeclarationOrExpression() && !this.canSwapBetweenExpressionAndStatement(replacement)) {
	      // replacing an expression with a statement so let's explode it
	      return this.replaceExpressionWithStatements([replacement]);
	    }
	  }

	  var oldNode = this.node;
	  if (oldNode) {
	    t.inheritsComments(replacement, oldNode);
	    t.removeComments(oldNode);
	  }

	  // replace the node
	  this._replaceWith(replacement);
	  this.type = replacement.type;

	  // potentially create new scope
	  this.setScope();

	  // requeue for visiting
	  this.requeue();
	}

	/**
	 * Description
	 */

	function _replaceWith(node) {
	  if (!this.container) {
	    throw new ReferenceError("Container is falsy");
	  }

	  if (this.inList) {
	    t.validate(this.parent, this.key, [node]);
	  } else {
	    t.validate(this.parent, this.key, node);
	  }

	  this.debug(function () {
	    return "Replace with " + (node && node.type);
	  });

	  this.node = this.container[this.key] = node;
	}

	/**
	 * This method takes an array of statements nodes and then explodes it
	 * into expressions. This method retains completion records which is
	 * extremely important to retain original semantics.
	 */

	function replaceExpressionWithStatements(nodes) {
	  this.resync();

	  var toSequenceExpression = t.toSequenceExpression(nodes, this.scope);

	  if (t.isSequenceExpression(toSequenceExpression)) {
	    var exprs = toSequenceExpression.expressions;

	    if (exprs.length >= 2 && this.parentPath.isExpressionStatement()) {
	      this._maybePopFromStatements(exprs);
	    }

	    // could be just one element due to the previous maybe popping
	    if (exprs.length === 1) {
	      this.replaceWith(exprs[0]);
	    } else {
	      this.replaceWith(toSequenceExpression);
	    }
	  } else if (toSequenceExpression) {
	    this.replaceWith(toSequenceExpression);
	  } else {
	    var container = t.functionExpression(null, [], t.blockStatement(nodes));
	    container.shadow = true;

	    this.replaceWith(t.callExpression(container, []));
	    this.traverse(hoistVariablesVisitor);

	    // add implicit returns to all ending expression statements
	    var completionRecords = this.get("callee").getCompletionRecords();
	    for (var _iterator2 = completionRecords, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	      var _ref2;

	      if (_isArray2) {
	        if (_i2 >= _iterator2.length) break;
	        _ref2 = _iterator2[_i2++];
	      } else {
	        _i2 = _iterator2.next();
	        if (_i2.done) break;
	        _ref2 = _i2.value;
	      }

	      var path = _ref2;

	      if (!path.isExpressionStatement()) continue;

	      var loop = path.findParent(function (path) {
	        return path.isLoop();
	      });
	      if (loop) {
	        var callee = this.get("callee");

	        var uid = callee.scope.generateDeclaredUidIdentifier("ret");
	        callee.get("body").pushContainer("body", t.returnStatement(uid));

	        path.get("expression").replaceWith(t.assignmentExpression("=", uid, path.node.expression));
	      } else {
	        path.replaceWith(t.returnStatement(path.node.expression));
	      }
	    }

	    return this.node;
	  }
	}

	function replaceInline(nodes) {
	  this.resync();

	  if (Array.isArray(nodes)) {
	    if (Array.isArray(this.container)) {
	      nodes = this._verifyNodeList(nodes);
	      this._containerInsertAfter(nodes);
	      return this.remove();
	    } else {
	      return this.replaceWithMultiple(nodes);
	    }
	  } else {
	    return this.replaceWith(nodes);
	  }
	}

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _binding = __webpack_require__(104);

	var _binding2 = _interopRequireDefault(_binding);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var renameVisitor = {
	  ReferencedIdentifier: function ReferencedIdentifier(_ref, state) {
	    var node = _ref.node;

	    if (node.name === state.oldName) {
	      node.name = state.newName;
	    }
	  },
	  Scope: function Scope(path, state) {
	    if (!path.scope.bindingIdentifierEquals(state.oldName, state.binding.identifier)) {
	      path.skip();
	    }
	  },
	  "AssignmentExpression|Declaration": function AssignmentExpressionDeclaration(path, state) {
	    var ids = path.getOuterBindingIdentifiers();

	    for (var name in ids) {
	      if (name === state.oldName) ids[name].name = state.newName;
	    }
	  }
	};

	var Renamer = function () {
	  function Renamer(binding, oldName, newName) {
	    (0, _classCallCheck3.default)(this, Renamer);

	    this.newName = newName;
	    this.oldName = oldName;
	    this.binding = binding;
	  }

	  Renamer.prototype.maybeConvertFromExportDeclaration = function maybeConvertFromExportDeclaration(parentDeclar) {
	    var exportDeclar = parentDeclar.parentPath.isExportDeclaration() && parentDeclar.parentPath;
	    if (!exportDeclar) return;

	    // build specifiers that point back to this export declaration
	    var isDefault = exportDeclar.isExportDefaultDeclaration();

	    if (isDefault && (parentDeclar.isFunctionDeclaration() || parentDeclar.isClassDeclaration()) && !parentDeclar.node.id) {
	      // Ensure that default class and function exports have a name so they have a identifier to
	      // reference from the export specifier list.
	      parentDeclar.node.id = parentDeclar.scope.generateUidIdentifier("default");
	    }

	    var bindingIdentifiers = parentDeclar.getOuterBindingIdentifiers();
	    var specifiers = [];

	    for (var name in bindingIdentifiers) {
	      var localName = name === this.oldName ? this.newName : name;
	      var exportedName = isDefault ? "default" : name;
	      specifiers.push(t.exportSpecifier(t.identifier(localName), t.identifier(exportedName)));
	    }

	    var aliasDeclar = t.exportNamedDeclaration(null, specifiers);

	    // hoist to the top if it's a function
	    if (parentDeclar.isFunctionDeclaration()) {
	      aliasDeclar._blockHoist = 3;
	    }

	    exportDeclar.insertAfter(aliasDeclar);
	    exportDeclar.replaceWith(parentDeclar.node);
	  };

	  Renamer.prototype.maybeConvertFromClassFunctionDeclaration = function maybeConvertFromClassFunctionDeclaration(path) {
	    return; // TODO

	    // retain the `name` of a class/function declaration

	    if (!path.isFunctionDeclaration() && !path.isClassDeclaration()) return;
	    if (this.binding.kind !== "hoisted") return;

	    path.node.id = t.identifier(this.oldName);
	    path.node._blockHoist = 3;

	    path.replaceWith(t.variableDeclaration("let", [t.variableDeclarator(t.identifier(this.newName), t.toExpression(path.node))]));
	  };

	  Renamer.prototype.maybeConvertFromClassFunctionExpression = function maybeConvertFromClassFunctionExpression(path) {
	    return; // TODO

	    // retain the `name` of a class/function expression

	    if (!path.isFunctionExpression() && !path.isClassExpression()) return;
	    if (this.binding.kind !== "local") return;

	    path.node.id = t.identifier(this.oldName);

	    this.binding.scope.parent.push({
	      id: t.identifier(this.newName)
	    });

	    path.replaceWith(t.assignmentExpression("=", t.identifier(this.newName), path.node));
	  };

	  Renamer.prototype.rename = function rename(block) {
	    var binding = this.binding;
	    var oldName = this.oldName;
	    var newName = this.newName;
	    var scope = binding.scope;
	    var path = binding.path;


	    var parentDeclar = path.find(function (path) {
	      return path.isDeclaration() || path.isFunctionExpression();
	    });
	    if (parentDeclar) {
	      this.maybeConvertFromExportDeclaration(parentDeclar);
	    }

	    scope.traverse(block || scope.block, renameVisitor, this);

	    if (!block) {
	      scope.removeOwnBinding(oldName);
	      scope.bindings[newName] = binding;
	      this.binding.identifier.name = newName;
	    }

	    if (binding.type === "hoisted") {
	      // https://github.com/babel/babel/issues/2435
	      // todo: hoist and convert function to a let
	    }

	    if (parentDeclar) {
	      this.maybeConvertFromClassFunctionDeclaration(parentDeclar);
	      this.maybeConvertFromClassFunctionExpression(parentDeclar);
	    }
	  };

	  return Renamer;
	}();

	exports.default = Renamer;
	module.exports = exports["default"];

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(21);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _keys = __webpack_require__(68);

	var _keys2 = _interopRequireDefault(_keys);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.explode = explode;
	exports.verify = verify;
	exports.merge = merge;

	var _virtualTypes = __webpack_require__(103);

	var virtualTypes = _interopRequireWildcard(_virtualTypes);

	var _babelMessages = __webpack_require__(66);

	var messages = _interopRequireWildcard(_babelMessages);

	var _babelTypes = __webpack_require__(2);

	var t = _interopRequireWildcard(_babelTypes);

	var _clone = __webpack_require__(143);

	var _clone2 = _interopRequireDefault(_clone);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * explode() will take a visitor object with all of the various shorthands
	 * that we support, and validates & normalizes it into a common format, ready
	 * to be used in traversal
	 *
	 * The various shorthands are:
	 * * `Identifier() { ... }` -> `Identifier: { enter() { ... } }`
	 * * `"Identifier|NumericLiteral": { ... }` -> `Identifier: { ... }, NumericLiteral: { ... }`
	 * * Aliases in `babel-types`: e.g. `Property: { ... }` -> `ObjectProperty: { ... }, ClassProperty: { ... }`
	 *
	 * Other normalizations are:
	 * * Visitors of virtual types are wrapped, so that they are only visited when
	 *   their dynamic check passes
	 * * `enter` and `exit` functions are wrapped in arrays, to ease merging of
	 *   visitors
	 */
	function explode(visitor) {
	  if (visitor._exploded) return visitor;
	  visitor._exploded = true;

	  // normalise pipes
	  for (var nodeType in visitor) {
	    if (shouldIgnoreKey(nodeType)) continue;

	    var parts = nodeType.split("|");
	    if (parts.length === 1) continue;

	    var fns = visitor[nodeType];
	    delete visitor[nodeType];

	    for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var part = _ref;

	      visitor[part] = fns;
	    }
	  }

	  // verify data structure
	  verify(visitor);

	  // make sure there's no __esModule type since this is because we're using loose mode
	  // and it sets __esModule to be enumerable on all modules :(
	  delete visitor.__esModule;

	  // ensure visitors are objects
	  ensureEntranceObjects(visitor);

	  // ensure enter/exit callbacks are arrays
	  ensureCallbackArrays(visitor);

	  // add type wrappers
	  for (var _iterator2 = (0, _keys2.default)(visitor), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	    var _ref2;

	    if (_isArray2) {
	      if (_i2 >= _iterator2.length) break;
	      _ref2 = _iterator2[_i2++];
	    } else {
	      _i2 = _iterator2.next();
	      if (_i2.done) break;
	      _ref2 = _i2.value;
	    }

	    var _nodeType3 = _ref2;

	    if (shouldIgnoreKey(_nodeType3)) continue;

	    var wrapper = virtualTypes[_nodeType3];
	    if (!wrapper) continue;

	    // wrap all the functions
	    var _fns2 = visitor[_nodeType3];
	    for (var type in _fns2) {
	      _fns2[type] = wrapCheck(wrapper, _fns2[type]);
	    }

	    // clear it from the visitor
	    delete visitor[_nodeType3];

	    if (wrapper.types) {
	      for (var _iterator4 = wrapper.types, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : (0, _getIterator3.default)(_iterator4);;) {
	        var _ref4;

	        if (_isArray4) {
	          if (_i4 >= _iterator4.length) break;
	          _ref4 = _iterator4[_i4++];
	        } else {
	          _i4 = _iterator4.next();
	          if (_i4.done) break;
	          _ref4 = _i4.value;
	        }

	        var _type = _ref4;

	        // merge the visitor if necessary or just put it back in
	        if (visitor[_type]) {
	          mergePair(visitor[_type], _fns2);
	        } else {
	          visitor[_type] = _fns2;
	        }
	      }
	    } else {
	      mergePair(visitor, _fns2);
	    }
	  }

	  // add aliases
	  for (var _nodeType in visitor) {
	    if (shouldIgnoreKey(_nodeType)) continue;

	    var _fns = visitor[_nodeType];

	    var aliases = t.FLIPPED_ALIAS_KEYS[_nodeType];

	    var deprecratedKey = t.DEPRECATED_KEYS[_nodeType];
	    if (deprecratedKey) {
	      console.trace("Visitor defined for " + _nodeType + " but it has been renamed to " + deprecratedKey);
	      aliases = [deprecratedKey];
	    }

	    if (!aliases) continue;

	    // clear it from the visitor
	    delete visitor[_nodeType];

	    for (var _iterator3 = aliases, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : (0, _getIterator3.default)(_iterator3);;) {
	      var _ref3;

	      if (_isArray3) {
	        if (_i3 >= _iterator3.length) break;
	        _ref3 = _iterator3[_i3++];
	      } else {
	        _i3 = _iterator3.next();
	        if (_i3.done) break;
	        _ref3 = _i3.value;
	      }

	      var alias = _ref3;

	      var existing = visitor[alias];
	      if (existing) {
	        mergePair(existing, _fns);
	      } else {
	        visitor[alias] = (0, _clone2.default)(_fns);
	      }
	    }
	  }

	  for (var _nodeType2 in visitor) {
	    if (shouldIgnoreKey(_nodeType2)) continue;

	    ensureCallbackArrays(visitor[_nodeType2]);
	  }

	  return visitor;
	}

	function verify(visitor) {
	  if (visitor._verified) return;

	  if (typeof visitor === "function") {
	    throw new Error(messages.get("traverseVerifyRootFunction"));
	  }

	  for (var nodeType in visitor) {
	    if (nodeType === "enter" || nodeType === "exit") {
	      validateVisitorMethods(nodeType, visitor[nodeType]);
	    }

	    if (shouldIgnoreKey(nodeType)) continue;

	    if (t.TYPES.indexOf(nodeType) < 0) {
	      throw new Error(messages.get("traverseVerifyNodeType", nodeType));
	    }

	    var visitors = visitor[nodeType];
	    if ((typeof visitors === "undefined" ? "undefined" : (0, _typeof3.default)(visitors)) === "object") {
	      for (var visitorKey in visitors) {
	        if (visitorKey === "enter" || visitorKey === "exit") {
	          // verify that it just contains functions
	          validateVisitorMethods(nodeType + "." + visitorKey, visitors[visitorKey]);
	        } else {
	          throw new Error(messages.get("traverseVerifyVisitorProperty", nodeType, visitorKey));
	        }
	      }
	    }
	  }

	  visitor._verified = true;
	}

	function validateVisitorMethods(path, val) {
	  var fns = [].concat(val);
	  for (var _iterator5 = fns, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : (0, _getIterator3.default)(_iterator5);;) {
	    var _ref5;

	    if (_isArray5) {
	      if (_i5 >= _iterator5.length) break;
	      _ref5 = _iterator5[_i5++];
	    } else {
	      _i5 = _iterator5.next();
	      if (_i5.done) break;
	      _ref5 = _i5.value;
	    }

	    var fn = _ref5;

	    if (typeof fn !== "function") {
	      throw new TypeError("Non-function found defined in " + path + " with type " + (typeof fn === "undefined" ? "undefined" : (0, _typeof3.default)(fn)));
	    }
	  }
	}

	function merge(visitors) {
	  var states = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

	  var rootVisitor = {};

	  for (var i = 0; i < visitors.length; i++) {
	    var visitor = visitors[i];
	    var state = states[i];

	    explode(visitor);

	    for (var type in visitor) {
	      var visitorType = visitor[type];

	      // if we have state then overload the callbacks to take it
	      if (state) visitorType = wrapWithState(visitorType, state);

	      var nodeVisitor = rootVisitor[type] = rootVisitor[type] || {};
	      mergePair(nodeVisitor, visitorType);
	    }
	  }

	  return rootVisitor;
	}

	function wrapWithState(oldVisitor, state) {
	  var newVisitor = {};

	  for (var key in oldVisitor) {
	    var fns = oldVisitor[key];

	    // not an enter/exit array of callbacks
	    if (!Array.isArray(fns)) continue;

	    fns = fns.map(function (fn) {
	      var newFn = function newFn(path) {
	        return fn.call(state, path, state);
	      };
	      newFn.toString = function () {
	        return fn.toString();
	      };
	      return newFn;
	    });

	    newVisitor[key] = fns;
	  }

	  return newVisitor;
	}

	function ensureEntranceObjects(obj) {
	  for (var key in obj) {
	    if (shouldIgnoreKey(key)) continue;

	    var fns = obj[key];
	    if (typeof fns === "function") {
	      obj[key] = { enter: fns };
	    }
	  }
	}

	function ensureCallbackArrays(obj) {
	  if (obj.enter && !Array.isArray(obj.enter)) obj.enter = [obj.enter];
	  if (obj.exit && !Array.isArray(obj.exit)) obj.exit = [obj.exit];
	}

	function wrapCheck(wrapper, fn) {
	  var newFn = function newFn(path) {
	    if (wrapper.checkPath(path)) {
	      return fn.apply(this, arguments);
	    }
	  };
	  newFn.toString = function () {
	    return fn.toString();
	  };
	  return newFn;
	}

	function shouldIgnoreKey(key) {
	  // internal/hidden key
	  if (key[0] === "_") return true;

	  // ignore function keys
	  if (key === "enter" || key === "exit" || key === "shouldSkip") return true;

	  // ignore other options
	  if (key === "blacklist" || key === "noScope" || key === "skipKeys") return true;

	  return false;
	}

	function mergePair(dest, src) {
	  for (var key in src) {
	    dest[key] = [].concat(dest[key] || [], src[key]);
	  }
	}

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _maxSafeInteger = __webpack_require__(154);

	var _maxSafeInteger2 = _interopRequireDefault(_maxSafeInteger);

	var _stringify = __webpack_require__(39);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.toComputedKey = toComputedKey;
	exports.toSequenceExpression = toSequenceExpression;
	exports.toKeyAlias = toKeyAlias;
	exports.toIdentifier = toIdentifier;
	exports.toBindingIdentifierName = toBindingIdentifierName;
	exports.toStatement = toStatement;
	exports.toExpression = toExpression;
	exports.toBlock = toBlock;
	exports.valueToNode = valueToNode;

	var _isPlainObject = __webpack_require__(367);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _isNumber = __webpack_require__(366);

	var _isNumber2 = _interopRequireDefault(_isNumber);

	var _isRegExp = __webpack_require__(368);

	var _isRegExp2 = _interopRequireDefault(_isRegExp);

	var _isString = __webpack_require__(64);

	var _isString2 = _interopRequireDefault(_isString);

	var _index = __webpack_require__(2);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function toComputedKey(node) {
	  var key = arguments.length <= 1 || arguments[1] === undefined ? node.key || node.property : arguments[1];

	  if (!node.computed) {
	    if (t.isIdentifier(key)) key = t.stringLiteral(key.name);
	  }
	  return key;
	}

	/**
	 * Turn an array of statement `nodes` into a `SequenceExpression`.
	 *
	 * Variable declarations are turned into simple assignments and their
	 * declarations hoisted to the top of the current scope.
	 *
	 * Expression statements are just resolved to their expression.
	 */

	function toSequenceExpression(nodes, scope) {
	  if (!nodes || !nodes.length) return;

	  var declars = [];
	  var bailed = false;

	  var result = convert(nodes);
	  if (bailed) return;

	  for (var i = 0; i < declars.length; i++) {
	    scope.push(declars[i]);
	  }

	  return result;

	  function convert(nodes) {
	    var ensureLastUndefined = false;
	    var exprs = [];

	    for (var _iterator = nodes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	      var _ref;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref = _i.value;
	      }

	      var node = _ref;

	      if (t.isExpression(node)) {
	        exprs.push(node);
	      } else if (t.isExpressionStatement(node)) {
	        exprs.push(node.expression);
	      } else if (t.isVariableDeclaration(node)) {
	        if (node.kind !== "var") return bailed = true; // bailed

	        for (var _iterator2 = node.declarations, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : (0, _getIterator3.default)(_iterator2);;) {
	          var _ref2;

	          if (_isArray2) {
	            if (_i2 >= _iterator2.length) break;
	            _ref2 = _iterator2[_i2++];
	          } else {
	            _i2 = _iterator2.next();
	            if (_i2.done) break;
	            _ref2 = _i2.value;
	          }

	          var declar = _ref2;

	          var bindings = t.getBindingIdentifiers(declar);
	          for (var key in bindings) {
	            declars.push({
	              kind: node.kind,
	              id: bindings[key]
	            });
	          }

	          if (declar.init) {
	            exprs.push(t.assignmentExpression("=", declar.id, declar.init));
	          }
	        }

	        ensureLastUndefined = true;
	        continue;
	      } else if (t.isIfStatement(node)) {
	        var consequent = node.consequent ? convert([node.consequent]) : scope.buildUndefinedNode();
	        var alternate = node.alternate ? convert([node.alternate]) : scope.buildUndefinedNode();
	        if (!consequent || !alternate) return bailed = true;

	        exprs.push(t.conditionalExpression(node.test, consequent, alternate));
	      } else if (t.isBlockStatement(node)) {
	        exprs.push(convert(node.body));
	      } else if (t.isEmptyStatement(node)) {
	        // empty statement so ensure the last item is undefined if we're last
	        ensureLastUndefined = true;
	        continue;
	      } else {
	        // bailed, we can't turn this statement into an expression
	        return bailed = true;
	      }

	      ensureLastUndefined = false;
	    }

	    if (ensureLastUndefined || exprs.length === 0) {
	      exprs.push(scope.buildUndefinedNode());
	    }

	    //

	    if (exprs.length === 1) {
	      return exprs[0];
	    } else {
	      return t.sequenceExpression(exprs);
	    }
	  }
	}

	// Can't use import because of cyclic dependency between babel-traverse
	// and this module (babel-types). This require needs to appear after
	// we export the TYPES constant, so we lazy-initialize it before use.
	var traverse = void 0;

	function toKeyAlias(node) {
	  var key = arguments.length <= 1 || arguments[1] === undefined ? node.key : arguments[1];

	  if (!traverse) traverse = __webpack_require__(26).default;

	  var alias = void 0;

	  if (node.kind === "method") {
	    return toKeyAlias.increment() + "";
	  } else if (t.isIdentifier(key)) {
	    alias = key.name;
	  } else if (t.isStringLiteral(key)) {
	    alias = (0, _stringify2.default)(key.value);
	  } else {
	    alias = (0, _stringify2.default)(traverse.removeProperties(t.cloneDeep(key)));
	  }

	  if (node.computed) {
	    alias = "[" + alias + "]";
	  }

	  if (node.static) {
	    alias = "static:" + alias;
	  }

	  return alias;
	}

	toKeyAlias.uid = 0;

	toKeyAlias.increment = function () {
	  if (toKeyAlias.uid >= _maxSafeInteger2.default) {
	    return toKeyAlias.uid = 0;
	  } else {
	    return toKeyAlias.uid++;
	  }
	};

	function toIdentifier(name) {
	  name = name + "";

	  // replace all non-valid identifiers with dashes
	  name = name.replace(/[^a-zA-Z0-9$_]/g, "-");

	  // remove all dashes and numbers from start of name
	  name = name.replace(/^[-0-9]+/, "");

	  // camel case
	  name = name.replace(/[-\s]+(.)?/g, function (match, c) {
	    return c ? c.toUpperCase() : "";
	  });

	  if (!t.isValidIdentifier(name)) {
	    name = "_" + name;
	  }

	  return name || "_";
	}

	function toBindingIdentifierName(name) {
	  name = toIdentifier(name);
	  if (name === "eval" || name === "arguments") name = "_" + name;
	  return name;
	}

	/**
	 * [Please add a description.]
	 * @returns {Object|Boolean}
	 */

	function toStatement(node, ignore) {
	  if (t.isStatement(node)) {
	    return node;
	  }

	  var mustHaveId = false;
	  var newType = void 0;

	  if (t.isClass(node)) {
	    mustHaveId = true;
	    newType = "ClassDeclaration";
	  } else if (t.isFunction(node)) {
	    mustHaveId = true;
	    newType = "FunctionDeclaration";
	  } else if (t.isAssignmentExpression(node)) {
	    return t.expressionStatement(node);
	  }

	  if (mustHaveId && !node.id) {
	    newType = false;
	  }

	  if (!newType) {
	    if (ignore) {
	      return false;
	    } else {
	      throw new Error("cannot turn " + node.type + " to a statement");
	    }
	  }

	  node.type = newType;

	  return node;
	}

	function toExpression(node) {
	  if (t.isExpressionStatement(node)) {
	    node = node.expression;
	  }

	  if (t.isClass(node)) {
	    node.type = "ClassExpression";
	  } else if (t.isFunction(node)) {
	    node.type = "FunctionExpression";
	  }

	  if (t.isExpression(node)) {
	    return node;
	  } else {
	    throw new Error("cannot turn " + node.type + " to an expression");
	  }
	}

	function toBlock(node, parent) {
	  if (t.isBlockStatement(node)) {
	    return node;
	  }

	  if (t.isEmptyStatement(node)) {
	    node = [];
	  }

	  if (!Array.isArray(node)) {
	    if (!t.isStatement(node)) {
	      if (t.isFunction(parent)) {
	        node = t.returnStatement(node);
	      } else {
	        node = t.expressionStatement(node);
	      }
	    }

	    node = [node];
	  }

	  return t.blockStatement(node);
	}

	function valueToNode(value) {
	  // undefined
	  if (value === undefined) {
	    return t.identifier("undefined");
	  }

	  // boolean
	  if (value === true || value === false) {
	    return t.booleanLiteral(value);
	  }

	  // null
	  if (value === null) {
	    return t.nullLiteral();
	  }

	  // strings
	  if ((0, _isString2.default)(value)) {
	    return t.stringLiteral(value);
	  }

	  // numbers
	  if ((0, _isNumber2.default)(value)) {
	    return t.numericLiteral(value);
	  }

	  // regexes
	  if ((0, _isRegExp2.default)(value)) {
	    var pattern = value.source;
	    var flags = value.toString().match(/\/([a-z]+|)$/)[1];
	    return t.regExpLiteral(pattern, flags);
	  }

	  // array
	  if (Array.isArray(value)) {
	    return t.arrayExpression(value.map(t.valueToNode));
	  }

	  // object
	  if ((0, _isPlainObject2.default)(value)) {
	    var props = [];
	    for (var key in value) {
	      var nodeKey = void 0;
	      if (t.isValidIdentifier(key)) {
	        nodeKey = t.identifier(key);
	      } else {
	        nodeKey = t.stringLiteral(key);
	      }
	      props.push(t.objectProperty(nodeKey, t.valueToNode(value[key])));
	    }
	    return t.objectExpression(props);
	  }

	  throw new Error("don't know how to turn this value into a node");
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(2);

	var t = _interopRequireWildcard(_index);

	var _constants = __webpack_require__(70);

	var _index2 = __webpack_require__(19);

	var _index3 = _interopRequireDefault(_index2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	(0, _index3.default)("ArrayExpression", {
	  fields: {
	    elements: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeOrValueType)("null", "Expression", "SpreadElement"))),
	      default: []
	    }
	  },
	  visitor: ["elements"],
	  aliases: ["Expression"]
	}); /* eslint max-len: 0 */

	(0, _index3.default)("AssignmentExpression", {
	  fields: {
	    operator: {
	      validate: (0, _index2.assertValueType)("string")
	    },
	    left: {
	      validate: (0, _index2.assertNodeType)("LVal")
	    },
	    right: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  },
	  builder: ["operator", "left", "right"],
	  visitor: ["left", "right"],
	  aliases: ["Expression"]
	});

	(0, _index3.default)("BinaryExpression", {
	  builder: ["operator", "left", "right"],
	  fields: {
	    operator: {
	      validate: _index2.assertOneOf.apply(undefined, _constants.BINARY_OPERATORS)
	    },
	    left: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    right: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  },
	  visitor: ["left", "right"],
	  aliases: ["Binary", "Expression"]
	});

	(0, _index3.default)("Directive", {
	  visitor: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index2.assertNodeType)("DirectiveLiteral")
	    }
	  }
	});

	(0, _index3.default)("DirectiveLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index2.assertValueType)("string")
	    }
	  }
	});

	(0, _index3.default)("BlockStatement", {
	  builder: ["body", "directives"],
	  visitor: ["directives", "body"],
	  fields: {
	    directives: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
	      default: []
	    },
	    body: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
	    }
	  },
	  aliases: ["Scopable", "BlockParent", "Block", "Statement"]
	});

	(0, _index3.default)("BreakStatement", {
	  visitor: ["label"],
	  fields: {
	    label: {
	      validate: (0, _index2.assertNodeType)("Identifier"),
	      optional: true
	    }
	  },
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
	});

	(0, _index3.default)("CallExpression", {
	  visitor: ["callee", "arguments"],
	  fields: {
	    callee: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    arguments: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
	    }
	  },
	  aliases: ["Expression"]
	});

	(0, _index3.default)("CatchClause", {
	  visitor: ["param", "body"],
	  fields: {
	    param: {
	      validate: (0, _index2.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    }
	  },
	  aliases: ["Scopable"]
	});

	(0, _index3.default)("ConditionalExpression", {
	  visitor: ["test", "consequent", "alternate"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    consequent: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    alternate: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  },
	  aliases: ["Expression", "Conditional"]
	});

	(0, _index3.default)("ContinueStatement", {
	  visitor: ["label"],
	  fields: {
	    label: {
	      validate: (0, _index2.assertNodeType)("Identifier"),
	      optional: true
	    }
	  },
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"]
	});

	(0, _index3.default)("DebuggerStatement", {
	  aliases: ["Statement"]
	});

	(0, _index3.default)("DoWhileStatement", {
	  visitor: ["test", "body"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  },
	  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"]
	});

	(0, _index3.default)("EmptyStatement", {
	  aliases: ["Statement"]
	});

	(0, _index3.default)("ExpressionStatement", {
	  visitor: ["expression"],
	  fields: {
	    expression: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  },
	  aliases: ["Statement", "ExpressionWrapper"]
	});

	(0, _index3.default)("File", {
	  builder: ["program", "comments", "tokens"],
	  visitor: ["program"],
	  fields: {
	    program: {
	      validate: (0, _index2.assertNodeType)("Program")
	    }
	  }
	});

	(0, _index3.default)("ForInStatement", {
	  visitor: ["left", "right", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
	  fields: {
	    left: {
	      validate: (0, _index2.assertNodeType)("VariableDeclaration", "LVal")
	    },
	    right: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index3.default)("ForStatement", {
	  visitor: ["init", "test", "update", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop"],
	  fields: {
	    init: {
	      validate: (0, _index2.assertNodeType)("VariableDeclaration", "Expression"),
	      optional: true
	    },
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression"),
	      optional: true
	    },
	    update: {
	      validate: (0, _index2.assertNodeType)("Expression"),
	      optional: true
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index3.default)("FunctionDeclaration", {
	  builder: ["id", "params", "body", "generator", "async"],
	  visitor: ["id", "params", "body", "returnType", "typeParameters"],
	  fields: {
	    id: {
	      validate: (0, _index2.assertNodeType)("Identifier")
	    },
	    params: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    generator: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    },
	    async: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    }
	  },
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Statement", "Pureish", "Declaration"]
	});

	(0, _index3.default)("FunctionExpression", {
	  inherits: "FunctionDeclaration",
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
	  fields: {
	    id: {
	      validate: (0, _index2.assertNodeType)("Identifier"),
	      optional: true
	    },
	    params: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("LVal")))
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    generator: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    },
	    async: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    }
	  }
	});

	(0, _index3.default)("Identifier", {
	  builder: ["name"],
	  visitor: ["typeAnnotation"],
	  aliases: ["Expression", "LVal"],
	  fields: {
	    name: {
	      validate: function validate(node, key, val) {
	        if (!t.isValidIdentifier(val)) {
	          // todo
	        }
	      }
	    },
	    decorators: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index3.default)("IfStatement", {
	  visitor: ["test", "consequent", "alternate"],
	  aliases: ["Statement", "Conditional"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    consequent: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    },
	    alternate: {
	      optional: true,
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index3.default)("LabeledStatement", {
	  visitor: ["label", "body"],
	  aliases: ["Statement"],
	  fields: {
	    label: {
	      validate: (0, _index2.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index3.default)("StringLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index2.assertValueType)("string")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});

	(0, _index3.default)("NumericLiteral", {
	  builder: ["value"],
	  deprecatedAlias: "NumberLiteral",
	  fields: {
	    value: {
	      validate: (0, _index2.assertValueType)("number")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});

	(0, _index3.default)("NullLiteral", {
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});

	(0, _index3.default)("BooleanLiteral", {
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index2.assertValueType)("boolean")
	    }
	  },
	  aliases: ["Expression", "Pureish", "Literal", "Immutable"]
	});

	(0, _index3.default)("RegExpLiteral", {
	  builder: ["pattern", "flags"],
	  deprecatedAlias: "RegexLiteral",
	  aliases: ["Expression", "Literal"],
	  fields: {
	    pattern: {
	      validate: (0, _index2.assertValueType)("string")
	    },
	    flags: {
	      validate: (0, _index2.assertValueType)("string"),
	      default: ""
	    }
	  }
	});

	(0, _index3.default)("LogicalExpression", {
	  builder: ["operator", "left", "right"],
	  visitor: ["left", "right"],
	  aliases: ["Binary", "Expression"],
	  fields: {
	    operator: {
	      validate: _index2.assertOneOf.apply(undefined, _constants.LOGICAL_OPERATORS)
	    },
	    left: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    right: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index3.default)("MemberExpression", {
	  builder: ["object", "property", "computed"],
	  visitor: ["object", "property"],
	  aliases: ["Expression", "LVal"],
	  fields: {
	    object: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    property: {
	      validate: function validate(node, key, val) {
	        var expectedType = node.computed ? "Expression" : "Identifier";
	        (0, _index2.assertNodeType)(expectedType)(node, key, val);
	      }
	    },
	    computed: {
	      default: false
	    }
	  }
	});

	(0, _index3.default)("NewExpression", {
	  visitor: ["callee", "arguments"],
	  aliases: ["Expression"],
	  fields: {
	    callee: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    arguments: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression", "SpreadElement")))
	    }
	  }
	});

	(0, _index3.default)("Program", {
	  visitor: ["directives", "body"],
	  builder: ["body", "directives"],
	  fields: {
	    directives: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Directive"))),
	      default: []
	    },
	    body: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
	    }
	  },
	  aliases: ["Scopable", "BlockParent", "Block", "FunctionParent"]
	});

	(0, _index3.default)("ObjectExpression", {
	  visitor: ["properties"],
	  aliases: ["Expression"],
	  fields: {
	    properties: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("ObjectMethod", "ObjectProperty", "SpreadProperty")))
	    }
	  }
	});

	(0, _index3.default)("ObjectMethod", {
	  builder: ["kind", "key", "params", "body", "computed"],
	  fields: {
	    kind: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("method", "get", "set")),
	      default: "method"
	    },
	    computed: {
	      validate: (0, _index2.assertValueType)("boolean"),
	      default: false
	    },
	    key: {
	      validate: function validate(node, key, val) {
	        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
	        _index2.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
	      }
	    },
	    decorators: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    generator: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    },
	    async: {
	      default: false,
	      validate: (0, _index2.assertValueType)("boolean")
	    }
	  },
	  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
	  aliases: ["UserWhitespacable", "Function", "Scopable", "BlockParent", "FunctionParent", "Method", "ObjectMember"]
	});

	(0, _index3.default)("ObjectProperty", {
	  builder: ["key", "value", "computed", "shorthand", "decorators"],
	  fields: {
	    computed: {
	      validate: (0, _index2.assertValueType)("boolean"),
	      default: false
	    },
	    key: {
	      validate: function validate(node, key, val) {
	        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
	        _index2.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
	      }
	    },
	    value: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    shorthand: {
	      validate: (0, _index2.assertValueType)("boolean"),
	      default: false
	    },
	    decorators: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator"))),
	      optional: true
	    }
	  },
	  visitor: ["key", "value", "decorators"],
	  aliases: ["UserWhitespacable", "Property", "ObjectMember"]
	});

	(0, _index3.default)("RestElement", {
	  visitor: ["argument", "typeAnnotation"],
	  aliases: ["LVal"],
	  fields: {
	    argument: {
	      validate: (0, _index2.assertNodeType)("LVal")
	    },
	    decorators: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index3.default)("ReturnStatement", {
	  visitor: ["argument"],
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
	  fields: {
	    argument: {
	      validate: (0, _index2.assertNodeType)("Expression"),
	      optional: true
	    }
	  }
	});

	(0, _index3.default)("SequenceExpression", {
	  visitor: ["expressions"],
	  fields: {
	    expressions: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Expression")))
	    }
	  },
	  aliases: ["Expression"]
	});

	(0, _index3.default)("SwitchCase", {
	  visitor: ["test", "consequent"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression"),
	      optional: true
	    },
	    consequent: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("Statement")))
	    }
	  }
	});

	(0, _index3.default)("SwitchStatement", {
	  visitor: ["discriminant", "cases"],
	  aliases: ["Statement", "BlockParent", "Scopable"],
	  fields: {
	    discriminant: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    cases: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("SwitchCase")))
	    }
	  }
	});

	(0, _index3.default)("ThisExpression", {
	  aliases: ["Expression"]
	});

	(0, _index3.default)("ThrowStatement", {
	  visitor: ["argument"],
	  aliases: ["Statement", "Terminatorless", "CompletionStatement"],
	  fields: {
	    argument: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  }
	});

	// todo: at least handler or finalizer should be set to be valid
	(0, _index3.default)("TryStatement", {
	  visitor: ["block", "handler", "finalizer"],
	  aliases: ["Statement"],
	  fields: {
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    handler: {
	      optional: true,
	      handler: (0, _index2.assertNodeType)("BlockStatement")
	    },
	    finalizer: {
	      optional: true,
	      validate: (0, _index2.assertNodeType)("BlockStatement")
	    }
	  }
	});

	(0, _index3.default)("UnaryExpression", {
	  builder: ["operator", "argument", "prefix"],
	  fields: {
	    prefix: {
	      default: true
	    },
	    argument: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    operator: {
	      validate: _index2.assertOneOf.apply(undefined, _constants.UNARY_OPERATORS)
	    }
	  },
	  visitor: ["argument"],
	  aliases: ["UnaryLike", "Expression"]
	});

	(0, _index3.default)("UpdateExpression", {
	  builder: ["operator", "argument", "prefix"],
	  fields: {
	    prefix: {
	      default: false
	    },
	    argument: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    operator: {
	      validate: _index2.assertOneOf.apply(undefined, _constants.UPDATE_OPERATORS)
	    }
	  },
	  visitor: ["argument"],
	  aliases: ["Expression"]
	});

	(0, _index3.default)("VariableDeclaration", {
	  builder: ["kind", "declarations"],
	  visitor: ["declarations"],
	  aliases: ["Statement", "Declaration"],
	  fields: {
	    kind: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("string"), (0, _index2.assertOneOf)("var", "let", "const"))
	    },
	    declarations: {
	      validate: (0, _index2.chain)((0, _index2.assertValueType)("array"), (0, _index2.assertEach)((0, _index2.assertNodeType)("VariableDeclarator")))
	    }
	  }
	});

	(0, _index3.default)("VariableDeclarator", {
	  visitor: ["id", "init"],
	  fields: {
	    id: {
	      validate: (0, _index2.assertNodeType)("LVal")
	    },
	    init: {
	      optional: true,
	      validate: (0, _index2.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index3.default)("WhileStatement", {
	  visitor: ["test", "body"],
	  aliases: ["Statement", "BlockParent", "Loop", "While", "Scopable"],
	  fields: {
	    test: {
	      validate: (0, _index2.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
	    }
	  }
	});

	(0, _index3.default)("WithStatement", {
	  visitor: ["object", "body"],
	  aliases: ["Statement"],
	  fields: {
	    object: {
	      object: (0, _index2.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index2.assertNodeType)("BlockStatement", "Statement")
	    }
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("AssignmentPattern", {
	  visitor: ["left", "right"],
	  aliases: ["Pattern", "LVal"],
	  fields: {
	    left: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    right: {
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	}); /* eslint max-len: 0 */

	(0, _index2.default)("ArrayPattern", {
	  visitor: ["elements", "typeAnnotation"],
	  aliases: ["Pattern", "LVal"],
	  fields: {
	    elements: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Expression")))
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("ArrowFunctionExpression", {
	  builder: ["params", "body", "async"],
	  visitor: ["params", "body", "returnType"],
	  aliases: ["Scopable", "Function", "BlockParent", "FunctionParent", "Expression", "Pureish"],
	  fields: {
	    params: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("LVal")))
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("BlockStatement", "Expression")
	    },
	    async: {
	      validate: (0, _index.assertValueType)("boolean"),
	      default: false
	    }
	  }
	});

	(0, _index2.default)("ClassBody", {
	  visitor: ["body"],
	  fields: {
	    body: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ClassMethod", "ClassProperty")))
	    }
	  }
	});

	(0, _index2.default)("ClassDeclaration", {
	  builder: ["id", "superClass", "body", "decorators"],
	  visitor: ["id", "body", "superClass", "mixins", "typeParameters", "superTypeParameters", "implements", "decorators"],
	  aliases: ["Scopable", "Class", "Statement", "Declaration", "Pureish"],
	  fields: {
	    id: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("ClassBody")
	    },
	    superClass: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("ClassExpression", {
	  inherits: "ClassDeclaration",
	  aliases: ["Scopable", "Class", "Expression", "Pureish"],
	  fields: {
	    id: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("ClassBody")
	    },
	    superClass: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("ExportAllDeclaration", {
	  visitor: ["source"],
	  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
	  fields: {
	    source: {
	      validate: (0, _index.assertNodeType)("StringLiteral")
	    }
	  }
	});

	(0, _index2.default)("ExportDefaultDeclaration", {
	  visitor: ["declaration"],
	  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
	  fields: {
	    declaration: {
	      validate: (0, _index.assertNodeType)("FunctionDeclaration", "ClassDeclaration", "Expression")
	    }
	  }
	});

	(0, _index2.default)("ExportNamedDeclaration", {
	  visitor: ["declaration", "specifiers", "source"],
	  aliases: ["Statement", "Declaration", "ModuleDeclaration", "ExportDeclaration"],
	  fields: {
	    declaration: {
	      validate: (0, _index.assertNodeType)("Declaration"),
	      optional: true
	    },
	    specifiers: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ExportSpecifier")))
	    },
	    source: {
	      validate: (0, _index.assertNodeType)("StringLiteral"),
	      optional: true
	    }
	  }
	});

	(0, _index2.default)("ExportSpecifier", {
	  visitor: ["local", "exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    exported: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("ForOfStatement", {
	  visitor: ["left", "right", "body"],
	  aliases: ["Scopable", "Statement", "For", "BlockParent", "Loop", "ForXStatement"],
	  fields: {
	    left: {
	      validate: (0, _index.assertNodeType)("VariableDeclaration", "LVal")
	    },
	    right: {
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("Statement")
	    }
	  }
	});

	(0, _index2.default)("ImportDeclaration", {
	  visitor: ["specifiers", "source"],
	  aliases: ["Statement", "Declaration", "ModuleDeclaration"],
	  fields: {
	    specifiers: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier")))
	    },
	    source: {
	      validate: (0, _index.assertNodeType)("StringLiteral")
	    }
	  }
	});

	(0, _index2.default)("ImportDefaultSpecifier", {
	  visitor: ["local"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("ImportNamespaceSpecifier", {
	  visitor: ["local"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("ImportSpecifier", {
	  visitor: ["local", "imported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    local: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    },
	    imported: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("MetaProperty", {
	  visitor: ["meta", "property"],
	  aliases: ["Expression"],
	  fields: {
	    // todo: limit to new.target
	    meta: {
	      validate: (0, _index.assertValueType)("string")
	    },
	    property: {
	      validate: (0, _index.assertValueType)("string")
	    }
	  }
	});

	(0, _index2.default)("ClassMethod", {
	  aliases: ["Function", "Scopable", "BlockParent", "FunctionParent", "Method"],
	  builder: ["kind", "key", "params", "body", "computed", "static"],
	  visitor: ["key", "params", "body", "decorators", "returnType", "typeParameters"],
	  fields: {
	    kind: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("string"), (0, _index.assertOneOf)("get", "set", "method", "constructor")),
	      default: "method"
	    },
	    computed: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    },
	    static: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    },
	    key: {
	      validate: function validate(node, key, val) {
	        var expectedTypes = node.computed ? ["Expression"] : ["Identifier", "StringLiteral", "NumericLiteral"];
	        _index.assertNodeType.apply(undefined, expectedTypes)(node, key, val);
	      }
	    },
	    params: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("LVal")))
	    },
	    body: {
	      validate: (0, _index.assertNodeType)("BlockStatement")
	    },
	    generator: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    },
	    async: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    }
	  }
	});

	(0, _index2.default)("ObjectPattern", {
	  visitor: ["properties", "typeAnnotation"],
	  aliases: ["Pattern", "LVal"],
	  fields: {
	    properties: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("RestProperty", "Property")))
	    },
	    decorators: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Decorator")))
	    }
	  }
	});

	(0, _index2.default)("SpreadElement", {
	  visitor: ["argument"],
	  aliases: ["UnaryLike"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("Super", {
	  aliases: ["Expression"]
	});

	(0, _index2.default)("TaggedTemplateExpression", {
	  visitor: ["tag", "quasi"],
	  aliases: ["Expression"],
	  fields: {
	    tag: {
	      validate: (0, _index.assertNodeType)("Expression")
	    },
	    quasi: {
	      validate: (0, _index.assertNodeType)("TemplateLiteral")
	    }
	  }
	});

	(0, _index2.default)("TemplateElement", {
	  builder: ["value", "tail"],
	  fields: {
	    value: {
	      // todo: flatten `raw` into main node
	    },
	    tail: {
	      validate: (0, _index.assertValueType)("boolean"),
	      default: false
	    }
	  }
	});

	(0, _index2.default)("TemplateLiteral", {
	  visitor: ["quasis", "expressions"],
	  aliases: ["Expression", "Literal"],
	  fields: {
	    quasis: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("TemplateElement")))
	    },
	    expressions: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("Expression")))
	    }
	  }
	});

	(0, _index2.default)("YieldExpression", {
	  builder: ["argument", "delegate"],
	  visitor: ["argument"],
	  aliases: ["Expression", "Terminatorless"],
	  fields: {
	    delegate: {
	      validate: (0, _index.assertValueType)("boolean"),
	      default: false
	    },
	    argument: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("AwaitExpression", {
	  builder: ["argument"],
	  visitor: ["argument"],
	  aliases: ["Expression", "Terminatorless"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("BindExpression", {
	  visitor: ["object", "callee"],
	  aliases: ["Expression"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("Decorator", {
	  visitor: ["expression"],
	  fields: {
	    expression: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("DoExpression", {
	  visitor: ["body"],
	  aliases: ["Expression"],
	  fields: {
	    body: {
	      validate: (0, _index.assertNodeType)("BlockStatement")
	    }
	  }
	});

	(0, _index2.default)("ExportDefaultSpecifier", {
	  visitor: ["exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    exported: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("ExportNamespaceSpecifier", {
	  visitor: ["exported"],
	  aliases: ["ModuleSpecifier"],
	  fields: {
	    exported: {
	      validate: (0, _index.assertNodeType)("Identifier")
	    }
	  }
	});

	(0, _index2.default)("RestProperty", {
	  visitor: ["argument"],
	  aliases: ["UnaryLike"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("LVal")
	    }
	  }
	});

	(0, _index2.default)("SpreadProperty", {
	  visitor: ["argument"],
	  aliases: ["UnaryLike"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("AnyTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("ArrayTypeAnnotation", {
	  visitor: ["elementType"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("BooleanTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("BooleanLiteralTypeAnnotation", {
	  aliases: ["Flow"],
	  fields: {}
	});

	(0, _index2.default)("NullLiteralTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

	(0, _index2.default)("ClassImplements", {
	  visitor: ["id", "typeParameters"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("ClassProperty", {
	  visitor: ["key", "value", "typeAnnotation", "decorators"],
	  aliases: ["Flow", "Property"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("DeclareClass", {
	  visitor: ["id", "typeParameters", "extends", "body"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("DeclareFunction", {
	  visitor: ["id"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("DeclareInterface", {
	  visitor: ["id", "typeParameters", "extends", "body"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("DeclareModule", {
	  visitor: ["id", "body"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("DeclareTypeAlias", {
	  visitor: ["id", "typeParameters", "right"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("DeclareVariable", {
	  visitor: ["id"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("ExistentialTypeParam", {
	  aliases: ["Flow"]
	});

	(0, _index2.default)("FunctionTypeAnnotation", {
	  visitor: ["typeParameters", "params", "rest", "returnType"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("FunctionTypeParam", {
	  visitor: ["name", "typeAnnotation"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("GenericTypeAnnotation", {
	  visitor: ["id", "typeParameters"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("InterfaceExtends", {
	  visitor: ["id", "typeParameters"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("InterfaceDeclaration", {
	  visitor: ["id", "typeParameters", "extends", "body"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("IntersectionTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("MixedTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"]
	});

	(0, _index2.default)("NullableTypeAnnotation", {
	  visitor: ["typeAnnotation"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("NumericLiteralTypeAnnotation", {
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("NumberTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("StringLiteralTypeAnnotation", {
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("StringTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("ThisTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {}
	});

	(0, _index2.default)("TupleTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("TypeofTypeAnnotation", {
	  visitor: ["argument"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("TypeAlias", {
	  visitor: ["id", "typeParameters", "right"],
	  aliases: ["Flow", "FlowDeclaration", "Statement", "Declaration"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("TypeAnnotation", {
	  visitor: ["typeAnnotation"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("TypeCastExpression", {
	  visitor: ["expression", "typeAnnotation"],
	  aliases: ["Flow", "ExpressionWrapper", "Expression"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("TypeParameter", {
	  visitor: ["bound"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("TypeParameterDeclaration", {
	  visitor: ["params"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("TypeParameterInstantiation", {
	  visitor: ["params"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("ObjectTypeAnnotation", {
	  visitor: ["properties", "indexers", "callProperties"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("ObjectTypeCallProperty", {
	  visitor: ["value"],
	  aliases: ["Flow", "UserWhitespacable"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("ObjectTypeIndexer", {
	  visitor: ["id", "key", "value"],
	  aliases: ["Flow", "UserWhitespacable"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("ObjectTypeProperty", {
	  visitor: ["key", "value"],
	  aliases: ["Flow", "UserWhitespacable"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("QualifiedTypeIdentifier", {
	  visitor: ["id", "qualification"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("UnionTypeAnnotation", {
	  visitor: ["types"],
	  aliases: ["Flow"],
	  fields: {
	    // todo
	  }
	});

	(0, _index2.default)("VoidTypeAnnotation", {
	  aliases: ["Flow", "FlowBaseAnnotation"],
	  fields: {
	    // todo
	  }
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(19);

	__webpack_require__(184);

	__webpack_require__(185);

	__webpack_require__(187);

	__webpack_require__(189);

	__webpack_require__(190);

	__webpack_require__(186);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("JSXAttribute", {
	  visitor: ["name", "value"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    name: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXNamespacedName")
	    },
	    value: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("JSXElement", "StringLiteral", "JSXExpressionContainer")
	    }
	  }
	});

	(0, _index2.default)("JSXClosingElement", {
	  visitor: ["name"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    name: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
	    }
	  }
	});

	(0, _index2.default)("JSXElement", {
	  builder: ["openingElement", "closingElement", "children", "selfClosing"],
	  visitor: ["openingElement", "children", "closingElement"],
	  aliases: ["JSX", "Immutable", "Expression"],
	  fields: {
	    openingElement: {
	      validate: (0, _index.assertNodeType)("JSXOpeningElement")
	    },
	    closingElement: {
	      optional: true,
	      validate: (0, _index.assertNodeType)("JSXClosingElement")
	    },
	    children: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("JSXText", "JSXExpressionContainer", "JSXElement")))
	    }
	  }
	});

	(0, _index2.default)("JSXEmptyExpression", {
	  aliases: ["JSX", "Expression"]
	});

	(0, _index2.default)("JSXExpressionContainer", {
	  visitor: ["expression"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    expression: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("JSXIdentifier", {
	  builder: ["name"],
	  aliases: ["JSX", "Expression"],
	  fields: {
	    name: {
	      validate: (0, _index.assertValueType)("string")
	    }
	  }
	});

	(0, _index2.default)("JSXMemberExpression", {
	  visitor: ["object", "property"],
	  aliases: ["JSX", "Expression"],
	  fields: {
	    object: {
	      validate: (0, _index.assertNodeType)("JSXMemberExpression", "JSXIdentifier")
	    },
	    property: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier")
	    }
	  }
	});

	(0, _index2.default)("JSXNamespacedName", {
	  visitor: ["namespace", "name"],
	  aliases: ["JSX"],
	  fields: {
	    namespace: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier")
	    },
	    name: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier")
	    }
	  }
	});

	(0, _index2.default)("JSXOpeningElement", {
	  builder: ["name", "attributes", "selfClosing"],
	  visitor: ["name", "attributes"],
	  aliases: ["JSX", "Immutable"],
	  fields: {
	    name: {
	      validate: (0, _index.assertNodeType)("JSXIdentifier", "JSXMemberExpression")
	    },
	    selfClosing: {
	      default: false,
	      validate: (0, _index.assertValueType)("boolean")
	    },
	    attributes: {
	      validate: (0, _index.chain)((0, _index.assertValueType)("array"), (0, _index.assertEach)((0, _index.assertNodeType)("JSXAttribute", "JSXSpreadAttribute")))
	    }
	  }
	});

	(0, _index2.default)("JSXSpreadAttribute", {
	  visitor: ["argument"],
	  aliases: ["JSX"],
	  fields: {
	    argument: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

	(0, _index2.default)("JSXText", {
	  aliases: ["JSX", "Immutable"],
	  builder: ["value"],
	  fields: {
	    value: {
	      validate: (0, _index.assertValueType)("string")
	    }
	  }
	});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(19);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _index2.default)("Noop", {
	  visitor: []
	});

	(0, _index2.default)("ParenthesizedExpression", {
	  visitor: ["expression"],
	  aliases: ["Expression", "ExpressionWrapper"],
	  fields: {
	    expression: {
	      validate: (0, _index.assertNodeType)("Expression")
	    }
	  }
	});

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.createUnionTypeAnnotation = createUnionTypeAnnotation;
	exports.removeTypeDuplicates = removeTypeDuplicates;
	exports.createTypeAnnotationBasedOnTypeof = createTypeAnnotationBasedOnTypeof;

	var _index = __webpack_require__(2);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	/**
	 * Takes an array of `types` and flattens them, removing duplicates and
	 * returns a `UnionTypeAnnotation` node containg them.
	 */

	function createUnionTypeAnnotation(types) {
	  var flattened = removeTypeDuplicates(types);

	  if (flattened.length === 1) {
	    return flattened[0];
	  } else {
	    return t.unionTypeAnnotation(flattened);
	  }
	}

	/**
	 * Dedupe type annotations.
	 */

	function removeTypeDuplicates(nodes) {
	  var generics = {};
	  var bases = {};

	  // store union type groups to circular references
	  var typeGroups = [];

	  var types = [];

	  for (var i = 0; i < nodes.length; i++) {
	    var node = nodes[i];
	    if (!node) continue;

	    // detect duplicates
	    if (types.indexOf(node) >= 0) {
	      continue;
	    }

	    // this type matches anything
	    if (t.isAnyTypeAnnotation(node)) {
	      return [node];
	    }

	    //
	    if (t.isFlowBaseAnnotation(node)) {
	      bases[node.type] = node;
	      continue;
	    }

	    //
	    if (t.isUnionTypeAnnotation(node)) {
	      if (typeGroups.indexOf(node.types) < 0) {
	        nodes = nodes.concat(node.types);
	        typeGroups.push(node.types);
	      }
	      continue;
	    }

	    // find a matching generic type and merge and deduplicate the type parameters
	    if (t.isGenericTypeAnnotation(node)) {
	      var name = node.id.name;

	      if (generics[name]) {
	        var existing = generics[name];
	        if (existing.typeParameters) {
	          if (node.typeParameters) {
	            existing.typeParameters.params = removeTypeDuplicates(existing.typeParameters.params.concat(node.typeParameters.params));
	          }
	        } else {
	          existing = node.typeParameters;
	        }
	      } else {
	        generics[name] = node;
	      }

	      continue;
	    }

	    types.push(node);
	  }

	  // add back in bases
	  for (var type in bases) {
	    types.push(bases[type]);
	  }

	  // add back in generics
	  for (var _name in generics) {
	    types.push(generics[_name]);
	  }

	  return types;
	}

	/**
	 * Create a type anotation based on typeof expression.
	 */

	function createTypeAnnotationBasedOnTypeof(type) {
	  if (type === "string") {
	    return t.stringTypeAnnotation();
	  } else if (type === "number") {
	    return t.numberTypeAnnotation();
	  } else if (type === "undefined") {
	    return t.voidTypeAnnotation();
	  } else if (type === "boolean") {
	    return t.booleanTypeAnnotation();
	  } else if (type === "function") {
	    return t.genericTypeAnnotation(t.identifier("Function"));
	  } else if (type === "object") {
	    return t.genericTypeAnnotation(t.identifier("Object"));
	  } else if (type === "symbol") {
	    return t.genericTypeAnnotation(t.identifier("Symbol"));
	  } else {
	    throw new Error("Invalid typeof value");
	  }
	}

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.isReactComponent = undefined;
	exports.isCompatTag = isCompatTag;
	exports.buildChildren = buildChildren;

	var _index = __webpack_require__(2);

	var t = _interopRequireWildcard(_index);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var isReactComponent = exports.isReactComponent = t.buildMatchMemberExpression("React.Component");

	function isCompatTag(tagName) {
	  return !!tagName && /^[a-z]|\-/.test(tagName);
	}

	function cleanJSXElementLiteralChild(child, args) {
	  var lines = child.value.split(/\r\n|\n|\r/);

	  var lastNonEmptyLine = 0;

	  for (var i = 0; i < lines.length; i++) {
	    if (lines[i].match(/[^ \t]/)) {
	      lastNonEmptyLine = i;
	    }
	  }

	  var str = "";

	  for (var _i = 0; _i < lines.length; _i++) {
	    var line = lines[_i];

	    var isFirstLine = _i === 0;
	    var isLastLine = _i === lines.length - 1;
	    var isLastNonEmptyLine = _i === lastNonEmptyLine;

	    // replace rendered whitespace tabs with spaces
	    var trimmedLine = line.replace(/\t/g, " ");

	    // trim whitespace touching a newline
	    if (!isFirstLine) {
	      trimmedLine = trimmedLine.replace(/^[ ]+/, "");
	    }

	    // trim whitespace touching an endline
	    if (!isLastLine) {
	      trimmedLine = trimmedLine.replace(/[ ]+$/, "");
	    }

	    if (trimmedLine) {
	      if (!isLastNonEmptyLine) {
	        trimmedLine += " ";
	      }

	      str += trimmedLine;
	    }
	  }

	  if (str) args.push(t.stringLiteral(str));
	}

	function buildChildren(node) {
	  var elems = [];

	  for (var i = 0; i < node.children.length; i++) {
	    var child = node.children[i];

	    if (t.isJSXText(child)) {
	      cleanJSXElementLiteralChild(child, elems);
	      continue;
	    }

	    if (t.isJSXExpressionContainer(child)) child = child.expression;
	    if (t.isJSXEmptyExpression(child)) continue;

	    elems.push(child);
	  }

	  return elems;
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	exports.isBinding = isBinding;
	exports.isReferenced = isReferenced;
	exports.isValidIdentifier = isValidIdentifier;
	exports.isLet = isLet;
	exports.isBlockScoped = isBlockScoped;
	exports.isVar = isVar;
	exports.isSpecifierDefault = isSpecifierDefault;
	exports.isScope = isScope;
	exports.isImmutable = isImmutable;

	var _retrievers = __webpack_require__(105);

	var _esutils = __webpack_require__(91);

	var _esutils2 = _interopRequireDefault(_esutils);

	var _index = __webpack_require__(2);

	var t = _interopRequireWildcard(_index);

	var _constants = __webpack_require__(70);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Check if the input `node` is a binding identifier.
	 */

	/* eslint indent: 0 */

	function isBinding(node, parent) {
	  var keys = _retrievers.getBindingIdentifiers.keys[parent.type];
	  if (keys) {
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var val = parent[key];
	      if (Array.isArray(val)) {
	        if (val.indexOf(node) >= 0) return true;
	      } else {
	        if (val === node) return true;
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Check if the input `node` is a reference to a bound variable.
	 */

	function isReferenced(node, parent) {
	  switch (parent.type) {
	    // yes: object::NODE
	    // yes: NODE::callee
	    case "BindExpression":
	      return parent.object === node || parent.callee === node;

	    // yes: PARENT[NODE]
	    // yes: NODE.child
	    // no: parent.NODE
	    case "MemberExpression":
	    case "JSXMemberExpression":
	      if (parent.property === node && parent.computed) {
	        return true;
	      } else if (parent.object === node) {
	        return true;
	      } else {
	        return false;
	      }

	    // no: new.NODE
	    // no: NODE.target
	    case "MetaProperty":
	      return false;

	    // yes: { [NODE]: "" }
	    // yes: { NODE }
	    // no: { NODE: "" }
	    case "ObjectProperty":
	      if (parent.key === node) {
	        return parent.computed;
	      }

	    // no: let NODE = init;
	    // yes: let id = NODE;
	    case "VariableDeclarator":
	      return parent.id !== node;

	    // no: function NODE() {}
	    // no: function foo(NODE) {}
	    case "ArrowFunctionExpression":
	    case "FunctionDeclaration":
	    case "FunctionExpression":
	      for (var _iterator = parent.params, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
	        var _ref;

	        if (_isArray) {
	          if (_i >= _iterator.length) break;
	          _ref = _iterator[_i++];
	        } else {
	          _i = _iterator.next();
	          if (_i.done) break;
	          _ref = _i.value;
	        }

	        var param = _ref;

	        if (param === node) return false;
	      }

	      return parent.id !== node;

	    // no: export { foo as NODE };
	    // yes: export { NODE as foo };
	    // no: export { NODE as foo } from "foo";
	    case "ExportSpecifier":
	      if (parent.source) {
	        return false;
	      } else {
	        return parent.local === node;
	      }

	    // no: export NODE from "foo";
	    // no: export * as NODE from "foo";
	    case "ExportNamespaceSpecifier":
	    case "ExportDefaultSpecifier":
	      return false;

	    // no: <div NODE="foo" />
	    case "JSXAttribute":
	      return parent.name !== node;

	    // no: class { NODE = value; }
	    // yes: class { key = NODE; }
	    case "ClassProperty":
	      return parent.value === node;

	    // no: import NODE from "foo";
	    // no: import * as NODE from "foo";
	    // no: import { NODE as foo } from "foo";
	    // no: import { foo as NODE } from "foo";
	    // no: import NODE from "bar";
	    case "ImportDefaultSpecifier":
	    case "ImportNamespaceSpecifier":
	    case "ImportSpecifier":
	      return false;

	    // no: class NODE {}
	    case "ClassDeclaration":
	    case "ClassExpression":
	      return parent.id !== node;

	    // yes: class { [NODE]() {} }
	    case "ClassMethod":
	    case "ObjectMethod":
	      return parent.key === node && parent.computed;

	    // no: NODE: for (;;) {}
	    case "LabeledStatement":
	      return false;

	    // no: try {} catch (NODE) {}
	    case "CatchClause":
	      return parent.param !== node;

	    // no: function foo(...NODE) {}
	    case "RestElement":
	      return false;

	    // yes: left = NODE;
	    // no: NODE = right;
	    case "AssignmentExpression":
	      return parent.right === node;

	    // no: [NODE = foo] = [];
	    // yes: [foo = NODE] = [];
	    case "AssignmentPattern":
	      return parent.right === node;

	    // no: [NODE] = [];
	    // no: ({ NODE }) = [];
	    case "ObjectPattern":
	    case "ArrayPattern":
	      return false;
	  }

	  return true;
	}

	/**
	 * Check if the input `name` is a valid identifier name
	 * and isn't a reserved word.
	 */

	function isValidIdentifier(name) {
	  if (typeof name !== "string" || _esutils2.default.keyword.isReservedWordES6(name, true)) {
	    return false;
	  } else {
	    return _esutils2.default.keyword.isIdentifierNameES6(name);
	  }
	}

	/**
	 * Check if the input `node` is a `let` variable declaration.
	 */

	function isLet(node) {
	  return t.isVariableDeclaration(node) && (node.kind !== "var" || node[_constants.BLOCK_SCOPED_SYMBOL]);
	}

	/**
	 * Check if the input `node` is block scoped.
	 */

	function isBlockScoped(node) {
	  return t.isFunctionDeclaration(node) || t.isClassDeclaration(node) || t.isLet(node);
	}

	/**
	 * Check if the input `node` is a variable declaration.
	 */

	function isVar(node) {
	  return t.isVariableDeclaration(node, { kind: "var" }) && !node[_constants.BLOCK_SCOPED_SYMBOL];
	}

	/**
	 * Check if the input `specifier` is a `default` import or export.
	 */

	function isSpecifierDefault(specifier) {
	  return t.isImportDefaultSpecifier(specifier) || t.isIdentifier(specifier.imported || specifier.exported, { name: "default" });
	}

	/**
	 * Check if the input `node` is a scope.
	 */

	function isScope(node, parent) {
	  if (t.isBlockStatement(node) && t.isFunction(parent, { body: node })) {
	    return false;
	  }

	  return t.isScopable(node);
	}

	/**
	 * Check if the input `node` is definitely immutable.
	 */

	function isImmutable(node) {
	  if (t.isType(node.type, "Immutable")) return true;

	  if (t.isIdentifier(node)) {
	    if (node.name === "undefined") {
	      // immutable!
	      return true;
	    } else {
	      // no idea...
	      return false;
	    }
	  }

	  return false;
	}

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tokTypes = undefined;
	exports.parse = parse;

	var _parser = __webpack_require__(6);

	var _parser2 = _interopRequireDefault(_parser);

	__webpack_require__(202);

	__webpack_require__(201);

	__webpack_require__(199);

	__webpack_require__(197);

	__webpack_require__(200);

	__webpack_require__(198);

	__webpack_require__(196);

	var _types = __webpack_require__(7);

	__webpack_require__(106);

	__webpack_require__(32);

	var _flow = __webpack_require__(203);

	var _flow2 = _interopRequireDefault(_flow);

	var _jsx = __webpack_require__(204);

	var _jsx2 = _interopRequireDefault(_jsx);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_parser.plugins.flow = _flow2.default;
	_parser.plugins.jsx = _jsx2.default;

	function parse(input, options) {
	  return new _parser2.default(options, input).parse();
	}

	exports.tokTypes = _types.types;

/***/ },
/* 195 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getOptions = getOptions;
	// A second optional argument can be given to further configure
	var defaultOptions = exports.defaultOptions = {
	  // Source type ("script" or "module") for different semantics
	  sourceType: "script",
	  // Source filename.
	  sourceFilename: undefined,
	  // When enabled, a return at the top level is not considered an
	  // error.
	  allowReturnOutsideFunction: false,
	  // When enabled, import/export statements are not constrained to
	  // appearing at the top of the program.
	  allowImportExportEverywhere: false,
	  // TODO
	  allowSuperOutsideMethod: false,
	  // An array of plugins to enable
	  plugins: [],
	  // TODO
	  strictMode: null
	};

	// Interpret and default an options object

	function getOptions(opts) {
	  var options = {};
	  for (var key in defaultOptions) {
	    options[key] = opts && key in opts ? opts[key] : defaultOptions[key];
	  }
	  return options;
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function last(stack) {
	  return stack[stack.length - 1];
	} /* eslint max-len: 0 */

	/**
	 * Based on the comment attachment algorithm used in espree and estraverse.
	 *
	 * Redistribution and use in source and binary forms, with or without
	 * modification, are permitted provided that the following conditions are met:
	 *
	 * * Redistributions of source code must retain the above copyright
	 *   notice, this list of conditions and the following disclaimer.
	 * * Redistributions in binary form must reproduce the above copyright
	 *   notice, this list of conditions and the following disclaimer in the
	 *   documentation and/or other materials provided with the distribution.
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	 * ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 */

	var pp = _index2.default.prototype;

	pp.addComment = function (comment) {
	  this.state.trailingComments.push(comment);
	  this.state.leadingComments.push(comment);
	};

	pp.processComment = function (node) {
	  if (node.type === "Program" && node.body.length > 0) return;

	  var stack = this.state.commentStack;

	  var lastChild = void 0,
	      trailingComments = void 0,
	      i = void 0,
	      j = void 0;

	  if (this.state.trailingComments.length > 0) {
	    // If the first comment in trailingComments comes after the
	    // current node, then we're good - all comments in the array will
	    // come after the node and so it's safe to add them as official
	    // trailingComments.
	    if (this.state.trailingComments[0].start >= node.end) {
	      trailingComments = this.state.trailingComments;
	      this.state.trailingComments = [];
	    } else {
	      // Otherwise, if the first comment doesn't come after the
	      // current node, that means we have a mix of leading and trailing
	      // comments in the array and that leadingComments contains the
	      // same items as trailingComments. Reset trailingComments to
	      // zero items and we'll handle this by evaluating leadingComments
	      // later.
	      this.state.trailingComments.length = 0;
	    }
	  } else {
	    var lastInStack = last(stack);
	    if (stack.length > 0 && lastInStack.trailingComments && lastInStack.trailingComments[0].start >= node.end) {
	      trailingComments = lastInStack.trailingComments;
	      lastInStack.trailingComments = null;
	    }
	  }

	  // Eating the stack.
	  while (stack.length > 0 && last(stack).start >= node.start) {
	    lastChild = stack.pop();
	  }

	  if (lastChild) {
	    if (lastChild.leadingComments) {
	      if (lastChild !== node && last(lastChild.leadingComments).end <= node.start) {
	        node.leadingComments = lastChild.leadingComments;
	        lastChild.leadingComments = null;
	      } else {
	        // A leading comment for an anonymous class had been stolen by its first ClassMethod,
	        // so this takes back the leading comment.
	        // See also: https://github.com/eslint/espree/issues/158
	        for (i = lastChild.leadingComments.length - 2; i >= 0; --i) {
	          if (lastChild.leadingComments[i].end <= node.start) {
	            node.leadingComments = lastChild.leadingComments.splice(0, i + 1);
	            break;
	          }
	        }
	      }
	    }
	  } else if (this.state.leadingComments.length > 0) {
	    if (last(this.state.leadingComments).end <= node.start) {
	      if (this.state.commentPreviousNode) {
	        for (j = 0; j < this.state.leadingComments.length; j++) {
	          if (this.state.leadingComments[j].end < this.state.commentPreviousNode.end) {
	            this.state.leadingComments.splice(j, 1);
	            j--;
	          }
	        }
	      }
	      if (this.state.leadingComments.length > 0) {
	        node.leadingComments = this.state.leadingComments;
	        this.state.leadingComments = [];
	      }
	    } else {
	      // https://github.com/eslint/espree/issues/2
	      //
	      // In special cases, such as return (without a value) and
	      // debugger, all comments will end up as leadingComments and
	      // will otherwise be eliminated. This step runs when the
	      // commentStack is empty and there are comments left
	      // in leadingComments.
	      //
	      // This loop figures out the stopping point between the actual
	      // leading and trailing comments by finding the location of the
	      // first comment that comes after the given node.
	      for (i = 0; i < this.state.leadingComments.length; i++) {
	        if (this.state.leadingComments[i].end > node.start) {
	          break;
	        }
	      }

	      // Split the array based on the location of the first comment
	      // that comes after the node. Keep in mind that this could
	      // result in an empty array, and if so, the array must be
	      // deleted.
	      node.leadingComments = this.state.leadingComments.slice(0, i);
	      if (node.leadingComments.length === 0) {
	        node.leadingComments = null;
	      }

	      // Similarly, trailing comments are attached later. The variable
	      // must be reset to null if there are no trailing comments.
	      trailingComments = this.state.leadingComments.slice(i);
	      if (trailingComments.length === 0) {
	        trailingComments = null;
	      }
	    }
	  }

	  this.state.commentPreviousNode = node;

	  if (trailingComments) {
	    if (trailingComments.length && trailingComments[0].start >= node.start && last(trailingComments).end <= node.end) {
	      node.innerComments = trailingComments;
	    } else {
	      node.trailingComments = trailingComments;
	    }
	  }

	  stack.push(node);
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _create = __webpack_require__(31);

	var _create2 = _interopRequireDefault(_create);

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _types = __webpack_require__(7);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _identifier = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pp = _index2.default.prototype;

	// Check if property name clashes with already added.
	// Object/class getters and setters are not allowed to clash —
	// either with each other or with an init property — and in
	// strict mode, init properties are also not allowed to be repeated.

	/* eslint indent: 0 */
	/* eslint max-len: 0 */

	// A recursive descent parser operates by defining functions for all
	// syntactic elements, and recursively calling those, each function
	// advancing the input stream and returning an AST node. Precedence
	// of constructs (for example, the fact that `!x[1]` means `!(x[1])`
	// instead of `(!x)[1]` is handled by the fact that the parser
	// function that parses unary prefix operators is called first, and
	// in turn calls the function that parses `[]` subscripts — that
	// way, it'll receive the node for `x[1]` already parsed, and wraps
	// *that* in the unary operator node.
	//
	// Acorn uses an [operator precedence parser][opp] to handle binary
	// operator precedence, because it is much more compact than using
	// the technique outlined above, which uses different, nesting
	// functions to specify precedence, for all of the ten binary
	// precedence levels that JavaScript defines.
	//
	// [opp]: http://en.wikipedia.org/wiki/Operator-precedence_parser

	pp.checkPropClash = function (prop, propHash) {
	  if (prop.computed) return;

	  var key = prop.key;
	  var name = void 0;
	  switch (key.type) {
	    case "Identifier":
	      name = key.name;
	      break;

	    case "StringLiteral":
	    case "NumericLiteral":
	      name = String(key.value);
	      break;

	    default:
	      return;
	  }

	  if (name === "__proto__" && prop.kind === "init") {
	    if (propHash.proto) this.raise(key.start, "Redefinition of __proto__ property");
	    propHash.proto = true;
	  }
	};

	// ### Expression parsing

	// These nest, from the most general expression type at the top to
	// 'atomic', nondivisible expression types at the bottom. Most of
	// the functions will simply let the function (s) below them parse,
	// and, *if* the syntactic construct they handle is present, wrap
	// the AST node that the inner parser gave them in another node.

	// Parse a full expression. The optional arguments are used to
	// forbid the `in` operator (in for loops initalization expressions)
	// and provide reference for storing '=' operator inside shorthand
	// property assignment in contexts where both object expression
	// and object pattern might appear (so it's possible to raise
	// delayed syntax error at correct position).

	pp.parseExpression = function (noIn, refShorthandDefaultPos) {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var expr = this.parseMaybeAssign(noIn, refShorthandDefaultPos);
	  if (this.match(_types.types.comma)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.expressions = [expr];
	    while (this.eat(_types.types.comma)) {
	      node.expressions.push(this.parseMaybeAssign(noIn, refShorthandDefaultPos));
	    }
	    this.toReferencedList(node.expressions);
	    return this.finishNode(node, "SequenceExpression");
	  }
	  return expr;
	};

	// Parse an assignment expression. This includes applications of
	// operators like `+=`.

	pp.parseMaybeAssign = function (noIn, refShorthandDefaultPos, afterLeftParse, refNeedsArrowPos) {
	  if (this.match(_types.types._yield) && this.state.inGenerator) {
	    return this.parseYield();
	  }

	  var failOnShorthandAssign = void 0;
	  if (refShorthandDefaultPos) {
	    failOnShorthandAssign = false;
	  } else {
	    refShorthandDefaultPos = { start: 0 };
	    failOnShorthandAssign = true;
	  }

	  var startPos = this.state.start;
	  var startLoc = this.state.startLoc;

	  if (this.match(_types.types.parenL) || this.match(_types.types.name)) {
	    this.state.potentialArrowAt = this.state.start;
	  }

	  var left = this.parseMaybeConditional(noIn, refShorthandDefaultPos, refNeedsArrowPos);
	  if (afterLeftParse) left = afterLeftParse.call(this, left, startPos, startLoc);
	  if (this.state.type.isAssign) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.operator = this.state.value;
	    node.left = this.match(_types.types.eq) ? this.toAssignable(left) : left;
	    refShorthandDefaultPos.start = 0; // reset because shorthand default was used correctly

	    this.checkLVal(left);

	    if (left.extra && left.extra.parenthesized) {
	      var errorMsg = void 0;
	      if (left.type === "ObjectPattern") {
	        errorMsg = "`({a}) = 0` use `({a} = 0)`";
	      } else if (left.type === "ArrayPattern") {
	        errorMsg = "`([a]) = 0` use `([a] = 0)`";
	      }
	      if (errorMsg) {
	        this.raise(left.start, "You're trying to assign to a parenthesized expression, eg. instead of " + errorMsg);
	      }
	    }

	    this.next();
	    node.right = this.parseMaybeAssign(noIn);
	    return this.finishNode(node, "AssignmentExpression");
	  } else if (failOnShorthandAssign && refShorthandDefaultPos.start) {
	    this.unexpected(refShorthandDefaultPos.start);
	  }

	  return left;
	};

	// Parse a ternary conditional (`?:`) operator.

	pp.parseMaybeConditional = function (noIn, refShorthandDefaultPos, refNeedsArrowPos) {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var expr = this.parseExprOps(noIn, refShorthandDefaultPos);
	  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;

	  return this.parseConditional(expr, noIn, startPos, startLoc, refNeedsArrowPos);
	};

	pp.parseConditional = function (expr, noIn, startPos, startLoc) {
	  if (this.eat(_types.types.question)) {
	    var node = this.startNodeAt(startPos, startLoc);
	    node.test = expr;
	    node.consequent = this.parseMaybeAssign();
	    this.expect(_types.types.colon);
	    node.alternate = this.parseMaybeAssign(noIn);
	    return this.finishNode(node, "ConditionalExpression");
	  }
	  return expr;
	};

	// Start the precedence parser.

	pp.parseExprOps = function (noIn, refShorthandDefaultPos) {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var expr = this.parseMaybeUnary(refShorthandDefaultPos);
	  if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
	    return expr;
	  } else {
	    return this.parseExprOp(expr, startPos, startLoc, -1, noIn);
	  }
	};

	// Parse binary operators with the operator precedence parsing
	// algorithm. `left` is the left-hand side of the operator.
	// `minPrec` provides context that allows the function to stop and
	// defer further parser to one of its callers when it encounters an
	// operator that has a lower precedence than the set it is parsing.

	pp.parseExprOp = function (left, leftStartPos, leftStartLoc, minPrec, noIn) {
	  var prec = this.state.type.binop;
	  if (prec != null && (!noIn || !this.match(_types.types._in))) {
	    if (prec > minPrec) {
	      var node = this.startNodeAt(leftStartPos, leftStartLoc);
	      node.left = left;
	      node.operator = this.state.value;

	      if (node.operator === "**" && left.type === "UnaryExpression" && left.extra && !left.extra.parenthesizedArgument) {
	        this.raise(left.argument.start, "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.");
	      }

	      var op = this.state.type;
	      this.next();

	      var startPos = this.state.start;
	      var startLoc = this.state.startLoc;
	      node.right = this.parseExprOp(this.parseMaybeUnary(), startPos, startLoc, op.rightAssociative ? prec - 1 : prec, noIn);

	      this.finishNode(node, op === _types.types.logicalOR || op === _types.types.logicalAND ? "LogicalExpression" : "BinaryExpression");
	      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn);
	    }
	  }
	  return left;
	};

	// Parse unary operators, both prefix and postfix.

	pp.parseMaybeUnary = function (refShorthandDefaultPos) {
	  if (this.state.type.prefix) {
	    var node = this.startNode();
	    var update = this.match(_types.types.incDec);
	    node.operator = this.state.value;
	    node.prefix = true;
	    this.next();

	    var argType = this.state.type;
	    this.addExtra(node, "parenthesizedArgument", argType === _types.types.parenL);
	    node.argument = this.parseMaybeUnary();

	    if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
	      this.unexpected(refShorthandDefaultPos.start);
	    }

	    if (update) {
	      this.checkLVal(node.argument);
	    } else if (this.state.strict && node.operator === "delete" && node.argument.type === "Identifier") {
	      this.raise(node.start, "Deleting local variable in strict mode");
	    }

	    return this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
	  }

	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var expr = this.parseExprSubscripts(refShorthandDefaultPos);
	  if (refShorthandDefaultPos && refShorthandDefaultPos.start) return expr;
	  while (this.state.type.postfix && !this.canInsertSemicolon()) {
	    var _node = this.startNodeAt(startPos, startLoc);
	    _node.operator = this.state.value;
	    _node.prefix = false;
	    _node.argument = expr;
	    this.checkLVal(expr);
	    this.next();
	    expr = this.finishNode(_node, "UpdateExpression");
	  }
	  return expr;
	};

	// Parse call, dot, and `[]`-subscript expressions.

	pp.parseExprSubscripts = function (refShorthandDefaultPos) {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var potentialArrowAt = this.state.potentialArrowAt;
	  var expr = this.parseExprAtom(refShorthandDefaultPos);

	  if (expr.type === "ArrowFunctionExpression" && expr.start === potentialArrowAt) {
	    return expr;
	  }

	  if (refShorthandDefaultPos && refShorthandDefaultPos.start) {
	    return expr;
	  }

	  return this.parseSubscripts(expr, startPos, startLoc);
	};

	pp.parseSubscripts = function (base, startPos, startLoc, noCalls) {
	  for (;;) {
	    if (!noCalls && this.eat(_types.types.doubleColon)) {
	      var node = this.startNodeAt(startPos, startLoc);
	      node.object = base;
	      node.callee = this.parseNoCallExpr();
	      return this.parseSubscripts(this.finishNode(node, "BindExpression"), startPos, startLoc, noCalls);
	    } else if (this.eat(_types.types.dot)) {
	      var _node2 = this.startNodeAt(startPos, startLoc);
	      _node2.object = base;
	      _node2.property = this.parseIdentifier(true);
	      _node2.computed = false;
	      base = this.finishNode(_node2, "MemberExpression");
	    } else if (this.eat(_types.types.bracketL)) {
	      var _node3 = this.startNodeAt(startPos, startLoc);
	      _node3.object = base;
	      _node3.property = this.parseExpression();
	      _node3.computed = true;
	      this.expect(_types.types.bracketR);
	      base = this.finishNode(_node3, "MemberExpression");
	    } else if (!noCalls && this.match(_types.types.parenL)) {
	      var possibleAsync = this.state.potentialArrowAt === base.start && base.type === "Identifier" && base.name === "async" && !this.canInsertSemicolon();
	      this.next();

	      var _node4 = this.startNodeAt(startPos, startLoc);
	      _node4.callee = base;
	      _node4.arguments = this.parseCallExpressionArguments(_types.types.parenR, this.hasPlugin("trailingFunctionCommas"), possibleAsync);
	      base = this.finishNode(_node4, "CallExpression");

	      if (possibleAsync && this.shouldParseAsyncArrow()) {
	        return this.parseAsyncArrowFromCallExpression(this.startNodeAt(startPos, startLoc), _node4);
	      } else {
	        this.toReferencedList(_node4.arguments);
	      }
	    } else if (this.match(_types.types.backQuote)) {
	      var _node5 = this.startNodeAt(startPos, startLoc);
	      _node5.tag = base;
	      _node5.quasi = this.parseTemplate();
	      base = this.finishNode(_node5, "TaggedTemplateExpression");
	    } else {
	      return base;
	    }
	  }
	};

	pp.parseCallExpressionArguments = function (close, allowTrailingComma, possibleAsyncArrow) {
	  var innerParenStart = void 0;

	  var elts = [],
	      first = true;
	  while (!this.eat(close)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(_types.types.comma);
	      if (allowTrailingComma && this.eat(close)) break;
	    }

	    // we need to make sure that if this is an async arrow functions, that we don't allow inner parens inside the params
	    if (this.match(_types.types.parenL) && !innerParenStart) {
	      innerParenStart = this.state.start;
	    }

	    elts.push(this.parseExprListItem());
	  }

	  // we found an async arrow function so let's not allow any inner parens
	  if (possibleAsyncArrow && innerParenStart && this.shouldParseAsyncArrow()) {
	    this.unexpected();
	  }

	  return elts;
	};

	pp.shouldParseAsyncArrow = function () {
	  return this.match(_types.types.arrow);
	};

	pp.parseAsyncArrowFromCallExpression = function (node, call) {
	  if (!this.hasPlugin("asyncFunctions")) this.unexpected();
	  this.expect(_types.types.arrow);
	  return this.parseArrowExpression(node, call.arguments, true);
	};

	// Parse a no-call expression (like argument of `new` or `::` operators).

	pp.parseNoCallExpr = function () {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  return this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
	};

	// Parse an atomic expression — either a single token that is an
	// expression, an expression started by a keyword like `function` or
	// `new`, or an expression wrapped in punctuation like `()`, `[]`,
	// or `{}`.

	pp.parseExprAtom = function (refShorthandDefaultPos) {
	  var node = void 0,
	      canBeArrow = this.state.potentialArrowAt === this.state.start;
	  switch (this.state.type) {
	    case _types.types._super:
	      if (!this.state.inMethod && !this.options.allowSuperOutsideMethod) {
	        this.raise(this.state.start, "'super' outside of function or class");
	      }

	      node = this.startNode();
	      this.next();
	      if (!this.match(_types.types.parenL) && !this.match(_types.types.bracketL) && !this.match(_types.types.dot)) {
	        this.unexpected();
	      }
	      if (this.match(_types.types.parenL) && this.state.inMethod !== "constructor" && !this.options.allowSuperOutsideMethod) {
	        this.raise(node.start, "super() outside of class constructor");
	      }
	      return this.finishNode(node, "Super");

	    case _types.types._this:
	      node = this.startNode();
	      this.next();
	      return this.finishNode(node, "ThisExpression");

	    case _types.types._yield:
	      if (this.state.inGenerator) this.unexpected();

	    case _types.types.name:
	      node = this.startNode();
	      var allowAwait = this.hasPlugin("asyncFunctions") && this.state.value === "await" && this.state.inAsync;
	      var allowYield = this.shouldAllowYieldIdentifier();
	      var id = this.parseIdentifier(allowAwait || allowYield);

	      if (this.hasPlugin("asyncFunctions")) {
	        if (id.name === "await") {
	          if (this.state.inAsync || this.inModule) {
	            return this.parseAwait(node);
	          }
	        } else if (id.name === "async" && this.match(_types.types._function) && !this.canInsertSemicolon()) {
	          this.next();
	          return this.parseFunction(node, false, false, true);
	        } else if (canBeArrow && id.name === "async" && this.match(_types.types.name)) {
	          var params = [this.parseIdentifier()];
	          this.expect(_types.types.arrow);
	          // let foo = bar => {};
	          return this.parseArrowExpression(node, params, true);
	        }
	      }

	      if (canBeArrow && !this.canInsertSemicolon() && this.eat(_types.types.arrow)) {
	        return this.parseArrowExpression(node, [id]);
	      }

	      return id;

	    case _types.types._do:
	      if (this.hasPlugin("doExpressions")) {
	        var _node6 = this.startNode();
	        this.next();
	        var oldInFunction = this.state.inFunction;
	        var oldLabels = this.state.labels;
	        this.state.labels = [];
	        this.state.inFunction = false;
	        _node6.body = this.parseBlock(false, true);
	        this.state.inFunction = oldInFunction;
	        this.state.labels = oldLabels;
	        return this.finishNode(_node6, "DoExpression");
	      }

	    case _types.types.regexp:
	      var value = this.state.value;
	      node = this.parseLiteral(value.value, "RegExpLiteral");
	      node.pattern = value.pattern;
	      node.flags = value.flags;
	      return node;

	    case _types.types.num:
	      return this.parseLiteral(this.state.value, "NumericLiteral");

	    case _types.types.string:
	      return this.parseLiteral(this.state.value, "StringLiteral");

	    case _types.types._null:
	      node = this.startNode();
	      this.next();
	      return this.finishNode(node, "NullLiteral");

	    case _types.types._true:case _types.types._false:
	      node = this.startNode();
	      node.value = this.match(_types.types._true);
	      this.next();
	      return this.finishNode(node, "BooleanLiteral");

	    case _types.types.parenL:
	      return this.parseParenAndDistinguishExpression(null, null, canBeArrow);

	    case _types.types.bracketL:
	      node = this.startNode();
	      this.next();
	      node.elements = this.parseExprList(_types.types.bracketR, true, true, refShorthandDefaultPos);
	      this.toReferencedList(node.elements);
	      return this.finishNode(node, "ArrayExpression");

	    case _types.types.braceL:
	      return this.parseObj(false, refShorthandDefaultPos);

	    case _types.types._function:
	      return this.parseFunctionExpression();

	    case _types.types.at:
	      this.parseDecorators();

	    case _types.types._class:
	      node = this.startNode();
	      this.takeDecorators(node);
	      return this.parseClass(node, false);

	    case _types.types._new:
	      return this.parseNew();

	    case _types.types.backQuote:
	      return this.parseTemplate();

	    case _types.types.doubleColon:
	      node = this.startNode();
	      this.next();
	      node.object = null;
	      var callee = node.callee = this.parseNoCallExpr();
	      if (callee.type === "MemberExpression") {
	        return this.finishNode(node, "BindExpression");
	      } else {
	        this.raise(callee.start, "Binding should be performed on object property.");
	      }

	    default:
	      this.unexpected();
	  }
	};

	pp.parseFunctionExpression = function () {
	  var node = this.startNode();
	  var meta = this.parseIdentifier(true);
	  if (this.state.inGenerator && this.eat(_types.types.dot) && this.hasPlugin("functionSent")) {
	    return this.parseMetaProperty(node, meta, "sent");
	  } else {
	    return this.parseFunction(node, false);
	  }
	};

	pp.parseMetaProperty = function (node, meta, propertyName) {
	  node.meta = meta;
	  node.property = this.parseIdentifier(true);

	  if (node.property.name !== propertyName) {
	    this.raise(node.property.start, "The only valid meta property for new is " + meta.name + "." + propertyName);
	  }

	  return this.finishNode(node, "MetaProperty");
	};

	pp.parseLiteral = function (value, type) {
	  var node = this.startNode();
	  this.addExtra(node, "rawValue", value);
	  this.addExtra(node, "raw", this.input.slice(this.state.start, this.state.end));
	  node.value = value;
	  this.next();
	  return this.finishNode(node, type);
	};

	pp.parseParenExpression = function () {
	  this.expect(_types.types.parenL);
	  var val = this.parseExpression();
	  this.expect(_types.types.parenR);
	  return val;
	};

	pp.parseParenAndDistinguishExpression = function (startPos, startLoc, canBeArrow, isAsync) {
	  startPos = startPos || this.state.start;
	  startLoc = startLoc || this.state.startLoc;

	  var val = void 0;
	  this.expect(_types.types.parenL);

	  var innerStartPos = this.state.start,
	      innerStartLoc = this.state.startLoc;
	  var exprList = [],
	      first = true;
	  var refShorthandDefaultPos = { start: 0 },
	      spreadStart = void 0,
	      optionalCommaStart = void 0;
	  var refNeedsArrowPos = { start: 0 };
	  while (!this.match(_types.types.parenR)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(_types.types.comma);
	      if (this.match(_types.types.parenR) && this.hasPlugin("trailingFunctionCommas")) {
	        optionalCommaStart = this.state.start;
	        break;
	      }
	    }

	    if (this.match(_types.types.ellipsis)) {
	      var spreadNodeStartPos = this.state.start,
	          spreadNodeStartLoc = this.state.startLoc;
	      spreadStart = this.state.start;
	      exprList.push(this.parseParenItem(this.parseRest(), spreadNodeStartLoc, spreadNodeStartPos));
	      break;
	    } else {
	      exprList.push(this.parseMaybeAssign(false, refShorthandDefaultPos, this.parseParenItem, refNeedsArrowPos));
	    }
	  }

	  var innerEndPos = this.state.start;
	  var innerEndLoc = this.state.startLoc;
	  this.expect(_types.types.parenR);

	  var arrowNode = this.startNodeAt(startPos, startLoc);
	  if (canBeArrow && !this.canInsertSemicolon() && (arrowNode = this.parseArrow(arrowNode))) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = (0, _getIterator3.default)(exprList), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var param = _step.value;

	        if (param.extra && param.extra.parenthesized) this.unexpected(param.extra.parenStart);
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

	    return this.parseArrowExpression(arrowNode, exprList, isAsync);
	  }

	  if (!exprList.length) {
	    if (isAsync) {
	      return;
	    } else {
	      this.unexpected(this.state.lastTokStart);
	    }
	  }
	  if (optionalCommaStart) this.unexpected(optionalCommaStart);
	  if (spreadStart) this.unexpected(spreadStart);
	  if (refShorthandDefaultPos.start) this.unexpected(refShorthandDefaultPos.start);
	  if (refNeedsArrowPos.start) this.unexpected(refNeedsArrowPos.start);

	  if (exprList.length > 1) {
	    val = this.startNodeAt(innerStartPos, innerStartLoc);
	    val.expressions = exprList;
	    this.toReferencedList(val.expressions);
	    this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
	  } else {
	    val = exprList[0];
	  }

	  this.addExtra(val, "parenthesized", true);
	  this.addExtra(val, "parenStart", startPos);

	  return val;
	};

	pp.parseArrow = function (node) {
	  if (this.eat(_types.types.arrow)) {
	    return node;
	  }
	};

	pp.parseParenItem = function (node) {
	  return node;
	};

	// New's precedence is slightly tricky. It must allow its argument
	// to be a `[]` or dot subscript expression, but not a call — at
	// least, not without wrapping it in parentheses. Thus, it uses the

	pp.parseNew = function () {
	  var node = this.startNode();
	  var meta = this.parseIdentifier(true);

	  if (this.eat(_types.types.dot)) {
	    return this.parseMetaProperty(node, meta, "target");
	  }

	  node.callee = this.parseNoCallExpr();

	  if (this.eat(_types.types.parenL)) {
	    node.arguments = this.parseExprList(_types.types.parenR, this.hasPlugin("trailingFunctionCommas"));
	    this.toReferencedList(node.arguments);
	  } else {
	    node.arguments = [];
	  }

	  return this.finishNode(node, "NewExpression");
	};

	// Parse template expression.

	pp.parseTemplateElement = function () {
	  var elem = this.startNode();
	  elem.value = {
	    raw: this.input.slice(this.state.start, this.state.end).replace(/\r\n?/g, "\n"),
	    cooked: this.state.value
	  };
	  this.next();
	  elem.tail = this.match(_types.types.backQuote);
	  return this.finishNode(elem, "TemplateElement");
	};

	pp.parseTemplate = function () {
	  var node = this.startNode();
	  this.next();
	  node.expressions = [];
	  var curElt = this.parseTemplateElement();
	  node.quasis = [curElt];
	  while (!curElt.tail) {
	    this.expect(_types.types.dollarBraceL);
	    node.expressions.push(this.parseExpression());
	    this.expect(_types.types.braceR);
	    node.quasis.push(curElt = this.parseTemplateElement());
	  }
	  this.next();
	  return this.finishNode(node, "TemplateLiteral");
	};

	// Parse an object literal or binding pattern.

	pp.parseObj = function (isPattern, refShorthandDefaultPos) {
	  var decorators = [];
	  var propHash = (0, _create2.default)(null);
	  var first = true;
	  var node = this.startNode();

	  node.properties = [];
	  this.next();

	  while (!this.eat(_types.types.braceR)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(_types.types.comma);
	      if (this.eat(_types.types.braceR)) break;
	    }

	    while (this.match(_types.types.at)) {
	      decorators.push(this.parseDecorator());
	    }

	    var prop = this.startNode(),
	        isGenerator = false,
	        isAsync = false,
	        startPos = void 0,
	        startLoc = void 0;
	    if (decorators.length) {
	      prop.decorators = decorators;
	      decorators = [];
	    }

	    if (this.hasPlugin("objectRestSpread") && this.match(_types.types.ellipsis)) {
	      prop = this.parseSpread();
	      prop.type = isPattern ? "RestProperty" : "SpreadProperty";
	      node.properties.push(prop);
	      continue;
	    }

	    prop.method = false;
	    prop.shorthand = false;

	    if (isPattern || refShorthandDefaultPos) {
	      startPos = this.state.start;
	      startLoc = this.state.startLoc;
	    }

	    if (!isPattern) {
	      isGenerator = this.eat(_types.types.star);
	    }

	    if (!isPattern && this.hasPlugin("asyncFunctions") && this.isContextual("async")) {
	      if (isGenerator) this.unexpected();

	      var asyncId = this.parseIdentifier();
	      if (this.match(_types.types.colon) || this.match(_types.types.parenL) || this.match(_types.types.braceR)) {
	        prop.key = asyncId;
	      } else {
	        isAsync = true;
	        if (this.hasPlugin("asyncGenerators")) isGenerator = this.eat(_types.types.star);
	        this.parsePropertyName(prop);
	      }
	    } else {
	      this.parsePropertyName(prop);
	    }

	    this.parseObjPropValue(prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos);
	    this.checkPropClash(prop, propHash);

	    if (prop.shorthand) {
	      this.addExtra(prop, "shorthand", true);
	    }

	    node.properties.push(prop);
	  }

	  if (decorators.length) {
	    this.raise(this.state.start, "You have trailing decorators with no property");
	  }

	  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
	};

	pp.parseObjPropValue = function (prop, startPos, startLoc, isGenerator, isAsync, isPattern, refShorthandDefaultPos) {
	  if (isAsync || isGenerator || this.match(_types.types.parenL)) {
	    if (isPattern) this.unexpected();
	    prop.kind = "method";
	    prop.method = true;
	    this.parseMethod(prop, isGenerator, isAsync);
	    return this.finishNode(prop, "ObjectMethod");
	  }

	  if (this.eat(_types.types.colon)) {
	    prop.value = isPattern ? this.parseMaybeDefault(this.state.start, this.state.startLoc) : this.parseMaybeAssign(false, refShorthandDefaultPos);
	    return this.finishNode(prop, "ObjectProperty");
	  }

	  if (!prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && !this.match(_types.types.comma) && !this.match(_types.types.braceR)) {
	    if (isGenerator || isAsync || isPattern) this.unexpected();
	    prop.kind = prop.key.name;
	    this.parsePropertyName(prop);
	    this.parseMethod(prop, false);
	    var paramCount = prop.kind === "get" ? 0 : 1;
	    if (prop.params.length !== paramCount) {
	      var start = prop.start;
	      if (prop.kind === "get") {
	        this.raise(start, "getter should have no params");
	      } else {
	        this.raise(start, "setter should have exactly one param");
	      }
	    }
	    return this.finishNode(prop, "ObjectMethod");
	  }

	  if (!prop.computed && prop.key.type === "Identifier") {
	    if (isPattern) {
	      var illegalBinding = this.isKeyword(prop.key.name);
	      if (!illegalBinding && this.state.strict) {
	        illegalBinding = _identifier.reservedWords.strictBind(prop.key.name) || _identifier.reservedWords.strict(prop.key.name);
	      }
	      if (illegalBinding) {
	        this.raise(prop.key.start, "Binding " + prop.key.name);
	      }
	      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
	    } else if (this.match(_types.types.eq) && refShorthandDefaultPos) {
	      if (!refShorthandDefaultPos.start) {
	        refShorthandDefaultPos.start = this.state.start;
	      }
	      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key.__clone());
	    } else {
	      prop.value = prop.key.__clone();
	    }
	    prop.shorthand = true;
	    return this.finishNode(prop, "ObjectProperty");
	  }

	  this.unexpected();
	};

	pp.parsePropertyName = function (prop) {
	  if (this.eat(_types.types.bracketL)) {
	    prop.computed = true;
	    prop.key = this.parseMaybeAssign();
	    this.expect(_types.types.bracketR);
	    return prop.key;
	  } else {
	    prop.computed = false;
	    return prop.key = this.match(_types.types.num) || this.match(_types.types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
	  }
	};

	// Initialize empty function node.

	pp.initFunction = function (node, isAsync) {
	  node.id = null;
	  node.generator = false;
	  node.expression = false;
	  if (this.hasPlugin("asyncFunctions")) {
	    node.async = !!isAsync;
	  }
	};

	// Parse object or class method.

	pp.parseMethod = function (node, isGenerator, isAsync) {
	  var oldInMethod = this.state.inMethod;
	  this.state.inMethod = node.kind || true;
	  this.initFunction(node, isAsync);
	  this.expect(_types.types.parenL);
	  node.params = this.parseBindingList(_types.types.parenR, false, this.hasPlugin("trailingFunctionCommas"));
	  node.generator = isGenerator;
	  this.parseFunctionBody(node);
	  this.state.inMethod = oldInMethod;
	  return node;
	};

	// Parse arrow function expression with given parameters.

	pp.parseArrowExpression = function (node, params, isAsync) {
	  this.initFunction(node, isAsync);
	  node.params = this.toAssignableList(params, true);
	  this.parseFunctionBody(node, true);
	  return this.finishNode(node, "ArrowFunctionExpression");
	};

	// Parse function body and check parameters.

	pp.parseFunctionBody = function (node, allowExpression) {
	  var isExpression = allowExpression && !this.match(_types.types.braceL);

	  var oldInAsync = this.state.inAsync;
	  this.state.inAsync = node.async;
	  if (isExpression) {
	    node.body = this.parseMaybeAssign();
	    node.expression = true;
	  } else {
	    // Start a new scope with regard to labels and the `inFunction`
	    // flag (restore them to their old value afterwards).
	    var oldInFunc = this.state.inFunction,
	        oldInGen = this.state.inGenerator,
	        oldLabels = this.state.labels;
	    this.state.inFunction = true;this.state.inGenerator = node.generator;this.state.labels = [];
	    node.body = this.parseBlock(true);
	    node.expression = false;
	    this.state.inFunction = oldInFunc;this.state.inGenerator = oldInGen;this.state.labels = oldLabels;
	  }
	  this.state.inAsync = oldInAsync;

	  // If this is a strict mode function, verify that argument names
	  // are not repeated, and it does not try to bind the words `eval`
	  // or `arguments`.
	  var checkLVal = this.state.strict;
	  var checkLValStrict = false;
	  var isStrict = false;

	  // arrow function
	  if (allowExpression) checkLVal = true;

	  // normal function
	  if (!isExpression && node.body.directives.length) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = (0, _getIterator3.default)(node.body.directives), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var directive = _step2.value;

	        if (directive.value.value === "use strict") {
	          isStrict = true;
	          checkLVal = true;
	          checkLValStrict = true;
	          break;
	        }
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	  }

	  //
	  if (isStrict && node.id && node.id.type === "Identifier" && node.id.name === "yield") {
	    this.raise(node.id.start, "Binding yield in strict mode");
	  }

	  if (checkLVal) {
	    var nameHash = (0, _create2.default)(null);
	    var oldStrict = this.state.strict;
	    if (checkLValStrict) this.state.strict = true;
	    if (node.id) {
	      this.checkLVal(node.id, true);
	    }
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	      for (var _iterator3 = (0, _getIterator3.default)(node.params), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var param = _step3.value;

	        this.checkLVal(param, true, nameHash);
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }

	    this.state.strict = oldStrict;
	  }
	};

	// Parses a comma-separated list of expressions, and returns them as
	// an array. `close` is the token type that ends the list, and
	// `allowEmpty` can be turned on to allow subsequent commas with
	// nothing in between them to be parsed as `null` (which is needed
	// for array literals).

	pp.parseExprList = function (close, allowTrailingComma, allowEmpty, refShorthandDefaultPos) {
	  var elts = [],
	      first = true;
	  while (!this.eat(close)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(_types.types.comma);
	      if (allowTrailingComma && this.eat(close)) break;
	    }

	    elts.push(this.parseExprListItem(allowEmpty, refShorthandDefaultPos));
	  }
	  return elts;
	};

	pp.parseExprListItem = function (allowEmpty, refShorthandDefaultPos) {
	  var elt = void 0;
	  if (allowEmpty && this.match(_types.types.comma)) {
	    elt = null;
	  } else if (this.match(_types.types.ellipsis)) {
	    elt = this.parseSpread(refShorthandDefaultPos);
	  } else {
	    elt = this.parseMaybeAssign(false, refShorthandDefaultPos);
	  }
	  return elt;
	};

	// Parse the next token as an identifier. If `liberal` is true (used
	// when parsing properties), it will also convert keywords into
	// identifiers.

	pp.parseIdentifier = function (liberal) {
	  var node = this.startNode();

	  if (this.match(_types.types.name)) {
	    if (!liberal && this.state.strict && _identifier.reservedWords.strict(this.state.value)) {
	      this.raise(this.state.start, "The keyword '" + this.state.value + "' is reserved");
	    }

	    node.name = this.state.value;
	  } else if (liberal && this.state.type.keyword) {
	    node.name = this.state.type.keyword;
	  } else {
	    this.unexpected();
	  }

	  if (!liberal && node.name === "await" && this.state.inAsync) {
	    this.raise(node.start, "invalid use of await inside of an async function");
	  }

	  this.next();
	  return this.finishNode(node, "Identifier");
	};

	// Parses await expression inside async function.

	pp.parseAwait = function (node) {
	  if (!this.state.inAsync) {
	    this.unexpected();
	  }
	  if (this.match(_types.types.star)) {
	    this.raise(node.start, "await* has been removed from the async functions proposal. Use Promise.all() instead.");
	  }
	  node.argument = this.parseMaybeUnary();
	  return this.finishNode(node, "AwaitExpression");
	};

	// Parses yield expression inside generator.

	pp.parseYield = function () {
	  var node = this.startNode();
	  this.next();
	  if (this.match(_types.types.semi) || this.canInsertSemicolon() || !this.match(_types.types.star) && !this.state.type.startsExpr) {
	    node.delegate = false;
	    node.argument = null;
	  } else {
	    node.delegate = this.eat(_types.types.star);
	    node.argument = this.parseMaybeAssign();
	  }
	  return this.finishNode(node, "YieldExpression");
	};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _location = __webpack_require__(42);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pp = _index2.default.prototype;

	// This function is used to raise exceptions on parse errors. It
	// takes an offset integer (into the current `input`) to indicate
	// the location of the error, attaches the position to the end
	// of the error message, and then raises a `SyntaxError` with that
	// message.

	pp.raise = function (pos, message) {
	  var loc = (0, _location.getLineInfo)(this.input, pos);
	  message += " (" + loc.line + ":" + loc.column + ")";
	  var err = new SyntaxError(message);
	  err.pos = pos;
	  err.loc = loc;
	  throw err;
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _types = __webpack_require__(7);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _identifier = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pp = _index2.default.prototype;

	// Convert existing expression atom to assignable pattern
	// if possible.

	/* eslint indent: 0 */

	pp.toAssignable = function (node, isBinding) {
	  if (node) {
	    switch (node.type) {
	      case "Identifier":
	      case "ObjectPattern":
	      case "ArrayPattern":
	      case "AssignmentPattern":
	        break;

	      case "ObjectExpression":
	        node.type = "ObjectPattern";
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = (0, _getIterator3.default)(node.properties), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var prop = _step.value;

	            if (prop.type === "ObjectMethod") {
	              if (prop.kind === "get" || prop.kind === "set") {
	                this.raise(prop.key.start, "Object pattern can't contain getter or setter");
	              } else {
	                this.raise(prop.key.start, "Object pattern can't contain methods");
	              }
	            } else {
	              this.toAssignable(prop, isBinding);
	            }
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

	        break;

	      case "ObjectProperty":
	        this.toAssignable(node.value, isBinding);
	        break;

	      case "SpreadProperty":
	        node.type = "RestProperty";
	        break;

	      case "ArrayExpression":
	        node.type = "ArrayPattern";
	        this.toAssignableList(node.elements, isBinding);
	        break;

	      case "AssignmentExpression":
	        if (node.operator === "=") {
	          node.type = "AssignmentPattern";
	          delete node.operator;
	        } else {
	          this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
	        }
	        break;

	      case "MemberExpression":
	        if (!isBinding) break;

	      default:
	        this.raise(node.start, "Assigning to rvalue");
	    }
	  }
	  return node;
	};

	// Convert list of expression atoms to binding list.

	pp.toAssignableList = function (exprList, isBinding) {
	  var end = exprList.length;
	  if (end) {
	    var last = exprList[end - 1];
	    if (last && last.type === "RestElement") {
	      --end;
	    } else if (last && last.type === "SpreadElement") {
	      last.type = "RestElement";
	      var arg = last.argument;
	      this.toAssignable(arg, isBinding);
	      if (arg.type !== "Identifier" && arg.type !== "MemberExpression" && arg.type !== "ArrayPattern") {
	        this.unexpected(arg.start);
	      }
	      --end;
	    }
	  }
	  for (var i = 0; i < end; i++) {
	    var elt = exprList[i];
	    if (elt) this.toAssignable(elt, isBinding);
	  }
	  return exprList;
	};

	// Convert list of expression atoms to a list of

	pp.toReferencedList = function (exprList) {
	  return exprList;
	};

	// Parses spread element.

	pp.parseSpread = function (refShorthandDefaultPos) {
	  var node = this.startNode();
	  this.next();
	  node.argument = this.parseMaybeAssign(refShorthandDefaultPos);
	  return this.finishNode(node, "SpreadElement");
	};

	pp.parseRest = function () {
	  var node = this.startNode();
	  this.next();
	  node.argument = this.parseBindingIdentifier();
	  return this.finishNode(node, "RestElement");
	};

	pp.shouldAllowYieldIdentifier = function () {
	  return this.match(_types.types._yield) && !this.state.strict && !this.state.inGenerator;
	};

	pp.parseBindingIdentifier = function () {
	  return this.parseIdentifier(this.shouldAllowYieldIdentifier());
	};

	// Parses lvalue (assignable) atom.

	pp.parseBindingAtom = function () {
	  switch (this.state.type) {
	    case _types.types._yield:
	      if (this.state.strict || this.state.inGenerator) this.unexpected();

	    case _types.types.name:
	      return this.parseIdentifier(true);

	    case _types.types.bracketL:
	      var node = this.startNode();
	      this.next();
	      node.elements = this.parseBindingList(_types.types.bracketR, true, true);
	      return this.finishNode(node, "ArrayPattern");

	    case _types.types.braceL:
	      return this.parseObj(true);

	    default:
	      this.unexpected();
	  }
	};

	pp.parseBindingList = function (close, allowEmpty, allowTrailingComma) {
	  var elts = [];
	  var first = true;
	  while (!this.eat(close)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(_types.types.comma);
	    }
	    if (allowEmpty && this.match(_types.types.comma)) {
	      elts.push(null);
	    } else if (allowTrailingComma && this.eat(close)) {
	      break;
	    } else if (this.match(_types.types.ellipsis)) {
	      elts.push(this.parseAssignableListItemTypes(this.parseRest()));
	      this.expect(close);
	      break;
	    } else {
	      var decorators = [];
	      while (this.match(_types.types.at)) {
	        decorators.push(this.parseDecorator());
	      }
	      var left = this.parseMaybeDefault();
	      if (decorators.length) {
	        left.decorators = decorators;
	      }
	      this.parseAssignableListItemTypes(left);
	      elts.push(this.parseMaybeDefault(null, null, left));
	    }
	  }
	  return elts;
	};

	pp.parseAssignableListItemTypes = function (param) {
	  return param;
	};

	// Parses assignment pattern around given atom if possible.

	pp.parseMaybeDefault = function (startPos, startLoc, left) {
	  startLoc = startLoc || this.state.startLoc;
	  startPos = startPos || this.state.start;
	  left = left || this.parseBindingAtom();
	  if (!this.eat(_types.types.eq)) return left;

	  var node = this.startNodeAt(startPos, startLoc);
	  node.left = left;
	  node.right = this.parseMaybeAssign();
	  return this.finishNode(node, "AssignmentPattern");
	};

	// Verify that a node is an lval — something that can be assigned
	// to.

	pp.checkLVal = function (expr, isBinding, checkClashes) {
	  switch (expr.type) {
	    case "Identifier":
	      if (this.state.strict && (_identifier.reservedWords.strictBind(expr.name) || _identifier.reservedWords.strict(expr.name))) {
	        this.raise(expr.start, (isBinding ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
	      }

	      if (checkClashes) {
	        // we need to prefix this with an underscore for the cases where we have a key of
	        // `__proto__`. there's a bug in old V8 where the following wouldn't work:
	        //
	        //   > var obj = Object.create(null);
	        //   undefined
	        //   > obj.__proto__
	        //   null
	        //   > obj.__proto__ = true;
	        //   true
	        //   > obj.__proto__
	        //   null
	        var key = "_" + expr.name;

	        if (checkClashes[key]) {
	          this.raise(expr.start, "Argument name clash in strict mode");
	        } else {
	          checkClashes[key] = true;
	        }
	      }
	      break;

	    case "MemberExpression":
	      if (isBinding) this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " member expression");
	      break;

	    case "ObjectPattern":
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = (0, _getIterator3.default)(expr.properties), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var prop = _step2.value;

	          if (prop.type === "ObjectProperty") prop = prop.value;
	          this.checkLVal(prop, isBinding, checkClashes);
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      break;

	    case "ArrayPattern":
	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = (0, _getIterator3.default)(expr.elements), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var elem = _step3.value;

	          if (elem) this.checkLVal(elem, isBinding, checkClashes);
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }

	      break;

	    case "AssignmentPattern":
	      this.checkLVal(expr.left, isBinding, checkClashes);
	      break;

	    case "RestProperty":
	    case "RestElement":
	      this.checkLVal(expr.argument, isBinding, checkClashes);
	      break;

	    default:
	      this.raise(expr.start, (isBinding ? "Binding" : "Assigning to") + " rvalue");
	  }
	};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(40);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _location = __webpack_require__(42);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Start an AST node, attaching a start offset.

	var pp = _index2.default.prototype;
	var commentKeys = ["leadingComments", "trailingComments", "innerComments"];

	var Node = function () {
	  function Node(pos, loc, filename) {
	    (0, _classCallCheck3.default)(this, Node);

	    this.type = "";
	    this.start = pos;
	    this.end = 0;
	    this.loc = new _location.SourceLocation(loc);
	    if (filename) this.loc.filename = filename;
	  }

	  (0, _createClass3.default)(Node, [{
	    key: "__clone",
	    value: function __clone() {
	      var node2 = new Node();
	      for (var key in this) {
	        // Do not clone comments that are already attached to the node
	        if (commentKeys.indexOf(key) < 0) {
	          node2[key] = this[key];
	        }
	      }

	      return node2;
	    }
	  }]);
	  return Node;
	}();

	pp.startNode = function () {
	  return new Node(this.state.start, this.state.startLoc, this.filename);
	};

	pp.startNodeAt = function (pos, loc) {
	  return new Node(pos, loc, this.filename);
	};

	function finishNodeAt(node, type, pos, loc) {
	  node.type = type;
	  node.end = pos;
	  node.loc.end = loc;
	  this.processComment(node);
	  return node;
	}

	// Finish an AST node, adding `type` and `end` properties.

	pp.finishNode = function (node, type) {
	  return finishNodeAt.call(this, node, type, this.state.lastTokEnd, this.state.lastTokEndLoc);
	};

	// Finish node at given position

	pp.finishNodeAt = function (node, type, pos, loc) {
	  return finishNodeAt.call(this, node, type, pos, loc);
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getIterator2 = __webpack_require__(1);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _create = __webpack_require__(31);

	var _create2 = _interopRequireDefault(_create);

	var _types = __webpack_require__(7);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _whitespace = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pp = _index2.default.prototype;

	// ### Statement parsing

	// Parse a program. Initializes the parser, reads any number of
	// statements, and wraps them in a Program node.  Optionally takes a
	// `program` argument.  If present, the statements will be appended
	// to its body instead of creating a new node.

	/* eslint indent: 0 */
	/* eslint max-len: 0 */

	pp.parseTopLevel = function (file, program) {
	  program.sourceType = this.options.sourceType;

	  this.parseBlockBody(program, true, true, _types.types.eof);

	  file.program = this.finishNode(program, "Program");
	  file.comments = this.state.comments;
	  file.tokens = this.state.tokens;

	  return this.finishNode(file, "File");
	};

	var loopLabel = { kind: "loop" },
	    switchLabel = { kind: "switch" };

	// TODO

	pp.stmtToDirective = function (stmt) {
	  var expr = stmt.expression;

	  var directiveLiteral = this.startNodeAt(expr.start, expr.loc.start);
	  var directive = this.startNodeAt(stmt.start, stmt.loc.start);

	  var raw = this.input.slice(expr.start, expr.end);
	  var val = directiveLiteral.value = raw.slice(1, -1); // remove quotes

	  this.addExtra(directiveLiteral, "raw", raw);
	  this.addExtra(directiveLiteral, "rawValue", val);

	  directive.value = this.finishNodeAt(directiveLiteral, "DirectiveLiteral", expr.end, expr.loc.end);

	  return this.finishNodeAt(directive, "Directive", stmt.end, stmt.loc.end);
	};

	// Parse a single statement.
	//
	// If expecting a statement and finding a slash operator, parse a
	// regular expression literal. This is to handle cases like
	// `if (foo) /blah/.exec(foo)`, where looking at the previous token
	// does not help.

	pp.parseStatement = function (declaration, topLevel) {
	  if (this.match(_types.types.at)) {
	    this.parseDecorators(true);
	  }

	  var starttype = this.state.type,
	      node = this.startNode();

	  // Most types of statements are recognized by the keyword they
	  // start with. Many are trivial to parse, some require a bit of
	  // complexity.

	  switch (starttype) {
	    case _types.types._break:case _types.types._continue:
	      return this.parseBreakContinueStatement(node, starttype.keyword);
	    case _types.types._debugger:
	      return this.parseDebuggerStatement(node);
	    case _types.types._do:
	      return this.parseDoStatement(node);
	    case _types.types._for:
	      return this.parseForStatement(node);
	    case _types.types._function:
	      if (!declaration) this.unexpected();
	      return this.parseFunctionStatement(node);

	    case _types.types._class:
	      if (!declaration) this.unexpected();
	      this.takeDecorators(node);
	      return this.parseClass(node, true);

	    case _types.types._if:
	      return this.parseIfStatement(node);
	    case _types.types._return:
	      return this.parseReturnStatement(node);
	    case _types.types._switch:
	      return this.parseSwitchStatement(node);
	    case _types.types._throw:
	      return this.parseThrowStatement(node);
	    case _types.types._try:
	      return this.parseTryStatement(node);

	    case _types.types._let:
	    case _types.types._const:
	      if (!declaration) this.unexpected(); // NOTE: falls through to _var

	    case _types.types._var:
	      return this.parseVarStatement(node, starttype);

	    case _types.types._while:
	      return this.parseWhileStatement(node);
	    case _types.types._with:
	      return this.parseWithStatement(node);
	    case _types.types.braceL:
	      return this.parseBlock();
	    case _types.types.semi:
	      return this.parseEmptyStatement(node);
	    case _types.types._export:
	    case _types.types._import:
	      if (!this.options.allowImportExportEverywhere) {
	        if (!topLevel) {
	          this.raise(this.state.start, "'import' and 'export' may only appear at the top level");
	        }

	        if (!this.inModule) {
	          this.raise(this.state.start, "'import' and 'export' may appear only with 'sourceType: module'");
	        }
	      }
	      return starttype === _types.types._import ? this.parseImport(node) : this.parseExport(node);

	    case _types.types.name:
	      if (this.hasPlugin("asyncFunctions") && this.state.value === "async") {
	        // peek ahead and see if next token is a function
	        var state = this.state.clone();
	        this.next();
	        if (this.match(_types.types._function) && !this.canInsertSemicolon()) {
	          this.expect(_types.types._function);
	          return this.parseFunction(node, true, false, true);
	        } else {
	          this.state = state;
	        }
	      }
	  }

	  // If the statement does not start with a statement keyword or a
	  // brace, it's an ExpressionStatement or LabeledStatement. We
	  // simply start parsing an expression, and afterwards, if the
	  // next token is a colon and the expression was a simple
	  // Identifier node, we switch to interpreting it as a label.
	  var maybeName = this.state.value;
	  var expr = this.parseExpression();

	  if (starttype === _types.types.name && expr.type === "Identifier" && this.eat(_types.types.colon)) {
	    return this.parseLabeledStatement(node, maybeName, expr);
	  } else {
	    return this.parseExpressionStatement(node, expr);
	  }
	};

	pp.takeDecorators = function (node) {
	  if (this.state.decorators.length) {
	    node.decorators = this.state.decorators;
	    this.state.decorators = [];
	  }
	};

	pp.parseDecorators = function (allowExport) {
	  while (this.match(_types.types.at)) {
	    this.state.decorators.push(this.parseDecorator());
	  }

	  if (allowExport && this.match(_types.types._export)) {
	    return;
	  }

	  if (!this.match(_types.types._class)) {
	    this.raise(this.state.start, "Leading decorators must be attached to a class declaration");
	  }
	};

	pp.parseDecorator = function () {
	  if (!this.hasPlugin("decorators")) {
	    this.unexpected();
	  }
	  var node = this.startNode();
	  this.next();
	  node.expression = this.parseMaybeAssign();
	  return this.finishNode(node, "Decorator");
	};

	pp.parseBreakContinueStatement = function (node, keyword) {
	  var isBreak = keyword === "break";
	  this.next();

	  if (this.isLineTerminator()) {
	    node.label = null;
	  } else if (!this.match(_types.types.name)) {
	    this.unexpected();
	  } else {
	    node.label = this.parseIdentifier();
	    this.semicolon();
	  }

	  // Verify that there is an actual destination to break or
	  // continue to.
	  var i = void 0;
	  for (i = 0; i < this.state.labels.length; ++i) {
	    var lab = this.state.labels[i];
	    if (node.label == null || lab.name === node.label.name) {
	      if (lab.kind != null && (isBreak || lab.kind === "loop")) break;
	      if (node.label && isBreak) break;
	    }
	  }
	  if (i === this.state.labels.length) this.raise(node.start, "Unsyntactic " + keyword);
	  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
	};

	pp.parseDebuggerStatement = function (node) {
	  this.next();
	  this.semicolon();
	  return this.finishNode(node, "DebuggerStatement");
	};

	pp.parseDoStatement = function (node) {
	  this.next();
	  this.state.labels.push(loopLabel);
	  node.body = this.parseStatement(false);
	  this.state.labels.pop();
	  this.expect(_types.types._while);
	  node.test = this.parseParenExpression();
	  this.eat(_types.types.semi);
	  return this.finishNode(node, "DoWhileStatement");
	};

	// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
	// loop is non-trivial. Basically, we have to parse the init `var`
	// statement or expression, disallowing the `in` operator (see
	// the second parameter to `parseExpression`), and then check
	// whether the next token is `in` or `of`. When there is no init
	// part (semicolon immediately after the opening parenthesis), it
	// is a regular `for` loop.

	pp.parseForStatement = function (node) {
	  this.next();
	  this.state.labels.push(loopLabel);

	  var forAwait = false;
	  if (this.hasPlugin("asyncGenerators") && this.state.inAsync && this.isContextual("await")) {
	    forAwait = true;
	    this.next();
	  }
	  this.expect(_types.types.parenL);

	  if (this.match(_types.types.semi)) {
	    if (forAwait) {
	      this.unexpected();
	    }
	    return this.parseFor(node, null);
	  }

	  if (this.match(_types.types._var) || this.match(_types.types._let) || this.match(_types.types._const)) {
	    var _init = this.startNode(),
	        varKind = this.state.type;
	    this.next();
	    this.parseVar(_init, true, varKind);
	    this.finishNode(_init, "VariableDeclaration");

	    if (this.match(_types.types._in) || this.isContextual("of")) {
	      if (_init.declarations.length === 1 && !_init.declarations[0].init) {
	        return this.parseForIn(node, _init, forAwait);
	      }
	    }
	    if (forAwait) {
	      this.unexpected();
	    }
	    return this.parseFor(node, _init);
	  }

	  var refShorthandDefaultPos = { start: 0 };
	  var init = this.parseExpression(true, refShorthandDefaultPos);
	  if (this.match(_types.types._in) || this.isContextual("of")) {
	    this.toAssignable(init);
	    this.checkLVal(init);
	    return this.parseForIn(node, init, forAwait);
	  } else if (refShorthandDefaultPos.start) {
	    this.unexpected(refShorthandDefaultPos.start);
	  }
	  if (forAwait) {
	    this.unexpected();
	  }
	  return this.parseFor(node, init);
	};

	pp.parseFunctionStatement = function (node) {
	  this.next();
	  return this.parseFunction(node, true);
	};

	pp.parseIfStatement = function (node) {
	  this.next();
	  node.test = this.parseParenExpression();
	  node.consequent = this.parseStatement(false);
	  node.alternate = this.eat(_types.types._else) ? this.parseStatement(false) : null;
	  return this.finishNode(node, "IfStatement");
	};

	pp.parseReturnStatement = function (node) {
	  if (!this.state.inFunction && !this.options.allowReturnOutsideFunction) {
	    this.raise(this.state.start, "'return' outside of function");
	  }

	  this.next();

	  // In `return` (and `break`/`continue`), the keywords with
	  // optional arguments, we eagerly look for a semicolon or the
	  // possibility to insert one.

	  if (this.isLineTerminator()) {
	    node.argument = null;
	  } else {
	    node.argument = this.parseExpression();
	    this.semicolon();
	  }

	  return this.finishNode(node, "ReturnStatement");
	};

	pp.parseSwitchStatement = function (node) {
	  this.next();
	  node.discriminant = this.parseParenExpression();
	  node.cases = [];
	  this.expect(_types.types.braceL);
	  this.state.labels.push(switchLabel);

	  // Statements under must be grouped (by label) in SwitchCase
	  // nodes. `cur` is used to keep the node that we are currently
	  // adding statements to.

	  var cur = void 0;
	  for (var sawDefault; !this.match(_types.types.braceR);) {
	    if (this.match(_types.types._case) || this.match(_types.types._default)) {
	      var isCase = this.match(_types.types._case);
	      if (cur) this.finishNode(cur, "SwitchCase");
	      node.cases.push(cur = this.startNode());
	      cur.consequent = [];
	      this.next();
	      if (isCase) {
	        cur.test = this.parseExpression();
	      } else {
	        if (sawDefault) this.raise(this.state.lastTokStart, "Multiple default clauses");
	        sawDefault = true;
	        cur.test = null;
	      }
	      this.expect(_types.types.colon);
	    } else {
	      if (cur) {
	        cur.consequent.push(this.parseStatement(true));
	      } else {
	        this.unexpected();
	      }
	    }
	  }
	  if (cur) this.finishNode(cur, "SwitchCase");
	  this.next(); // Closing brace
	  this.state.labels.pop();
	  return this.finishNode(node, "SwitchStatement");
	};

	pp.parseThrowStatement = function (node) {
	  this.next();
	  if (_whitespace.lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start))) this.raise(this.state.lastTokEnd, "Illegal newline after throw");
	  node.argument = this.parseExpression();
	  this.semicolon();
	  return this.finishNode(node, "ThrowStatement");
	};

	// Reused empty array added for node fields that are always empty.

	var empty = [];

	pp.parseTryStatement = function (node) {
	  this.next();

	  node.block = this.parseBlock();
	  node.handler = null;

	  if (this.match(_types.types._catch)) {
	    var clause = this.startNode();
	    this.next();

	    this.expect(_types.types.parenL);
	    clause.param = this.parseBindingAtom();
	    this.checkLVal(clause.param, true, (0, _create2.default)(null));
	    this.expect(_types.types.parenR);

	    clause.body = this.parseBlock();
	    node.handler = this.finishNode(clause, "CatchClause");
	  }

	  node.guardedHandlers = empty;
	  node.finalizer = this.eat(_types.types._finally) ? this.parseBlock() : null;

	  if (!node.handler && !node.finalizer) {
	    this.raise(node.start, "Missing catch or finally clause");
	  }

	  return this.finishNode(node, "TryStatement");
	};

	pp.parseVarStatement = function (node, kind) {
	  this.next();
	  this.parseVar(node, false, kind);
	  this.semicolon();
	  return this.finishNode(node, "VariableDeclaration");
	};

	pp.parseWhileStatement = function (node) {
	  this.next();
	  node.test = this.parseParenExpression();
	  this.state.labels.push(loopLabel);
	  node.body = this.parseStatement(false);
	  this.state.labels.pop();
	  return this.finishNode(node, "WhileStatement");
	};

	pp.parseWithStatement = function (node) {
	  if (this.state.strict) this.raise(this.state.start, "'with' in strict mode");
	  this.next();
	  node.object = this.parseParenExpression();
	  node.body = this.parseStatement(false);
	  return this.finishNode(node, "WithStatement");
	};

	pp.parseEmptyStatement = function (node) {
	  this.next();
	  return this.finishNode(node, "EmptyStatement");
	};

	pp.parseLabeledStatement = function (node, maybeName, expr) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (0, _getIterator3.default)(this.state.labels), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _label = _step.value;

	      if (_label.name === maybeName) {
	        this.raise(expr.start, "Label '" + maybeName + "' is already declared");
	      }
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

	  var kind = this.state.type.isLoop ? "loop" : this.match(_types.types._switch) ? "switch" : null;
	  for (var i = this.state.labels.length - 1; i >= 0; i--) {
	    var label = this.state.labels[i];
	    if (label.statementStart === node.start) {
	      label.statementStart = this.state.start;
	      label.kind = kind;
	    } else {
	      break;
	    }
	  }

	  this.state.labels.push({ name: maybeName, kind: kind, statementStart: this.state.start });
	  node.body = this.parseStatement(true);
	  this.state.labels.pop();
	  node.label = expr;
	  return this.finishNode(node, "LabeledStatement");
	};

	pp.parseExpressionStatement = function (node, expr) {
	  node.expression = expr;
	  this.semicolon();
	  return this.finishNode(node, "ExpressionStatement");
	};

	// Parse a semicolon-enclosed block of statements, handling `"use
	// strict"` declarations when `allowStrict` is true (used for
	// function bodies).

	pp.parseBlock = function (allowDirectives) {
	  var node = this.startNode();
	  this.expect(_types.types.braceL);
	  this.parseBlockBody(node, allowDirectives, false, _types.types.braceR);
	  return this.finishNode(node, "BlockStatement");
	};

	// TODO

	pp.parseBlockBody = function (node, allowDirectives, topLevel, end) {
	  node.body = [];
	  node.directives = [];

	  var parsedNonDirective = false;
	  var oldStrict = void 0;
	  var octalPosition = void 0;

	  while (!this.eat(end)) {
	    if (!parsedNonDirective && this.state.containsOctal && !octalPosition) {
	      octalPosition = this.state.octalPosition;
	    }

	    var stmt = this.parseStatement(true, topLevel);

	    if (allowDirectives && !parsedNonDirective && stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized) {
	      var directive = this.stmtToDirective(stmt);
	      node.directives.push(directive);

	      if (oldStrict === undefined && directive.value.value === "use strict") {
	        oldStrict = this.state.strict;
	        this.setStrict(true);

	        if (octalPosition) {
	          this.raise(octalPosition, "Octal literal in strict mode");
	        }
	      }

	      continue;
	    }

	    parsedNonDirective = true;
	    node.body.push(stmt);
	  }

	  if (oldStrict === false) {
	    this.setStrict(false);
	  }
	};

	// Parse a regular `for` loop. The disambiguation code in
	// `parseStatement` will already have parsed the init statement or
	// expression.

	pp.parseFor = function (node, init) {
	  node.init = init;
	  this.expect(_types.types.semi);
	  node.test = this.match(_types.types.semi) ? null : this.parseExpression();
	  this.expect(_types.types.semi);
	  node.update = this.match(_types.types.parenR) ? null : this.parseExpression();
	  this.expect(_types.types.parenR);
	  node.body = this.parseStatement(false);
	  this.state.labels.pop();
	  return this.finishNode(node, "ForStatement");
	};

	// Parse a `for`/`in` and `for`/`of` loop, which are almost
	// same from parser's perspective.

	pp.parseForIn = function (node, init, forAwait) {
	  var type = void 0;
	  if (forAwait) {
	    this.eatContextual("of");
	    type = "ForAwaitStatement";
	  } else {
	    type = this.match(_types.types._in) ? "ForInStatement" : "ForOfStatement";
	    this.next();
	  }
	  node.left = init;
	  node.right = this.parseExpression();
	  this.expect(_types.types.parenR);
	  node.body = this.parseStatement(false);
	  this.state.labels.pop();
	  return this.finishNode(node, type);
	};

	// Parse a list of variable declarations.

	pp.parseVar = function (node, isFor, kind) {
	  node.declarations = [];
	  node.kind = kind.keyword;
	  for (;;) {
	    var decl = this.startNode();
	    this.parseVarHead(decl);
	    if (this.eat(_types.types.eq)) {
	      decl.init = this.parseMaybeAssign(isFor);
	    } else if (kind === _types.types._const && !(this.match(_types.types._in) || this.isContextual("of"))) {
	      this.unexpected();
	    } else if (decl.id.type !== "Identifier" && !(isFor && (this.match(_types.types._in) || this.isContextual("of")))) {
	      this.raise(this.state.lastTokEnd, "Complex binding patterns require an initialization value");
	    } else {
	      decl.init = null;
	    }
	    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
	    if (!this.eat(_types.types.comma)) break;
	  }
	  return node;
	};

	pp.parseVarHead = function (decl) {
	  decl.id = this.parseBindingAtom();
	  this.checkLVal(decl.id, true);
	};

	// Parse a function declaration or literal (depending on the
	// `isStatement` parameter).

	pp.parseFunction = function (node, isStatement, allowExpressionBody, isAsync, optionalId) {
	  var oldInMethod = this.state.inMethod;
	  this.state.inMethod = false;

	  this.initFunction(node, isAsync);

	  if (this.match(_types.types.star)) {
	    if (node.async && !this.hasPlugin("asyncGenerators")) {
	      this.unexpected();
	    } else {
	      node.generator = true;
	      this.next();
	    }
	  }

	  if (isStatement && !optionalId && !this.match(_types.types.name) && !this.match(_types.types._yield)) {
	    this.unexpected();
	  }

	  if (this.match(_types.types.name) || this.match(_types.types._yield)) {
	    node.id = this.parseBindingIdentifier();
	  }

	  this.parseFunctionParams(node);
	  this.parseFunctionBody(node, allowExpressionBody);

	  this.state.inMethod = oldInMethod;

	  return this.finishNode(node, isStatement ? "FunctionDeclaration" : "FunctionExpression");
	};

	pp.parseFunctionParams = function (node) {
	  this.expect(_types.types.parenL);
	  node.params = this.parseBindingList(_types.types.parenR, false, this.hasPlugin("trailingFunctionCommas"));
	};

	// Parse a class declaration or literal (depending on the
	// `isStatement` parameter).

	pp.parseClass = function (node, isStatement, optionalId) {
	  this.next();
	  this.parseClassId(node, isStatement, optionalId);
	  this.parseClassSuper(node);
	  this.parseClassBody(node);
	  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
	};

	pp.isClassProperty = function () {
	  return this.match(_types.types.eq) || this.isLineTerminator();
	};

	pp.isClassMutatorStarter = function () {
	  return false;
	};

	pp.parseClassBody = function (node) {
	  // class bodies are implicitly strict
	  var oldStrict = this.state.strict;
	  this.state.strict = true;

	  var hadConstructorCall = false;
	  var hadConstructor = false;
	  var decorators = [];
	  var classBody = this.startNode();

	  classBody.body = [];

	  this.expect(_types.types.braceL);

	  while (!this.eat(_types.types.braceR)) {
	    if (this.eat(_types.types.semi)) {
	      continue;
	    }

	    if (this.match(_types.types.at)) {
	      decorators.push(this.parseDecorator());
	      continue;
	    }

	    var method = this.startNode();

	    // steal the decorators if there are any
	    if (decorators.length) {
	      method.decorators = decorators;
	      decorators = [];
	    }

	    var isConstructorCall = false;
	    var isMaybeStatic = this.match(_types.types.name) && this.state.value === "static";
	    var isGenerator = this.eat(_types.types.star);
	    var isGetSet = false;
	    var isAsync = false;

	    this.parsePropertyName(method);

	    method.static = isMaybeStatic && !this.match(_types.types.parenL);
	    if (method.static) {
	      if (isGenerator) this.unexpected();
	      isGenerator = this.eat(_types.types.star);
	      this.parsePropertyName(method);
	    }

	    if (!isGenerator && method.key.type === "Identifier" && !method.computed) {
	      if (this.isClassProperty()) {
	        classBody.body.push(this.parseClassProperty(method));
	        continue;
	      }

	      if (this.hasPlugin("classConstructorCall") && method.key.name === "call" && this.match(_types.types.name) && this.state.value === "constructor") {
	        isConstructorCall = true;
	        this.parsePropertyName(method);
	      }
	    }

	    var isAsyncMethod = this.hasPlugin("asyncFunctions") && !this.match(_types.types.parenL) && !method.computed && method.key.type === "Identifier" && method.key.name === "async";
	    if (isAsyncMethod) {
	      if (this.hasPlugin("asyncGenerators") && this.eat(_types.types.star)) isGenerator = true;
	      isAsync = true;
	      this.parsePropertyName(method);
	    }

	    method.kind = "method";

	    if (!method.computed) {
	      var key = method.key;

	      // handle get/set methods
	      // eg. class Foo { get bar() {} set bar() {} }

	      if (!isAsync && !isGenerator && !this.isClassMutatorStarter() && key.type === "Identifier" && !this.match(_types.types.parenL) && (key.name === "get" || key.name === "set")) {
	        isGetSet = true;
	        method.kind = key.name;
	        key = this.parsePropertyName(method);
	      }

	      // disallow invalid constructors
	      var isConstructor = !isConstructorCall && !method.static && (key.type === "Identifier" && key.name === "constructor" || key.type === "StringLiteral" && key.value === "constructor");
	      if (isConstructor) {
	        if (hadConstructor) this.raise(key.start, "Duplicate constructor in the same class");
	        if (isGetSet) this.raise(key.start, "Constructor can't have get/set modifier");
	        if (isGenerator) this.raise(key.start, "Constructor can't be a generator");
	        if (isAsync) this.raise(key.start, "Constructor can't be an async function");
	        method.kind = "constructor";
	        hadConstructor = true;
	      }

	      // disallow static prototype method
	      var isStaticPrototype = method.static && (key.type === "Identifier" && key.name === "prototype" || key.type === "StringLiteral" && key.value === "prototype");
	      if (isStaticPrototype) {
	        this.raise(key.start, "Classes may not have static property named prototype");
	      }
	    }

	    // convert constructor to a constructor call
	    if (isConstructorCall) {
	      if (hadConstructorCall) this.raise(method.start, "Duplicate constructor call in the same class");
	      method.kind = "constructorCall";
	      hadConstructorCall = true;
	    }

	    // disallow decorators on class constructors
	    if ((method.kind === "constructor" || method.kind === "constructorCall") && method.decorators) {
	      this.raise(method.start, "You can't attach decorators to a class constructor");
	    }

	    this.parseClassMethod(classBody, method, isGenerator, isAsync);

	    // get methods aren't allowed to have any parameters
	    // set methods must have exactly 1 parameter
	    if (isGetSet) {
	      var paramCount = method.kind === "get" ? 0 : 1;
	      if (method.params.length !== paramCount) {
	        var start = method.start;
	        if (method.kind === "get") {
	          this.raise(start, "getter should have no params");
	        } else {
	          this.raise(start, "setter should have exactly one param");
	        }
	      }
	    }
	  }

	  if (decorators.length) {
	    this.raise(this.state.start, "You have trailing decorators with no method");
	  }

	  node.body = this.finishNode(classBody, "ClassBody");

	  this.state.strict = oldStrict;
	};

	pp.parseClassProperty = function (node) {
	  if (this.match(_types.types.eq)) {
	    if (!this.hasPlugin("classProperties")) this.unexpected();
	    this.next();
	    node.value = this.parseMaybeAssign();
	  } else {
	    node.value = null;
	  }
	  this.semicolon();
	  return this.finishNode(node, "ClassProperty");
	};

	pp.parseClassMethod = function (classBody, method, isGenerator, isAsync) {
	  this.parseMethod(method, isGenerator, isAsync);
	  classBody.body.push(this.finishNode(method, "ClassMethod"));
	};

	pp.parseClassId = function (node, isStatement, optionalId) {
	  if (this.match(_types.types.name)) {
	    node.id = this.parseIdentifier();
	  } else {
	    if (optionalId || !isStatement) {
	      node.id = null;
	    } else {
	      this.unexpected();
	    }
	  }
	};

	pp.parseClassSuper = function (node) {
	  node.superClass = this.eat(_types.types._extends) ? this.parseExprSubscripts() : null;
	};

	// Parses module export declaration.

	pp.parseExport = function (node) {
	  this.next();
	  // export * from '...'
	  if (this.match(_types.types.star)) {
	    var specifier = this.startNode();
	    this.next();
	    if (this.hasPlugin("exportExtensions") && this.eatContextual("as")) {
	      specifier.exported = this.parseIdentifier();
	      node.specifiers = [this.finishNode(specifier, "ExportNamespaceSpecifier")];
	      this.parseExportSpecifiersMaybe(node);
	      this.parseExportFrom(node, true);
	    } else {
	      this.parseExportFrom(node, true);
	      return this.finishNode(node, "ExportAllDeclaration");
	    }
	  } else if (this.hasPlugin("exportExtensions") && this.isExportDefaultSpecifier()) {
	    var _specifier = this.startNode();
	    _specifier.exported = this.parseIdentifier(true);
	    node.specifiers = [this.finishNode(_specifier, "ExportDefaultSpecifier")];
	    if (this.match(_types.types.comma) && this.lookahead().type === _types.types.star) {
	      this.expect(_types.types.comma);
	      var _specifier2 = this.startNode();
	      this.expect(_types.types.star);
	      this.expectContextual("as");
	      _specifier2.exported = this.parseIdentifier();
	      node.specifiers.push(this.finishNode(_specifier2, "ExportNamespaceSpecifier"));
	    } else {
	      this.parseExportSpecifiersMaybe(node);
	    }
	    this.parseExportFrom(node, true);
	  } else if (this.eat(_types.types._default)) {
	    // export default ...
	    var expr = this.startNode();
	    var needsSemi = false;
	    if (this.eat(_types.types._function)) {
	      expr = this.parseFunction(expr, true, false, false, true);
	    } else if (this.match(_types.types._class)) {
	      expr = this.parseClass(expr, true, true);
	    } else {
	      needsSemi = true;
	      expr = this.parseMaybeAssign();
	    }
	    node.declaration = expr;
	    if (needsSemi) this.semicolon();
	    this.checkExport(node);
	    return this.finishNode(node, "ExportDefaultDeclaration");
	  } else if (this.state.type.keyword || this.shouldParseExportDeclaration()) {
	    node.specifiers = [];
	    node.source = null;
	    node.declaration = this.parseExportDeclaration(node);
	  } else {
	    // export { x, y as z } [from '...']
	    node.declaration = null;
	    node.specifiers = this.parseExportSpecifiers();
	    this.parseExportFrom(node);
	  }
	  this.checkExport(node);
	  return this.finishNode(node, "ExportNamedDeclaration");
	};

	pp.parseExportDeclaration = function () {
	  return this.parseStatement(true);
	};

	pp.isExportDefaultSpecifier = function () {
	  if (this.match(_types.types.name)) {
	    return this.state.value !== "type" && this.state.value !== "async" && this.state.value !== "interface";
	  }

	  if (!this.match(_types.types._default)) {
	    return false;
	  }

	  var lookahead = this.lookahead();
	  return lookahead.type === _types.types.comma || lookahead.type === _types.types.name && lookahead.value === "from";
	};

	pp.parseExportSpecifiersMaybe = function (node) {
	  if (this.eat(_types.types.comma)) {
	    node.specifiers = node.specifiers.concat(this.parseExportSpecifiers());
	  }
	};

	pp.parseExportFrom = function (node, expect) {
	  if (this.eatContextual("from")) {
	    node.source = this.match(_types.types.string) ? this.parseExprAtom() : this.unexpected();
	    this.checkExport(node);
	  } else {
	    if (expect) {
	      this.unexpected();
	    } else {
	      node.source = null;
	    }
	  }

	  this.semicolon();
	};

	pp.shouldParseExportDeclaration = function () {
	  return this.hasPlugin("asyncFunctions") && this.isContextual("async");
	};

	pp.checkExport = function (node) {
	  if (this.state.decorators.length) {
	    var isClass = node.declaration && (node.declaration.type === "ClassDeclaration" || node.declaration.type === "ClassExpression");
	    if (!node.declaration || !isClass) {
	      this.raise(node.start, "You can only use decorators on an export when exporting a class");
	    }
	    this.takeDecorators(node.declaration);
	  }
	};

	// Parses a comma-separated list of module exports.

	pp.parseExportSpecifiers = function () {
	  var nodes = [];
	  var first = true;
	  var needsFrom = void 0;

	  // export { x, y as z } [from '...']
	  this.expect(_types.types.braceL);

	  while (!this.eat(_types.types.braceR)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(_types.types.comma);
	      if (this.eat(_types.types.braceR)) break;
	    }

	    var isDefault = this.match(_types.types._default);
	    if (isDefault && !needsFrom) needsFrom = true;

	    var node = this.startNode();
	    node.local = this.parseIdentifier(isDefault);
	    node.exported = this.eatContextual("as") ? this.parseIdentifier(true) : node.local.__clone();
	    nodes.push(this.finishNode(node, "ExportSpecifier"));
	  }

	  // https://github.com/ember-cli/ember-cli/pull/3739
	  if (needsFrom && !this.isContextual("from")) {
	    this.unexpected();
	  }

	  return nodes;
	};

	// Parses import declaration.

	pp.parseImport = function (node) {
	  this.next();

	  // import '...'
	  if (this.match(_types.types.string)) {
	    node.specifiers = [];
	    node.source = this.parseExprAtom();
	  } else {
	    node.specifiers = [];
	    this.parseImportSpecifiers(node);
	    this.expectContextual("from");
	    node.source = this.match(_types.types.string) ? this.parseExprAtom() : this.unexpected();
	  }
	  this.semicolon();
	  return this.finishNode(node, "ImportDeclaration");
	};

	// Parses a comma-separated list of module imports.

	pp.parseImportSpecifiers = function (node) {
	  var first = true;
	  if (this.match(_types.types.name)) {
	    // import defaultObj, { x, y as z } from '...'
	    var startPos = this.state.start,
	        startLoc = this.state.startLoc;
	    node.specifiers.push(this.parseImportSpecifierDefault(this.parseIdentifier(), startPos, startLoc));
	    if (!this.eat(_types.types.comma)) return;
	  }

	  if (this.match(_types.types.star)) {
	    var specifier = this.startNode();
	    this.next();
	    this.expectContextual("as");
	    specifier.local = this.parseIdentifier();
	    this.checkLVal(specifier.local, true);
	    node.specifiers.push(this.finishNode(specifier, "ImportNamespaceSpecifier"));
	    return;
	  }

	  this.expect(_types.types.braceL);
	  while (!this.eat(_types.types.braceR)) {
	    if (first) {
	      first = false;
	    } else {
	      this.expect(_types.types.comma);
	      if (this.eat(_types.types.braceR)) break;
	    }

	    var _specifier3 = this.startNode();
	    _specifier3.imported = this.parseIdentifier(true);
	    _specifier3.local = this.eatContextual("as") ? this.parseIdentifier() : _specifier3.imported.__clone();
	    this.checkLVal(_specifier3.local, true);
	    node.specifiers.push(this.finishNode(_specifier3, "ImportSpecifier"));
	  }
	};

	pp.parseImportSpecifierDefault = function (id, startPos, startLoc) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.local = id;
	  this.checkLVal(node.local, true);
	  return this.finishNode(node, "ImportDefaultSpecifier");
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _types = __webpack_require__(7);

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _whitespace = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pp = _index2.default.prototype;

	// ## Parser utilities

	// TODO

	pp.addExtra = function (node, key, val) {
	  if (!node) return;

	  var extra = node.extra = node.extra || {};
	  extra[key] = val;
	};

	// TODO

	pp.isRelational = function (op) {
	  return this.match(_types.types.relational) && this.state.value === op;
	};

	// TODO

	pp.expectRelational = function (op) {
	  if (this.isRelational(op)) {
	    this.next();
	  } else {
	    this.unexpected();
	  }
	};

	// Tests whether parsed token is a contextual keyword.

	pp.isContextual = function (name) {
	  return this.match(_types.types.name) && this.state.value === name;
	};

	// Consumes contextual keyword if possible.

	pp.eatContextual = function (name) {
	  return this.state.value === name && this.eat(_types.types.name);
	};

	// Asserts that following token is given contextual keyword.

	pp.expectContextual = function (name) {
	  if (!this.eatContextual(name)) this.unexpected();
	};

	// Test whether a semicolon can be inserted at the current position.

	pp.canInsertSemicolon = function () {
	  return this.match(_types.types.eof) || this.match(_types.types.braceR) || _whitespace.lineBreak.test(this.input.slice(this.state.lastTokEnd, this.state.start));
	};

	// TODO

	pp.isLineTerminator = function () {
	  return this.eat(_types.types.semi) || this.canInsertSemicolon();
	};

	// Consume a semicolon, or, failing that, see if we are allowed to
	// pretend that there is a semicolon at this position.

	pp.semicolon = function () {
	  if (!this.isLineTerminator()) this.unexpected();
	};

	// Expect a token of a given type. If found, consume it, otherwise,
	// raise an unexpected token error.

	pp.expect = function (type) {
	  return this.eat(type) || this.unexpected();
	};

	// Raise an unexpected token error.

	pp.unexpected = function (pos) {
	  this.raise(pos != null ? pos : this.state.start, "Unexpected token");
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (instance) {
	  // plain function return types: function name(): string {}
	  instance.extend("parseFunctionBody", function (inner) {
	    return function (node, allowExpression) {
	      if (this.match(_types.types.colon) && !allowExpression) {
	        // if allowExpression is true then we're parsing an arrow function and if
	        // there's a return type then it's been handled elsewhere
	        node.returnType = this.flowParseTypeAnnotation();
	      }

	      return inner.call(this, node, allowExpression);
	    };
	  });

	  // interfaces
	  instance.extend("parseStatement", function (inner) {
	    return function (declaration, topLevel) {
	      // strict mode handling of `interface` since it's a reserved word
	      if (this.state.strict && this.match(_types.types.name) && this.state.value === "interface") {
	        var node = this.startNode();
	        this.next();
	        return this.flowParseInterface(node);
	      } else {
	        return inner.call(this, declaration, topLevel);
	      }
	    };
	  });

	  // declares, interfaces and type aliases
	  instance.extend("parseExpressionStatement", function (inner) {
	    return function (node, expr) {
	      if (expr.type === "Identifier") {
	        if (expr.name === "declare") {
	          if (this.match(_types.types._class) || this.match(_types.types.name) || this.match(_types.types._function) || this.match(_types.types._var)) {
	            return this.flowParseDeclare(node);
	          }
	        } else if (this.match(_types.types.name)) {
	          if (expr.name === "interface") {
	            return this.flowParseInterface(node);
	          } else if (expr.name === "type") {
	            return this.flowParseTypeAlias(node);
	          }
	        }
	      }

	      return inner.call(this, node, expr);
	    };
	  });

	  // export type
	  instance.extend("shouldParseExportDeclaration", function (inner) {
	    return function () {
	      return this.isContextual("type") || this.isContextual("interface") || inner.call(this);
	    };
	  });

	  instance.extend("parseConditional", function (inner) {
	    return function (expr, noIn, startPos, startLoc, refNeedsArrowPos) {
	      var state = this.state.clone();
	      try {
	        return inner.call(this, expr, noIn, startPos, startLoc);
	      } catch (err) {
	        if (refNeedsArrowPos && err instanceof SyntaxError) {
	          this.state = state;
	          refNeedsArrowPos.start = this.state.start;
	          return expr;
	        } else {
	          throw err;
	        }
	      }
	    };
	  });

	  instance.extend("parseParenItem", function (inner) {
	    return function (node, startLoc, startPos) {
	      node = inner.call(this, node, startLoc, startPos);
	      if (this.eat(_types.types.question)) {
	        node.optional = true;
	      }

	      if (this.match(_types.types.colon)) {
	        var typeCastNode = this.startNodeAt(startLoc, startPos);
	        typeCastNode.expression = node;
	        typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();

	        return this.finishNode(typeCastNode, "TypeCastExpression");
	      }

	      return node;
	    };
	  });

	  instance.extend("parseExport", function (inner) {
	    return function (node) {
	      node = inner.call(this, node);
	      if (node.type === "ExportNamedDeclaration") {
	        node.exportKind = node.exportKind || "value";
	      }
	      return node;
	    };
	  });

	  instance.extend("parseExportDeclaration", function (inner) {
	    return function (node) {
	      if (this.isContextual("type")) {
	        node.exportKind = "type";

	        var declarationNode = this.startNode();
	        this.next();

	        if (this.match(_types.types.braceL)) {
	          // export type { foo, bar };
	          node.specifiers = this.parseExportSpecifiers();
	          this.parseExportFrom(node);
	          return null;
	        } else {
	          // export type Foo = Bar;
	          return this.flowParseTypeAlias(declarationNode);
	        }
	      } else if (this.isContextual("interface")) {
	        node.exportKind = "type";
	        var _declarationNode = this.startNode();
	        this.next();
	        return this.flowParseInterface(_declarationNode);
	      } else {
	        return inner.call(this, node);
	      }
	    };
	  });

	  instance.extend("parseClassId", function (inner) {
	    return function (node) {
	      inner.apply(this, arguments);
	      if (this.isRelational("<")) {
	        node.typeParameters = this.flowParseTypeParameterDeclaration();
	      }
	    };
	  });

	  // don't consider `void` to be a keyword as then it'll use the void token type
	  // and set startExpr
	  instance.extend("isKeyword", function (inner) {
	    return function (name) {
	      if (this.state.inType && name === "void") {
	        return false;
	      } else {
	        return inner.call(this, name);
	      }
	    };
	  });

	  // ensure that inside flow types, we bypass the jsx parser plugin
	  instance.extend("readToken", function (inner) {
	    return function (code) {
	      if (this.state.inType && (code === 62 || code === 60)) {
	        return this.finishOp(_types.types.relational, 1);
	      } else {
	        return inner.call(this, code);
	      }
	    };
	  });

	  // don't lex any token as a jsx one inside a flow type
	  instance.extend("jsx_readToken", function (inner) {
	    return function () {
	      if (!this.state.inType) return inner.call(this);
	    };
	  });

	  function typeCastToParameter(node) {
	    node.expression.typeAnnotation = node.typeAnnotation;
	    return node.expression;
	  }

	  instance.extend("toAssignable", function (inner) {
	    return function (node) {
	      if (node.type === "TypeCastExpression") {
	        return typeCastToParameter(node);
	      } else {
	        return inner.apply(this, arguments);
	      }
	    };
	  });

	  // turn type casts that we found in function parameter head into type annotated params
	  instance.extend("toAssignableList", function (inner) {
	    return function (exprList, isBinding) {
	      for (var i = 0; i < exprList.length; i++) {
	        var expr = exprList[i];
	        if (expr && expr.type === "TypeCastExpression") {
	          exprList[i] = typeCastToParameter(expr);
	        }
	      }
	      return inner.call(this, exprList, isBinding);
	    };
	  });

	  // this is a list of nodes, from something like a call expression, we need to filter the
	  // type casts that we've found that are illegal in this context
	  instance.extend("toReferencedList", function () {
	    return function (exprList) {
	      for (var i = 0; i < exprList.length; i++) {
	        var expr = exprList[i];
	        if (expr && expr._exprListItem && expr.type === "TypeCastExpression") {
	          this.raise(expr.start, "Unexpected type cast");
	        }
	      }

	      return exprList;
	    };
	  });

	  // parse an item inside a expression list eg. `(NODE, NODE)` where NODE represents
	  // the position where this function is cal;ed
	  instance.extend("parseExprListItem", function (inner) {
	    return function (allowEmpty, refShorthandDefaultPos) {
	      var container = this.startNode();
	      var node = inner.call(this, allowEmpty, refShorthandDefaultPos);
	      if (this.match(_types.types.colon)) {
	        container._exprListItem = true;
	        container.expression = node;
	        container.typeAnnotation = this.flowParseTypeAnnotation();
	        return this.finishNode(container, "TypeCastExpression");
	      } else {
	        return node;
	      }
	    };
	  });

	  instance.extend("checkLVal", function (inner) {
	    return function (node) {
	      if (node.type !== "TypeCastExpression") {
	        return inner.apply(this, arguments);
	      }
	    };
	  });

	  // parse class property type annotations
	  instance.extend("parseClassProperty", function (inner) {
	    return function (node) {
	      if (this.match(_types.types.colon)) {
	        node.typeAnnotation = this.flowParseTypeAnnotation();
	      }
	      return inner.call(this, node);
	    };
	  });

	  // determine whether or not we're currently in the position where a class property would appear
	  instance.extend("isClassProperty", function (inner) {
	    return function () {
	      return this.match(_types.types.colon) || inner.call(this);
	    };
	  });

	  // parse type parameters for class methods
	  instance.extend("parseClassMethod", function () {
	    return function (classBody, method, isGenerator, isAsync) {
	      if (this.isRelational("<")) {
	        method.typeParameters = this.flowParseTypeParameterDeclaration();
	      }
	      this.parseMethod(method, isGenerator, isAsync);
	      classBody.body.push(this.finishNode(method, "ClassMethod"));
	    };
	  });

	  // parse a the super class type parameters and implements
	  instance.extend("parseClassSuper", function (inner) {
	    return function (node, isStatement) {
	      inner.call(this, node, isStatement);
	      if (node.superClass && this.isRelational("<")) {
	        node.superTypeParameters = this.flowParseTypeParameterInstantiation();
	      }
	      if (this.isContextual("implements")) {
	        this.next();
	        var implemented = node.implements = [];
	        do {
	          var _node = this.startNode();
	          _node.id = this.parseIdentifier();
	          if (this.isRelational("<")) {
	            _node.typeParameters = this.flowParseTypeParameterInstantiation();
	          } else {
	            _node.typeParameters = null;
	          }
	          implemented.push(this.finishNode(_node, "ClassImplements"));
	        } while (this.eat(_types.types.comma));
	      }
	    };
	  });

	  // parse type parameters for object method shorthand
	  instance.extend("parseObjPropValue", function (inner) {
	    return function (prop) {
	      var typeParameters = void 0;

	      // method shorthand
	      if (this.isRelational("<")) {
	        typeParameters = this.flowParseTypeParameterDeclaration();
	        if (!this.match(_types.types.parenL)) this.unexpected();
	      }

	      inner.apply(this, arguments);

	      // add typeParameters if we found them
	      if (typeParameters) {
	        (prop.value || prop).typeParameters = typeParameters;
	      }
	    };
	  });

	  instance.extend("parseAssignableListItemTypes", function () {
	    return function (param) {
	      if (this.eat(_types.types.question)) {
	        param.optional = true;
	      }
	      if (this.match(_types.types.colon)) {
	        param.typeAnnotation = this.flowParseTypeAnnotation();
	      }
	      this.finishNode(param, param.type);
	      return param;
	    };
	  });

	  // parse typeof and type imports
	  instance.extend("parseImportSpecifiers", function (inner) {
	    return function (node) {
	      node.importKind = "value";

	      var kind = null;
	      if (this.match(_types.types._typeof)) {
	        kind = "typeof";
	      } else if (this.isContextual("type")) {
	        kind = "type";
	      }
	      if (kind) {
	        var lh = this.lookahead();
	        if (lh.type === _types.types.name && lh.value !== "from" || lh.type === _types.types.braceL || lh.type === _types.types.star) {
	          this.next();
	          node.importKind = kind;
	        }
	      }

	      inner.call(this, node);
	    };
	  });

	  // parse function type parameters - function foo<T>() {}
	  instance.extend("parseFunctionParams", function (inner) {
	    return function (node) {
	      var oldInType = this.state.inType;
	      this.state.inType = true;
	      if (this.isRelational("<")) {
	        node.typeParameters = this.flowParseTypeParameterDeclaration();
	      }
	      this.state.inType = oldInType;
	      inner.call(this, node);
	    };
	  });

	  // parse flow type annotations on variable declarator heads - let foo: string = bar
	  instance.extend("parseVarHead", function (inner) {
	    return function (decl) {
	      inner.call(this, decl);
	      if (this.match(_types.types.colon)) {
	        decl.id.typeAnnotation = this.flowParseTypeAnnotation();
	        this.finishNode(decl.id, decl.id.type);
	      }
	    };
	  });

	  // parse the return type of an async arrow function - let foo = (async (): number => {});
	  instance.extend("parseAsyncArrowFromCallExpression", function (inner) {
	    return function (node, call) {
	      if (this.match(_types.types.colon)) {
	        node.returnType = this.flowParseTypeAnnotation();
	      }

	      return inner.call(this, node, call);
	    };
	  });

	  // todo description
	  instance.extend("shouldParseAsyncArrow", function (inner) {
	    return function () {
	      return this.match(_types.types.colon) || inner.call(this);
	    };
	  });

	  // We need to support type parameter declarations for arrow functions. This
	  // is tricky. There are three situations we need to handle
	  //
	  // 1. This is either JSX or an arrow function. We'll try JSX first. If that
	  //    fails, we'll try an arrow function. If that fails, we'll throw the JSX
	  //    error.
	  // 2. This is an arrow function. We'll parse the type parameter declaration,
	  //    parse the rest, make sure the rest is an arrow function, and go from
	  //    there
	  // 3. This is neither. Just call the inner function
	  instance.extend("parseMaybeAssign", function (inner) {
	    return function () {
	      var jsxError = null;

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      if (_types.types.jsxTagStart && this.match(_types.types.jsxTagStart)) {
	        var state = this.state.clone();
	        try {
	          return inner.apply(this, args);
	        } catch (err) {
	          if (err instanceof SyntaxError) {
	            this.state = state;
	            jsxError = err;
	          } else {
	            throw err;
	          }
	        }
	      }

	      // Need to push something onto the context to stop
	      // the JSX plugin from messing with the tokens
	      this.state.context.push(_context.types.parenExpression);
	      if (jsxError != null || this.isRelational("<")) {
	        var arrowExpression = void 0;
	        var typeParameters = void 0;
	        try {
	          var oldInType = this.state.inType;
	          this.state.inType = true;
	          typeParameters = this.flowParseTypeParameterDeclaration();
	          this.state.inType = oldInType;

	          arrowExpression = inner.apply(this, args);
	          arrowExpression.typeParameters = typeParameters;
	        } catch (err) {
	          throw jsxError || err;
	        }

	        if (arrowExpression.type === "ArrowFunctionExpression") {
	          return arrowExpression;
	        } else if (jsxError != null) {
	          throw jsxError;
	        } else {
	          this.raise(typeParameters.start, "Expected an arrow function after this type parameter declaration");
	        }
	      }
	      this.state.context.pop();

	      return inner.apply(this, args);
	    };
	  });

	  // handle return types for arrow functions
	  instance.extend("parseArrow", function (inner) {
	    return function (node) {
	      if (this.match(_types.types.colon)) {
	        var state = this.state.clone();
	        try {
	          var returnType = this.flowParseTypeAnnotation();
	          if (!this.match(_types.types.arrow)) this.unexpected();
	          // assign after it is clear it is an arrow
	          node.returnType = returnType;
	        } catch (err) {
	          if (err instanceof SyntaxError) {
	            this.state = state;
	          } else {
	            throw err;
	          }
	        }
	      }

	      return inner.call(this, node);
	    };
	  });

	  instance.extend("isClassMutatorStarter", function (inner) {
	    return function () {
	      if (this.isRelational("<")) {
	        return true;
	      } else {
	        return inner.call(this);
	      }
	    };
	  });
	};

	var _types = __webpack_require__(7);

	var _context = __webpack_require__(32);

	var _parser = __webpack_require__(6);

	var _parser2 = _interopRequireDefault(_parser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pp = _parser2.default.prototype; /* eslint indent: 0 */
	/* eslint max-len: 0 */

	pp.flowParseTypeInitialiser = function (tok, allowLeadingPipeOrAnd) {
	  var oldInType = this.state.inType;
	  this.state.inType = true;
	  this.expect(tok || _types.types.colon);
	  if (allowLeadingPipeOrAnd) {
	    if (this.match(_types.types.bitwiseAND) || this.match(_types.types.bitwiseOR)) {
	      this.next();
	    }
	  }
	  var type = this.flowParseType();
	  this.state.inType = oldInType;
	  return type;
	};

	pp.flowParseDeclareClass = function (node) {
	  this.next();
	  this.flowParseInterfaceish(node, true);
	  return this.finishNode(node, "DeclareClass");
	};

	pp.flowParseDeclareFunction = function (node) {
	  this.next();

	  var id = node.id = this.parseIdentifier();

	  var typeNode = this.startNode();
	  var typeContainer = this.startNode();

	  if (this.isRelational("<")) {
	    typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
	  } else {
	    typeNode.typeParameters = null;
	  }

	  this.expect(_types.types.parenL);
	  var tmp = this.flowParseFunctionTypeParams();
	  typeNode.params = tmp.params;
	  typeNode.rest = tmp.rest;
	  this.expect(_types.types.parenR);
	  typeNode.returnType = this.flowParseTypeInitialiser();

	  typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
	  id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");

	  this.finishNode(id, id.type);

	  this.semicolon();

	  return this.finishNode(node, "DeclareFunction");
	};

	pp.flowParseDeclare = function (node) {
	  if (this.match(_types.types._class)) {
	    return this.flowParseDeclareClass(node);
	  } else if (this.match(_types.types._function)) {
	    return this.flowParseDeclareFunction(node);
	  } else if (this.match(_types.types._var)) {
	    return this.flowParseDeclareVariable(node);
	  } else if (this.isContextual("module")) {
	    return this.flowParseDeclareModule(node);
	  } else if (this.isContextual("type")) {
	    return this.flowParseDeclareTypeAlias(node);
	  } else if (this.isContextual("interface")) {
	    return this.flowParseDeclareInterface(node);
	  } else {
	    this.unexpected();
	  }
	};

	pp.flowParseDeclareVariable = function (node) {
	  this.next();
	  node.id = this.flowParseTypeAnnotatableIdentifier();
	  this.semicolon();
	  return this.finishNode(node, "DeclareVariable");
	};

	pp.flowParseDeclareModule = function (node) {
	  this.next();

	  if (this.match(_types.types.string)) {
	    node.id = this.parseExprAtom();
	  } else {
	    node.id = this.parseIdentifier();
	  }

	  var bodyNode = node.body = this.startNode();
	  var body = bodyNode.body = [];
	  this.expect(_types.types.braceL);
	  while (!this.match(_types.types.braceR)) {
	    var node2 = this.startNode();

	    // todo: declare check
	    this.next();

	    body.push(this.flowParseDeclare(node2));
	  }
	  this.expect(_types.types.braceR);

	  this.finishNode(bodyNode, "BlockStatement");
	  return this.finishNode(node, "DeclareModule");
	};

	pp.flowParseDeclareTypeAlias = function (node) {
	  this.next();
	  this.flowParseTypeAlias(node);
	  return this.finishNode(node, "DeclareTypeAlias");
	};

	pp.flowParseDeclareInterface = function (node) {
	  this.next();
	  this.flowParseInterfaceish(node);
	  return this.finishNode(node, "DeclareInterface");
	};

	// Interfaces

	pp.flowParseInterfaceish = function (node, allowStatic) {
	  node.id = this.parseIdentifier();

	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterDeclaration();
	  } else {
	    node.typeParameters = null;
	  }

	  node.extends = [];
	  node.mixins = [];

	  if (this.eat(_types.types._extends)) {
	    do {
	      node.extends.push(this.flowParseInterfaceExtends());
	    } while (this.eat(_types.types.comma));
	  }

	  if (this.isContextual("mixins")) {
	    this.next();
	    do {
	      node.mixins.push(this.flowParseInterfaceExtends());
	    } while (this.eat(_types.types.comma));
	  }

	  node.body = this.flowParseObjectType(allowStatic);
	};

	pp.flowParseInterfaceExtends = function () {
	  var node = this.startNode();

	  node.id = this.parseIdentifier();
	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterInstantiation();
	  } else {
	    node.typeParameters = null;
	  }

	  return this.finishNode(node, "InterfaceExtends");
	};

	pp.flowParseInterface = function (node) {
	  this.flowParseInterfaceish(node, false);
	  return this.finishNode(node, "InterfaceDeclaration");
	};

	// Type aliases

	pp.flowParseTypeAlias = function (node) {
	  node.id = this.parseIdentifier();

	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterDeclaration();
	  } else {
	    node.typeParameters = null;
	  }

	  node.right = this.flowParseTypeInitialiser(_types.types.eq,
	  /*allowLeadingPipeOrAnd*/true);
	  this.semicolon();

	  return this.finishNode(node, "TypeAlias");
	};

	// Type annotations

	pp.flowParseTypeParameter = function () {
	  var node = this.startNode();

	  var variance = void 0;
	  if (this.match(_types.types.plusMin)) {
	    if (this.state.value === "+") {
	      variance = "plus";
	    } else if (this.state.value === "-") {
	      variance = "minus";
	    }
	    this.eat(_types.types.plusMin);
	  }

	  var ident = this.flowParseTypeAnnotatableIdentifier(false, false);
	  node.name = ident.name;
	  node.variance = variance;
	  node.bound = ident.typeAnnotation;

	  if (this.match(_types.types.eq)) {
	    this.eat(_types.types.eq);
	    node.default = this.flowParseType();
	  }

	  return this.finishNode(node, "TypeParameter");
	};

	pp.flowParseTypeParameterDeclaration = function () {
	  var node = this.startNode();
	  node.params = [];

	  if (this.isRelational("<") || this.match(_types.types.jsxTagStart)) {
	    this.next();
	  } else {
	    this.unexpected();
	  }

	  do {
	    node.params.push(this.flowParseTypeParameter());
	    if (!this.isRelational(">")) {
	      this.expect(_types.types.comma);
	    }
	  } while (!this.isRelational(">"));
	  this.expectRelational(">");

	  return this.finishNode(node, "TypeParameterDeclaration");
	};

	pp.flowParseTypeParameterInstantiation = function () {
	  var node = this.startNode(),
	      oldInType = this.state.inType;
	  node.params = [];

	  this.state.inType = true;

	  this.expectRelational("<");
	  while (!this.isRelational(">")) {
	    node.params.push(this.flowParseType());
	    if (!this.isRelational(">")) {
	      this.expect(_types.types.comma);
	    }
	  }
	  this.expectRelational(">");

	  this.state.inType = oldInType;

	  return this.finishNode(node, "TypeParameterInstantiation");
	};

	pp.flowParseObjectPropertyKey = function () {
	  return this.match(_types.types.num) || this.match(_types.types.string) ? this.parseExprAtom() : this.parseIdentifier(true);
	};

	pp.flowParseObjectTypeIndexer = function (node, isStatic) {
	  node.static = isStatic;

	  this.expect(_types.types.bracketL);
	  node.id = this.flowParseObjectPropertyKey();
	  node.key = this.flowParseTypeInitialiser();
	  this.expect(_types.types.bracketR);
	  node.value = this.flowParseTypeInitialiser();

	  this.flowObjectTypeSemicolon();
	  return this.finishNode(node, "ObjectTypeIndexer");
	};

	pp.flowParseObjectTypeMethodish = function (node) {
	  node.params = [];
	  node.rest = null;
	  node.typeParameters = null;

	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterDeclaration();
	  }

	  this.expect(_types.types.parenL);
	  while (this.match(_types.types.name)) {
	    node.params.push(this.flowParseFunctionTypeParam());
	    if (!this.match(_types.types.parenR)) {
	      this.expect(_types.types.comma);
	    }
	  }

	  if (this.eat(_types.types.ellipsis)) {
	    node.rest = this.flowParseFunctionTypeParam();
	  }
	  this.expect(_types.types.parenR);
	  node.returnType = this.flowParseTypeInitialiser();

	  return this.finishNode(node, "FunctionTypeAnnotation");
	};

	pp.flowParseObjectTypeMethod = function (startPos, startLoc, isStatic, key) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(startPos, startLoc));
	  node.static = isStatic;
	  node.key = key;
	  node.optional = false;
	  this.flowObjectTypeSemicolon();
	  return this.finishNode(node, "ObjectTypeProperty");
	};

	pp.flowParseObjectTypeCallProperty = function (node, isStatic) {
	  var valueNode = this.startNode();
	  node.static = isStatic;
	  node.value = this.flowParseObjectTypeMethodish(valueNode);
	  this.flowObjectTypeSemicolon();
	  return this.finishNode(node, "ObjectTypeCallProperty");
	};

	pp.flowParseObjectType = function (allowStatic) {
	  var nodeStart = this.startNode();
	  var node = void 0;
	  var propertyKey = void 0;
	  var isStatic = void 0;

	  nodeStart.callProperties = [];
	  nodeStart.properties = [];
	  nodeStart.indexers = [];

	  this.expect(_types.types.braceL);

	  while (!this.match(_types.types.braceR)) {
	    var optional = false;
	    var startPos = this.state.start,
	        startLoc = this.state.startLoc;
	    node = this.startNode();
	    if (allowStatic && this.isContextual("static")) {
	      this.next();
	      isStatic = true;
	    }

	    if (this.match(_types.types.bracketL)) {
	      nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic));
	    } else if (this.match(_types.types.parenL) || this.isRelational("<")) {
	      nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, allowStatic));
	    } else {
	      if (isStatic && this.match(_types.types.colon)) {
	        propertyKey = this.parseIdentifier();
	      } else {
	        propertyKey = this.flowParseObjectPropertyKey();
	      }
	      if (this.isRelational("<") || this.match(_types.types.parenL)) {
	        // This is a method property
	        nodeStart.properties.push(this.flowParseObjectTypeMethod(startPos, startLoc, isStatic, propertyKey));
	      } else {
	        if (this.eat(_types.types.question)) {
	          optional = true;
	        }
	        node.key = propertyKey;
	        node.value = this.flowParseTypeInitialiser();
	        node.optional = optional;
	        node.static = isStatic;
	        this.flowObjectTypeSemicolon();
	        nodeStart.properties.push(this.finishNode(node, "ObjectTypeProperty"));
	      }
	    }
	  }

	  this.expect(_types.types.braceR);

	  return this.finishNode(nodeStart, "ObjectTypeAnnotation");
	};

	pp.flowObjectTypeSemicolon = function () {
	  if (!this.eat(_types.types.semi) && !this.eat(_types.types.comma) && !this.match(_types.types.braceR)) {
	    this.unexpected();
	  }
	};

	pp.flowParseGenericType = function (startPos, startLoc, id) {
	  var node = this.startNodeAt(startPos, startLoc);

	  node.typeParameters = null;
	  node.id = id;

	  while (this.eat(_types.types.dot)) {
	    var node2 = this.startNodeAt(startPos, startLoc);
	    node2.qualification = node.id;
	    node2.id = this.parseIdentifier();
	    node.id = this.finishNode(node2, "QualifiedTypeIdentifier");
	  }

	  if (this.isRelational("<")) {
	    node.typeParameters = this.flowParseTypeParameterInstantiation();
	  }

	  return this.finishNode(node, "GenericTypeAnnotation");
	};

	pp.flowParseTypeofType = function () {
	  var node = this.startNode();
	  this.expect(_types.types._typeof);
	  node.argument = this.flowParsePrimaryType();
	  return this.finishNode(node, "TypeofTypeAnnotation");
	};

	pp.flowParseTupleType = function () {
	  var node = this.startNode();
	  node.types = [];
	  this.expect(_types.types.bracketL);
	  // We allow trailing commas
	  while (this.state.pos < this.input.length && !this.match(_types.types.bracketR)) {
	    node.types.push(this.flowParseType());
	    if (this.match(_types.types.bracketR)) break;
	    this.expect(_types.types.comma);
	  }
	  this.expect(_types.types.bracketR);
	  return this.finishNode(node, "TupleTypeAnnotation");
	};

	pp.flowParseFunctionTypeParam = function () {
	  var optional = false;
	  var node = this.startNode();
	  node.name = this.parseIdentifier();
	  if (this.eat(_types.types.question)) {
	    optional = true;
	  }
	  node.optional = optional;
	  node.typeAnnotation = this.flowParseTypeInitialiser();
	  return this.finishNode(node, "FunctionTypeParam");
	};

	pp.flowParseFunctionTypeParams = function () {
	  var ret = { params: [], rest: null };
	  while (this.match(_types.types.name)) {
	    ret.params.push(this.flowParseFunctionTypeParam());
	    if (!this.match(_types.types.parenR)) {
	      this.expect(_types.types.comma);
	    }
	  }
	  if (this.eat(_types.types.ellipsis)) {
	    ret.rest = this.flowParseFunctionTypeParam();
	  }
	  return ret;
	};

	pp.flowIdentToTypeAnnotation = function (startPos, startLoc, node, id) {
	  switch (id.name) {
	    case "any":
	      return this.finishNode(node, "AnyTypeAnnotation");

	    case "void":
	      return this.finishNode(node, "VoidTypeAnnotation");

	    case "bool":
	    case "boolean":
	      return this.finishNode(node, "BooleanTypeAnnotation");

	    case "mixed":
	      return this.finishNode(node, "MixedTypeAnnotation");

	    case "number":
	      return this.finishNode(node, "NumberTypeAnnotation");

	    case "string":
	      return this.finishNode(node, "StringTypeAnnotation");

	    default:
	      return this.flowParseGenericType(startPos, startLoc, id);
	  }
	};

	// The parsing of types roughly parallels the parsing of expressions, and
	// primary types are kind of like primary expressions...they're the
	// primitives with which other types are constructed.
	pp.flowParsePrimaryType = function () {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var node = this.startNode();
	  var tmp = void 0;
	  var type = void 0;
	  var isGroupedType = false;

	  switch (this.state.type) {
	    case _types.types.name:
	      return this.flowIdentToTypeAnnotation(startPos, startLoc, node, this.parseIdentifier());

	    case _types.types.braceL:
	      return this.flowParseObjectType();

	    case _types.types.bracketL:
	      return this.flowParseTupleType();

	    case _types.types.relational:
	      if (this.state.value === "<") {
	        node.typeParameters = this.flowParseTypeParameterDeclaration();
	        this.expect(_types.types.parenL);
	        tmp = this.flowParseFunctionTypeParams();
	        node.params = tmp.params;
	        node.rest = tmp.rest;
	        this.expect(_types.types.parenR);

	        this.expect(_types.types.arrow);

	        node.returnType = this.flowParseType();

	        return this.finishNode(node, "FunctionTypeAnnotation");
	      }

	    case _types.types.parenL:
	      this.next();

	      // Check to see if this is actually a grouped type
	      if (!this.match(_types.types.parenR) && !this.match(_types.types.ellipsis)) {
	        if (this.match(_types.types.name)) {
	          var token = this.lookahead().type;
	          isGroupedType = token !== _types.types.question && token !== _types.types.colon;
	        } else {
	          isGroupedType = true;
	        }
	      }

	      if (isGroupedType) {
	        type = this.flowParseType();
	        this.expect(_types.types.parenR);
	        return type;
	      }

	      tmp = this.flowParseFunctionTypeParams();
	      node.params = tmp.params;
	      node.rest = tmp.rest;

	      this.expect(_types.types.parenR);

	      this.expect(_types.types.arrow);

	      node.returnType = this.flowParseType();
	      node.typeParameters = null;

	      return this.finishNode(node, "FunctionTypeAnnotation");

	    case _types.types.string:
	      node.value = this.state.value;
	      this.addExtra(node, "rawValue", node.value);
	      this.addExtra(node, "raw", this.input.slice(this.state.start, this.state.end));
	      this.next();
	      return this.finishNode(node, "StringLiteralTypeAnnotation");

	    case _types.types._true:case _types.types._false:
	      node.value = this.match(_types.types._true);
	      this.next();
	      return this.finishNode(node, "BooleanLiteralTypeAnnotation");

	    case _types.types.plusMin:
	      if (this.state.value === "-") {
	        this.next();
	        if (!this.match(_types.types.num)) this.unexpected();

	        node.value = -this.state.value;
	        this.addExtra(node, "rawValue", node.value);
	        this.addExtra(node, "raw", this.input.slice(this.state.start, this.state.end));
	        this.next();
	        return this.finishNode(node, "NumericLiteralTypeAnnotation");
	      }

	    case _types.types.num:
	      node.value = this.state.value;
	      this.addExtra(node, "rawValue", node.value);
	      this.addExtra(node, "raw", this.input.slice(this.state.start, this.state.end));
	      this.next();
	      return this.finishNode(node, "NumericLiteralTypeAnnotation");

	    case _types.types._null:
	      node.value = this.match(_types.types._null);
	      this.next();
	      return this.finishNode(node, "NullLiteralTypeAnnotation");

	    case _types.types._this:
	      node.value = this.match(_types.types._this);
	      this.next();
	      return this.finishNode(node, "ThisTypeAnnotation");

	    case _types.types.star:
	      this.next();
	      return this.finishNode(node, "ExistentialTypeParam");

	    default:
	      if (this.state.type.keyword === "typeof") {
	        return this.flowParseTypeofType();
	      }
	  }

	  this.unexpected();
	};

	pp.flowParsePostfixType = function () {
	  var node = this.startNode();
	  var type = node.elementType = this.flowParsePrimaryType();
	  if (this.match(_types.types.bracketL)) {
	    this.expect(_types.types.bracketL);
	    this.expect(_types.types.bracketR);
	    return this.finishNode(node, "ArrayTypeAnnotation");
	  } else {
	    return type;
	  }
	};

	pp.flowParsePrefixType = function () {
	  var node = this.startNode();
	  if (this.eat(_types.types.question)) {
	    node.typeAnnotation = this.flowParsePrefixType();
	    return this.finishNode(node, "NullableTypeAnnotation");
	  } else {
	    return this.flowParsePostfixType();
	  }
	};

	pp.flowParseIntersectionType = function () {
	  var node = this.startNode();
	  var type = this.flowParsePrefixType();
	  node.types = [type];
	  while (this.eat(_types.types.bitwiseAND)) {
	    node.types.push(this.flowParsePrefixType());
	  }
	  return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
	};

	pp.flowParseUnionType = function () {
	  var node = this.startNode();
	  var type = this.flowParseIntersectionType();
	  node.types = [type];
	  while (this.eat(_types.types.bitwiseOR)) {
	    node.types.push(this.flowParseIntersectionType());
	  }
	  return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
	};

	pp.flowParseType = function () {
	  var oldInType = this.state.inType;
	  this.state.inType = true;
	  var type = this.flowParseUnionType();
	  this.state.inType = oldInType;
	  return type;
	};

	pp.flowParseTypeAnnotation = function () {
	  var node = this.startNode();
	  node.typeAnnotation = this.flowParseTypeInitialiser();
	  return this.finishNode(node, "TypeAnnotation");
	};

	pp.flowParseTypeAnnotatableIdentifier = function (requireTypeAnnotation, canBeOptionalParam) {

	  var ident = this.parseIdentifier();
	  var isOptionalParam = false;

	  if (canBeOptionalParam && this.eat(_types.types.question)) {
	    this.expect(_types.types.question);
	    isOptionalParam = true;
	  }

	  if (requireTypeAnnotation || this.match(_types.types.colon)) {
	    ident.typeAnnotation = this.flowParseTypeAnnotation();
	    this.finishNode(ident, ident.type);
	  }

	  if (isOptionalParam) {
	    ident.optional = true;
	    this.finishNode(ident, ident.type);
	  }

	  return ident;
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (instance) {
	  instance.extend("parseExprAtom", function (inner) {
	    return function (refShortHandDefaultPos) {
	      if (this.match(_types.types.jsxText)) {
	        var node = this.parseLiteral(this.state.value, "JSXText");
	        // https://github.com/babel/babel/issues/2078
	        node.extra = null;
	        return node;
	      } else if (this.match(_types.types.jsxTagStart)) {
	        return this.jsxParseElement();
	      } else {
	        return inner.call(this, refShortHandDefaultPos);
	      }
	    };
	  });

	  instance.extend("readToken", function (inner) {
	    return function (code) {
	      var context = this.curContext();

	      if (context === _context.types.j_expr) {
	        return this.jsxReadToken();
	      }

	      if (context === _context.types.j_oTag || context === _context.types.j_cTag) {
	        if ((0, _identifier.isIdentifierStart)(code)) {
	          return this.jsxReadWord();
	        }

	        if (code === 62) {
	          ++this.state.pos;
	          return this.finishToken(_types.types.jsxTagEnd);
	        }

	        if ((code === 34 || code === 39) && context === _context.types.j_oTag) {
	          return this.jsxReadString(code);
	        }
	      }

	      if (code === 60 && this.state.exprAllowed) {
	        ++this.state.pos;
	        return this.finishToken(_types.types.jsxTagStart);
	      }

	      return inner.call(this, code);
	    };
	  });

	  instance.extend("updateContext", function (inner) {
	    return function (prevType) {
	      if (this.match(_types.types.braceL)) {
	        var curContext = this.curContext();
	        if (curContext === _context.types.j_oTag) {
	          this.state.context.push(_context.types.braceExpression);
	        } else if (curContext === _context.types.j_expr) {
	          this.state.context.push(_context.types.templateQuasi);
	        } else {
	          inner.call(this, prevType);
	        }
	        this.state.exprAllowed = true;
	      } else if (this.match(_types.types.slash) && prevType === _types.types.jsxTagStart) {
	        this.state.context.length -= 2; // do not consider JSX expr -> JSX open tag -> ... anymore
	        this.state.context.push(_context.types.j_cTag); // reconsider as closing tag context
	        this.state.exprAllowed = false;
	      } else {
	        return inner.call(this, prevType);
	      }
	    };
	  });
	};

	var _xhtml = __webpack_require__(205);

	var _xhtml2 = _interopRequireDefault(_xhtml);

	var _types = __webpack_require__(7);

	var _context = __webpack_require__(32);

	var _parser = __webpack_require__(6);

	var _parser2 = _interopRequireDefault(_parser);

	var _identifier = __webpack_require__(33);

	var _whitespace = __webpack_require__(27);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* eslint indent: 0 */

	var HEX_NUMBER = /^[\da-fA-F]+$/;
	var DECIMAL_NUMBER = /^\d+$/;

	_context.types.j_oTag = new _context.TokContext("<tag", false);
	_context.types.j_cTag = new _context.TokContext("</tag", false);
	_context.types.j_expr = new _context.TokContext("<tag>...</tag>", true, true);

	_types.types.jsxName = new _types.TokenType("jsxName");
	_types.types.jsxText = new _types.TokenType("jsxText", { beforeExpr: true });
	_types.types.jsxTagStart = new _types.TokenType("jsxTagStart", { startsExpr: true });
	_types.types.jsxTagEnd = new _types.TokenType("jsxTagEnd");

	_types.types.jsxTagStart.updateContext = function () {
	  this.state.context.push(_context.types.j_expr); // treat as beginning of JSX expression
	  this.state.context.push(_context.types.j_oTag); // start opening tag context
	  this.state.exprAllowed = false;
	};

	_types.types.jsxTagEnd.updateContext = function (prevType) {
	  var out = this.state.context.pop();
	  if (out === _context.types.j_oTag && prevType === _types.types.slash || out === _context.types.j_cTag) {
	    this.state.context.pop();
	    this.state.exprAllowed = this.curContext() === _context.types.j_expr;
	  } else {
	    this.state.exprAllowed = true;
	  }
	};

	var pp = _parser2.default.prototype;

	// Reads inline JSX contents token.

	pp.jsxReadToken = function () {
	  var out = "";
	  var chunkStart = this.state.pos;
	  for (;;) {
	    if (this.state.pos >= this.input.length) {
	      this.raise(this.state.start, "Unterminated JSX contents");
	    }

	    var ch = this.input.charCodeAt(this.state.pos);

	    switch (ch) {
	      case 60: // "<"
	      case 123:
	        // "{"
	        if (this.state.pos === this.state.start) {
	          if (ch === 60 && this.state.exprAllowed) {
	            ++this.state.pos;
	            return this.finishToken(_types.types.jsxTagStart);
	          }
	          return this.getTokenFromCode(ch);
	        }
	        out += this.input.slice(chunkStart, this.state.pos);
	        return this.finishToken(_types.types.jsxText, out);

	      case 38:
	        // "&"
	        out += this.input.slice(chunkStart, this.state.pos);
	        out += this.jsxReadEntity();
	        chunkStart = this.state.pos;
	        break;

	      default:
	        if ((0, _whitespace.isNewLine)(ch)) {
	          out += this.input.slice(chunkStart, this.state.pos);
	          out += this.jsxReadNewLine(true);
	          chunkStart = this.state.pos;
	        } else {
	          ++this.state.pos;
	        }
	    }
	  }
	};

	pp.jsxReadNewLine = function (normalizeCRLF) {
	  var ch = this.input.charCodeAt(this.state.pos);
	  var out = void 0;
	  ++this.state.pos;
	  if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
	    ++this.state.pos;
	    out = normalizeCRLF ? "\n" : "\r\n";
	  } else {
	    out = String.fromCharCode(ch);
	  }
	  ++this.state.curLine;
	  this.state.lineStart = this.state.pos;

	  return out;
	};

	pp.jsxReadString = function (quote) {
	  var out = "";
	  var chunkStart = ++this.state.pos;
	  for (;;) {
	    if (this.state.pos >= this.input.length) {
	      this.raise(this.state.start, "Unterminated string constant");
	    }

	    var ch = this.input.charCodeAt(this.state.pos);
	    if (ch === quote) break;
	    if (ch === 38) {
	      // "&"
	      out += this.input.slice(chunkStart, this.state.pos);
	      out += this.jsxReadEntity();
	      chunkStart = this.state.pos;
	    } else if ((0, _whitespace.isNewLine)(ch)) {
	      out += this.input.slice(chunkStart, this.state.pos);
	      out += this.jsxReadNewLine(false);
	      chunkStart = this.state.pos;
	    } else {
	      ++this.state.pos;
	    }
	  }
	  out += this.input.slice(chunkStart, this.state.pos++);
	  return this.finishToken(_types.types.string, out);
	};

	pp.jsxReadEntity = function () {
	  var str = "";
	  var count = 0;
	  var entity = void 0;
	  var ch = this.input[this.state.pos];

	  var startPos = ++this.state.pos;
	  while (this.state.pos < this.input.length && count++ < 10) {
	    ch = this.input[this.state.pos++];
	    if (ch === ";") {
	      if (str[0] === "#") {
	        if (str[1] === "x") {
	          str = str.substr(2);
	          if (HEX_NUMBER.test(str)) entity = String.fromCharCode(parseInt(str, 16));
	        } else {
	          str = str.substr(1);
	          if (DECIMAL_NUMBER.test(str)) entity = String.fromCharCode(parseInt(str, 10));
	        }
	      } else {
	        entity = _xhtml2.default[str];
	      }
	      break;
	    }
	    str += ch;
	  }
	  if (!entity) {
	    this.state.pos = startPos;
	    return "&";
	  }
	  return entity;
	};

	// Read a JSX identifier (valid tag or attribute name).
	//
	// Optimized version since JSX identifiers can"t contain
	// escape characters and so can be read as single slice.
	// Also assumes that first character was already checked
	// by isIdentifierStart in readToken.

	pp.jsxReadWord = function () {
	  var ch = void 0;
	  var start = this.state.pos;
	  do {
	    ch = this.input.charCodeAt(++this.state.pos);
	  } while ((0, _identifier.isIdentifierChar)(ch) || ch === 45); // "-"
	  return this.finishToken(_types.types.jsxName, this.input.slice(start, this.state.pos));
	};

	// Transforms JSX element name to string.

	function getQualifiedJSXName(object) {
	  if (object.type === "JSXIdentifier") {
	    return object.name;
	  }

	  if (object.type === "JSXNamespacedName") {
	    return object.namespace.name + ":" + object.name.name;
	  }

	  if (object.type === "JSXMemberExpression") {
	    return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
	  }
	}

	// Parse next token as JSX identifier

	pp.jsxParseIdentifier = function () {
	  var node = this.startNode();
	  if (this.match(_types.types.jsxName)) {
	    node.name = this.state.value;
	  } else if (this.state.type.keyword) {
	    node.name = this.state.type.keyword;
	  } else {
	    this.unexpected();
	  }
	  this.next();
	  return this.finishNode(node, "JSXIdentifier");
	};

	// Parse namespaced identifier.

	pp.jsxParseNamespacedName = function () {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var name = this.jsxParseIdentifier();
	  if (!this.eat(_types.types.colon)) return name;

	  var node = this.startNodeAt(startPos, startLoc);
	  node.namespace = name;
	  node.name = this.jsxParseIdentifier();
	  return this.finishNode(node, "JSXNamespacedName");
	};

	// Parses element name in any form - namespaced, member
	// or single identifier.

	pp.jsxParseElementName = function () {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  var node = this.jsxParseNamespacedName();
	  while (this.eat(_types.types.dot)) {
	    var newNode = this.startNodeAt(startPos, startLoc);
	    newNode.object = node;
	    newNode.property = this.jsxParseIdentifier();
	    node = this.finishNode(newNode, "JSXMemberExpression");
	  }
	  return node;
	};

	// Parses any type of JSX attribute value.

	pp.jsxParseAttributeValue = function () {
	  var node = void 0;
	  switch (this.state.type) {
	    case _types.types.braceL:
	      node = this.jsxParseExpressionContainer();
	      if (node.expression.type === "JSXEmptyExpression") {
	        this.raise(node.start, "JSX attributes must only be assigned a non-empty expression");
	      } else {
	        return node;
	      }

	    case _types.types.jsxTagStart:
	    case _types.types.string:
	      node = this.parseExprAtom();
	      node.extra = null;
	      return node;

	    default:
	      this.raise(this.state.start, "JSX value should be either an expression or a quoted JSX text");
	  }
	};

	// JSXEmptyExpression is unique type since it doesn't actually parse anything,
	// and so it should start at the end of last read token (left brace) and finish
	// at the beginning of the next one (right brace).

	pp.jsxParseEmptyExpression = function () {
	  var node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
	  return this.finishNodeAt(node, "JSXEmptyExpression", this.start, this.startLoc);
	};

	// Parses JSX expression enclosed into curly brackets.

	pp.jsxParseExpressionContainer = function () {
	  var node = this.startNode();
	  this.next();
	  if (this.match(_types.types.braceR)) {
	    node.expression = this.jsxParseEmptyExpression();
	  } else {
	    node.expression = this.parseExpression();
	  }
	  this.expect(_types.types.braceR);
	  return this.finishNode(node, "JSXExpressionContainer");
	};

	// Parses following JSX attribute name-value pair.

	pp.jsxParseAttribute = function () {
	  var node = this.startNode();
	  if (this.eat(_types.types.braceL)) {
	    this.expect(_types.types.ellipsis);
	    node.argument = this.parseMaybeAssign();
	    this.expect(_types.types.braceR);
	    return this.finishNode(node, "JSXSpreadAttribute");
	  }
	  node.name = this.jsxParseNamespacedName();
	  node.value = this.eat(_types.types.eq) ? this.jsxParseAttributeValue() : null;
	  return this.finishNode(node, "JSXAttribute");
	};

	// Parses JSX opening tag starting after "<".

	pp.jsxParseOpeningElementAt = function (startPos, startLoc) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.attributes = [];
	  node.name = this.jsxParseElementName();
	  while (!this.match(_types.types.slash) && !this.match(_types.types.jsxTagEnd)) {
	    node.attributes.push(this.jsxParseAttribute());
	  }
	  node.selfClosing = this.eat(_types.types.slash);
	  this.expect(_types.types.jsxTagEnd);
	  return this.finishNode(node, "JSXOpeningElement");
	};

	// Parses JSX closing tag starting after "</".

	pp.jsxParseClosingElementAt = function (startPos, startLoc) {
	  var node = this.startNodeAt(startPos, startLoc);
	  node.name = this.jsxParseElementName();
	  this.expect(_types.types.jsxTagEnd);
	  return this.finishNode(node, "JSXClosingElement");
	};

	// Parses entire JSX element, including it"s opening tag
	// (starting after "<"), attributes, contents and closing tag.

	pp.jsxParseElementAt = function (startPos, startLoc) {
	  var node = this.startNodeAt(startPos, startLoc);
	  var children = [];
	  var openingElement = this.jsxParseOpeningElementAt(startPos, startLoc);
	  var closingElement = null;

	  if (!openingElement.selfClosing) {
	    contents: for (;;) {
	      switch (this.state.type) {
	        case _types.types.jsxTagStart:
	          startPos = this.state.start;startLoc = this.state.startLoc;
	          this.next();
	          if (this.eat(_types.types.slash)) {
	            closingElement = this.jsxParseClosingElementAt(startPos, startLoc);
	            break contents;
	          }
	          children.push(this.jsxParseElementAt(startPos, startLoc));
	          break;

	        case _types.types.jsxText:
	          children.push(this.parseExprAtom());
	          break;

	        case _types.types.braceL:
	          children.push(this.jsxParseExpressionContainer());
	          break;

	        default:
	          this.unexpected();
	      }
	    }

	    if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
	      this.raise(closingElement.start, "Expected corresponding JSX closing tag for <" + getQualifiedJSXName(openingElement.name) + ">");
	    }
	  }

	  node.openingElement = openingElement;
	  node.closingElement = closingElement;
	  node.children = children;
	  if (this.match(_types.types.relational) && this.state.value === "<") {
	    this.raise(this.state.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
	  }
	  return this.finishNode(node, "JSXElement");
	};

	// Parses entire JSX element from current position.

	pp.jsxParseElement = function () {
	  var startPos = this.state.start,
	      startLoc = this.state.startLoc;
	  this.next();
	  return this.jsxParseElementAt(startPos, startLoc);
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  quot: "\"",
	  amp: "&",
	  apos: "'",
	  lt: "<",
	  gt: ">",
	  nbsp: " ",
	  iexcl: "¡",
	  cent: "¢",
	  pound: "£",
	  curren: "¤",
	  yen: "¥",
	  brvbar: "¦",
	  sect: "§",
	  uml: "¨",
	  copy: "©",
	  ordf: "ª",
	  laquo: "«",
	  not: "¬",
	  shy: "­",
	  reg: "®",
	  macr: "¯",
	  deg: "°",
	  plusmn: "±",
	  sup2: "²",
	  sup3: "³",
	  acute: "´",
	  micro: "µ",
	  para: "¶",
	  middot: "·",
	  cedil: "¸",
	  sup1: "¹",
	  ordm: "º",
	  raquo: "»",
	  frac14: "¼",
	  frac12: "½",
	  frac34: "¾",
	  iquest: "¿",
	  Agrave: "À",
	  Aacute: "Á",
	  Acirc: "Â",
	  Atilde: "Ã",
	  Auml: "Ä",
	  Aring: "Å",
	  AElig: "Æ",
	  Ccedil: "Ç",
	  Egrave: "È",
	  Eacute: "É",
	  Ecirc: "Ê",
	  Euml: "Ë",
	  Igrave: "Ì",
	  Iacute: "Í",
	  Icirc: "Î",
	  Iuml: "Ï",
	  ETH: "Ð",
	  Ntilde: "Ñ",
	  Ograve: "Ò",
	  Oacute: "Ó",
	  Ocirc: "Ô",
	  Otilde: "Õ",
	  Ouml: "Ö",
	  times: "×",
	  Oslash: "Ø",
	  Ugrave: "Ù",
	  Uacute: "Ú",
	  Ucirc: "Û",
	  Uuml: "Ü",
	  Yacute: "Ý",
	  THORN: "Þ",
	  szlig: "ß",
	  agrave: "à",
	  aacute: "á",
	  acirc: "â",
	  atilde: "ã",
	  auml: "ä",
	  aring: "å",
	  aelig: "æ",
	  ccedil: "ç",
	  egrave: "è",
	  eacute: "é",
	  ecirc: "ê",
	  euml: "ë",
	  igrave: "ì",
	  iacute: "í",
	  icirc: "î",
	  iuml: "ï",
	  eth: "ð",
	  ntilde: "ñ",
	  ograve: "ò",
	  oacute: "ó",
	  ocirc: "ô",
	  otilde: "õ",
	  ouml: "ö",
	  divide: "÷",
	  oslash: "ø",
	  ugrave: "ù",
	  uacute: "ú",
	  ucirc: "û",
	  uuml: "ü",
	  yacute: "ý",
	  thorn: "þ",
	  yuml: "ÿ",
	  OElig: "Œ",
	  oelig: "œ",
	  Scaron: "Š",
	  scaron: "š",
	  Yuml: "Ÿ",
	  fnof: "ƒ",
	  circ: "ˆ",
	  tilde: "˜",
	  Alpha: "Α",
	  Beta: "Β",
	  Gamma: "Γ",
	  Delta: "Δ",
	  Epsilon: "Ε",
	  Zeta: "Ζ",
	  Eta: "Η",
	  Theta: "Θ",
	  Iota: "Ι",
	  Kappa: "Κ",
	  Lambda: "Λ",
	  Mu: "Μ",
	  Nu: "Ν",
	  Xi: "Ξ",
	  Omicron: "Ο",
	  Pi: "Π",
	  Rho: "Ρ",
	  Sigma: "Σ",
	  Tau: "Τ",
	  Upsilon: "Υ",
	  Phi: "Φ",
	  Chi: "Χ",
	  Psi: "Ψ",
	  Omega: "Ω",
	  alpha: "α",
	  beta: "β",
	  gamma: "γ",
	  delta: "δ",
	  epsilon: "ε",
	  zeta: "ζ",
	  eta: "η",
	  theta: "θ",
	  iota: "ι",
	  kappa: "κ",
	  lambda: "λ",
	  mu: "μ",
	  nu: "ν",
	  xi: "ξ",
	  omicron: "ο",
	  pi: "π",
	  rho: "ρ",
	  sigmaf: "ς",
	  sigma: "σ",
	  tau: "τ",
	  upsilon: "υ",
	  phi: "φ",
	  chi: "χ",
	  psi: "ψ",
	  omega: "ω",
	  thetasym: "ϑ",
	  upsih: "ϒ",
	  piv: "ϖ",
	  ensp: " ",
	  emsp: " ",
	  thinsp: " ",
	  zwnj: "‌",
	  zwj: "‍",
	  lrm: "‎",
	  rlm: "‏",
	  ndash: "–",
	  mdash: "—",
	  lsquo: "‘",
	  rsquo: "’",
	  sbquo: "‚",
	  ldquo: "“",
	  rdquo: "”",
	  bdquo: "„",
	  dagger: "†",
	  Dagger: "‡",
	  bull: "•",
	  hellip: "…",
	  permil: "‰",
	  prime: "′",
	  Prime: "″",
	  lsaquo: "‹",
	  rsaquo: "›",
	  oline: "‾",
	  frasl: "⁄",
	  euro: "€",
	  image: "ℑ",
	  weierp: "℘",
	  real: "ℜ",
	  trade: "™",
	  alefsym: "ℵ",
	  larr: "←",
	  uarr: "↑",
	  rarr: "→",
	  darr: "↓",
	  harr: "↔",
	  crarr: "↵",
	  lArr: "⇐",
	  uArr: "⇑",
	  rArr: "⇒",
	  dArr: "⇓",
	  hArr: "⇔",
	  forall: "∀",
	  part: "∂",
	  exist: "∃",
	  empty: "∅",
	  nabla: "∇",
	  isin: "∈",
	  notin: "∉",
	  ni: "∋",
	  prod: "∏",
	  sum: "∑",
	  minus: "−",
	  lowast: "∗",
	  radic: "√",
	  prop: "∝",
	  infin: "∞",
	  ang: "∠",
	  and: "∧",
	  or: "∨",
	  cap: "∩",
	  cup: "∪",
	  "int": "∫",
	  there4: "∴",
	  sim: "∼",
	  cong: "≅",
	  asymp: "≈",
	  ne: "≠",
	  equiv: "≡",
	  le: "≤",
	  ge: "≥",
	  sub: "⊂",
	  sup: "⊃",
	  nsub: "⊄",
	  sube: "⊆",
	  supe: "⊇",
	  oplus: "⊕",
	  otimes: "⊗",
	  perp: "⊥",
	  sdot: "⋅",
	  lceil: "⌈",
	  rceil: "⌉",
	  lfloor: "⌊",
	  rfloor: "⌋",
	  lang: "〈",
	  rang: "〉",
	  loz: "◊",
	  spades: "♠",
	  clubs: "♣",
	  hearts: "♥",
	  diams: "♦"
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(4);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(40);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _location = __webpack_require__(42);

	var _context = __webpack_require__(32);

	var _types = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var State = function () {
	  function State() {
	    (0, _classCallCheck3.default)(this, State);
	  }

	  (0, _createClass3.default)(State, [{
	    key: "init",
	    value: function init(options, input) {
	      this.strict = options.strictMode === false ? false : options.sourceType === "module";

	      this.input = input;

	      this.potentialArrowAt = -1;

	      this.inMethod = this.inFunction = this.inGenerator = this.inAsync = false;

	      this.labels = [];

	      this.decorators = [];

	      this.tokens = [];

	      this.comments = [];

	      this.trailingComments = [];
	      this.leadingComments = [];
	      this.commentStack = [];

	      this.pos = this.lineStart = 0;
	      this.curLine = 1;

	      this.type = _types.types.eof;
	      this.value = null;
	      this.start = this.end = this.pos;
	      this.startLoc = this.endLoc = this.curPosition();

	      this.lastTokEndLoc = this.lastTokStartLoc = null;
	      this.lastTokStart = this.lastTokEnd = this.pos;

	      this.context = [_context.types.braceStatement];
	      this.exprAllowed = true;

	      this.containsEsc = this.containsOctal = false;
	      this.octalPosition = null;

	      return this;
	    }

	    // TODO


	    // TODO


	    // Used to signify the start of a potential arrow function


	    // Flags to track whether we are in a function, a generator.


	    // Labels in scope.


	    // Leading decorators.


	    // Token store.


	    // Comment store.


	    // Comment attachment store


	    // The current position of the tokenizer in the input.


	    // Properties of the current token:
	    // Its type


	    // For tokens that include more information than their type, the value


	    // Its start and end offset


	    // And, if locations are used, the {line, column} object
	    // corresponding to those offsets


	    // Position information for the previous token


	    // The context stack is used to superficially track syntactic
	    // context to predict whether a regular expression is allowed in a
	    // given position.


	    // Used to signal to callers of `readWord1` whether the word
	    // contained any escape sequences. This is needed because words with
	    // escape sequences must not be interpreted as keywords.


	    // TODO

	  }, {
	    key: "curPosition",
	    value: function curPosition() {
	      return new _location.Position(this.curLine, this.pos - this.lineStart);
	    }
	  }, {
	    key: "clone",
	    value: function clone(skipArrays) {
	      var state = new State();
	      for (var key in this) {
	        var val = this[key];

	        if ((!skipArrays || key === "context") && Array.isArray(val)) {
	          val = val.slice();
	        }

	        state[key] = val;
	      }
	      return state;
	    }
	  }]);
	  return State;
	}();

	exports.default = State;

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	var escapeStringRegexp = __webpack_require__(259);
	var ansiStyles = __webpack_require__(148);
	var stripAnsi = __webpack_require__(382);
	var hasAnsi = __webpack_require__(263);
	var supportsColor = __webpack_require__(383);
	var defineProps = Object.defineProperties;
	var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);

	function Chalk(options) {
		// detect mode if not set manually
		this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
	}

	// use bright blue on Windows as the normal blue color is illegible
	if (isSimpleWindowsTerm) {
		ansiStyles.blue.open = '\u001b[94m';
	}

	var styles = (function () {
		var ret = {};

		Object.keys(ansiStyles).forEach(function (key) {
			ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

			ret[key] = {
				get: function () {
					return build.call(this, this._styles.concat(key));
				}
			};
		});

		return ret;
	})();

	var proto = defineProps(function chalk() {}, styles);

	function build(_styles) {
		var builder = function () {
			return applyStyle.apply(builder, arguments);
		};

		builder._styles = _styles;
		builder.enabled = this.enabled;
		// __proto__ is used because we must return a function, but there is
		// no way to create a function with a different prototype.
		/* eslint-disable no-proto */
		builder.__proto__ = proto;

		return builder;
	}

	function applyStyle() {
		// support varags, but simply cast to string in case there's only one arg
		var args = arguments;
		var argsLen = args.length;
		var str = argsLen !== 0 && String(arguments[0]);

		if (argsLen > 1) {
			// don't slice `arguments`, it prevents v8 optimizations
			for (var a = 1; a < argsLen; a++) {
				str += ' ' + args[a];
			}
		}

		if (!this.enabled || !str) {
			return str;
		}

		var nestedStyles = this._styles;
		var i = nestedStyles.length;

		// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
		// see https://github.com/chalk/chalk/issues/58
		// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
		var originalDim = ansiStyles.dim.open;
		if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
			ansiStyles.dim.open = '';
		}

		while (i--) {
			var code = ansiStyles[nestedStyles[i]];

			// Replace any instances already present with a re-opening code
			// otherwise only the part of the string until said closing code
			// will be colored, and the rest will simply be 'plain'.
			str = code.open + str.replace(code.closeRe, code.open) + code.close;
		}

		// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
		ansiStyles.dim.open = originalDim;

		return str;
	}

	function init() {
		var ret = {};

		Object.keys(styles).forEach(function (name) {
			ret[name] = {
				get: function () {
					return build.call(this, [name]);
				}
			};
		});

		return ret;
	}

	defineProps(Chalk.prototype, init());

	module.exports = new Chalk();
	module.exports.styles = ansiStyles;
	module.exports.hasColor = hasAnsi;
	module.exports.stripColor = stripAnsi;
	module.exports.supportsColor = supportsColor;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(50);
	__webpack_require__(89);
	module.exports = __webpack_require__(244);

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(3)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(50);
	__webpack_require__(246);
	__webpack_require__(254);
	module.exports = __webpack_require__(3).Map;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(247);
	module.exports = 0x1fffffffffffff;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(248);
	var $Object = __webpack_require__(3).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(249);
	var $Object = __webpack_require__(3).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(3).Object.getOwnPropertySymbols;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(250);
	module.exports = __webpack_require__(3).Object.getPrototypeOf;

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251);
	module.exports = __webpack_require__(3).Object.keys;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(252);
	module.exports = __webpack_require__(3).Object.setPrototypeOf;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	module.exports = __webpack_require__(3).Symbol['for'];

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(90);
	__webpack_require__(88);
	__webpack_require__(255);
	__webpack_require__(256);
	module.exports = __webpack_require__(3).Symbol;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(89);
	__webpack_require__(50);
	module.exports = __webpack_require__(87).f('iterator');

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(88);
	__webpack_require__(50);
	__webpack_require__(253);
	module.exports = __webpack_require__(3).WeakMap;

/***/ },
/* 222 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(44);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(24)
	  , toLength  = __webpack_require__(84)
	  , toIndex   = __webpack_require__(243);
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
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(17)
	  , isArray  = __webpack_require__(111)
	  , SPECIES  = __webpack_require__(5)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(226);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(10).f
	  , create      = __webpack_require__(45)
	  , hide        = __webpack_require__(16)
	  , redefineAll = __webpack_require__(79)
	  , ctx         = __webpack_require__(34)
	  , anInstance  = __webpack_require__(71)
	  , defined     = __webpack_require__(43)
	  , forOf       = __webpack_require__(44)
	  , $iterDefine = __webpack_require__(76)
	  , step        = __webpack_require__(112)
	  , setSpecies  = __webpack_require__(241)
	  , DESCRIPTORS = __webpack_require__(8)
	  , fastKey     = __webpack_require__(36).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(107)
	  , from    = __webpack_require__(224);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(79)
	  , getWeak           = __webpack_require__(36).getWeak
	  , anObject          = __webpack_require__(13)
	  , isObject          = __webpack_require__(17)
	  , anInstance        = __webpack_require__(71)
	  , forOf             = __webpack_require__(44)
	  , createArrayMethod = __webpack_require__(72)
	  , $has              = __webpack_require__(15)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(28)
	  , gOPS    = __webpack_require__(78)
	  , pIE     = __webpack_require__(46);
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
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9).document && document.documentElement;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(35)
	  , ITERATOR   = __webpack_require__(5)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(13);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(45)
	  , descriptor     = __webpack_require__(47)
	  , setToStringTag = __webpack_require__(48)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(16)(IteratorPrototype, __webpack_require__(5)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(28)
	  , toIObject = __webpack_require__(24);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(28)
	  , gOPS     = __webpack_require__(78)
	  , pIE      = __webpack_require__(46)
	  , toObject = __webpack_require__(37)
	  , IObject  = __webpack_require__(75)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(23)(function(){
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
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(10)
	  , anObject = __webpack_require__(13)
	  , getKeys  = __webpack_require__(28);

	module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(24)
	  , gOPN      = __webpack_require__(114).f
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
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(17)
	  , anObject = __webpack_require__(13);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(34)(Function.call, __webpack_require__(113).f(Object.prototype, '__proto__').set, 2);
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
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(9)
	  , core        = __webpack_require__(3)
	  , dP          = __webpack_require__(10)
	  , DESCRIPTORS = __webpack_require__(8)
	  , SPECIES     = __webpack_require__(5)('species');

	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(83)
	  , defined   = __webpack_require__(43);
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
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(83)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(13)
	  , get      = __webpack_require__(118);
	module.exports = __webpack_require__(3).getIterator = function(it){
	  var iterFn = get(it);
	  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
	  return anObject(iterFn.call(it));
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(223)
	  , step             = __webpack_require__(112)
	  , Iterators        = __webpack_require__(35)
	  , toIObject        = __webpack_require__(24);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(76)(Array, 'Array', function(iterated, kind){
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
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(228);

	// 23.1 Map Objects
	module.exports = __webpack_require__(108)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(14);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(45)});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(14);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperty: __webpack_require__(10).f});

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(37)
	  , $getPrototypeOf = __webpack_require__(115);

	__webpack_require__(117)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(37)
	  , $keys    = __webpack_require__(28);

	__webpack_require__(117)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(14);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(240).set});

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(72)(0)
	  , redefine     = __webpack_require__(80)
	  , meta         = __webpack_require__(36)
	  , assign       = __webpack_require__(237)
	  , weak         = __webpack_require__(230)
	  , isObject     = __webpack_require__(17)
	  , has          = __webpack_require__(15)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(108)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(14);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(229)('Map')});

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86)('asyncIterator');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(86)('observable');

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(258);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(381);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },
/* 259 */
/***/ function(module, exports) {

	'use strict';

	var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

	module.exports = function (str) {
		if (typeof str !== 'string') {
			throw new TypeError('Expected a string');
		}

		return str.replace(matchOperatorsRe, '\\$&');
	};


/***/ },
/* 260 */
/***/ function(module, exports) {

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS'
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    function isExpression(node) {
	        if (node == null) { return false; }
	        switch (node.type) {
	            case 'ArrayExpression':
	            case 'AssignmentExpression':
	            case 'BinaryExpression':
	            case 'CallExpression':
	            case 'ConditionalExpression':
	            case 'FunctionExpression':
	            case 'Identifier':
	            case 'Literal':
	            case 'LogicalExpression':
	            case 'MemberExpression':
	            case 'NewExpression':
	            case 'ObjectExpression':
	            case 'SequenceExpression':
	            case 'ThisExpression':
	            case 'UnaryExpression':
	            case 'UpdateExpression':
	                return true;
	        }
	        return false;
	    }

	    function isIterationStatement(node) {
	        if (node == null) { return false; }
	        switch (node.type) {
	            case 'DoWhileStatement':
	            case 'ForInStatement':
	            case 'ForStatement':
	            case 'WhileStatement':
	                return true;
	        }
	        return false;
	    }

	    function isStatement(node) {
	        if (node == null) { return false; }
	        switch (node.type) {
	            case 'BlockStatement':
	            case 'BreakStatement':
	            case 'ContinueStatement':
	            case 'DebuggerStatement':
	            case 'DoWhileStatement':
	            case 'EmptyStatement':
	            case 'ExpressionStatement':
	            case 'ForInStatement':
	            case 'ForStatement':
	            case 'IfStatement':
	            case 'LabeledStatement':
	            case 'ReturnStatement':
	            case 'SwitchStatement':
	            case 'ThrowStatement':
	            case 'TryStatement':
	            case 'VariableDeclaration':
	            case 'WhileStatement':
	            case 'WithStatement':
	                return true;
	        }
	        return false;
	    }

	    function isSourceElement(node) {
	      return isStatement(node) || node != null && node.type === 'FunctionDeclaration';
	    }

	    function trailingStatement(node) {
	        switch (node.type) {
	        case 'IfStatement':
	            if (node.alternate != null) {
	                return node.alternate;
	            }
	            return node.consequent;

	        case 'LabeledStatement':
	        case 'ForStatement':
	        case 'ForInStatement':
	        case 'WhileStatement':
	        case 'WithStatement':
	            return node.body;
	        }
	        return null;
	    }

	    function isProblematicIfStatement(node) {
	        var current;

	        if (node.type !== 'IfStatement') {
	            return false;
	        }
	        if (node.alternate == null) {
	            return false;
	        }
	        current = node.consequent;
	        do {
	            if (current.type === 'IfStatement') {
	                if (current.alternate == null)  {
	                    return true;
	                }
	            }
	            current = trailingStatement(current);
	        } while (current);

	        return false;
	    }

	    module.exports = {
	        isExpression: isExpression,
	        isStatement: isStatement,
	        isIterationStatement: isIterationStatement,
	        isSourceElement: isSourceElement,
	        isProblematicIfStatement: isProblematicIfStatement,

	        trailingStatement: trailingStatement
	    };
	}());
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function () {
	    'use strict';

	    var code = __webpack_require__(119);

	    function isStrictModeReservedWordES6(id) {
	        switch (id) {
	        case 'implements':
	        case 'interface':
	        case 'package':
	        case 'private':
	        case 'protected':
	        case 'public':
	        case 'static':
	        case 'let':
	            return true;
	        default:
	            return false;
	        }
	    }

	    function isKeywordES5(id, strict) {
	        // yield should not be treated as keyword under non-strict mode.
	        if (!strict && id === 'yield') {
	            return false;
	        }
	        return isKeywordES6(id, strict);
	    }

	    function isKeywordES6(id, strict) {
	        if (strict && isStrictModeReservedWordES6(id)) {
	            return true;
	        }

	        switch (id.length) {
	        case 2:
	            return (id === 'if') || (id === 'in') || (id === 'do');
	        case 3:
	            return (id === 'var') || (id === 'for') || (id === 'new') || (id === 'try');
	        case 4:
	            return (id === 'this') || (id === 'else') || (id === 'case') ||
	                (id === 'void') || (id === 'with') || (id === 'enum');
	        case 5:
	            return (id === 'while') || (id === 'break') || (id === 'catch') ||
	                (id === 'throw') || (id === 'const') || (id === 'yield') ||
	                (id === 'class') || (id === 'super');
	        case 6:
	            return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
	                (id === 'switch') || (id === 'export') || (id === 'import');
	        case 7:
	            return (id === 'default') || (id === 'finally') || (id === 'extends');
	        case 8:
	            return (id === 'function') || (id === 'continue') || (id === 'debugger');
	        case 10:
	            return (id === 'instanceof');
	        default:
	            return false;
	        }
	    }

	    function isReservedWordES5(id, strict) {
	        return id === 'null' || id === 'true' || id === 'false' || isKeywordES5(id, strict);
	    }

	    function isReservedWordES6(id, strict) {
	        return id === 'null' || id === 'true' || id === 'false' || isKeywordES6(id, strict);
	    }

	    function isRestrictedWord(id) {
	        return id === 'eval' || id === 'arguments';
	    }

	    function isIdentifierNameES5(id) {
	        var i, iz, ch;

	        if (id.length === 0) { return false; }

	        ch = id.charCodeAt(0);
	        if (!code.isIdentifierStartES5(ch)) {
	            return false;
	        }

	        for (i = 1, iz = id.length; i < iz; ++i) {
	            ch = id.charCodeAt(i);
	            if (!code.isIdentifierPartES5(ch)) {
	                return false;
	            }
	        }
	        return true;
	    }

	    function decodeUtf16(lead, trail) {
	        return (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	    }

	    function isIdentifierNameES6(id) {
	        var i, iz, ch, lowCh, check;

	        if (id.length === 0) { return false; }

	        check = code.isIdentifierStartES6;
	        for (i = 0, iz = id.length; i < iz; ++i) {
	            ch = id.charCodeAt(i);
	            if (0xD800 <= ch && ch <= 0xDBFF) {
	                ++i;
	                if (i >= iz) { return false; }
	                lowCh = id.charCodeAt(i);
	                if (!(0xDC00 <= lowCh && lowCh <= 0xDFFF)) {
	                    return false;
	                }
	                ch = decodeUtf16(ch, lowCh);
	            }
	            if (!check(ch)) {
	                return false;
	            }
	            check = code.isIdentifierPartES6;
	        }
	        return true;
	    }

	    function isIdentifierES5(id, strict) {
	        return isIdentifierNameES5(id) && !isReservedWordES5(id, strict);
	    }

	    function isIdentifierES6(id, strict) {
	        return isIdentifierNameES6(id) && !isReservedWordES6(id, strict);
	    }

	    module.exports = {
	        isKeywordES5: isKeywordES5,
	        isKeywordES6: isKeywordES6,
	        isReservedWordES5: isReservedWordES5,
	        isReservedWordES6: isReservedWordES6,
	        isRestrictedWord: isRestrictedWord,
	        isIdentifierNameES5: isIdentifierNameES5,
	        isIdentifierNameES6: isIdentifierNameES6,
	        isIdentifierES5: isIdentifierES5,
	        isIdentifierES6: isIdentifierES6
	    };
	}());
	/* vim: set sw=4 ts=4 et tw=80 : */


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(267);


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(101);
	var re = new RegExp(ansiRegex().source); // remove the `g` flag
	module.exports = re.test.bind(re);


/***/ },
/* 264 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },
/* 266 */
/***/ function(module, exports) {

	// Copyright 2014, 2015, 2016 Simon Lydell
	// X11 (“MIT”) Licensed. (See LICENSE.)

	// This regex comes from regex.coffee, and is inserted here by generate-index.js
	// (run `npm run build`).
	module.exports = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]{1,6}\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g

	module.exports.matchToToken = function(match) {
	  var token = {type: "invalid", value: match[0]}
	       if (match[ 1]) token.type = "string" , token.closed = !!(match[3] || match[4])
	  else if (match[ 5]) token.type = "comment"
	  else if (match[ 6]) token.type = "comment", token.closed = !!match[7]
	  else if (match[ 8]) token.type = "regex"
	  else if (match[ 9]) token.type = "number"
	  else if (match[10]) token.type = "name"
	  else if (match[11]) token.type = "punctuator"
	  else if (match[12]) token.type = "whitespace"
	  return token
	}


/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = {
		"builtin": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"es5": {
			"Array": false,
			"Boolean": false,
			"constructor": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"propertyIsEnumerable": false,
			"RangeError": false,
			"ReferenceError": false,
			"RegExp": false,
			"String": false,
			"SyntaxError": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false
		},
		"es6": {
			"Array": false,
			"ArrayBuffer": false,
			"Boolean": false,
			"constructor": false,
			"DataView": false,
			"Date": false,
			"decodeURI": false,
			"decodeURIComponent": false,
			"encodeURI": false,
			"encodeURIComponent": false,
			"Error": false,
			"escape": false,
			"eval": false,
			"EvalError": false,
			"Float32Array": false,
			"Float64Array": false,
			"Function": false,
			"hasOwnProperty": false,
			"Infinity": false,
			"Int16Array": false,
			"Int32Array": false,
			"Int8Array": false,
			"isFinite": false,
			"isNaN": false,
			"isPrototypeOf": false,
			"JSON": false,
			"Map": false,
			"Math": false,
			"NaN": false,
			"Number": false,
			"Object": false,
			"parseFloat": false,
			"parseInt": false,
			"Promise": false,
			"propertyIsEnumerable": false,
			"Proxy": false,
			"RangeError": false,
			"ReferenceError": false,
			"Reflect": false,
			"RegExp": false,
			"Set": false,
			"String": false,
			"Symbol": false,
			"SyntaxError": false,
			"System": false,
			"toLocaleString": false,
			"toString": false,
			"TypeError": false,
			"Uint16Array": false,
			"Uint32Array": false,
			"Uint8Array": false,
			"Uint8ClampedArray": false,
			"undefined": false,
			"unescape": false,
			"URIError": false,
			"valueOf": false,
			"WeakMap": false,
			"WeakSet": false
		},
		"browser": {
			"addEventListener": false,
			"alert": false,
			"AnalyserNode": false,
			"AnimationEvent": false,
			"applicationCache": false,
			"ApplicationCache": false,
			"ApplicationCacheErrorEvent": false,
			"atob": false,
			"Attr": false,
			"Audio": false,
			"AudioBuffer": false,
			"AudioBufferSourceNode": false,
			"AudioContext": false,
			"AudioDestinationNode": false,
			"AudioListener": false,
			"AudioNode": false,
			"AudioParam": false,
			"AudioProcessingEvent": false,
			"AutocompleteErrorEvent": false,
			"BarProp": false,
			"BatteryManager": false,
			"BeforeUnloadEvent": false,
			"BiquadFilterNode": false,
			"Blob": false,
			"blur": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"CacheStorage": false,
			"cancelAnimationFrame": false,
			"CanvasGradient": false,
			"CanvasPattern": false,
			"CanvasRenderingContext2D": false,
			"CDATASection": false,
			"ChannelMergerNode": false,
			"ChannelSplitterNode": false,
			"CharacterData": false,
			"clearInterval": false,
			"clearTimeout": false,
			"clientInformation": false,
			"ClientRect": false,
			"ClientRectList": false,
			"ClipboardEvent": false,
			"close": false,
			"closed": false,
			"CloseEvent": false,
			"Comment": false,
			"CompositionEvent": false,
			"confirm": false,
			"console": false,
			"ConvolverNode": false,
			"crypto": false,
			"Crypto": false,
			"CryptoKey": false,
			"CSS": false,
			"CSSFontFaceRule": false,
			"CSSImportRule": false,
			"CSSKeyframeRule": false,
			"CSSKeyframesRule": false,
			"CSSMediaRule": false,
			"CSSPageRule": false,
			"CSSRule": false,
			"CSSRuleList": false,
			"CSSStyleDeclaration": false,
			"CSSStyleRule": false,
			"CSSStyleSheet": false,
			"CSSSupportsRule": false,
			"CSSUnknownRule": false,
			"CSSViewportRule": false,
			"CustomEvent": false,
			"DataTransfer": false,
			"DataTransferItem": false,
			"DataTransferItemList": false,
			"Debug": false,
			"defaultStatus": false,
			"defaultstatus": false,
			"DelayNode": false,
			"DeviceMotionEvent": false,
			"DeviceOrientationEvent": false,
			"devicePixelRatio": false,
			"dispatchEvent": false,
			"document": false,
			"Document": false,
			"DocumentFragment": false,
			"DocumentType": false,
			"DOMError": false,
			"DOMException": false,
			"DOMImplementation": false,
			"DOMParser": false,
			"DOMSettableTokenList": false,
			"DOMStringList": false,
			"DOMStringMap": false,
			"DOMTokenList": false,
			"DragEvent": false,
			"DynamicsCompressorNode": false,
			"Element": false,
			"ElementTimeControl": false,
			"ErrorEvent": false,
			"event": false,
			"Event": false,
			"EventSource": false,
			"EventTarget": false,
			"external": false,
			"fetch": false,
			"File": false,
			"FileError": false,
			"FileList": false,
			"FileReader": false,
			"find": false,
			"focus": false,
			"FocusEvent": false,
			"FontFace": false,
			"FormData": false,
			"frameElement": false,
			"frames": false,
			"GainNode": false,
			"Gamepad": false,
			"GamepadButton": false,
			"GamepadEvent": false,
			"getComputedStyle": false,
			"getSelection": false,
			"HashChangeEvent": false,
			"Headers": false,
			"history": false,
			"History": false,
			"HTMLAllCollection": false,
			"HTMLAnchorElement": false,
			"HTMLAppletElement": false,
			"HTMLAreaElement": false,
			"HTMLAudioElement": false,
			"HTMLBaseElement": false,
			"HTMLBlockquoteElement": false,
			"HTMLBodyElement": false,
			"HTMLBRElement": false,
			"HTMLButtonElement": false,
			"HTMLCanvasElement": false,
			"HTMLCollection": false,
			"HTMLContentElement": false,
			"HTMLDataListElement": false,
			"HTMLDetailsElement": false,
			"HTMLDialogElement": false,
			"HTMLDirectoryElement": false,
			"HTMLDivElement": false,
			"HTMLDListElement": false,
			"HTMLDocument": false,
			"HTMLElement": false,
			"HTMLEmbedElement": false,
			"HTMLFieldSetElement": false,
			"HTMLFontElement": false,
			"HTMLFormControlsCollection": false,
			"HTMLFormElement": false,
			"HTMLFrameElement": false,
			"HTMLFrameSetElement": false,
			"HTMLHeadElement": false,
			"HTMLHeadingElement": false,
			"HTMLHRElement": false,
			"HTMLHtmlElement": false,
			"HTMLIFrameElement": false,
			"HTMLImageElement": false,
			"HTMLInputElement": false,
			"HTMLIsIndexElement": false,
			"HTMLKeygenElement": false,
			"HTMLLabelElement": false,
			"HTMLLayerElement": false,
			"HTMLLegendElement": false,
			"HTMLLIElement": false,
			"HTMLLinkElement": false,
			"HTMLMapElement": false,
			"HTMLMarqueeElement": false,
			"HTMLMediaElement": false,
			"HTMLMenuElement": false,
			"HTMLMetaElement": false,
			"HTMLMeterElement": false,
			"HTMLModElement": false,
			"HTMLObjectElement": false,
			"HTMLOListElement": false,
			"HTMLOptGroupElement": false,
			"HTMLOptionElement": false,
			"HTMLOptionsCollection": false,
			"HTMLOutputElement": false,
			"HTMLParagraphElement": false,
			"HTMLParamElement": false,
			"HTMLPictureElement": false,
			"HTMLPreElement": false,
			"HTMLProgressElement": false,
			"HTMLQuoteElement": false,
			"HTMLScriptElement": false,
			"HTMLSelectElement": false,
			"HTMLShadowElement": false,
			"HTMLSourceElement": false,
			"HTMLSpanElement": false,
			"HTMLStyleElement": false,
			"HTMLTableCaptionElement": false,
			"HTMLTableCellElement": false,
			"HTMLTableColElement": false,
			"HTMLTableElement": false,
			"HTMLTableRowElement": false,
			"HTMLTableSectionElement": false,
			"HTMLTemplateElement": false,
			"HTMLTextAreaElement": false,
			"HTMLTitleElement": false,
			"HTMLTrackElement": false,
			"HTMLUListElement": false,
			"HTMLUnknownElement": false,
			"HTMLVideoElement": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBEnvironment": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"Image": false,
			"ImageBitmap": false,
			"ImageData": false,
			"indexedDB": false,
			"innerHeight": false,
			"innerWidth": false,
			"InputEvent": false,
			"InputMethodContext": false,
			"Intl": false,
			"KeyboardEvent": false,
			"length": false,
			"localStorage": false,
			"location": false,
			"Location": false,
			"locationbar": false,
			"matchMedia": false,
			"MediaElementAudioSourceNode": false,
			"MediaEncryptedEvent": false,
			"MediaError": false,
			"MediaKeyError": false,
			"MediaKeyEvent": false,
			"MediaKeyMessageEvent": false,
			"MediaKeys": false,
			"MediaKeySession": false,
			"MediaKeyStatusMap": false,
			"MediaKeySystemAccess": false,
			"MediaList": false,
			"MediaQueryList": false,
			"MediaQueryListEvent": false,
			"MediaSource": false,
			"MediaStreamAudioDestinationNode": false,
			"MediaStreamAudioSourceNode": false,
			"MediaStreamEvent": false,
			"MediaStreamTrack": false,
			"menubar": false,
			"MessageChannel": false,
			"MessageEvent": false,
			"MessagePort": false,
			"MIDIAccess": false,
			"MIDIConnectionEvent": false,
			"MIDIInput": false,
			"MIDIInputMap": false,
			"MIDIMessageEvent": false,
			"MIDIOutput": false,
			"MIDIOutputMap": false,
			"MIDIPort": false,
			"MimeType": false,
			"MimeTypeArray": false,
			"MouseEvent": false,
			"moveBy": false,
			"moveTo": false,
			"MutationEvent": false,
			"MutationObserver": false,
			"MutationRecord": false,
			"name": false,
			"NamedNodeMap": false,
			"navigator": false,
			"Navigator": false,
			"Node": false,
			"NodeFilter": false,
			"NodeIterator": false,
			"NodeList": false,
			"Notification": false,
			"OfflineAudioCompletionEvent": false,
			"OfflineAudioContext": false,
			"offscreenBuffering": false,
			"onbeforeunload": true,
			"onblur": true,
			"onerror": true,
			"onfocus": true,
			"onload": true,
			"onresize": true,
			"onunload": true,
			"open": false,
			"openDatabase": false,
			"opener": false,
			"opera": false,
			"Option": false,
			"OscillatorNode": false,
			"outerHeight": false,
			"outerWidth": false,
			"PageTransitionEvent": false,
			"pageXOffset": false,
			"pageYOffset": false,
			"parent": false,
			"Path2D": false,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"PeriodicWave": false,
			"Permissions": false,
			"PermissionStatus": false,
			"personalbar": false,
			"Plugin": false,
			"PluginArray": false,
			"PopStateEvent": false,
			"postMessage": false,
			"print": false,
			"ProcessingInstruction": false,
			"ProgressEvent": false,
			"prompt": false,
			"PushManager": false,
			"PushSubscription": false,
			"RadioNodeList": false,
			"Range": false,
			"ReadableByteStream": false,
			"ReadableStream": false,
			"removeEventListener": false,
			"Request": false,
			"requestAnimationFrame": false,
			"resizeBy": false,
			"resizeTo": false,
			"Response": false,
			"RTCIceCandidate": false,
			"RTCSessionDescription": false,
			"screen": false,
			"Screen": false,
			"screenLeft": false,
			"ScreenOrientation": false,
			"screenTop": false,
			"screenX": false,
			"screenY": false,
			"ScriptProcessorNode": false,
			"scroll": false,
			"scrollbars": false,
			"scrollBy": false,
			"scrollTo": false,
			"scrollX": false,
			"scrollY": false,
			"SecurityPolicyViolationEvent": false,
			"Selection": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerRegistration": false,
			"sessionStorage": false,
			"setInterval": false,
			"setTimeout": false,
			"ShadowRoot": false,
			"SharedWorker": false,
			"showModalDialog": false,
			"speechSynthesis": false,
			"SpeechSynthesisEvent": false,
			"SpeechSynthesisUtterance": false,
			"status": false,
			"statusbar": false,
			"stop": false,
			"Storage": false,
			"StorageEvent": false,
			"styleMedia": false,
			"StyleSheet": false,
			"StyleSheetList": false,
			"SubtleCrypto": false,
			"SVGAElement": false,
			"SVGAltGlyphDefElement": false,
			"SVGAltGlyphElement": false,
			"SVGAltGlyphItemElement": false,
			"SVGAngle": false,
			"SVGAnimateColorElement": false,
			"SVGAnimatedAngle": false,
			"SVGAnimatedBoolean": false,
			"SVGAnimatedEnumeration": false,
			"SVGAnimatedInteger": false,
			"SVGAnimatedLength": false,
			"SVGAnimatedLengthList": false,
			"SVGAnimatedNumber": false,
			"SVGAnimatedNumberList": false,
			"SVGAnimatedPathData": false,
			"SVGAnimatedPoints": false,
			"SVGAnimatedPreserveAspectRatio": false,
			"SVGAnimatedRect": false,
			"SVGAnimatedString": false,
			"SVGAnimatedTransformList": false,
			"SVGAnimateElement": false,
			"SVGAnimateMotionElement": false,
			"SVGAnimateTransformElement": false,
			"SVGAnimationElement": false,
			"SVGCircleElement": false,
			"SVGClipPathElement": false,
			"SVGColor": false,
			"SVGColorProfileElement": false,
			"SVGColorProfileRule": false,
			"SVGComponentTransferFunctionElement": false,
			"SVGCSSRule": false,
			"SVGCursorElement": false,
			"SVGDefsElement": false,
			"SVGDescElement": false,
			"SVGDiscardElement": false,
			"SVGDocument": false,
			"SVGElement": false,
			"SVGElementInstance": false,
			"SVGElementInstanceList": false,
			"SVGEllipseElement": false,
			"SVGEvent": false,
			"SVGExternalResourcesRequired": false,
			"SVGFEBlendElement": false,
			"SVGFEColorMatrixElement": false,
			"SVGFEComponentTransferElement": false,
			"SVGFECompositeElement": false,
			"SVGFEConvolveMatrixElement": false,
			"SVGFEDiffuseLightingElement": false,
			"SVGFEDisplacementMapElement": false,
			"SVGFEDistantLightElement": false,
			"SVGFEDropShadowElement": false,
			"SVGFEFloodElement": false,
			"SVGFEFuncAElement": false,
			"SVGFEFuncBElement": false,
			"SVGFEFuncGElement": false,
			"SVGFEFuncRElement": false,
			"SVGFEGaussianBlurElement": false,
			"SVGFEImageElement": false,
			"SVGFEMergeElement": false,
			"SVGFEMergeNodeElement": false,
			"SVGFEMorphologyElement": false,
			"SVGFEOffsetElement": false,
			"SVGFEPointLightElement": false,
			"SVGFESpecularLightingElement": false,
			"SVGFESpotLightElement": false,
			"SVGFETileElement": false,
			"SVGFETurbulenceElement": false,
			"SVGFilterElement": false,
			"SVGFilterPrimitiveStandardAttributes": false,
			"SVGFitToViewBox": false,
			"SVGFontElement": false,
			"SVGFontFaceElement": false,
			"SVGFontFaceFormatElement": false,
			"SVGFontFaceNameElement": false,
			"SVGFontFaceSrcElement": false,
			"SVGFontFaceUriElement": false,
			"SVGForeignObjectElement": false,
			"SVGGElement": false,
			"SVGGeometryElement": false,
			"SVGGlyphElement": false,
			"SVGGlyphRefElement": false,
			"SVGGradientElement": false,
			"SVGGraphicsElement": false,
			"SVGHKernElement": false,
			"SVGICCColor": false,
			"SVGImageElement": false,
			"SVGLangSpace": false,
			"SVGLength": false,
			"SVGLengthList": false,
			"SVGLinearGradientElement": false,
			"SVGLineElement": false,
			"SVGLocatable": false,
			"SVGMarkerElement": false,
			"SVGMaskElement": false,
			"SVGMatrix": false,
			"SVGMetadataElement": false,
			"SVGMissingGlyphElement": false,
			"SVGMPathElement": false,
			"SVGNumber": false,
			"SVGNumberList": false,
			"SVGPaint": false,
			"SVGPathElement": false,
			"SVGPathSeg": false,
			"SVGPathSegArcAbs": false,
			"SVGPathSegArcRel": false,
			"SVGPathSegClosePath": false,
			"SVGPathSegCurvetoCubicAbs": false,
			"SVGPathSegCurvetoCubicRel": false,
			"SVGPathSegCurvetoCubicSmoothAbs": false,
			"SVGPathSegCurvetoCubicSmoothRel": false,
			"SVGPathSegCurvetoQuadraticAbs": false,
			"SVGPathSegCurvetoQuadraticRel": false,
			"SVGPathSegCurvetoQuadraticSmoothAbs": false,
			"SVGPathSegCurvetoQuadraticSmoothRel": false,
			"SVGPathSegLinetoAbs": false,
			"SVGPathSegLinetoHorizontalAbs": false,
			"SVGPathSegLinetoHorizontalRel": false,
			"SVGPathSegLinetoRel": false,
			"SVGPathSegLinetoVerticalAbs": false,
			"SVGPathSegLinetoVerticalRel": false,
			"SVGPathSegList": false,
			"SVGPathSegMovetoAbs": false,
			"SVGPathSegMovetoRel": false,
			"SVGPatternElement": false,
			"SVGPoint": false,
			"SVGPointList": false,
			"SVGPolygonElement": false,
			"SVGPolylineElement": false,
			"SVGPreserveAspectRatio": false,
			"SVGRadialGradientElement": false,
			"SVGRect": false,
			"SVGRectElement": false,
			"SVGRenderingIntent": false,
			"SVGScriptElement": false,
			"SVGSetElement": false,
			"SVGStopElement": false,
			"SVGStringList": false,
			"SVGStylable": false,
			"SVGStyleElement": false,
			"SVGSVGElement": false,
			"SVGSwitchElement": false,
			"SVGSymbolElement": false,
			"SVGTests": false,
			"SVGTextContentElement": false,
			"SVGTextElement": false,
			"SVGTextPathElement": false,
			"SVGTextPositioningElement": false,
			"SVGTitleElement": false,
			"SVGTransform": false,
			"SVGTransformable": false,
			"SVGTransformList": false,
			"SVGTRefElement": false,
			"SVGTSpanElement": false,
			"SVGUnitTypes": false,
			"SVGURIReference": false,
			"SVGUseElement": false,
			"SVGViewElement": false,
			"SVGViewSpec": false,
			"SVGVKernElement": false,
			"SVGZoomAndPan": false,
			"SVGZoomEvent": false,
			"Text": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"TextEvent": false,
			"TextMetrics": false,
			"TextTrack": false,
			"TextTrackCue": false,
			"TextTrackCueList": false,
			"TextTrackList": false,
			"TimeEvent": false,
			"TimeRanges": false,
			"toolbar": false,
			"top": false,
			"Touch": false,
			"TouchEvent": false,
			"TouchList": false,
			"TrackEvent": false,
			"TransitionEvent": false,
			"TreeWalker": false,
			"UIEvent": false,
			"URL": false,
			"ValidityState": false,
			"VTTCue": false,
			"WaveShaperNode": false,
			"WebGLActiveInfo": false,
			"WebGLBuffer": false,
			"WebGLContextEvent": false,
			"WebGLFramebuffer": false,
			"WebGLProgram": false,
			"WebGLRenderbuffer": false,
			"WebGLRenderingContext": false,
			"WebGLShader": false,
			"WebGLShaderPrecisionFormat": false,
			"WebGLTexture": false,
			"WebGLUniformLocation": false,
			"WebSocket": false,
			"WheelEvent": false,
			"window": false,
			"Window": false,
			"Worker": false,
			"XDomainRequest": false,
			"XMLDocument": false,
			"XMLHttpRequest": false,
			"XMLHttpRequestEventTarget": false,
			"XMLHttpRequestProgressEvent": false,
			"XMLHttpRequestUpload": false,
			"XMLSerializer": false,
			"XPathEvaluator": false,
			"XPathException": false,
			"XPathExpression": false,
			"XPathNamespace": false,
			"XPathNSResolver": false,
			"XPathResult": false,
			"XSLTProcessor": false
		},
		"worker": {
			"applicationCache": false,
			"atob": false,
			"Blob": false,
			"BroadcastChannel": false,
			"btoa": false,
			"Cache": false,
			"caches": false,
			"clearInterval": false,
			"clearTimeout": false,
			"close": true,
			"console": false,
			"fetch": false,
			"FileReaderSync": false,
			"FormData": false,
			"Headers": false,
			"IDBCursor": false,
			"IDBCursorWithValue": false,
			"IDBDatabase": false,
			"IDBFactory": false,
			"IDBIndex": false,
			"IDBKeyRange": false,
			"IDBObjectStore": false,
			"IDBOpenDBRequest": false,
			"IDBRequest": false,
			"IDBTransaction": false,
			"IDBVersionChangeEvent": false,
			"ImageData": false,
			"importScripts": true,
			"indexedDB": false,
			"location": false,
			"MessageChannel": false,
			"MessagePort": false,
			"name": false,
			"navigator": false,
			"Notification": false,
			"onclose": true,
			"onconnect": true,
			"onerror": true,
			"onlanguagechange": true,
			"onmessage": true,
			"onoffline": true,
			"ononline": true,
			"onrejectionhandled": true,
			"onunhandledrejection": true,
			"performance": false,
			"Performance": false,
			"PerformanceEntry": false,
			"PerformanceMark": false,
			"PerformanceMeasure": false,
			"PerformanceNavigation": false,
			"PerformanceResourceTiming": false,
			"PerformanceTiming": false,
			"postMessage": true,
			"Promise": false,
			"Request": false,
			"Response": false,
			"self": true,
			"ServiceWorkerRegistration": false,
			"setInterval": false,
			"setTimeout": false,
			"TextDecoder": false,
			"TextEncoder": false,
			"URL": false,
			"WebSocket": false,
			"Worker": false,
			"XMLHttpRequest": false
		},
		"node": {
			"__dirname": false,
			"__filename": false,
			"arguments": false,
			"Buffer": false,
			"clearImmediate": false,
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"exports": true,
			"GLOBAL": false,
			"global": false,
			"module": false,
			"process": false,
			"require": false,
			"root": false,
			"setImmediate": false,
			"setInterval": false,
			"setTimeout": false
		},
		"commonjs": {
			"exports": true,
			"module": false,
			"require": false,
			"global": false
		},
		"amd": {
			"define": false,
			"require": false
		},
		"mocha": {
			"after": false,
			"afterEach": false,
			"before": false,
			"beforeEach": false,
			"context": false,
			"describe": false,
			"it": false,
			"mocha": false,
			"setup": false,
			"specify": false,
			"suite": false,
			"suiteSetup": false,
			"suiteTeardown": false,
			"teardown": false,
			"test": false,
			"xcontext": false,
			"xdescribe": false,
			"xit": false,
			"xspecify": false
		},
		"jasmine": {
			"afterAll": false,
			"afterEach": false,
			"beforeAll": false,
			"beforeEach": false,
			"describe": false,
			"expect": false,
			"fail": false,
			"fdescribe": false,
			"fit": false,
			"it": false,
			"jasmine": false,
			"pending": false,
			"runs": false,
			"spyOn": false,
			"waits": false,
			"waitsFor": false,
			"xdescribe": false,
			"xit": false
		},
		"jest": {
			"afterEach": false,
			"beforeEach": false,
			"describe": false,
			"expect": false,
			"it": false,
			"jest": false,
			"pit": false,
			"require": false,
			"xdescribe": false,
			"xit": false
		},
		"qunit": {
			"asyncTest": false,
			"deepEqual": false,
			"equal": false,
			"expect": false,
			"module": false,
			"notDeepEqual": false,
			"notEqual": false,
			"notOk": false,
			"notPropEqual": false,
			"notStrictEqual": false,
			"ok": false,
			"propEqual": false,
			"QUnit": false,
			"raises": false,
			"start": false,
			"stop": false,
			"strictEqual": false,
			"test": false,
			"throws": false
		},
		"phantomjs": {
			"console": true,
			"exports": true,
			"phantom": true,
			"require": true,
			"WebPage": true
		},
		"couch": {
			"emit": false,
			"exports": false,
			"getRow": false,
			"log": false,
			"module": false,
			"provides": false,
			"require": false,
			"respond": false,
			"send": false,
			"start": false,
			"sum": false
		},
		"rhino": {
			"defineClass": false,
			"deserialize": false,
			"gc": false,
			"help": false,
			"importClass": false,
			"importPackage": false,
			"java": false,
			"load": false,
			"loadClass": false,
			"Packages": false,
			"print": false,
			"quit": false,
			"readFile": false,
			"readUrl": false,
			"runCommand": false,
			"seal": false,
			"serialize": false,
			"spawn": false,
			"sync": false,
			"toint32": false,
			"version": false
		},
		"nashorn": {
			"__DIR__": false,
			"__FILE__": false,
			"__LINE__": false,
			"com": false,
			"edu": false,
			"exit": false,
			"Java": false,
			"java": false,
			"javafx": false,
			"JavaImporter": false,
			"javax": false,
			"JSAdapter": false,
			"load": false,
			"loadWithNewGlobal": false,
			"org": false,
			"Packages": false,
			"print": false,
			"quit": false
		},
		"wsh": {
			"ActiveXObject": true,
			"Enumerator": true,
			"GetObject": true,
			"ScriptEngine": true,
			"ScriptEngineBuildVersion": true,
			"ScriptEngineMajorVersion": true,
			"ScriptEngineMinorVersion": true,
			"VBArray": true,
			"WScript": true,
			"WSH": true,
			"XDomainRequest": true
		},
		"jquery": {
			"$": false,
			"jQuery": false
		},
		"yui": {
			"Y": false,
			"YUI": false,
			"YUI_config": false
		},
		"shelljs": {
			"cat": false,
			"cd": false,
			"chmod": false,
			"config": false,
			"cp": false,
			"dirs": false,
			"echo": false,
			"env": false,
			"error": false,
			"exec": false,
			"exit": false,
			"find": false,
			"grep": false,
			"ls": false,
			"ln": false,
			"mkdir": false,
			"mv": false,
			"popd": false,
			"pushd": false,
			"pwd": false,
			"rm": false,
			"sed": false,
			"target": false,
			"tempdir": false,
			"test": false,
			"which": false
		},
		"prototypejs": {
			"$": false,
			"$$": false,
			"$A": false,
			"$break": false,
			"$continue": false,
			"$F": false,
			"$H": false,
			"$R": false,
			"$w": false,
			"Abstract": false,
			"Ajax": false,
			"Autocompleter": false,
			"Builder": false,
			"Class": false,
			"Control": false,
			"Draggable": false,
			"Draggables": false,
			"Droppables": false,
			"Effect": false,
			"Element": false,
			"Enumerable": false,
			"Event": false,
			"Field": false,
			"Form": false,
			"Hash": false,
			"Insertion": false,
			"ObjectRange": false,
			"PeriodicalExecuter": false,
			"Position": false,
			"Prototype": false,
			"Scriptaculous": false,
			"Selector": false,
			"Sortable": false,
			"SortableObserver": false,
			"Sound": false,
			"Template": false,
			"Toggle": false,
			"Try": false
		},
		"meteor": {
			"$": false,
			"_": false,
			"Accounts": false,
			"App": false,
			"Assets": false,
			"Blaze": false,
			"check": false,
			"Cordova": false,
			"DDP": false,
			"DDPServer": false,
			"Deps": false,
			"EJSON": false,
			"Email": false,
			"HTTP": false,
			"Log": false,
			"Match": false,
			"Meteor": false,
			"Mongo": false,
			"MongoInternals": false,
			"Npm": false,
			"Package": false,
			"Plugin": false,
			"process": false,
			"Random": false,
			"ReactiveDict": false,
			"ReactiveVar": false,
			"Router": false,
			"Session": false,
			"share": false,
			"Spacebars": false,
			"Template": false,
			"Tinytest": false,
			"Tracker": false,
			"UI": false,
			"Utils": false,
			"WebApp": false,
			"WebAppInternals": false
		},
		"mongo": {
			"_isWindows": false,
			"_rand": false,
			"BulkWriteResult": false,
			"cat": false,
			"cd": false,
			"connect": false,
			"db": false,
			"getHostName": false,
			"getMemInfo": false,
			"hostname": false,
			"listFiles": false,
			"load": false,
			"ls": false,
			"md5sumFile": false,
			"mkdir": false,
			"Mongo": false,
			"ObjectId": false,
			"PlanCache": false,
			"print": false,
			"printjson": false,
			"pwd": false,
			"quit": false,
			"removeFile": false,
			"rs": false,
			"sh": false,
			"UUID": false,
			"version": false,
			"WriteResult": false
		},
		"applescript": {
			"$": false,
			"Application": false,
			"Automation": false,
			"console": false,
			"delay": false,
			"Library": false,
			"ObjC": false,
			"ObjectSpecifier": false,
			"Path": false,
			"Progress": false,
			"Ref": false
		},
		"serviceworker": {
			"caches": false,
			"Cache": false,
			"CacheStorage": false,
			"Client": false,
			"clients": false,
			"Clients": false,
			"ExtendableEvent": false,
			"ExtendableMessageEvent": false,
			"FetchEvent": false,
			"importScripts": false,
			"registration": false,
			"self": false,
			"ServiceWorker": false,
			"ServiceWorkerContainer": false,
			"ServiceWorkerGlobalScope": false,
			"ServiceWorkerMessageEvent": false,
			"ServiceWorkerRegistration": false,
			"skipWaiting": false,
			"WindowClient": false
		},
		"atomtest": {
			"advanceClock": false,
			"fakeClearInterval": false,
			"fakeClearTimeout": false,
			"fakeSetInterval": false,
			"fakeSetTimeout": false,
			"resetTimeouts": false,
			"waitsForPromise": false
		},
		"embertest": {
			"andThen": false,
			"click": false,
			"currentPath": false,
			"currentRouteName": false,
			"currentURL": false,
			"fillIn": false,
			"find": false,
			"findWithAssert": false,
			"keyEvent": false,
			"pauseTest": false,
			"triggerEvent": false,
			"visit": false
		},
		"protractor": {
			"$": false,
			"$$": false,
			"browser": false,
			"By": false,
			"by": false,
			"DartObject": false,
			"element": false,
			"protractor": false
		},
		"shared-node-browser": {
			"clearInterval": false,
			"clearTimeout": false,
			"console": false,
			"setInterval": false,
			"setTimeout": false
		},
		"webextensions": {
			"browser": false,
			"chrome": false,
			"opr": false
		},
		"greasemonkey": {
			"GM_addStyle": false,
			"GM_deleteValue": false,
			"GM_getResourceText": false,
			"GM_getResourceURL": false,
			"GM_getValue": false,
			"GM_info": false,
			"GM_listValues": false,
			"GM_log": false,
			"GM_openInTab": false,
			"GM_registerMenuCommand": false,
			"GM_setClipboard": false,
			"GM_setValue": false,
			"GM_xmlhttpRequest": false,
			"unsafeWindow": false
		}
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(11);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(325),
	    hashDelete = __webpack_require__(326),
	    hashGet = __webpack_require__(327),
	    hashHas = __webpack_require__(328),
	    hashSet = __webpack_require__(329);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(11);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11);

	/** Built-in value references. */
	var Reflect = root.Reflect;

	module.exports = Reflect;


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(29),
	    root = __webpack_require__(11);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 273 */
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
	  // Don't return `Map#set` because it doesn't return the map instance in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 274 */
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
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(129);

	/**
	 * A specialized version of `_.includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array ? array.length : 0;
	  return !!length && baseIndexOf(array, value, 0) > -1;
	}

	module.exports = arrayIncludes;


/***/ },
/* 276 */
/***/ function(module, exports) {

	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to search.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludesWith(array, value, comparator) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arrayIncludesWith;


/***/ },
/* 277 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 278 */
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
/* 279 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(62);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used by `_.defaults` to customize its `_.assignIn` use.
	 *
	 * @private
	 * @param {*} objValue The destination value.
	 * @param {*} srcValue The source value.
	 * @param {string} key The key of the property to assign.
	 * @param {Object} object The parent object of `objValue`.
	 * @returns {*} Returns the value to assign.
	 */
	function assignInDefaults(objValue, srcValue, key, object) {
	  if (objValue === undefined ||
	      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
	    return srcValue;
	  }
	  return objValue;
	}

	module.exports = assignInDefaults;


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(53),
	    keys = __webpack_require__(20);

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
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(93),
	    arrayEach = __webpack_require__(125),
	    assignValue = __webpack_require__(95),
	    baseAssign = __webpack_require__(281),
	    cloneBuffer = __webpack_require__(305),
	    copyArray = __webpack_require__(312),
	    copySymbols = __webpack_require__(313),
	    getAllKeys = __webpack_require__(320),
	    getTag = __webpack_require__(136),
	    initCloneArray = __webpack_require__(331),
	    initCloneByTag = __webpack_require__(332),
	    initCloneObject = __webpack_require__(333),
	    isArray = __webpack_require__(12),
	    isBuffer = __webpack_require__(365),
	    isHostObject = __webpack_require__(55),
	    isObject = __webpack_require__(18),
	    keys = __webpack_require__(20);

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
	  // Recursively populate clone (susceptible to call stack limits).
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	module.exports = baseCreate;


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(286),
	    createBaseEach = __webpack_require__(315);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(316);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(285),
	    keys = __webpack_require__(20);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(278),
	    isArray = __webpack_require__(12);

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
/* 288 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(93),
	    equalArrays = __webpack_require__(134),
	    equalByTag = __webpack_require__(318),
	    equalObjects = __webpack_require__(319),
	    getTag = __webpack_require__(136),
	    isArray = __webpack_require__(12),
	    isHostObject = __webpack_require__(55),
	    isTypedArray = __webpack_require__(369);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(93),
	    baseIsEqual = __webpack_require__(130);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(99),
	    isHostObject = __webpack_require__(55),
	    isMasked = __webpack_require__(335),
	    isObject = __webpack_require__(18),
	    toSource = __webpack_require__(142);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(295),
	    baseMatchesProperty = __webpack_require__(296),
	    identity = __webpack_require__(363),
	    isArray = __webpack_require__(12),
	    property = __webpack_require__(373);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 293 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(271),
	    iteratorToArray = __webpack_require__(336);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);

	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}

	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}

	module.exports = baseKeysIn;


/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(290),
	    getMatchData = __webpack_require__(322),
	    matchesStrictComparable = __webpack_require__(141);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(130),
	    get = __webpack_require__(361),
	    hasIn = __webpack_require__(362),
	    isKey = __webpack_require__(57),
	    isStrictComparable = __webpack_require__(139),
	    matchesStrictComparable = __webpack_require__(141),
	    toKey = __webpack_require__(61);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(127);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 298 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeFloor = Math.floor;

	/**
	 * The base implementation of `_.repeat` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {string} string The string to repeat.
	 * @param {number} n The number of times to repeat the string.
	 * @returns {string} Returns the repeated string.
	 */
	function baseRepeat(string, n) {
	  var result = '';
	  if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
	    return result;
	  }
	  // Leverage the exponentiation by squaring algorithm for a faster repeat.
	  // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	  do {
	    if (n % 2) {
	      result += string;
	    }
	    n = nativeFloor(n / 2);
	    if (n) {
	      string += string;
	    }
	  } while (n);

	  return result;
	}

	module.exports = baseRepeat;


/***/ },
/* 299 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(94),
	    isSymbol = __webpack_require__(65);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(122),
	    arrayIncludes = __webpack_require__(275),
	    arrayIncludesWith = __webpack_require__(276),
	    cacheHas = __webpack_require__(303),
	    createSet = __webpack_require__(317),
	    setToArray = __webpack_require__(60);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} [iteratee] The iteratee invoked per element.
	 * @param {Function} [comparator] The comparator invoked per element.
	 * @returns {Array} Returns the new duplicate free array.
	 */
	function baseUniq(array, iteratee, comparator) {
	  var index = -1,
	      includes = arrayIncludes,
	      length = array.length,
	      isCommon = true,
	      result = [],
	      seen = result;

	  if (comparator) {
	    isCommon = false;
	    includes = arrayIncludesWith;
	  }
	  else if (length >= LARGE_ARRAY_SIZE) {
	    var set = iteratee ? null : createSet(array);
	    if (set) {
	      return setToArray(set);
	    }
	    isCommon = false;
	    includes = cacheHas;
	    seen = new SetCache;
	  }
	  else {
	    seen = iteratee ? [] : result;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index],
	        computed = iteratee ? iteratee(value) : value;

	    value = (comparator || value !== 0) ? value : 0;
	    if (isCommon && computed === computed) {
	      var seenIndex = seen.length;
	      while (seenIndex--) {
	        if (seen[seenIndex] === computed) {
	          continue outer;
	        }
	      }
	      if (iteratee) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	    else if (!includes(seen, computed, comparator)) {
	      if (seen !== result) {
	        seen.push(computed);
	      }
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseUniq;


/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(277);

	/**
	 * The base implementation of `_.values` and `_.valuesIn` which creates an
	 * array of `object` property values corresponding to the property names
	 * of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the array of property values.
	 */
	function baseValues(object, props) {
	  return arrayMap(props, function(key) {
	    return object[key];
	  });
	}

	module.exports = baseValues;


/***/ },
/* 303 */
/***/ function(module, exports) {

	/**
	 * Checks if a cache value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;


/***/ },
/* 304 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 305 */
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
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(96);

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
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(273),
	    arrayReduce = __webpack_require__(126),
	    mapToArray = __webpack_require__(140);

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
/* 308 */
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
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(274),
	    arrayReduce = __webpack_require__(126),
	    setToArray = __webpack_require__(60);

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
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(94);

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
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(96);

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
/* 312 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(53),
	    getSymbols = __webpack_require__(135);

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
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(11);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(30);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;


/***/ },
/* 316 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	var Set = __webpack_require__(121),
	    noop = __webpack_require__(372),
	    setToArray = __webpack_require__(60);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Creates a set of `values`.
	 *
	 * @private
	 * @param {Array} values The values to add to the set.
	 * @returns {Object} Returns the new set.
	 */
	var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
	  return new Set(values);
	};

	module.exports = createSet;


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(94),
	    Uint8Array = __webpack_require__(123),
	    equalArrays = __webpack_require__(134),
	    mapToArray = __webpack_require__(140),
	    setToArray = __webpack_require__(60);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);

	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(128),
	    keys = __webpack_require__(20);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(287),
	    getSymbols = __webpack_require__(135),
	    keys = __webpack_require__(20);

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
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(131);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(139),
	    keys = __webpack_require__(20);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 323 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(132),
	    isArguments = __webpack_require__(144),
	    isArray = __webpack_require__(12),
	    isIndex = __webpack_require__(56),
	    isKey = __webpack_require__(57),
	    isLength = __webpack_require__(63),
	    isString = __webpack_require__(64),
	    toKey = __webpack_require__(61);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(59);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 326 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(59);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(59);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(59);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 330 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 331 */
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
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(96),
	    cloneDataView = __webpack_require__(306),
	    cloneMap = __webpack_require__(307),
	    cloneRegExp = __webpack_require__(308),
	    cloneSet = __webpack_require__(309),
	    cloneSymbol = __webpack_require__(310),
	    cloneTypedArray = __webpack_require__(311);

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
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(283),
	    getPrototype = __webpack_require__(97),
	    isPrototype = __webpack_require__(58);

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
/* 334 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(314);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 336 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	module.exports = iteratorToArray;


/***/ },
/* 337 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(52);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(52);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(52);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(52);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(269),
	    ListCache = __webpack_require__(51),
	    Map = __webpack_require__(120);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(54);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(54);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(54);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(54);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 347 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 348 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(51);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 350 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 351 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 352 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(51),
	    MapCache = __webpack_require__(92);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache && cache.__data__.length == LARGE_ARRAY_SIZE) {
	    cache = this.__data__ = new MapCache(cache.__data__);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(371),
	    toString = __webpack_require__(146);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(95),
	    copyObject = __webpack_require__(53),
	    createAssigner = __webpack_require__(133),
	    isArrayLike = __webpack_require__(30),
	    isPrototype = __webpack_require__(58),
	    keys = __webpack_require__(20);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.c = 3;
	 * }
	 *
	 * function Bar() {
	 *   this.e = 5;
	 * }
	 *
	 * Foo.prototype.d = 4;
	 * Bar.prototype.f = 6;
	 *
	 * _.assign({ 'a': 1 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3, 'e': 5 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(53),
	    createAssigner = __webpack_require__(133),
	    keysIn = __webpack_require__(370);

	/**
	 * This method is like `_.assignIn` except that it accepts `customizer`
	 * which is invoked to produce the assigned values. If `customizer` returns
	 * `undefined`, assignment is handled by the method instead. The `customizer`
	 * is invoked with five arguments: (objValue, srcValue, key, object, source).
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extendWith
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} sources The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 * @see _.assignWith
	 * @example
	 *
	 * function customizer(objValue, srcValue) {
	 *   return _.isUndefined(objValue) ? srcValue : objValue;
	 * }
	 *
	 * var defaults = _.partialRight(_.assignInWith, customizer);
	 *
	 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	 * // => { 'a': 1, 'b': 2 }
	 */
	var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
	  copyObject(source, keysIn(source), object, customizer);
	});

	module.exports = assignInWith;


/***/ },
/* 357 */
/***/ function(module, exports) {

	/**
	 * Creates an array with all falsey values removed. The values `false`, `null`,
	 * `0`, `""`, `undefined`, and `NaN` are falsey.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to compact.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 */
	function compact(array) {
	  var index = -1,
	      length = array ? array.length : 0,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (value) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	module.exports = compact;


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(124),
	    assignInDefaults = __webpack_require__(280),
	    assignInWith = __webpack_require__(356),
	    rest = __webpack_require__(145);

	/**
	 * Assigns own and inherited enumerable string keyed properties of source
	 * objects to the destination object for all destination properties that
	 * resolve to `undefined`. Source objects are applied from left to right.
	 * Once a property is set, additional values of the same property are ignored.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.defaultsDeep
	 * @example
	 *
	 * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var defaults = rest(function(args) {
	  args.push(undefined, assignInDefaults);
	  return apply(assignInWith, undefined, args);
	});

	module.exports = defaults;


/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(360);


/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(125),
	    baseEach = __webpack_require__(284),
	    baseIteratee = __webpack_require__(292),
	    isArray = __webpack_require__(12);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _([1, 2]).forEach(function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = forEach;


/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(127);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(288),
	    hasPath = __webpack_require__(324);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 363 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(30),
	    isObjectLike = __webpack_require__(25);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(11),
	    stubFalse = __webpack_require__(376);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

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
	var isBuffer = !Buffer ? stubFalse : function(value) {
	  return value instanceof Buffer;
	};

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(147)(module)))

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(25);

	/** `Object#toString` result references. */
	var numberTag = '[object Number]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Number` primitive or object.
	 *
	 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	 * classified as numbers, use the `_.isFinite` method.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isNumber(3);
	 * // => true
	 *
	 * _.isNumber(Number.MIN_VALUE);
	 * // => true
	 *
	 * _.isNumber(Infinity);
	 * // => true
	 *
	 * _.isNumber('3');
	 * // => false
	 */
	function isNumber(value) {
	  return typeof value == 'number' ||
	    (isObjectLike(value) && objectToString.call(value) == numberTag);
	}

	module.exports = isNumber;


/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(97),
	    isHostObject = __webpack_require__(55),
	    isObjectLike = __webpack_require__(25);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);

	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	function isRegExp(value) {
	  return isObject(value) && objectToString.call(value) == regexpTag;
	}

	module.exports = isRegExp;


/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(63),
	    isObjectLike = __webpack_require__(25);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
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

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeysIn = __webpack_require__(294),
	    indexKeys = __webpack_require__(137),
	    isIndex = __webpack_require__(56),
	    isPrototype = __webpack_require__(58);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(92);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 372 */
/***/ function(module, exports) {

	/**
	 * A method that returns `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
	 * @example
	 *
	 * _.times(2, _.noop);
	 * // => [undefined, undefined]
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(131),
	    basePropertyDeep = __webpack_require__(297),
	    isKey = __webpack_require__(57),
	    toKey = __webpack_require__(61);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	var baseRepeat = __webpack_require__(298),
	    isIterateeCall = __webpack_require__(138),
	    toInteger = __webpack_require__(100),
	    toString = __webpack_require__(146);

	/**
	 * Repeats the given string `n` times.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to repeat.
	 * @param {number} [n=1] The number of times to repeat the string.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the repeated string.
	 * @example
	 *
	 * _.repeat('*', 3);
	 * // => '***'
	 *
	 * _.repeat('abc', 2);
	 * // => 'abcabc'
	 *
	 * _.repeat('abc', 0);
	 * // => ''
	 */
	function repeat(string, n, guard) {
	  if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
	    n = 1;
	  } else {
	    n = toInteger(n);
	  }
	  return baseRepeat(toString(string), n);
	}

	module.exports = repeat;


/***/ },
/* 375 */
/***/ function(module, exports) {

	/**
	 * A method that returns a new empty array.
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
/* 376 */
/***/ function(module, exports) {

	/**
	 * A method that returns `false`.
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
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(378);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(99),
	    isObject = __webpack_require__(18),
	    isSymbol = __webpack_require__(65);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	var baseUniq = __webpack_require__(301);

	/**
	 * Creates a duplicate-free version of an array, using
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons, in which only the first occurrence of each
	 * element is kept.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @returns {Array} Returns the new duplicate free array.
	 * @example
	 *
	 * _.uniq([2, 1, 2]);
	 * // => [2, 1]
	 */
	function uniq(array) {
	  return (array && array.length)
	    ? baseUniq(array)
	    : [];
	}

	module.exports = uniq;


/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	var baseValues = __webpack_require__(302),
	    keys = __webpack_require__(20);

	/**
	 * Creates an array of the own enumerable string keyed property values of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property values.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.values(new Foo);
	 * // => [1, 2] (iteration order is not guaranteed)
	 *
	 * _.values('hi');
	 * // => ['h', 'i']
	 */
	function values(object) {
	  return object ? baseValues(object, keys(object)) : [];
	}

	module.exports = values;


/***/ },
/* 381 */
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ansiRegex = __webpack_require__(101)();

	module.exports = function (str) {
		return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
	};


/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	var argv = process.argv;

	var terminator = argv.indexOf('--');
	var hasFlag = function (flag) {
		flag = '--' + flag;
		var pos = argv.indexOf(flag);
		return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
	};

	module.exports = (function () {
		if ('FORCE_COLOR' in process.env) {
			return true;
		}

		if (hasFlag('no-color') ||
			hasFlag('no-colors') ||
			hasFlag('color=false')) {
			return false;
		}

		if (hasFlag('color') ||
			hasFlag('colors') ||
			hasFlag('color=true') ||
			hasFlag('color=always')) {
			return true;
		}

		if (process.stdout && !process.stdout.isTTY) {
			return false;
		}

		if (process.platform === 'win32') {
			return true;
		}

		if ('COLORTERM' in process.env) {
			return true;
		}

		if (process.env.TERM === 'dumb') {
			return false;
		}

		if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
			return true;
		}

		return false;
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ },
/* 384 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function toFastProperties(obj) {
		function f() {}
		f.prototype = obj;
		new f();
		return;
		eval(obj);
	};


/***/ },
/* 385 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(385);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(264);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(38)))

/***/ }
/******/ ]);