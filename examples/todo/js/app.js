(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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

	var _jsx = __webpack_require__(1);

	var _infernoDom = __webpack_require__(6);

	var _infernoDom2 = _interopRequireDefault(_infernoDom);

	var _relm = __webpack_require__(4);

	var _relm2 = _interopRequireDefault(_relm);

	var _components = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = (0, _relm2.default)(_components.TodoMVC); /* eslint-env browser */


	function draw() {
	  _infernoDom2.default.render((0, _jsx.jsx)(App, null), document.querySelector('#main'));
	}

	App.subscribe(draw);
	draw();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.jsx = jsx;

	var _infernoCreateElement = __webpack_require__(5);

	var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function jsx(tag, props) {
	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }

	  if (tag instanceof Function) return tag(props, children); // Sub-components
	  return _infernoCreateElement2.default.apply(undefined, [tag, props].concat(children));
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.TodoMVC = TodoMVC;
	exports.TodoComponent = TodoComponent;

	var _jsx = __webpack_require__(1);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	function TodoMVC(_ref) {
	  var state = _ref.state;
	  var actions = _ref.actions;
	  var Todos = _ref.components.Todos;

	  var allTodos = state.Todos.length;
	  var activeTodos = state.Todos.filter(function (x) {
	    return !x.completed;
	  }).length;

	  function renderVisibleTodos(Todo, index) {
	    var todoState = state.Todos[index].completed ? 'completed' : 'active';
	    if (state.filter !== 'all' && state.filter !== todoState) return null;
	    return (0, _jsx.jsx)(Todo, { onRemove: function onRemove() {
	        return actions.removeTodo(index);
	      } });
	  }

	  function filterLink(type) {
	    return {
	      className: (0, _classnames2.default)({ selected: state.filter === type }),
	      onClick: function onClick() {
	        actions.changeFilter(type);
	      }
	    };
	  }

	  return (0, _jsx.jsx)(
	    'section',
	    { className: 'todoapp' },
	    (0, _jsx.jsx)(
	      'header',
	      { className: 'header' },
	      (0, _jsx.jsx)(
	        'h1',
	        null,
	        'todos'
	      ),
	      (0, _jsx.jsx)('input', {
	        className: 'new-todo',
	        placeholder: 'What needs to be done?',
	        value: state.newTodo || '',
	        onKeyUp: actions.newTodoInput,
	        autoFocus: true
	      })
	    ),
	    allTodos === 0 ? null : (0, _jsx.jsx)(
	      'section',
	      { className: 'main' },
	      (0, _jsx.jsx)('input', { className: 'toggle-all', type: 'checkbox', onClick: actions.toggleAll }),
	      (0, _jsx.jsx)(
	        'label',
	        { for: 'toggle-all' },
	        'Mark all as complete'
	      ),
	      (0, _jsx.jsx)(
	        'ul',
	        { className: 'todo-list' },
	        Todos.map(renderVisibleTodos)
	      )
	    ),
	    allTodos === 0 ? null : (0, _jsx.jsx)(
	      'footer',
	      { className: 'footer' },
	      (0, _jsx.jsx)(
	        'span',
	        { className: 'todo-count' },
	        (0, _jsx.jsx)(
	          'strong',
	          null,
	          activeTodos
	        ),
	        ' items left'
	      ),
	      (0, _jsx.jsx)(
	        'ul',
	        { className: 'filters' },
	        (0, _jsx.jsx)(
	          'li',
	          null,
	          (0, _jsx.jsx)(
	            'a',
	            _extends({ href: '#/' }, filterLink('all')),
	            'All'
	          )
	        ),
	        (0, _jsx.jsx)(
	          'li',
	          null,
	          (0, _jsx.jsx)(
	            'a',
	            _extends({ href: '#/active' }, filterLink('active')),
	            'Active'
	          )
	        ),
	        (0, _jsx.jsx)(
	          'li',
	          null,
	          (0, _jsx.jsx)(
	            'a',
	            _extends({ href: '#/completed' }, filterLink('completed')),
	            'Completed'
	          )
	        )
	      ),
	      (0, _jsx.jsx)(
	        'button',
	        { className: 'clear-completed', onClick: actions.clearCompleted },
	        'Clear completed'
	      )
	    )
	  );
	}

	TodoMVC.components = {
	  Todos: [TodoComponent]
	};

	TodoMVC.actions = {
	  getInitialState: function getInitialState(state) {
	    return state.merge({ filter: 'all', newTodo: '' });
	  },
	  changeFilter: function changeFilter(state, value) {
	    return state.set('filter', value);
	  },
	  clearCompleted: function clearCompleted(state) {
	    return state.set('Todos', state.Todos.filter(function (todo) {
	      return !todo.completed;
	    }));
	  },
	  removeTodo: function removeTodo(state, index) {
	    return state.splice('Todos', [[index, 1]]);
	  },

	  toggleAll: function toggleAll(state) {
	    var completed = !state.Todos[0].completed;
	    return state.map('Todos', function (todo) {
	      return todo.merge({ completed: completed });
	    });
	  },

	  newTodoInput: function newTodoInput(state, event) {
	    switch (event.keyCode) {
	      // When enter is pressed and input is not empty, create the new todo and clear the input
	      case ENTER_KEY:
	        return !event.target.value ? state : state.update({
	          Todos: { $splice: [[0, 0, { title: event.target.value }]] },
	          newTodo: { $set: '' }
	        });
	      // All other keystrokes, simply update the newTodo
	      default:
	        return state.set('newTodo', event.target.value);
	    }
	  }
	};

	function TodoComponent(_ref2) {
	  var actions = _ref2.actions;
	  var props = _ref2.props;
	  var _ref2$state = _ref2.state;
	  var editing = _ref2$state.editing;
	  var completed = _ref2$state.completed;
	  var title = _ref2$state.title;

	  return (0, _jsx.jsx)(
	    'li',
	    { className: (0, _classnames2.default)({ completed: completed, editing: editing }) },
	    editing === true ?
	    // Edit mode
	    (0, _jsx.jsx)('input', {
	      className: 'edit',
	      value: title,
	      onKeyUp: actions.textInput,
	      config: function config(el) {
	        if (editing) el.focus();
	      }
	    }) :
	    // Normal mode
	    (0, _jsx.jsx)(
	      'div',
	      { className: 'view' },
	      (0, _jsx.jsx)('input', { className: 'toggle', checked: completed, type: 'checkbox', onClick: actions.toggleCompleted }),
	      (0, _jsx.jsx)(
	        'label',
	        { onDblClick: actions.startEditing },
	        title
	      ),
	      (0, _jsx.jsx)('button', { className: 'destroy', onClick: props.onRemove })
	    )
	  );
	}

	TodoComponent.actions = {
	  toggleCompleted: function toggleCompleted(todo) {
	    return todo.set('completed', !todo.completed);
	  },
	  startEditing: function startEditing(todo) {
	    return todo.merge({ editing: true, previousTitle: todo.title });
	  },

	  textInput: function textInput(todo, event) {
	    switch (event.keyCode) {
	      // When enter is pressed, stop editing
	      case ENTER_KEY:
	        return todo.merge({
	          title: event.target.value.trim(),
	          previousTitle: null,
	          editing: false
	        });
	      // When escape is pressed; discard changes and stop editing
	      case ESCAPE_KEY:
	        return todo.merge({
	          title: todo.previousTitle,
	          previousTitle: null,
	          editing: false
	        });
	      // All other keystrokes, simply update the title
	      default:
	        return todo.set('title', event.target.value);
	    }
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory();else if(typeof define==='function'&&define.amd)define([],factory);else if(typeof exports==='object')exports["relm"]=factory();else root["relm"]=factory();})(this,function(){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******/// The require function
	/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
	/******/module.loaded=true;/******/// Return the exports of the module
	/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
	/******/__webpack_require__.p="";/******/// Load entry module and return exports
	/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.unwrapImmutable=exports.makeImmutable=exports.parseComponent=exports.makeReducer=undefined;exports.default=relm;var _redux=__webpack_require__(185);var _reducer=__webpack_require__(71);var _component=__webpack_require__(70);var _update=__webpack_require__(39);/* eslint-disable no-console */var logger=function logger(store){return function(next){return function(action){console.group(action.type);console.info('dispatching',action);var result=next(action);console.log('next state',store.getState());console.groupEnd(action.type);return result;};};};function relm(rootComponent){var opts=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var middleware=opts.debug?(0,_redux.applyMiddleware)(logger):void 0;var store=opts.store||(0,_redux.createStore)((0,_reducer.makeReducer)(rootComponent),middleware);// Setup the component heirarchy
	var result=(0,_component.parseComponent)(rootComponent,{displayName:rootComponent.displayName||rootComponent.name||'app',path:[],dispatch:store.dispatch,getState:function getState(){return store.getState();}});result.subscribe=store.subscribe;result.dispatch=store.dispatch;result.getState=store.getState;return result;}exports.makeReducer=_reducer.makeReducer;exports.parseComponent=_component.parseComponent;exports.makeImmutable=_update.makeImmutable;exports.unwrapImmutable=_update.unwrapImmutable;/***/},/* 1 *//***/function(module,exports){/**
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
		 */var isArray=Array.isArray;module.exports=isArray;/***/},/* 2 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){var checkGlobal=__webpack_require__(107);/** Detect free variable `global` from Node.js. */var freeGlobal=checkGlobal(typeof global=='object'&&global);/** Detect free variable `self`. */var freeSelf=checkGlobal(typeof self=='object'&&self);/** Detect `this` as the global object. */var thisGlobal=checkGlobal(typeof this=='object'&&this);/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||thisGlobal||Function('return this')();module.exports=root;/* WEBPACK VAR INJECTION */}).call(exports,function(){return this;}());/***/},/* 3 *//***/function(module,exports){/**
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
		 */function isObject(value){var type=typeof value;return!!value&&(type=='object'||type=='function');}module.exports=isObject;/***/},/* 4 *//***/function(module,exports,__webpack_require__){var baseHas=__webpack_require__(29),baseKeys=__webpack_require__(95),indexKeys=__webpack_require__(56),isArrayLike=__webpack_require__(10),isIndex=__webpack_require__(8),isPrototype=__webpack_require__(19);/**
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
		 */function keys(object){var isProto=isPrototype(object);if(!(isProto||isArrayLike(object))){return baseKeys(object);}var indexes=indexKeys(object),skipIndexes=!!indexes,result=indexes||[],length=result.length;for(var key in object){if(baseHas(object,key)&&!(skipIndexes&&(key=='length'||isIndex(key,length)))&&!(isProto&&key=='constructor')){result.push(key);}}return result;}module.exports=keys;/***/},/* 5 *//***/function(module,exports,__webpack_require__){var baseIsNative=__webpack_require__(94),getValue=__webpack_require__(127);/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}module.exports=getNative;/***/},/* 6 *//***/function(module,exports,__webpack_require__){var isSymbol=__webpack_require__(24);/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
		 * Converts `value` to a string key if it's not a string or symbol.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @returns {string|symbol} Returns the key.
		 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=toKey;/***/},/* 7 *//***/function(module,exports){/**
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
		 */function isObjectLike(value){return!!value&&typeof value=='object';}module.exports=isObjectLike;/***/},/* 8 *//***/function(module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
		 * Checks if `value` is a valid array-like index.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}module.exports=isIndex;/***/},/* 9 *//***/function(module,exports,__webpack_require__){var isArray=__webpack_require__(1),isSymbol=__webpack_require__(24);/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
		 * Checks if `value` is a property name and not a property path.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {Object} [object] The object to query keys on.
		 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
		 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value;if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}module.exports=isKey;/***/},/* 10 *//***/function(module,exports,__webpack_require__){var getLength=__webpack_require__(124),isFunction=__webpack_require__(22),isLength=__webpack_require__(23);/**
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
		 */function isArrayLike(value){return value!=null&&isLength(getLength(value))&&!isFunction(value);}module.exports=isArrayLike;/***/},/* 11 *//***/function(module,exports,__webpack_require__){var listCacheClear=__webpack_require__(142),listCacheDelete=__webpack_require__(143),listCacheGet=__webpack_require__(144),listCacheHas=__webpack_require__(145),listCacheSet=__webpack_require__(146);/**
		 * Creates an list cache object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
	ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;module.exports=ListCache;/***/},/* 12 *//***/function(module,exports){/**
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
		 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}module.exports=arrayReduce;/***/},/* 13 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(21);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Assigns `value` to `key` of `object` if the existing value is not equivalent
		 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * for equality comparisons.
		 *
		 * @private
		 * @param {Object} object The object to modify.
		 * @param {string} key The key of the property to assign.
		 * @param {*} value The value to assign.
		 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}module.exports=assignValue;/***/},/* 14 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(21);/**
		 * Gets the index at which the `key` is found in `array` of key-value pairs.
		 *
		 * @private
		 * @param {Array} array The array to search.
		 * @param {*} key The key to search for.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}module.exports=assocIndexOf;/***/},/* 15 *//***/function(module,exports,__webpack_require__){var assignValue=__webpack_require__(13);/**
		 * Copies properties of `source` to `object`.
		 *
		 * @private
		 * @param {Object} source The object to copy properties from.
		 * @param {Array} props The property identifiers to copy.
		 * @param {Object} [object={}] The object to copy properties to.
		 * @param {Function} [customizer] The function to customize copied values.
		 * @returns {Object} Returns `object`.
		 */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):source[key];assignValue(object,key,newValue);}return object;}module.exports=copyObject;/***/},/* 16 *//***/function(module,exports,__webpack_require__){var isKeyable=__webpack_require__(139);/**
		 * Gets the data for `map`.
		 *
		 * @private
		 * @param {Object} map The map to query.
		 * @param {string} key The reference key.
		 * @returns {*} Returns the map data.
		 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}module.exports=getMapData;/***/},/* 17 *//***/function(module,exports){/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetPrototype=Object.getPrototypeOf;/**
		 * Gets the `[[Prototype]]` of `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {null|Object} Returns the `[[Prototype]]`.
		 */function getPrototype(value){return nativeGetPrototype(Object(value));}module.exports=getPrototype;/***/},/* 18 *//***/function(module,exports){/**
		 * Checks if `value` is a host object in IE < 9.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
		 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
	// despite having improperly defined `toString` methods.
	var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}module.exports=isHostObject;/***/},/* 19 *//***/function(module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Checks if `value` is likely a prototype object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}module.exports=isPrototype;/***/},/* 20 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(5);/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');module.exports=nativeCreate;/***/},/* 21 *//***/function(module,exports){/**
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
		 */function eq(value,other){return value===other||value!==value&&other!==other;}module.exports=eq;/***/},/* 22 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(3);/** `Object#toString` result references. */var funcTag='[object Function]',genTag='[object GeneratorFunction]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
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
		 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
	// in Safari 8 which returns 'object' for typed array and weak map constructors,
	// and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}module.exports=isFunction;/***/},/* 23 *//***/function(module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
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
		 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}module.exports=isLength;/***/},/* 24 *//***/function(module,exports,__webpack_require__){var isObjectLike=__webpack_require__(7);/** `Object#toString` result references. */var symbolTag='[object Symbol]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
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
		 */function isSymbol(value){return typeof value=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}module.exports=isSymbol;/***/},/* 25 *//***/function(module,exports,__webpack_require__){var mapCacheClear=__webpack_require__(147),mapCacheDelete=__webpack_require__(148),mapCacheGet=__webpack_require__(149),mapCacheHas=__webpack_require__(150),mapCacheSet=__webpack_require__(151);/**
		 * Creates a map cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
	MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;module.exports=MapCache;/***/},/* 26 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(11),stackClear=__webpack_require__(154),stackDelete=__webpack_require__(155),stackGet=__webpack_require__(156),stackHas=__webpack_require__(157),stackSet=__webpack_require__(158);/**
		 * Creates a stack cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function Stack(entries){this.__data__=new ListCache(entries);}// Add methods to `Stack`.
	Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;module.exports=Stack;/***/},/* 27 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(2);/** Built-in value references. */var Symbol=root.Symbol;module.exports=Symbol;/***/},/* 28 *//***/function(module,exports){/**
		 * Appends the elements of `values` to `array`.
		 *
		 * @private
		 * @param {Array} array The array to modify.
		 * @param {Array} values The values to append.
		 * @returns {Array} Returns `array`.
		 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}module.exports=arrayPush;/***/},/* 29 *//***/function(module,exports,__webpack_require__){var getPrototype=__webpack_require__(17);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * The base implementation of `_.has` without support for deep paths.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {Array|string} key The key to check.
		 * @returns {boolean} Returns `true` if `key` exists, else `false`.
		 */function baseHas(object,key){// Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	// that are composed entirely of index properties, return `false` for
	// `hasOwnProperty` checks of them.
	return object!=null&&(hasOwnProperty.call(object,key)||typeof object=='object'&&key in object&&getPrototype(object)===null);}module.exports=baseHas;/***/},/* 30 *//***/function(module,exports,__webpack_require__){var baseMatches=__webpack_require__(97),baseMatchesProperty=__webpack_require__(98),identity=__webpack_require__(168),isArray=__webpack_require__(1),property=__webpack_require__(174);/**
		 * The base implementation of `_.iteratee`.
		 *
		 * @private
		 * @param {*} [value=_.identity] The value to convert to an iteratee.
		 * @returns {Function} Returns the iteratee.
		 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	if(typeof value=='function'){return value;}if(value==null){return identity;}if(typeof value=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}module.exports=baseIteratee;/***/},/* 31 *//***/function(module,exports,__webpack_require__){var isArray=__webpack_require__(1),stringToPath=__webpack_require__(159);/**
		 * Casts `value` to a path array if it's not one.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @returns {Array} Returns the cast property path array.
		 */function castPath(value){return isArray(value)?value:stringToPath(value);}module.exports=castPath;/***/},/* 32 *//***/function(module,exports,__webpack_require__){var Uint8Array=__webpack_require__(42);/**
		 * Creates a clone of `arrayBuffer`.
		 *
		 * @private
		 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
		 * @returns {ArrayBuffer} Returns the cloned array buffer.
		 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}module.exports=cloneArrayBuffer;/***/},/* 33 *//***/function(module,exports,__webpack_require__){var stubArray=__webpack_require__(176);/** Built-in value references. */var getOwnPropertySymbols=Object.getOwnPropertySymbols;/**
		 * Creates an array of the own enumerable symbol properties of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of symbols.
		 */function getSymbols(object){// Coerce `object` to an object to avoid non-object errors in V8.
	// See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
	return getOwnPropertySymbols(Object(object));}// Fallback for IE < 11.
	if(!getOwnPropertySymbols){getSymbols=stubArray;}module.exports=getSymbols;/***/},/* 34 *//***/function(module,exports,__webpack_require__){var baseGet=__webpack_require__(48);/**
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
		 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}module.exports=get;/***/},/* 35 *//***/function(module,exports,__webpack_require__){var isArrayLikeObject=__webpack_require__(169);/** `Object#toString` result references. */var argsTag='[object Arguments]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
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
		 */function isArguments(value){// Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}module.exports=isArguments;/***/},/* 36 *//***/function(module,exports,__webpack_require__){var arrayReduce=__webpack_require__(12),baseEach=__webpack_require__(46),baseIteratee=__webpack_require__(30),baseReduce=__webpack_require__(101),isArray=__webpack_require__(1);/**
		 * Reduces `collection` to a value which is the accumulated result of running
		 * each element in `collection` thru `iteratee`, where each successive
		 * invocation is supplied the return value of the previous. If `accumulator`
		 * is not given, the first element of `collection` is used as the initial
		 * value. The iteratee is invoked with four arguments:
		 * (accumulator, value, index|key, collection).
		 *
		 * Many lodash methods are guarded to work as iteratees for methods like
		 * `_.reduce`, `_.reduceRight`, and `_.transform`.
		 *
		 * The guarded methods are:
		 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
		 * and `sortBy`
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Collection
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		 * @param {*} [accumulator] The initial value.
		 * @returns {*} Returns the accumulated value.
		 * @see _.reduceRight
		 * @example
		 *
		 * _.reduce([1, 2], function(sum, n) {
		 *   return sum + n;
		 * }, 0);
		 * // => 3
		 *
		 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
		 *   (result[value] || (result[value] = [])).push(key);
		 *   return result;
		 * }, {});
		 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
		 */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,baseIteratee(iteratee,4),accumulator,initAccum,baseEach);}module.exports=reduce;/***/},/* 37 *//***/function(module,exports,__webpack_require__){var apply=__webpack_require__(43),toInteger=__webpack_require__(179);/** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
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
		 */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=nativeMax(start===undefined?func.length-1:toInteger(start),0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}switch(start){case 0:return func.call(this,array);case 1:return func.call(this,args[0],array);case 2:return func.call(this,args[0],args[1],array);}var otherArgs=Array(start+1);index=-1;while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}module.exports=rest;/***/},/* 38 *//***/function(module,exports){// shim for using process in browser
	var process=module.exports={};// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	var cachedSetTimeout;var cachedClearTimeout;(function(){try{cachedSetTimeout=setTimeout;}catch(e){cachedSetTimeout=function(){throw new Error('setTimeout is not defined');};}try{cachedClearTimeout=clearTimeout;}catch(e){cachedClearTimeout=function(){throw new Error('clearTimeout is not defined');};}})();var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=cachedSetTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;cachedClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){cachedSetTimeout(drainQueue,0);}};// v8 likes predictible objects
	function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
	process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/* 39 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.update=undefined;var _set2=__webpack_require__(175);var _set3=_interopRequireDefault(_set2);var _assign2=__webpack_require__(160);var _assign3=_interopRequireDefault(_assign2);var _reduce2=__webpack_require__(36);var _reduce3=_interopRequireDefault(_reduce2);var _clone2=__webpack_require__(162);var _clone3=_interopRequireDefault(_clone2);var _each2=__webpack_require__(164);var _each3=_interopRequireDefault(_each2);exports.Immutable=Immutable;exports.makeImmutable=makeImmutable;exports.unwrapImmutable=unwrapImmutable;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var devMode=process.env.NODE_ENV!=='production';function _update(source,mutation){var isChanged=false;var value=source;var newValue=void 0;(0,_each3.default)(mutation,function(mut,key){if(_update.isCommand(key)){newValue=_update.getCommand(key)(mut,value);if(newValue!==source){isChanged=true;value=newValue;}else{value=source;}}else{if(value===source)value=(0,_clone3.default)(source)||{};newValue=_update(value[key],mut);isChanged=isChanged||newValue!==value[key];value[key]=newValue;}});return isChanged?value:source;}exports.update=_update;_update.isCommand=function isCommand(k){return _update.commands.hasOwnProperty(k);};_update.getCommand=function getCommand(k){return _update.commands[k];};_update.commands={$apply:function $apply(f,value){return f(value);},$set:function $set(value){return value;},$push:function $push(elements,arr){if(elements.length>0)return arr.concat(elements);return arr;},$splice:function $splice(splices,arr){if(splices.length>0){return(0,_reduce3.default)(splices,function(acc,splice){acc.splice.apply(acc,splice);return acc;},(0,_clone3.default)(arr));}return arr;},$merge:function $merge(whatToMerge,obj){var result=(0,_clone3.default)(obj);var isChanged=false;(0,_each3.default)(whatToMerge,function(v,k){result[k]=v;isChanged=isChanged||v!==obj[k];});return isChanged?result:obj;}};function Immutable(props){if(!(this instanceof Immutable))return new Immutable(props);(0,_assign3.default)(this,props);if(devMode)Object.freeze(this);}function makeImmutable(arg){return new Immutable(arg);}function unwrapImmutable(result){if(result instanceof Immutable)return(0,_clone3.default)(result);return result;}Immutable.prototype={update:function update(spec){return makeImmutable(_update(this,spec));},set:function set(a,b){return makeImmutable(_update(this,arguments.length===1?{$set:a}:(0,_set3.default)({},a,{$set:b})));},splice:function splice(a,b){return makeImmutable(_update(this,arguments.length===1?{$splice:a}:(0,_set3.default)({},a,{$splice:b})));},map:function map(a,b){// mapWith :: (a -> b) -> [a] -> [b]
	var mapWith=function mapWith(f){return function(arr){return arr.map(function immutableMapper(v,i){var value=makeImmutable(v);var result=f(value,i,arr);return unwrapImmutable(result);});};};return makeImmutable(_update(this,arguments.length===1?{$apply:mapWith(a)}:(0,_set3.default)({},a,{$apply:mapWith(b)})));},merge:function merge(a,b){return makeImmutable(_update(this,arguments.length===1?{$merge:a}:(0,_set3.default)({},a,{$merge:b})));}};/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(38));/***/},/* 40 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(5),root=__webpack_require__(2);/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');module.exports=Map;/***/},/* 41 *//***/function(module,exports,__webpack_require__){var MapCache=__webpack_require__(25),setCacheAdd=__webpack_require__(152),setCacheHas=__webpack_require__(153);/**
		 *
		 * Creates an array cache object to store unique values.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [values] The values to cache.
		 */function SetCache(values){var index=-1,length=values?values.length:0;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
	SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;module.exports=SetCache;/***/},/* 42 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(2);/** Built-in value references. */var Uint8Array=root.Uint8Array;module.exports=Uint8Array;/***/},/* 43 *//***/function(module,exports){/**
		 * A faster alternative to `Function#apply`, this function invokes `func`
		 * with the `this` binding of `thisArg` and the arguments of `args`.
		 *
		 * @private
		 * @param {Function} func The function to invoke.
		 * @param {*} thisArg The `this` binding of `func`.
		 * @param {Array} args The arguments to invoke `func` with.
		 * @returns {*} Returns the result of `func`.
		 */function apply(func,thisArg,args){var length=args.length;switch(length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}module.exports=apply;/***/},/* 44 *//***/function(module,exports){/**
		 * A specialized version of `_.forEach` for arrays without support for
		 * iteratee shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns `array`.
		 */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}module.exports=arrayEach;/***/},/* 45 *//***/function(module,exports){/**
		 * A specialized version of `_.map` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the new mapped array.
		 */function arrayMap(array,iteratee){var index=-1,length=array?array.length:0,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}module.exports=arrayMap;/***/},/* 46 *//***/function(module,exports,__webpack_require__){var baseForOwn=__webpack_require__(47),createBaseEach=__webpack_require__(118);/**
		 * The base implementation of `_.forEach` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array|Object} Returns `collection`.
		 */var baseEach=createBaseEach(baseForOwn);module.exports=baseEach;/***/},/* 47 *//***/function(module,exports,__webpack_require__){var baseFor=__webpack_require__(89),keys=__webpack_require__(4);/**
		 * The base implementation of `_.forOwn` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Object} Returns `object`.
		 */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}module.exports=baseForOwn;/***/},/* 48 *//***/function(module,exports,__webpack_require__){var castPath=__webpack_require__(31),isKey=__webpack_require__(9),toKey=__webpack_require__(6);/**
		 * The base implementation of `_.get` without support for default values.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path of the property to get.
		 * @returns {*} Returns the resolved value.
		 */function baseGet(object,path){path=isKey(path,object)?[path]:castPath(path);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}module.exports=baseGet;/***/},/* 49 *//***/function(module,exports,__webpack_require__){var arrayPush=__webpack_require__(28),isArray=__webpack_require__(1);/**
		 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
		 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
		 * symbols of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Function} keysFunc The function to get the keys of `object`.
		 * @param {Function} symbolsFunc The function to get the symbols of `object`.
		 * @returns {Array} Returns the array of property names and symbols.
		 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}module.exports=baseGetAllKeys;/***/},/* 50 *//***/function(module,exports,__webpack_require__){var baseIsEqualDeep=__webpack_require__(92),isObject=__webpack_require__(3),isObjectLike=__webpack_require__(7);/**
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
		 */function baseIsEqual(value,other,customizer,bitmask,stack){if(value===other){return true;}if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,baseIsEqual,customizer,bitmask,stack);}module.exports=baseIsEqual;/***/},/* 51 *//***/function(module,exports){/**
		 * The base implementation of `_.property` without support for deep paths.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}module.exports=baseProperty;/***/},/* 52 *//***/function(module,exports,__webpack_require__){var isIterateeCall=__webpack_require__(138),rest=__webpack_require__(37);/**
		 * Creates a function like `_.assign`.
		 *
		 * @private
		 * @param {Function} assigner The function to assign values.
		 * @returns {Function} Returns the new assigner function.
		 */function createAssigner(assigner){return rest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}module.exports=createAssigner;/***/},/* 53 *//***/function(module,exports,__webpack_require__){var SetCache=__webpack_require__(41),arraySome=__webpack_require__(82);/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/**
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
		 */function equalArrays(array,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
	var stacked=stack.get(array);if(stacked){return stacked==other;}var index=-1,result=true,seen=bitmask&UNORDERED_COMPARE_FLAG?new SetCache():undefined;stack.set(array,other);// Ignore non-index properties.
	while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
	if(seen){if(!arraySome(other,function(othValue,othIndex){if(!seen.has(othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){return seen.add(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){result=false;break;}}stack['delete'](array);return result;}module.exports=equalArrays;/***/},/* 54 *//***/function(module,exports,__webpack_require__){var DataView=__webpack_require__(72),Map=__webpack_require__(40),Promise=__webpack_require__(74),Set=__webpack_require__(76),WeakMap=__webpack_require__(77),toSource=__webpack_require__(61);/** `Object#toString` result references. */var mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
		 * Gets the `toStringTag` of `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */function getTag(value){return objectToString.call(value);}// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}module.exports=getTag;/***/},/* 55 *//***/function(module,exports,__webpack_require__){var castPath=__webpack_require__(31),isArguments=__webpack_require__(35),isArray=__webpack_require__(1),isIndex=__webpack_require__(8),isKey=__webpack_require__(9),isLength=__webpack_require__(23),isString=__webpack_require__(64),toKey=__webpack_require__(6);/**
		 * Checks if `path` exists on `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path to check.
		 * @param {Function} hasFunc The function to check properties.
		 * @returns {boolean} Returns `true` if `path` exists, else `false`.
		 */function hasPath(object,path,hasFunc){path=isKey(path,object)?[path]:castPath(path);var result,index=-1,length=path.length;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result){return result;}var length=object?object.length:0;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isString(object)||isArguments(object));}module.exports=hasPath;/***/},/* 56 *//***/function(module,exports,__webpack_require__){var baseTimes=__webpack_require__(103),isArguments=__webpack_require__(35),isArray=__webpack_require__(1),isLength=__webpack_require__(23),isString=__webpack_require__(64);/**
		 * Creates an array of index keys for `object` values of arrays,
		 * `arguments` objects, and strings, otherwise `null` is returned.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array|null} Returns index keys, else `null`.
		 */function indexKeys(object){var length=object?object.length:undefined;if(isLength(length)&&(isArray(object)||isString(object)||isArguments(object))){return baseTimes(length,String);}return null;}module.exports=indexKeys;/***/},/* 57 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(3);/**
		 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` if suitable for strict
		 *  equality comparisons, else `false`.
		 */function isStrictComparable(value){return value===value&&!isObject(value);}module.exports=isStrictComparable;/***/},/* 58 *//***/function(module,exports){/**
		 * Converts `map` to its key-value pairs.
		 *
		 * @private
		 * @param {Object} map The map to convert.
		 * @returns {Array} Returns the key-value pairs.
		 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}module.exports=mapToArray;/***/},/* 59 *//***/function(module,exports){/**
		 * A specialized version of `matchesProperty` for source values suitable
		 * for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @param {*} srcValue The value to match.
		 * @returns {Function} Returns the new spec function.
		 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}module.exports=matchesStrictComparable;/***/},/* 60 *//***/function(module,exports){/**
		 * Converts `set` to an array of its values.
		 *
		 * @private
		 * @param {Object} set The set to convert.
		 * @returns {Array} Returns the values.
		 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}module.exports=setToArray;/***/},/* 61 *//***/function(module,exports){/** Used to resolve the decompiled source of functions. */var funcToString=Function.prototype.toString;/**
		 * Converts `func` to its source code.
		 *
		 * @private
		 * @param {Function} func The function to process.
		 * @returns {string} Returns the source code.
		 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}module.exports=toSource;/***/},/* 62 *//***/function(module,exports){/**
		 * Gets the first element of `array`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @alias first
		 * @category Array
		 * @param {Array} array The array to query.
		 * @returns {*} Returns the first element of `array`.
		 * @example
		 *
		 * _.head([1, 2, 3]);
		 * // => 1
		 *
		 * _.head([]);
		 * // => undefined
		 */function head(array){return array&&array.length?array[0]:undefined;}module.exports=head;/***/},/* 63 *//***/function(module,exports,__webpack_require__){var getPrototype=__webpack_require__(17),isHostObject=__webpack_require__(18),isObjectLike=__webpack_require__(7);/** `Object#toString` result references. */var objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=Function.prototype.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
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
		 */function isPlainObject(value){if(!isObjectLike(value)||objectToString.call(value)!=objectTag||isHostObject(value)){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}module.exports=isPlainObject;/***/},/* 64 *//***/function(module,exports,__webpack_require__){var isArray=__webpack_require__(1),isObjectLike=__webpack_require__(7);/** `Object#toString` result references. */var stringTag='[object String]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
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
		 */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag;}module.exports=isString;/***/},/* 65 *//***/function(module,exports,__webpack_require__){var baseKeysIn=__webpack_require__(96),indexKeys=__webpack_require__(56),isIndex=__webpack_require__(8),isPrototype=__webpack_require__(19);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
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
		 */function keysIn(object){var index=-1,isProto=isPrototype(object),props=baseKeysIn(object),propsLength=props.length,indexes=indexKeys(object),skipIndexes=!!indexes,result=indexes||[],length=result.length;while(++index<propsLength){var key=props[index];if(!(skipIndexes&&(key=='length'||isIndex(key,length)))&&!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}module.exports=keysIn;/***/},/* 66 *//***/function(module,exports,__webpack_require__){var baseForOwn=__webpack_require__(47),baseIteratee=__webpack_require__(30);/**
		 * Creates an object with the same keys as `object` and values generated
		 * by running each own enumerable string keyed property of `object` thru
		 * `iteratee`. The iteratee is invoked with three arguments:
		 * (value, key, object).
		 *
		 * @static
		 * @memberOf _
		 * @since 2.4.0
		 * @category Object
		 * @param {Object} object The object to iterate over.
		 * @param {Array|Function|Object|string} [iteratee=_.identity]
		 *  The function invoked per iteration.
		 * @returns {Object} Returns the new mapped object.
		 * @see _.mapKeys
		 * @example
		 *
		 * var users = {
		 *   'fred':    { 'user': 'fred',    'age': 40 },
		 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
		 * };
		 *
		 * _.mapValues(users, function(o) { return o.age; });
		 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
		 *
		 * // The `_.property` iteratee shorthand.
		 * _.mapValues(users, 'age');
		 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
		 */function mapValues(object,iteratee){var result={};iteratee=baseIteratee(iteratee,3);baseForOwn(object,function(value,key,object){result[key]=iteratee(value,key,object);});return result;}module.exports=mapValues;/***/},/* 67 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=compose;/**
		 * Composes single-argument functions from right to left. The rightmost
		 * function can take multiple arguments as it provides the signature for
		 * the resulting composite function.
		 *
		 * @param {...Function} funcs The functions to compose.
		 * @returns {Function} A function obtained by composing the argument functions
		 * from right to left. For example, compose(f, g, h) is identical to doing
		 * (...args) => f(g(h(...args))).
		 */function compose(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}if(funcs.length===0){return function(arg){return arg;};}else{var _ret=function(){var last=funcs[funcs.length-1];var rest=funcs.slice(0,-1);return{v:function v(){return rest.reduceRight(function(composed,f){return f(composed);},last.apply(undefined,arguments));}};}();if(typeof _ret==="object")return _ret.v;}}/***/},/* 68 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.ActionTypes=undefined;exports["default"]=createStore;var _isPlainObject=__webpack_require__(63);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _symbolObservable=__webpack_require__(186);var _symbolObservable2=_interopRequireDefault(_symbolObservable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/**
		 * These are private action types reserved by Redux.
		 * For any unknown actions, you must return the current state.
		 * If the current state is undefined, you must return the initial state.
		 * Do not reference these action types directly in your code.
		 */var ActionTypes=exports.ActionTypes={INIT:'@@redux/INIT'};/**
		 * Creates a Redux store that holds the state tree.
		 * The only way to change the data in the store is to call `dispatch()` on it.
		 *
		 * There should only be a single store in your app. To specify how different
		 * parts of the state tree respond to actions, you may combine several reducers
		 * into a single reducer function by using `combineReducers`.
		 *
		 * @param {Function} reducer A function that returns the next state tree, given
		 * the current state tree and the action to handle.
		 *
		 * @param {any} [initialState] The initial state. You may optionally specify it
		 * to hydrate the state from the server in universal apps, or to restore a
		 * previously serialized user session.
		 * If you use `combineReducers` to produce the root reducer function, this must be
		 * an object with the same shape as `combineReducers` keys.
		 *
		 * @param {Function} enhancer The store enhancer. You may optionally specify it
		 * to enhance the store with third-party capabilities such as middleware,
		 * time travel, persistence, etc. The only store enhancer that ships with Redux
		 * is `applyMiddleware()`.
		 *
		 * @returns {Store} A Redux store that lets you read the state, dispatch actions
		 * and subscribe to changes.
		 */function createStore(reducer,initialState,enhancer){var _ref2;if(typeof initialState==='function'&&typeof enhancer==='undefined'){enhancer=initialState;initialState=undefined;}if(typeof enhancer!=='undefined'){if(typeof enhancer!=='function'){throw new Error('Expected the enhancer to be a function.');}return enhancer(createStore)(reducer,initialState);}if(typeof reducer!=='function'){throw new Error('Expected the reducer to be a function.');}var currentReducer=reducer;var currentState=initialState;var currentListeners=[];var nextListeners=currentListeners;var isDispatching=false;function ensureCanMutateNextListeners(){if(nextListeners===currentListeners){nextListeners=currentListeners.slice();}}/**
		   * Reads the state tree managed by the store.
		   *
		   * @returns {any} The current state tree of your application.
		   */function getState(){return currentState;}/**
		   * Adds a change listener. It will be called any time an action is dispatched,
		   * and some part of the state tree may potentially have changed. You may then
		   * call `getState()` to read the current state tree inside the callback.
		   *
		   * You may call `dispatch()` from a change listener, with the following
		   * caveats:
		   *
		   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
		   * If you subscribe or unsubscribe while the listeners are being invoked, this
		   * will not have any effect on the `dispatch()` that is currently in progress.
		   * However, the next `dispatch()` call, whether nested or not, will use a more
		   * recent snapshot of the subscription list.
		   *
		   * 2. The listener should not expect to see all state changes, as the state
		   * might have been updated multiple times during a nested `dispatch()` before
		   * the listener is called. It is, however, guaranteed that all subscribers
		   * registered before the `dispatch()` started will be called with the latest
		   * state by the time it exits.
		   *
		   * @param {Function} listener A callback to be invoked on every dispatch.
		   * @returns {Function} A function to remove this change listener.
		   */function subscribe(listener){if(typeof listener!=='function'){throw new Error('Expected listener to be a function.');}var isSubscribed=true;ensureCanMutateNextListeners();nextListeners.push(listener);return function unsubscribe(){if(!isSubscribed){return;}isSubscribed=false;ensureCanMutateNextListeners();var index=nextListeners.indexOf(listener);nextListeners.splice(index,1);};}/**
		   * Dispatches an action. It is the only way to trigger a state change.
		   *
		   * The `reducer` function, used to create the store, will be called with the
		   * current state tree and the given `action`. Its return value will
		   * be considered the **next** state of the tree, and the change listeners
		   * will be notified.
		   *
		   * The base implementation only supports plain object actions. If you want to
		   * dispatch a Promise, an Observable, a thunk, or something else, you need to
		   * wrap your store creating function into the corresponding middleware. For
		   * example, see the documentation for the `redux-thunk` package. Even the
		   * middleware will eventually dispatch plain object actions using this method.
		   *
		   * @param {Object} action A plain object representing “what changed”. It is
		   * a good idea to keep actions serializable so you can record and replay user
		   * sessions, or use the time travelling `redux-devtools`. An action must have
		   * a `type` property which may not be `undefined`. It is a good idea to use
		   * string constants for action types.
		   *
		   * @returns {Object} For convenience, the same action object you dispatched.
		   *
		   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
		   * return something else (for example, a Promise you can await).
		   */function dispatch(action){if(!(0,_isPlainObject2["default"])(action)){throw new Error('Actions must be plain objects. '+'Use custom middleware for async actions.');}if(typeof action.type==='undefined'){throw new Error('Actions may not have an undefined "type" property. '+'Have you misspelled a constant?');}if(isDispatching){throw new Error('Reducers may not dispatch actions.');}try{isDispatching=true;currentState=currentReducer(currentState,action);}finally{isDispatching=false;}var listeners=currentListeners=nextListeners;for(var i=0;i<listeners.length;i++){listeners[i]();}return action;}/**
		   * Replaces the reducer currently used by the store to calculate the state.
		   *
		   * You might need this if your app implements code splitting and you want to
		   * load some of the reducers dynamically. You might also need this if you
		   * implement a hot reloading mechanism for Redux.
		   *
		   * @param {Function} nextReducer The reducer for the store to use instead.
		   * @returns {void}
		   */function replaceReducer(nextReducer){if(typeof nextReducer!=='function'){throw new Error('Expected the nextReducer to be a function.');}currentReducer=nextReducer;dispatch({type:ActionTypes.INIT});}/**
		   * Interoperability point for observable/reactive libraries.
		   * @returns {observable} A minimal observable of state changes.
		   * For more information, see the observable proposal:
		   * https://github.com/zenparsing/es-observable
		   */function observable(){var _ref;var outerSubscribe=subscribe;return _ref={/**
		       * The minimal observable subscription method.
		       * @param {Object} observer Any object that can be used as an observer.
		       * The observer object should have a `next` method.
		       * @returns {subscription} An object with an `unsubscribe` method that can
		       * be used to unsubscribe the observable from the store, and prevent further
		       * emission of values from the observable.
		       */subscribe:function subscribe(observer){if(typeof observer!=='object'){throw new TypeError('Expected the observer to be an object.');}function observeState(){if(observer.next){observer.next(getState());}}observeState();var unsubscribe=outerSubscribe(observeState);return{unsubscribe:unsubscribe};}},_ref[_symbolObservable2["default"]]=function(){return this;},_ref;}// When a store is created, an "INIT" action is dispatched so that every
	// reducer returns their initial state. This effectively populates
	// the initial state tree.
	dispatch({type:ActionTypes.INIT});return _ref2={dispatch:dispatch,subscribe:subscribe,getState:getState,replaceReducer:replaceReducer},_ref2[_symbolObservable2["default"]]=observable,_ref2;}/***/},/* 69 *//***/function(module,exports){'use strict';exports.__esModule=true;exports["default"]=warning;/**
		 * Prints a warning in the console if it exists.
		 *
		 * @param {String} message The warning message.
		 * @returns {void}
		 */function warning(message){/* eslint-disable no-console */if(typeof console!=='undefined'&&typeof console.error==='function'){console.error(message);}/* eslint-enable no-console */try{// This error was thrown as a convenience so that if you enable
	// "break on all exceptions" in your console,
	// it would pause the execution at this line.
	throw new Error(message);/* eslint-disable no-empty */}catch(e){}/* eslint-enable no-empty */}/***/},/* 70 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.parseComponent=undefined;var _head2=__webpack_require__(62);var _head3=_interopRequireDefault(_head2);var _isArray2=__webpack_require__(1);var _isArray3=_interopRequireDefault(_isArray2);var _reduce2=__webpack_require__(36);var _reduce3=_interopRequireDefault(_reduce2);var _mapValues2=__webpack_require__(66);var _mapValues3=_interopRequireDefault(_mapValues2);var _omit2=__webpack_require__(173);var _omit3=_interopRequireDefault(_omit2);var _keys2=__webpack_require__(4);var _keys3=_interopRequireDefault(_keys2);var _get2=__webpack_require__(34);var _get3=_interopRequireDefault(_get2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function parseListComponent(component,opts){var dispatch=opts.dispatch;var _getState=opts.getState;var path=opts.path;var displayName=opts.displayName;var cache=new WeakMap();return function getter(){return _getState().map(function(state,index){// Check if the component was previously parsed
	var cached=cache.get(state);if(cached&&cached.index===index)return cached.view;// Cache miss - parse the component
	// eslint-disable-next-line no-use-before-define
	var view=parseComponent(component,{displayName:displayName+'['+index+']',dispatch:dispatch,getState:function getState(){return(0,_get3.default)(_getState(),index);},path:path.concat(index)});cache.set(state,{index:index,view:view});return view;});};}function parseComponent(component,opts){var render=component;var dispatch=opts.dispatch;var _getState2=opts.getState;var path=opts.path;var displayName=opts.displayName;// Prepare actions
	var childKeys=(0,_keys3.default)(component.components);var ownActions=(0,_omit3.default)(component.actions||{},childKeys);var actionCreator=function actionCreator(__,type){return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return dispatch({type:path.concat(type),args:args});};};var actions=(0,_mapValues3.default)(ownActions,actionCreator);// Prepare components
	var components=(0,_reduce3.default)(component.components,function(obj,it,name){var childOpts={displayName:name,dispatch:dispatch,getState:function getState(){return(0,_get3.default)(_getState2(),name);},path:path.concat(name)};// List component
	if((0,_isArray3.default)(it)){return Object.defineProperty(obj,name,{enumerable:true,get:parseListComponent((0,_head3.default)(it),childOpts)});}// Normal component
	obj[name]=parseComponent(it,childOpts);return obj;},{});function view(props){for(var _len2=arguments.length,children=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){children[_key2-1]=arguments[_key2];}return render({props:props,children:children,actions:actions,components:components,state:_getState2()});}view.displayName=displayName;view.actions=actions;return view;}exports.parseComponent=parseComponent;/***/},/* 71 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _defaults2=__webpack_require__(163);var _defaults3=_interopRequireDefault(_defaults2);var _get2=__webpack_require__(34);var _get3=_interopRequireDefault(_get2);var _has2=__webpack_require__(166);var _has3=_interopRequireDefault(_has2);var _isFunction2=__webpack_require__(22);var _isFunction3=_interopRequireDefault(_isFunction2);var _reduce2=__webpack_require__(36);var _reduce3=_interopRequireDefault(_reduce2);var _mapValues2=__webpack_require__(66);var _mapValues3=_interopRequireDefault(_mapValues2);var _head2=__webpack_require__(62);var _head3=_interopRequireDefault(_head2);var _isArray2=__webpack_require__(1);var _isArray3=_interopRequireDefault(_isArray2);exports.makeReducer=makeReducer;var _update3=__webpack_require__(39);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _toArray(arr){return Array.isArray(arr)?arr:Array.from(arr);}function makeReducer(component){var isListComponent=(0,_isArray3.default)(component);var source=isListComponent?(0,_head3.default)(component):component;var components=(0,_mapValues3.default)(source.components,makeReducer);var actions=(0,_reduce3.default)(source.actions,function convertActions(output,action,name){if(!(0,_isFunction3.default)(action))return output;output[name]=action;return output;},{});var init=function init(){var childState=(0,_mapValues3.default)(components,function(childReducer){return childReducer();});if(!actions.getInitialState)return childState;var clone=(0,_update3.makeImmutable)(childState);var initialState=actions.getInitialState(clone);return(0,_update3.unwrapImmutable)(initialState);};var reducerType=isListComponent?'list':'normal';return makeReducer[reducerType](components,actions,init);}makeReducer.normal=function makeNormalReducer(components,actions,init){return function reducer(){var state=arguments.length<=0||arguments[0]===undefined?init():arguments[0];var event=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];if(!event.type)return state;var _event$type=_toArray(event.type);var head=_event$type[0];var tail=_event$type.slice(1);var componentHasAction=(0,_has3.default)(actions,head);var isChildEvent=(0,_has3.default)(components,head);// Use action if defined
	if(componentHasAction){var result=(0,_get3.default)(actions,head).apply(undefined,[(0,_update3.makeImmutable)(state)].concat(_toConsumableArray(event.args||[])));// Action overrides can return undefined to let the action pass through
	var ignoreResult=result===void 0;if(!ignoreResult)return(0,_update3.unwrapImmutable)(result);}// Call child reducer if not already handled by local action
	if(isChildEvent){var childReducer=components[head];var _result=childReducer(state[head],(0,_defaults3.default)({type:tail},event));return(0,_update3.update)(state,_defineProperty({},head,{$set:_result}));}// No-op by default
	return state;};};makeReducer.list=function makeListReducer(components,actions,init){return function listReducer(){var list=arguments.length<=0||arguments[0]===undefined?[]:arguments[0];var event=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];if(!event.type)return list;var _event$type2=_toArray(event.type);var index=_event$type2[0];var head=_event$type2[1];var tail=_event$type2.slice(2);var componentHasAction=(0,_has3.default)(actions,head);var isChildEvent=(0,_has3.default)(components,head);// Use action if defined
	if(componentHasAction){var state=list[index]||init();var result=(0,_get3.default)(actions,head).apply(undefined,[(0,_update3.makeImmutable)(state)].concat(_toConsumableArray(event.args||[])));// Action overrides can return undefined to let the action pass through
	var ignoreResult=result===void 0;if(!ignoreResult)return(0,_update3.update)(list,{$splice:[[index,1,(0,_update3.unwrapImmutable)(result)]]});}// Call child reducer if not already handled by local action
	if(isChildEvent){var childReducer=components[head];var _result2=childReducer(list[head],(0,_defaults3.default)({type:tail},event));return(0,_update3.update)(list,_defineProperty({},index,_defineProperty({},head,{$set:_result2})));}// No-op by default
	return list;};};/***/},/* 72 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(5),root=__webpack_require__(2);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView');module.exports=DataView;/***/},/* 73 *//***/function(module,exports,__webpack_require__){var hashClear=__webpack_require__(128),hashDelete=__webpack_require__(129),hashGet=__webpack_require__(130),hashHas=__webpack_require__(131),hashSet=__webpack_require__(132);/**
		 * Creates a hash object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
	Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;module.exports=Hash;/***/},/* 74 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(5),root=__webpack_require__(2);/* Built-in method references that are verified to be native. */var Promise=getNative(root,'Promise');module.exports=Promise;/***/},/* 75 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(2);/** Built-in value references. */var Reflect=root.Reflect;module.exports=Reflect;/***/},/* 76 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(5),root=__webpack_require__(2);/* Built-in method references that are verified to be native. */var Set=getNative(root,'Set');module.exports=Set;/***/},/* 77 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(5),root=__webpack_require__(2);/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');module.exports=WeakMap;/***/},/* 78 *//***/function(module,exports){/**
		 * Adds the key-value `pair` to `map`.
		 *
		 * @private
		 * @param {Object} map The map to modify.
		 * @param {Array} pair The key-value pair to add.
		 * @returns {Object} Returns `map`.
		 */function addMapEntry(map,pair){// Don't return `Map#set` because it doesn't return the map instance in IE 11.
	map.set(pair[0],pair[1]);return map;}module.exports=addMapEntry;/***/},/* 79 *//***/function(module,exports){/**
		 * Adds `value` to `set`.
		 *
		 * @private
		 * @param {Object} set The set to modify.
		 * @param {*} value The value to add.
		 * @returns {Object} Returns `set`.
		 */function addSetEntry(set,value){set.add(value);return set;}module.exports=addSetEntry;/***/},/* 80 *//***/function(module,exports,__webpack_require__){var baseIndexOf=__webpack_require__(91);/**
		 * A specialized version of `_.includes` for arrays without support for
		 * specifying an index to search from.
		 *
		 * @private
		 * @param {Array} [array] The array to search.
		 * @param {*} target The value to search for.
		 * @returns {boolean} Returns `true` if `target` is found, else `false`.
		 */function arrayIncludes(array,value){var length=array?array.length:0;return!!length&&baseIndexOf(array,value,0)>-1;}module.exports=arrayIncludes;/***/},/* 81 *//***/function(module,exports){/**
		 * This function is like `arrayIncludes` except that it accepts a comparator.
		 *
		 * @private
		 * @param {Array} [array] The array to search.
		 * @param {*} target The value to search for.
		 * @param {Function} comparator The comparator invoked per element.
		 * @returns {boolean} Returns `true` if `target` is found, else `false`.
		 */function arrayIncludesWith(array,value,comparator){var index=-1,length=array?array.length:0;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}module.exports=arrayIncludesWith;/***/},/* 82 *//***/function(module,exports){/**
		 * A specialized version of `_.some` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} predicate The function invoked per iteration.
		 * @returns {boolean} Returns `true` if any element passes the predicate check,
		 *  else `false`.
		 */function arraySome(array,predicate){var index=-1,length=array?array.length:0;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}module.exports=arraySome;/***/},/* 83 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(21);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Used by `_.defaults` to customize its `_.assignIn` use.
		 *
		 * @private
		 * @param {*} objValue The destination value.
		 * @param {*} srcValue The source value.
		 * @param {string} key The key of the property to assign.
		 * @param {Object} object The parent object of `objValue`.
		 * @returns {*} Returns the value to assign.
		 */function assignInDefaults(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}module.exports=assignInDefaults;/***/},/* 84 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(15),keys=__webpack_require__(4);/**
		 * The base implementation of `_.assign` without support for multiple sources
		 * or `customizer` functions.
		 *
		 * @private
		 * @param {Object} object The destination object.
		 * @param {Object} source The source object.
		 * @returns {Object} Returns `object`.
		 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}module.exports=baseAssign;/***/},/* 85 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(26),arrayEach=__webpack_require__(44),assignValue=__webpack_require__(13),baseAssign=__webpack_require__(84),cloneBuffer=__webpack_require__(108),copyArray=__webpack_require__(115),copySymbols=__webpack_require__(116),getAllKeys=__webpack_require__(122),getTag=__webpack_require__(54),initCloneArray=__webpack_require__(134),initCloneByTag=__webpack_require__(135),initCloneObject=__webpack_require__(136),isArray=__webpack_require__(1),isBuffer=__webpack_require__(170),isHostObject=__webpack_require__(18),isObject=__webpack_require__(3),keys=__webpack_require__(4);/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/**
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
		 */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
	stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}// Recursively populate clone (susceptible to call stack limits).
	arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}module.exports=baseClone;/***/},/* 86 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(3);/** Built-in value references. */var objectCreate=Object.create;/**
		 * The base implementation of `_.create` without support for assigning
		 * properties to the created object.
		 *
		 * @private
		 * @param {Object} prototype The object to inherit from.
		 * @returns {Object} Returns the new object.
		 */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}module.exports=baseCreate;/***/},/* 87 *//***/function(module,exports,__webpack_require__){var SetCache=__webpack_require__(41),arrayIncludes=__webpack_require__(80),arrayIncludesWith=__webpack_require__(81),arrayMap=__webpack_require__(45),baseUnary=__webpack_require__(105),cacheHas=__webpack_require__(106);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
		 * The base implementation of methods like `_.difference` without support
		 * for excluding multiple arrays or iteratee shorthands.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {Array} values The values to exclude.
		 * @param {Function} [iteratee] The iteratee invoked per element.
		 * @param {Function} [comparator] The comparator invoked per element.
		 * @returns {Array} Returns the new array of filtered values.
		 */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}module.exports=baseDifference;/***/},/* 88 *//***/function(module,exports,__webpack_require__){var arrayPush=__webpack_require__(28),isFlattenable=__webpack_require__(137);/**
		 * The base implementation of `_.flatten` with support for restricting flattening.
		 *
		 * @private
		 * @param {Array} array The array to flatten.
		 * @param {number} depth The maximum recursion depth.
		 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
		 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
		 * @param {Array} [result=[]] The initial result value.
		 * @returns {Array} Returns the new flattened array.
		 */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
	baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}module.exports=baseFlatten;/***/},/* 89 *//***/function(module,exports,__webpack_require__){var createBaseFor=__webpack_require__(119);/**
		 * The base implementation of `baseForOwn` which iterates over `object`
		 * properties returned by `keysFunc` and invokes `iteratee` for each property.
		 * Iteratee functions may exit iteration early by explicitly returning `false`.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {Function} keysFunc The function to get the keys of `object`.
		 * @returns {Object} Returns `object`.
		 */var baseFor=createBaseFor();module.exports=baseFor;/***/},/* 90 *//***/function(module,exports){/**
		 * The base implementation of `_.hasIn` without support for deep paths.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {Array|string} key The key to check.
		 * @returns {boolean} Returns `true` if `key` exists, else `false`.
		 */function baseHasIn(object,key){return object!=null&&key in Object(object);}module.exports=baseHasIn;/***/},/* 91 *//***/function(module,exports,__webpack_require__){var indexOfNaN=__webpack_require__(133);/**
		 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
		 *
		 * @private
		 * @param {Array} array The array to search.
		 * @param {*} value The value to search for.
		 * @param {number} fromIndex The index to search from.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */function baseIndexOf(array,value,fromIndex){if(value!==value){return indexOfNaN(array,fromIndex);}var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}module.exports=baseIndexOf;/***/},/* 92 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(26),equalArrays=__webpack_require__(53),equalByTag=__webpack_require__(120),equalObjects=__webpack_require__(121),getTag=__webpack_require__(54),isArray=__webpack_require__(1),isHostObject=__webpack_require__(18),isTypedArray=__webpack_require__(171);/** Used to compose bitmasks for comparison styles. */var PARTIAL_COMPARE_FLAG=2;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
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
		 */function baseIsEqualDeep(object,other,equalFunc,customizer,bitmask,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=getTag(object);objTag=objTag==argsTag?objectTag:objTag;}if(!othIsArr){othTag=getTag(other);othTag=othTag==argsTag?objectTag:othTag;}var objIsObj=objTag==objectTag&&!isHostObject(object),othIsObj=othTag==objectTag&&!isHostObject(other),isSameTag=objTag==othTag;if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,equalFunc,customizer,bitmask,stack):equalByTag(object,other,objTag,equalFunc,customizer,bitmask,stack);}if(!(bitmask&PARTIAL_COMPARE_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,customizer,bitmask,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,equalFunc,customizer,bitmask,stack);}module.exports=baseIsEqualDeep;/***/},/* 93 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(26),baseIsEqual=__webpack_require__(50);/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/**
		 * The base implementation of `_.isMatch` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to inspect.
		 * @param {Object} source The object of property values to match.
		 * @param {Array} matchData The property names, values, and compare flags to match.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
		 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,customizer,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,stack):result)){return false;}}}return true;}module.exports=baseIsMatch;/***/},/* 94 *//***/function(module,exports,__webpack_require__){var isFunction=__webpack_require__(22),isHostObject=__webpack_require__(18),isMasked=__webpack_require__(140),isObject=__webpack_require__(3),toSource=__webpack_require__(61);/**
		 * Used to match `RegExp`
		 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
		 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=Function.prototype.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
		 * The base implementation of `_.isNative` without bad shim checks.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a native function,
		 *  else `false`.
		 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}module.exports=baseIsNative;/***/},/* 95 *//***/function(module,exports){/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=Object.keys;/**
		 * The base implementation of `_.keys` which doesn't skip the constructor
		 * property of prototypes or treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */function baseKeys(object){return nativeKeys(Object(object));}module.exports=baseKeys;/***/},/* 96 *//***/function(module,exports,__webpack_require__){var Reflect=__webpack_require__(75),iteratorToArray=__webpack_require__(141);/** Used for built-in method references. */var objectProto=Object.prototype;/** Built-in value references. */var enumerate=Reflect?Reflect.enumerate:undefined,propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
		 * The base implementation of `_.keysIn` which doesn't skip the constructor
		 * property of prototypes or treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */function baseKeysIn(object){object=object==null?object:Object(object);var result=[];for(var key in object){result.push(key);}return result;}// Fallback for IE < 9 with es6-shim.
	if(enumerate&&!propertyIsEnumerable.call({'valueOf':1},'valueOf')){baseKeysIn=function(object){return iteratorToArray(enumerate(object));};}module.exports=baseKeysIn;/***/},/* 97 *//***/function(module,exports,__webpack_require__){var baseIsMatch=__webpack_require__(93),getMatchData=__webpack_require__(125),matchesStrictComparable=__webpack_require__(59);/**
		 * The base implementation of `_.matches` which doesn't clone `source`.
		 *
		 * @private
		 * @param {Object} source The object of property values to match.
		 * @returns {Function} Returns the new spec function.
		 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}module.exports=baseMatches;/***/},/* 98 *//***/function(module,exports,__webpack_require__){var baseIsEqual=__webpack_require__(50),get=__webpack_require__(34),hasIn=__webpack_require__(167),isKey=__webpack_require__(9),isStrictComparable=__webpack_require__(57),matchesStrictComparable=__webpack_require__(59),toKey=__webpack_require__(6);/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/**
		 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
		 *
		 * @private
		 * @param {string} path The path of the property to get.
		 * @param {*} srcValue The value to match.
		 * @returns {Function} Returns the new spec function.
		 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,undefined,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG);};}module.exports=baseMatchesProperty;/***/},/* 99 *//***/function(module,exports,__webpack_require__){var arrayReduce=__webpack_require__(12);/**
		 * The base implementation of `_.pick` without support for individual
		 * property identifiers.
		 *
		 * @private
		 * @param {Object} object The source object.
		 * @param {string[]} props The property identifiers to pick.
		 * @returns {Object} Returns the new object.
		 */function basePick(object,props){object=Object(object);return arrayReduce(props,function(result,key){if(key in object){result[key]=object[key];}return result;},{});}module.exports=basePick;/***/},/* 100 *//***/function(module,exports,__webpack_require__){var baseGet=__webpack_require__(48);/**
		 * A specialized version of `baseProperty` which supports deep paths.
		 *
		 * @private
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}module.exports=basePropertyDeep;/***/},/* 101 *//***/function(module,exports){/**
		 * The base implementation of `_.reduce` and `_.reduceRight`, without support
		 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
		 *
		 * @private
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {*} accumulator The initial value.
		 * @param {boolean} initAccum Specify using the first or last element of
		 *  `collection` as the initial value.
		 * @param {Function} eachFunc The function to iterate over `collection`.
		 * @returns {*} Returns the accumulated value.
		 */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}module.exports=baseReduce;/***/},/* 102 *//***/function(module,exports,__webpack_require__){var assignValue=__webpack_require__(13),castPath=__webpack_require__(31),isIndex=__webpack_require__(8),isKey=__webpack_require__(9),isObject=__webpack_require__(3),toKey=__webpack_require__(6);/**
		 * The base implementation of `_.set`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path of the property to set.
		 * @param {*} value The value to set.
		 * @param {Function} [customizer] The function to customize path creation.
		 * @returns {Object} Returns `object`.
		 */function baseSet(object,path,value,customizer){path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]);if(isObject(nested)){var newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=objValue==null?isIndex(path[index+1])?[]:{}:objValue;}}assignValue(nested,key,newValue);}nested=nested[key];}return object;}module.exports=baseSet;/***/},/* 103 *//***/function(module,exports){/**
		 * The base implementation of `_.times` without support for iteratee shorthands
		 * or max array length checks.
		 *
		 * @private
		 * @param {number} n The number of times to invoke `iteratee`.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the array of results.
		 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}module.exports=baseTimes;/***/},/* 104 *//***/function(module,exports,__webpack_require__){var Symbol=__webpack_require__(27),isSymbol=__webpack_require__(24);/** Used as references for various `Number` constants. */var INFINITY=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
		 * The base implementation of `_.toString` which doesn't convert nullish
		 * values to empty strings.
		 *
		 * @private
		 * @param {*} value The value to process.
		 * @returns {string} Returns the string.
		 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
	if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=baseToString;/***/},/* 105 *//***/function(module,exports){/**
		 * The base implementation of `_.unary` without support for storing wrapper metadata.
		 *
		 * @private
		 * @param {Function} func The function to cap arguments for.
		 * @returns {Function} Returns the new capped function.
		 */function baseUnary(func){return function(value){return func(value);};}module.exports=baseUnary;/***/},/* 106 *//***/function(module,exports){/**
		 * Checks if a cache value for `key` exists.
		 *
		 * @private
		 * @param {Object} cache The cache to query.
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function cacheHas(cache,key){return cache.has(key);}module.exports=cacheHas;/***/},/* 107 *//***/function(module,exports){/**
		 * Checks if `value` is a global object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
		 */function checkGlobal(value){return value&&value.Object===Object?value:null;}module.exports=checkGlobal;/***/},/* 108 *//***/function(module,exports){/**
		 * Creates a clone of  `buffer`.
		 *
		 * @private
		 * @param {Buffer} buffer The buffer to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Buffer} Returns the cloned buffer.
		 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}module.exports=cloneBuffer;/***/},/* 109 *//***/function(module,exports,__webpack_require__){var cloneArrayBuffer=__webpack_require__(32);/**
		 * Creates a clone of `dataView`.
		 *
		 * @private
		 * @param {Object} dataView The data view to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Object} Returns the cloned data view.
		 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}module.exports=cloneDataView;/***/},/* 110 *//***/function(module,exports,__webpack_require__){var addMapEntry=__webpack_require__(78),arrayReduce=__webpack_require__(12),mapToArray=__webpack_require__(58);/**
		 * Creates a clone of `map`.
		 *
		 * @private
		 * @param {Object} map The map to clone.
		 * @param {Function} cloneFunc The function to clone values.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Object} Returns the cloned map.
		 */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}module.exports=cloneMap;/***/},/* 111 *//***/function(module,exports){/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/**
		 * Creates a clone of `regexp`.
		 *
		 * @private
		 * @param {Object} regexp The regexp to clone.
		 * @returns {Object} Returns the cloned regexp.
		 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}module.exports=cloneRegExp;/***/},/* 112 *//***/function(module,exports,__webpack_require__){var addSetEntry=__webpack_require__(79),arrayReduce=__webpack_require__(12),setToArray=__webpack_require__(60);/**
		 * Creates a clone of `set`.
		 *
		 * @private
		 * @param {Object} set The set to clone.
		 * @param {Function} cloneFunc The function to clone values.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Object} Returns the cloned set.
		 */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}module.exports=cloneSet;/***/},/* 113 *//***/function(module,exports,__webpack_require__){var Symbol=__webpack_require__(27);/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
		 * Creates a clone of the `symbol` object.
		 *
		 * @private
		 * @param {Object} symbol The symbol object to clone.
		 * @returns {Object} Returns the cloned symbol object.
		 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}module.exports=cloneSymbol;/***/},/* 114 *//***/function(module,exports,__webpack_require__){var cloneArrayBuffer=__webpack_require__(32);/**
		 * Creates a clone of `typedArray`.
		 *
		 * @private
		 * @param {Object} typedArray The typed array to clone.
		 * @param {boolean} [isDeep] Specify a deep clone.
		 * @returns {Object} Returns the cloned typed array.
		 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}module.exports=cloneTypedArray;/***/},/* 115 *//***/function(module,exports){/**
		 * Copies the values of `source` to `array`.
		 *
		 * @private
		 * @param {Array} source The array to copy values from.
		 * @param {Array} [array=[]] The array to copy values to.
		 * @returns {Array} Returns `array`.
		 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}module.exports=copyArray;/***/},/* 116 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(15),getSymbols=__webpack_require__(33);/**
		 * Copies own symbol properties of `source` to `object`.
		 *
		 * @private
		 * @param {Object} source The object to copy symbols from.
		 * @param {Object} [object={}] The object to copy symbols to.
		 * @returns {Object} Returns `object`.
		 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}module.exports=copySymbols;/***/},/* 117 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(2);/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];module.exports=coreJsData;/***/},/* 118 *//***/function(module,exports,__webpack_require__){var isArrayLike=__webpack_require__(10);/**
		 * Creates a `baseEach` or `baseEachRight` function.
		 *
		 * @private
		 * @param {Function} eachFunc The function to iterate over a collection.
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}module.exports=createBaseEach;/***/},/* 119 *//***/function(module,exports){/**
		 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
		 *
		 * @private
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}module.exports=createBaseFor;/***/},/* 120 *//***/function(module,exports,__webpack_require__){var Symbol=__webpack_require__(27),Uint8Array=__webpack_require__(42),equalArrays=__webpack_require__(53),mapToArray=__webpack_require__(58),setToArray=__webpack_require__(60);/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=Symbol?Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
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
		 */function equalByTag(object,other,tag,equalFunc,customizer,bitmask,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:// Coerce dates and booleans to numbers, dates to milliseconds and
	// booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	// not equal.
	return+object==+other;case errorTag:return object.name==other.name&&object.message==other.message;case numberTag:// Treat `NaN` vs. `NaN` as equal.
	return object!=+object?other!=+other:object==+other;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
	// as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	// for more details.
	return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&PARTIAL_COMPARE_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=UNORDERED_COMPARE_FLAG;stack.set(object,other);// Recursively compare objects (susceptible to call stack limits).
	return equalArrays(convert(object),convert(other),equalFunc,customizer,bitmask,stack);case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}module.exports=equalByTag;/***/},/* 121 *//***/function(module,exports,__webpack_require__){var baseHas=__webpack_require__(29),keys=__webpack_require__(4);/** Used to compose bitmasks for comparison styles. */var PARTIAL_COMPARE_FLAG=2;/**
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
		 */function equalObjects(object,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:baseHas(other,key))){return false;}}// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked){return stacked==other;}var result=true;stack.set(object,other);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
	if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,customizer,bitmask,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
	if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);return result;}module.exports=equalObjects;/***/},/* 122 *//***/function(module,exports,__webpack_require__){var baseGetAllKeys=__webpack_require__(49),getSymbols=__webpack_require__(33),keys=__webpack_require__(4);/**
		 * Creates an array of own enumerable property names and symbols of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names and symbols.
		 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}module.exports=getAllKeys;/***/},/* 123 *//***/function(module,exports,__webpack_require__){var baseGetAllKeys=__webpack_require__(49),getSymbolsIn=__webpack_require__(126),keysIn=__webpack_require__(65);/**
		 * Creates an array of own and inherited enumerable property names and
		 * symbols of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names and symbols.
		 */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}module.exports=getAllKeysIn;/***/},/* 124 *//***/function(module,exports,__webpack_require__){var baseProperty=__webpack_require__(51);/**
		 * Gets the "length" property value of `object`.
		 *
		 * **Note:** This function is used to avoid a
		 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
		 * Safari on at least iOS 8.1-8.3 ARM64.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {*} Returns the "length" value.
		 */var getLength=baseProperty('length');module.exports=getLength;/***/},/* 125 *//***/function(module,exports,__webpack_require__){var isStrictComparable=__webpack_require__(57),keys=__webpack_require__(4);/**
		 * Gets the property names, values, and compare flags of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the match data of `object`.
		 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}module.exports=getMatchData;/***/},/* 126 *//***/function(module,exports,__webpack_require__){var arrayPush=__webpack_require__(28),getPrototype=__webpack_require__(17),getSymbols=__webpack_require__(33);/** Built-in value references. */var getOwnPropertySymbols=Object.getOwnPropertySymbols;/**
		 * Creates an array of the own and inherited enumerable symbol properties
		 * of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of symbols.
		 */var getSymbolsIn=!getOwnPropertySymbols?getSymbols:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};module.exports=getSymbolsIn;/***/},/* 127 *//***/function(module,exports){/**
		 * Gets the value at `key` of `object`.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {string} key The key of the property to get.
		 * @returns {*} Returns the property value.
		 */function getValue(object,key){return object==null?undefined:object[key];}module.exports=getValue;/***/},/* 128 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(20);/**
		 * Removes all key-value entries from the hash.
		 *
		 * @private
		 * @name clear
		 * @memberOf Hash
		 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}module.exports=hashClear;/***/},/* 129 *//***/function(module,exports){/**
		 * Removes `key` and its value from the hash.
		 *
		 * @private
		 * @name delete
		 * @memberOf Hash
		 * @param {Object} hash The hash to modify.
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}module.exports=hashDelete;/***/},/* 130 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(20);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Gets the hash value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Hash
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}module.exports=hashGet;/***/},/* 131 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(20);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Checks if a hash value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Hash
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}module.exports=hashHas;/***/},/* 132 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(20);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
		 * Sets the hash `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Hash
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the hash instance.
		 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}module.exports=hashSet;/***/},/* 133 *//***/function(module,exports){/**
		 * Gets the index at which the first occurrence of `NaN` is found in `array`.
		 *
		 * @private
		 * @param {Array} array The array to search.
		 * @param {number} fromIndex The index to search from.
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
		 */function indexOfNaN(array,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){var other=array[index];if(other!==other){return index;}}return-1;}module.exports=indexOfNaN;/***/},/* 134 *//***/function(module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Initializes an array clone.
		 *
		 * @private
		 * @param {Array} array The array to clone.
		 * @returns {Array} Returns the initialized clone.
		 */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
	if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}module.exports=initCloneArray;/***/},/* 135 *//***/function(module,exports,__webpack_require__){var cloneArrayBuffer=__webpack_require__(32),cloneDataView=__webpack_require__(109),cloneMap=__webpack_require__(110),cloneRegExp=__webpack_require__(111),cloneSet=__webpack_require__(112),cloneSymbol=__webpack_require__(113),cloneTypedArray=__webpack_require__(114);/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
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
		 */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}module.exports=initCloneByTag;/***/},/* 136 *//***/function(module,exports,__webpack_require__){var baseCreate=__webpack_require__(86),getPrototype=__webpack_require__(17),isPrototype=__webpack_require__(19);/**
		 * Initializes an object clone.
		 *
		 * @private
		 * @param {Object} object The object to clone.
		 * @returns {Object} Returns the initialized clone.
		 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}module.exports=initCloneObject;/***/},/* 137 *//***/function(module,exports,__webpack_require__){var isArguments=__webpack_require__(35),isArray=__webpack_require__(1);/**
		 * Checks if `value` is a flattenable `arguments` object or array.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
		 */function isFlattenable(value){return isArray(value)||isArguments(value);}module.exports=isFlattenable;/***/},/* 138 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(21),isArrayLike=__webpack_require__(10),isIndex=__webpack_require__(8),isObject=__webpack_require__(3);/**
		 * Checks if the given arguments are from an iteratee call.
		 *
		 * @private
		 * @param {*} value The potential iteratee value argument.
		 * @param {*} index The potential iteratee index or key argument.
		 * @param {*} object The potential iteratee object argument.
		 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
		 *  else `false`.
		 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index;if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}module.exports=isIterateeCall;/***/},/* 139 *//***/function(module,exports){/**
		 * Checks if `value` is suitable for use as unique object key.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
		 */function isKeyable(value){var type=typeof value;return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}module.exports=isKeyable;/***/},/* 140 *//***/function(module,exports,__webpack_require__){var coreJsData=__webpack_require__(117);/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
		 * Checks if `func` has its source masked.
		 *
		 * @private
		 * @param {Function} func The function to check.
		 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
		 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}module.exports=isMasked;/***/},/* 141 *//***/function(module,exports){/**
		 * Converts `iterator` to an array.
		 *
		 * @private
		 * @param {Object} iterator The iterator to convert.
		 * @returns {Array} Returns the converted array.
		 */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}module.exports=iteratorToArray;/***/},/* 142 *//***/function(module,exports){/**
		 * Removes all key-value entries from the list cache.
		 *
		 * @private
		 * @name clear
		 * @memberOf ListCache
		 */function listCacheClear(){this.__data__=[];}module.exports=listCacheClear;/***/},/* 143 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(14);/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
		 * Removes `key` and its value from the list cache.
		 *
		 * @private
		 * @name delete
		 * @memberOf ListCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}module.exports=listCacheDelete;/***/},/* 144 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(14);/**
		 * Gets the list cache value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf ListCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}module.exports=listCacheGet;/***/},/* 145 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(14);/**
		 * Checks if a list cache value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf ListCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}module.exports=listCacheHas;/***/},/* 146 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(14);/**
		 * Sets the list cache `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf ListCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the list cache instance.
		 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}module.exports=listCacheSet;/***/},/* 147 *//***/function(module,exports,__webpack_require__){var Hash=__webpack_require__(73),ListCache=__webpack_require__(11),Map=__webpack_require__(40);/**
		 * Removes all key-value entries from the map.
		 *
		 * @private
		 * @name clear
		 * @memberOf MapCache
		 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}module.exports=mapCacheClear;/***/},/* 148 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(16);/**
		 * Removes `key` and its value from the map.
		 *
		 * @private
		 * @name delete
		 * @memberOf MapCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}module.exports=mapCacheDelete;/***/},/* 149 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(16);/**
		 * Gets the map value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf MapCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function mapCacheGet(key){return getMapData(this,key).get(key);}module.exports=mapCacheGet;/***/},/* 150 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(16);/**
		 * Checks if a map value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf MapCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function mapCacheHas(key){return getMapData(this,key).has(key);}module.exports=mapCacheHas;/***/},/* 151 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(16);/**
		 * Sets the map `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf MapCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the map cache instance.
		 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}module.exports=mapCacheSet;/***/},/* 152 *//***/function(module,exports){/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
		 * Adds `value` to the array cache.
		 *
		 * @private
		 * @name add
		 * @memberOf SetCache
		 * @alias push
		 * @param {*} value The value to cache.
		 * @returns {Object} Returns the cache instance.
		 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}module.exports=setCacheAdd;/***/},/* 153 *//***/function(module,exports){/**
		 * Checks if `value` is in the array cache.
		 *
		 * @private
		 * @name has
		 * @memberOf SetCache
		 * @param {*} value The value to search for.
		 * @returns {number} Returns `true` if `value` is found, else `false`.
		 */function setCacheHas(value){return this.__data__.has(value);}module.exports=setCacheHas;/***/},/* 154 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(11);/**
		 * Removes all key-value entries from the stack.
		 *
		 * @private
		 * @name clear
		 * @memberOf Stack
		 */function stackClear(){this.__data__=new ListCache();}module.exports=stackClear;/***/},/* 155 *//***/function(module,exports){/**
		 * Removes `key` and its value from the stack.
		 *
		 * @private
		 * @name delete
		 * @memberOf Stack
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function stackDelete(key){return this.__data__['delete'](key);}module.exports=stackDelete;/***/},/* 156 *//***/function(module,exports){/**
		 * Gets the stack value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Stack
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function stackGet(key){return this.__data__.get(key);}module.exports=stackGet;/***/},/* 157 *//***/function(module,exports){/**
		 * Checks if a stack value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Stack
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function stackHas(key){return this.__data__.has(key);}module.exports=stackHas;/***/},/* 158 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(11),MapCache=__webpack_require__(25);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
		 * Sets the stack `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Stack
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the stack cache instance.
		 */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache&&cache.__data__.length==LARGE_ARRAY_SIZE){cache=this.__data__=new MapCache(cache.__data__);}cache.set(key,value);return this;}module.exports=stackSet;/***/},/* 159 *//***/function(module,exports,__webpack_require__){var memoize=__webpack_require__(172),toString=__webpack_require__(181);/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
		 * Converts `string` to a property path array.
		 *
		 * @private
		 * @param {string} string The string to convert.
		 * @returns {Array} Returns the property path array.
		 */var stringToPath=memoize(function(string){var result=[];toString(string).replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});module.exports=stringToPath;/***/},/* 160 *//***/function(module,exports,__webpack_require__){var assignValue=__webpack_require__(13),copyObject=__webpack_require__(15),createAssigner=__webpack_require__(52),isArrayLike=__webpack_require__(10),isPrototype=__webpack_require__(19),keys=__webpack_require__(4);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */var nonEnumShadows=!propertyIsEnumerable.call({'valueOf':1},'valueOf');/**
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
		 */var assign=createAssigner(function(object,source){if(nonEnumShadows||isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});module.exports=assign;/***/},/* 161 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(15),createAssigner=__webpack_require__(52),keysIn=__webpack_require__(65);/**
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
		 */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});module.exports=assignInWith;/***/},/* 162 *//***/function(module,exports,__webpack_require__){var baseClone=__webpack_require__(85);/**
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
		 */function clone(value){return baseClone(value,false,true);}module.exports=clone;/***/},/* 163 *//***/function(module,exports,__webpack_require__){var apply=__webpack_require__(43),assignInDefaults=__webpack_require__(83),assignInWith=__webpack_require__(161),rest=__webpack_require__(37);/**
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
		 */var defaults=rest(function(args){args.push(undefined,assignInDefaults);return apply(assignInWith,undefined,args);});module.exports=defaults;/***/},/* 164 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(165);/***/},/* 165 *//***/function(module,exports,__webpack_require__){var arrayEach=__webpack_require__(44),baseEach=__webpack_require__(46),baseIteratee=__webpack_require__(30),isArray=__webpack_require__(1);/**
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
		 */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,baseIteratee(iteratee,3));}module.exports=forEach;/***/},/* 166 *//***/function(module,exports,__webpack_require__){var baseHas=__webpack_require__(29),hasPath=__webpack_require__(55);/**
		 * Checks if `path` is a direct property of `object`.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path to check.
		 * @returns {boolean} Returns `true` if `path` exists, else `false`.
		 * @example
		 *
		 * var object = { 'a': { 'b': 2 } };
		 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
		 *
		 * _.has(object, 'a');
		 * // => true
		 *
		 * _.has(object, 'a.b');
		 * // => true
		 *
		 * _.has(object, ['a', 'b']);
		 * // => true
		 *
		 * _.has(other, 'a');
		 * // => false
		 */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}module.exports=has;/***/},/* 167 *//***/function(module,exports,__webpack_require__){var baseHasIn=__webpack_require__(90),hasPath=__webpack_require__(55);/**
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
		 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}module.exports=hasIn;/***/},/* 168 *//***/function(module,exports){/**
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
		 */function identity(value){return value;}module.exports=identity;/***/},/* 169 *//***/function(module,exports,__webpack_require__){var isArrayLike=__webpack_require__(10),isObjectLike=__webpack_require__(7);/**
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
		 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}module.exports=isArrayLikeObject;/***/},/* 170 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var root=__webpack_require__(2),stubFalse=__webpack_require__(177);/** Detect free variable `exports`. */var freeExports=typeof exports=='object'&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&typeof module=='object'&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined;/**
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
		 */var isBuffer=!Buffer?stubFalse:function(value){return value instanceof Buffer;};module.exports=isBuffer;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(188)(module));/***/},/* 171 *//***/function(module,exports,__webpack_require__){var isLength=__webpack_require__(23),isObjectLike=__webpack_require__(7);/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
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
		 */function isTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}module.exports=isTypedArray;/***/},/* 172 *//***/function(module,exports,__webpack_require__){var MapCache=__webpack_require__(25);/** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/**
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
		 */function memoize(func,resolver){if(typeof func!='function'||resolver&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Assign cache to `_.memoize`.
	memoize.Cache=MapCache;module.exports=memoize;/***/},/* 173 *//***/function(module,exports,__webpack_require__){var arrayMap=__webpack_require__(45),baseDifference=__webpack_require__(87),baseFlatten=__webpack_require__(88),basePick=__webpack_require__(99),getAllKeysIn=__webpack_require__(123),rest=__webpack_require__(37),toKey=__webpack_require__(6);/**
		 * The opposite of `_.pick`; this method creates an object composed of the
		 * own and inherited enumerable string keyed properties of `object` that are
		 * not omitted.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The source object.
		 * @param {...(string|string[])} [props] The property identifiers to omit.
		 * @returns {Object} Returns the new object.
		 * @example
		 *
		 * var object = { 'a': 1, 'b': '2', 'c': 3 };
		 *
		 * _.omit(object, ['a', 'c']);
		 * // => { 'b': '2' }
		 */var omit=rest(function(object,props){if(object==null){return{};}props=arrayMap(baseFlatten(props,1),toKey);return basePick(object,baseDifference(getAllKeysIn(object),props));});module.exports=omit;/***/},/* 174 *//***/function(module,exports,__webpack_require__){var baseProperty=__webpack_require__(51),basePropertyDeep=__webpack_require__(100),isKey=__webpack_require__(9),toKey=__webpack_require__(6);/**
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
		 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}module.exports=property;/***/},/* 175 *//***/function(module,exports,__webpack_require__){var baseSet=__webpack_require__(102);/**
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
		 */function set(object,path,value){return object==null?object:baseSet(object,path,value);}module.exports=set;/***/},/* 176 *//***/function(module,exports){/**
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
		 */function stubArray(){return[];}module.exports=stubArray;/***/},/* 177 *//***/function(module,exports){/**
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
		 */function stubFalse(){return false;}module.exports=stubFalse;/***/},/* 178 *//***/function(module,exports,__webpack_require__){var toNumber=__webpack_require__(180);/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_INTEGER=1.7976931348623157e+308;/**
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
		 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}module.exports=toFinite;/***/},/* 179 *//***/function(module,exports,__webpack_require__){var toFinite=__webpack_require__(178);/**
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
		 */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}module.exports=toInteger;/***/},/* 180 *//***/function(module,exports,__webpack_require__){var isFunction=__webpack_require__(22),isObject=__webpack_require__(3),isSymbol=__webpack_require__(24);/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
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
		 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=isFunction(value.valueOf)?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}module.exports=toNumber;/***/},/* 181 *//***/function(module,exports,__webpack_require__){var baseToString=__webpack_require__(104);/**
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
		 */function toString(value){return value==null?'':baseToString(value);}module.exports=toString;/***/},/* 182 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports["default"]=applyMiddleware;var _compose=__webpack_require__(67);var _compose2=_interopRequireDefault(_compose);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/**
		 * Creates a store enhancer that applies middleware to the dispatch method
		 * of the Redux store. This is handy for a variety of tasks, such as expressing
		 * asynchronous actions in a concise manner, or logging every action payload.
		 *
		 * See `redux-thunk` package as an example of the Redux middleware.
		 *
		 * Because middleware is potentially asynchronous, this should be the first
		 * store enhancer in the composition chain.
		 *
		 * Note that each middleware will be given the `dispatch` and `getState` functions
		 * as named arguments.
		 *
		 * @param {...Function} middlewares The middleware chain to be applied.
		 * @returns {Function} A store enhancer applying the middleware.
		 */function applyMiddleware(){for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++){middlewares[_key]=arguments[_key];}return function(createStore){return function(reducer,initialState,enhancer){var store=createStore(reducer,initialState,enhancer);var _dispatch=store.dispatch;var chain=[];var middlewareAPI={getState:store.getState,dispatch:function dispatch(action){return _dispatch(action);}};chain=middlewares.map(function(middleware){return middleware(middlewareAPI);});_dispatch=_compose2["default"].apply(undefined,chain)(store.dispatch);return _extends({},store,{dispatch:_dispatch});};};}/***/},/* 183 *//***/function(module,exports){'use strict';exports.__esModule=true;exports["default"]=bindActionCreators;function bindActionCreator(actionCreator,dispatch){return function(){return dispatch(actionCreator.apply(undefined,arguments));};}/**
		 * Turns an object whose values are action creators, into an object with the
		 * same keys, but with every function wrapped into a `dispatch` call so they
		 * may be invoked directly. This is just a convenience method, as you can call
		 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
		 *
		 * For convenience, you can also pass a single function as the first argument,
		 * and get a function in return.
		 *
		 * @param {Function|Object} actionCreators An object whose values are action
		 * creator functions. One handy way to obtain it is to use ES6 `import * as`
		 * syntax. You may also pass a single function.
		 *
		 * @param {Function} dispatch The `dispatch` function available on your Redux
		 * store.
		 *
		 * @returns {Function|Object} The object mimicking the original object, but with
		 * every action creator wrapped into the `dispatch` call. If you passed a
		 * function as `actionCreators`, the return value will also be a single
		 * function.
		 */function bindActionCreators(actionCreators,dispatch){if(typeof actionCreators==='function'){return bindActionCreator(actionCreators,dispatch);}if(typeof actionCreators!=='object'||actionCreators===null){throw new Error('bindActionCreators expected an object or a function, instead received '+(actionCreators===null?'null':typeof actionCreators)+'. '+'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');}var keys=Object.keys(actionCreators);var boundActionCreators={};for(var i=0;i<keys.length;i++){var key=keys[i];var actionCreator=actionCreators[key];if(typeof actionCreator==='function'){boundActionCreators[key]=bindActionCreator(actionCreator,dispatch);}}return boundActionCreators;}/***/},/* 184 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){'use strict';exports.__esModule=true;exports["default"]=combineReducers;var _createStore=__webpack_require__(68);var _isPlainObject=__webpack_require__(63);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _warning=__webpack_require__(69);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function getUndefinedStateErrorMessage(key,action){var actionType=action&&action.type;var actionName=actionType&&'"'+actionType.toString()+'"'||'an action';return'Given action '+actionName+', reducer "'+key+'" returned undefined. '+'To ignore an action, you must explicitly return the previous state.';}function getUnexpectedStateShapeWarningMessage(inputState,reducers,action){var reducerKeys=Object.keys(reducers);var argumentName=action&&action.type===_createStore.ActionTypes.INIT?'initialState argument passed to createStore':'previous state received by the reducer';if(reducerKeys.length===0){return'Store does not have a valid reducer. Make sure the argument passed '+'to combineReducers is an object whose values are reducers.';}if(!(0,_isPlainObject2["default"])(inputState)){return'The '+argumentName+' has unexpected type of "'+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+reducerKeys.join('", "')+'"');}var unexpectedKeys=Object.keys(inputState).filter(function(key){return!reducers.hasOwnProperty(key);});if(unexpectedKeys.length>0){return'Unexpected '+(unexpectedKeys.length>1?'keys':'key')+' '+('"'+unexpectedKeys.join('", "')+'" found in '+argumentName+'. ')+'Expected to find one of the known reducer keys instead: '+('"'+reducerKeys.join('", "')+'". Unexpected keys will be ignored.');}}function assertReducerSanity(reducers){Object.keys(reducers).forEach(function(key){var reducer=reducers[key];var initialState=reducer(undefined,{type:_createStore.ActionTypes.INIT});if(typeof initialState==='undefined'){throw new Error('Reducer "'+key+'" returned undefined during initialization. '+'If the state passed to the reducer is undefined, you must '+'explicitly return the initial state. The initial state may '+'not be undefined.');}var type='@@redux/PROBE_UNKNOWN_ACTION_'+Math.random().toString(36).substring(7).split('').join('.');if(typeof reducer(undefined,{type:type})==='undefined'){throw new Error('Reducer "'+key+'" returned undefined when probed with a random type. '+('Don\'t try to handle '+_createStore.ActionTypes.INIT+' or other actions in "redux/*" ')+'namespace. They are considered private. Instead, you must return the '+'current state for any unknown actions, unless it is undefined, '+'in which case you must return the initial state, regardless of the '+'action type. The initial state may not be undefined.');}});}/**
		 * Turns an object whose values are different reducer functions, into a single
		 * reducer function. It will call every child reducer, and gather their results
		 * into a single state object, whose keys correspond to the keys of the passed
		 * reducer functions.
		 *
		 * @param {Object} reducers An object whose values correspond to different
		 * reducer functions that need to be combined into one. One handy way to obtain
		 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
		 * undefined for any action. Instead, they should return their initial state
		 * if the state passed to them was undefined, and the current state for any
		 * unrecognized action.
		 *
		 * @returns {Function} A reducer function that invokes every reducer inside the
		 * passed object, and builds a state object with the same shape.
		 */function combineReducers(reducers){var reducerKeys=Object.keys(reducers);var finalReducers={};for(var i=0;i<reducerKeys.length;i++){var key=reducerKeys[i];if(typeof reducers[key]==='function'){finalReducers[key]=reducers[key];}}var finalReducerKeys=Object.keys(finalReducers);var sanityError;try{assertReducerSanity(finalReducers);}catch(e){sanityError=e;}return function combination(){var state=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var action=arguments[1];if(sanityError){throw sanityError;}if(process.env.NODE_ENV!=='production'){var warningMessage=getUnexpectedStateShapeWarningMessage(state,finalReducers,action);if(warningMessage){(0,_warning2["default"])(warningMessage);}}var hasChanged=false;var nextState={};for(var i=0;i<finalReducerKeys.length;i++){var key=finalReducerKeys[i];var reducer=finalReducers[key];var previousStateForKey=state[key];var nextStateForKey=reducer(previousStateForKey,action);if(typeof nextStateForKey==='undefined'){var errorMessage=getUndefinedStateErrorMessage(key,action);throw new Error(errorMessage);}nextState[key]=nextStateForKey;hasChanged=hasChanged||nextStateForKey!==previousStateForKey;}return hasChanged?nextState:state;};}/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(38));/***/},/* 185 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){'use strict';exports.__esModule=true;exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=undefined;var _createStore=__webpack_require__(68);var _createStore2=_interopRequireDefault(_createStore);var _combineReducers=__webpack_require__(184);var _combineReducers2=_interopRequireDefault(_combineReducers);var _bindActionCreators=__webpack_require__(183);var _bindActionCreators2=_interopRequireDefault(_bindActionCreators);var _applyMiddleware=__webpack_require__(182);var _applyMiddleware2=_interopRequireDefault(_applyMiddleware);var _compose=__webpack_require__(67);var _compose2=_interopRequireDefault(_compose);var _warning=__webpack_require__(69);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/*
		* This is a dummy function to check if the function name has been altered by minification.
		* If the function has been minified and NODE_ENV !== 'production', warn the user.
		*/function isCrushed(){}if(process.env.NODE_ENV!=='production'&&typeof isCrushed.name==='string'&&isCrushed.name!=='isCrushed'){(0,_warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. '+'This means that you are running a slower development build of Redux. '+'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify '+'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) '+'to ensure you have the correct code for your production build.');}exports.createStore=_createStore2["default"];exports.combineReducers=_combineReducers2["default"];exports.bindActionCreators=_bindActionCreators2["default"];exports.applyMiddleware=_applyMiddleware2["default"];exports.compose=_compose2["default"];/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(38));/***/},/* 186 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){/* global window */'use strict';module.exports=__webpack_require__(187)(global||window||this);/* WEBPACK VAR INJECTION */}).call(exports,function(){return this;}());/***/},/* 187 *//***/function(module,exports){'use strict';module.exports=function symbolObservablePonyfill(root){var result;var Symbol=root.Symbol;if(typeof Symbol==='function'){if(Symbol.observable){result=Symbol.observable;}else{result=Symbol('observable');Symbol.observable=result;}}else{result='@@observable';}return result;};/***/},/* 188 *//***/function(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
	module.children=[];module.webpackPolyfill=1;}return module;};/***/}/******/]));});;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(7);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(8);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-create-element v0.7.16
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * inferno-dom v0.7.16
	 * (c) 2016 Dominic Gannaway
	 * Released under the MIT License.
	 */
	(function (global, factory) {
		 true ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
		(global.InfernoDOM = factory());
	}(this, function () { 'use strict';

		function addChildrenToProps(children, props) {
			if (!isNullOrUndefined(children)) {
				var isChildrenArray = isArray(children);
				if (isChildrenArray && children.length > 0 || !isChildrenArray) {
					if (props) {
						props = Object.assign({}, props, { children: children });
					} else {
						props = {
							children: children
						};
					}
				}
			}
			return props;
		}

		var NO_RENDER = 'NO_RENDER';

		// Runs only once in applications lifetime
		var isBrowser = typeof window !== 'undefined' && window.document;

		function isArray(obj) {
			return obj instanceof Array;
		}

		function isStatefulComponent(obj) {
			return obj.prototype.render !== undefined;
		}

		function isStringOrNumber(obj) {
			return isString(obj) || isNumber(obj);
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

		function isString(obj) {
			return typeof obj === 'string';
		}

		function isNumber(obj) {
			return typeof obj === 'number';
		}

		function isNull(obj) {
			return obj === null;
		}

		function isTrue(obj) {
			return obj === true;
		}

		function isUndefined(obj) {
			return obj === undefined;
		}

		function deepScanChildrenForNode(children, node) {
			if (!isInvalidNode(children)) {
				if (isArray(children)) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i];

						if (!isInvalidNode(child)) {
							if (child === node) {
								return true;
							} else if (child.children) {
								return deepScanChildrenForNode(child.children, node);
							}
						}
					}
				} else {
					if (children === node) {
						return true;
					} else if (children.children) {
						return deepScanChildrenForNode(children.children, node);
					}
				}
			}
			return false;
		}

		function getRefInstance$1(node, instance) {
			var children = instance.props.children;

			if (deepScanChildrenForNode(children, node)) {
				return getRefInstance$1(node, instance._parentComponent);
			}
			return instance;
		}

		var recyclingEnabled = true;

		function recycle(node, bp, lifecycle, context, instance) {
			if (bp !== undefined) {
				var key = node.key;
				var pool = key === null ? bp.pools.nonKeyed : bp.pools.keyed[key];
				if (!isNullOrUndefined(pool)) {
					var recycledNode = pool.pop();
					if (!isNullOrUndefined(recycledNode)) {
						patch(recycledNode, node, null, lifecycle, context, instance, true, bp.isSVG);
						return node.dom;
					}
				}
			}
			return null;
		}

		function pool(node) {
			var bp = node.bp;

			if (!isNullOrUndefined(bp)) {
				var key = node.key;
				var pools = bp.pools;

				if (key === null) {
					var pool = pools.nonKeyed;
					pool && pool.push(node);
				} else {
					var pool$1 = pools.keyed;
					(pool$1[key] || (pool$1[key] = [])).push(node);
				}
				return true;
			}
			return false;
		}

		function unmount(input, parentDom) {
			if (isVList(input)) {
				unmountVList(input, parentDom, true);
			} else if (isVNode(input)) {
				unmountVNode(input, parentDom, false);
			}
		}

		function unmountVList(vList, parentDom, removePointer) {
			var items = vList.items;
			var itemsLength = items.length;
			var pointer = items.pointer;

			if (itemsLength > 0) {
				for (var i = 0; i < itemsLength; i++) {
					var item = items[i];

					if (isVList(item)) {
						unmountVList(item, parentDom, true);
					} else {
						if (parentDom) {
							removeChild(parentDom, item.dom);
						}
						unmount(item, null);
					}
				}
			}
			if (parentDom && removePointer) {
				removeChild(parentDom, pointer);
			}
		}

		function unmountVNode(node, parentDom, shallow) {
			var instance = node.instance;
			var instanceHooks = null;
			var instanceChildren = null;

			if (!isNullOrUndefined(instance)) {
				instanceHooks = instance.hooks;
				instanceChildren = instance.children;

				if (instance.render !== undefined) {
					instance.componentWillUnmount();
					instance._unmounted = true;
					componentToDOMNodeMap.delete(instance);
					!shallow && unmount(instance._lastNode, null);
				}
			}
			var hooks = node.hooks || instanceHooks;

			if (!isNullOrUndefined(hooks)) {
				if (!isNullOrUndefined(hooks.willDetach)) {
					hooks.willDetach(node.dom);
				}
				if (!isNullOrUndefined(hooks.componentWillUnmount)) {
					hooks.componentWillUnmount(node.dom, hooks);
				}
			}
			var children = (isNullOrUndefined(instance) ? node.children : null) || instanceChildren;

			if (!isNullOrUndefined(children)) {
				if (isArray(children)) {
					for (var i = 0; i < children.length; i++) {
						unmount(children[i], null);
					}
				} else {
					unmount(children, null);
				}
			}
		}

		function VText(text) {
			this.text = text;
			this.dom = null;
		}

		function VPlaceholder() {
			this.placeholder = true;
			this.dom = null;
		}

		function VList(items) {
			this.dom = null;
			this.pointer = null;
			this.items = items;
		}

		function createVText(text) {
			return new VText(text);
		}

		function createVPlaceholder() {
			return new VPlaceholder();
		}

		function createVList(items) {
			return new VList(items);
		}

		function constructDefaults(string, object, value) {
			/* eslint no-return-assign: 0 */
			string.split(',').forEach(function (i) { return object[i] = value; });
		}

		var xlinkNS = 'http://www.w3.org/1999/xlink';
		var xmlNS = 'http://www.w3.org/XML/1998/namespace';
		var strictProps = {};
		var booleanProps = {};
		var namespaces = {};
		var isUnitlessNumber = {};

		constructDefaults('xlink:href,xlink:arcrole,xlink:actuate,xlink:role,xlink:titlef,xlink:type', namespaces, xlinkNS);
		constructDefaults('xml:base,xml:lang,xml:space', namespaces, xmlNS);
		constructDefaults('volume,value', strictProps, true);
		constructDefaults('muted,scoped,loop,open,checked,default,capture,disabled,selected,readonly,multiple,required,autoplay,controls,seamless,reversed,allowfullscreen,novalidate', booleanProps, true);
		constructDefaults('animationIterationCount,borderImageOutset,borderImageSlice,borderImageWidth,boxFlex,boxFlexGroup,boxOrdinalGroup,columnCount,flex,flexGrow,flexPositive,flexShrink,flexNegative,flexOrder,gridRow,gridColumn,fontWeight,lineClamp,lineHeight,opacity,order,orphans,tabSize,widows,zIndex,zoom,fillOpacity,floodOpacity,stopOpacity,strokeDasharray,strokeDashoffset,strokeMiterlimit,strokeOpacity,strokeWidth,', isUnitlessNumber, true);

		function isVText(o) {
			return o.text !== undefined;
		}

		function isVPlaceholder(o) {
			return o.placeholder === true;
		}

		function isVList(o) {
			return o.items !== undefined;
		}

		function isVNode(o) {
			return o.tag !== undefined || o.bp !== undefined;
		}

		function insertOrAppend(parentDom, newNode, nextNode) {
			if (isNullOrUndefined(nextNode)) {
				parentDom.appendChild(newNode);
			} else {
				parentDom.insertBefore(newNode, nextNode);
			}
		}

		function replaceVListWithNode(parentDom, vList, dom) {
			var pointer = vList.pointer;

			unmountVList(vList, parentDom, false);
			replaceNode(parentDom, dom, pointer);
		}

		function documentCreateElement(tag, isSVG) {
			var dom;

			if (isSVG === true) {
				dom = document.createElementNS('http://www.w3.org/2000/svg', tag);
			} else {
				dom = document.createElement(tag);
			}
			return dom;
		}

		function appendText(text, parentDom, singleChild) {
			if (parentDom === null) {
				return document.createTextNode(text);
			} else {
				if (singleChild) {
					if (text !== '') {
						parentDom.textContent = text;
						return parentDom.firstChild;
					} else {
						var textNode = document.createTextNode('');

						parentDom.appendChild(textNode);
						return textNode;
					}
				} else {
					var textNode$1 = document.createTextNode(text);

					parentDom.appendChild(textNode$1);
					return textNode$1;
				}
			}
		}

		function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, instance, isSVG) {
			var lastInstance = null;
			var instanceLastNode = lastNode._lastNode;

			if (!isNullOrUndefined(instanceLastNode)) {
				lastInstance = lastNode;
				lastNode = instanceLastNode;
			}
			unmount(lastNode, false);
			var dom = mount(nextNode, null, lifecycle, context, instance, isSVG);

			nextNode.dom = dom;
			replaceNode(parentDom, dom, lastNode.dom);
			if (lastInstance !== null) {
				lastInstance._lastNode = nextNode;
			}
		}

		function replaceNode(parentDom, nextDom, lastDom) {
			parentDom.replaceChild(nextDom, lastDom);
		}

		function normalise$1(object) {
			if (isStringOrNumber(object)) {
				return createVText(object);
			} else if (isInvalidNode(object)) {
				return createVPlaceholder();
			} else if (isArray(object)) {
				return createVList(object);
			}
			return object;
		}

		function normaliseChild(children, i) {
			var child = children[i];

			return children[i] = normalise$1(child);
		}

		function remove(node, parentDom) {
			var dom = node.dom;
			if (dom === parentDom) {
				dom.innerHTML = '';
			} else {
				removeChild(parentDom, dom);
				if (recyclingEnabled) {
					pool(node);
				}
			}
			unmount(node, false);
		}

		function removeChild(parentDom, dom) {
			parentDom.removeChild(dom);
		}

		function removeEvents(events, lastEventKeys, dom) {
			var eventKeys = lastEventKeys || Object.keys(events);

			for (var i = 0; i < eventKeys.length; i++) {
				var event = eventKeys[i];

				dom[event] = null;
			}
		}

		// TODO: for node we need to check if document is valid
		function getActiveNode() {
			return document.activeElement;
		}

		function removeAllChildren(dom, children) {
			if (recyclingEnabled) {
				var childrenLength = children.length;

				if (childrenLength > 5) {
					for (var i = 0; i < childrenLength; i++) {
						var child = children[i];

						if (!isInvalidNode(child)) {
							pool(child);
						}
					}
				}
			}
			dom.textContent = '';
		}

		function resetActiveNode(activeNode) {
			if (activeNode !== null && activeNode !== document.body && document.activeElement !== activeNode) {
				activeNode.focus(); // TODO: verify are we doing new focus event, if user has focus listener this might trigger it
			}
		}

		function isKeyed(lastChildren, nextChildren) {
			if (lastChildren.complex) {
				return false;
			}
			return nextChildren.length && !isNullOrUndefined(nextChildren[0]) && !isNullOrUndefined(nextChildren[0].key)
				&& lastChildren.length && !isNullOrUndefined(lastChildren[0]) && !isNullOrUndefined(lastChildren[0].key);
		}

		function selectOptionValueIfNeeded(vdom, values) {
			if (vdom.tag !== 'option') {
				for (var i = 0, len = vdom.children.length; i < len; i++) {
					selectOptionValueIfNeeded(vdom.children[i], values);
				}
				// NOTE! Has to be a return here to catch optGroup elements
				return;
			}

			var value = vdom.attrs && vdom.attrs.value;

			if (values[value]) {
				vdom.attrs = vdom.attrs || {};
				vdom.attrs.selected = 'selected';
				vdom.dom.selected = true;
			} else {
				vdom.dom.selected = false;
			}
		}

		function selectValue(vdom) {
			var value = vdom.attrs && vdom.attrs.value;

			var values = {};
			if (isArray(value)) {
				for (var i = 0, len = value.length; i < len; i++) {
					values[value[i]] = value[i];
				}
			} else {
				values[value] = value;
			}
			for (var i$1 = 0, len$1 = vdom.children.length; i$1 < len$1; i$1++) {
				selectOptionValueIfNeeded(vdom.children[i$1], values);
			}

			if (vdom.attrs && vdom.attrs[value]) {
				delete vdom.attrs.value; // TODO! Avoid deletion here. Set to null or undef. Not sure what you want to usev
			}
		}

		function handleAttachedHooks(hooks, lifecycle, dom) {
			if (!isNullOrUndefined(hooks.created)) {
				hooks.created(dom);
			}
			if (!isNullOrUndefined(hooks.attached)) {
				lifecycle.addListener(function () {
					hooks.attached(dom);
				});
			}
		}

		function setValueProperty(nextNode) {
			var value = nextNode.attrs.value;
			if (!isNullOrUndefined(value)) {
				nextNode.dom.value = value;
			}
		}

		function setFormElementProperties(nextTag, nextNode) {
			if (nextTag === 'input') {
				var inputType = nextNode.attrs.type;
				if (inputType === 'text') {
					setValueProperty(nextNode);
				} else if (inputType === 'checkbox' || inputType === 'radio') {
					var checked = nextNode.attrs.checked;
					nextNode.dom.checked = !!checked;
				}
			} else if (nextTag === 'textarea') {
				setValueProperty(nextNode);
			}
		}

		function mount(input, parentDom, lifecycle, context, instance, isSVG) {
			if (isVPlaceholder(input)) {
				return mountVPlaceholder(input, parentDom);
			} else if (isVText(input)) {
				return mountVText(input, parentDom);
			} else if (isVList(input)) {
				return mountVList(input, parentDom, lifecycle, context, instance, isSVG);
			} else if (isVNode(input)) {
				return mountVNode$1(input, parentDom, lifecycle, context, instance, isSVG);
			} else {
				mount(normalise(input), parentDom, lifecycle, context, instance, isSVG);
			}
		}

		function mountVNode$1(vNode, parentDom, lifecycle, context, instance, isSVG) {
			var bp = vNode.bp;

			if (isUndefined(bp)) {
				return mountVNodeWithoutBlueprint(vNode, parentDom, lifecycle, context, instance, isSVG);
			} else {
				if (recyclingEnabled) {
					var dom = recycle(vNode, bp, lifecycle, context, instance);

					if (!isNull(dom)) {
						if (!isNull(parentDom)) {
							parentDom.appendChild(dom);
						}
						return dom;
					}
				}
				return mountVNodeWithBlueprint(vNode, bp, parentDom, lifecycle, context, instance);
			}
		}

		function mountVList(vList, parentDom, lifecycle, context, instance, isSVG) {
			var items = vList.items;
			var pointer = document.createTextNode('');
			var dom = document.createDocumentFragment();

			mountArrayChildren(items, dom, lifecycle, context, instance, isSVG);
			vList.pointer = pointer;
			vList.dom = dom;
			dom.appendChild(pointer);
			if (parentDom) {
				insertOrAppend(parentDom, dom);
			}
			return dom;
		}

		function mountVText(vText, parentDom) {
			var dom = document.createTextNode(vText.text);

			vText.dom = dom;
			if (parentDom) {
				insertOrAppend(parentDom, dom);
			}
			return dom;
		}

		function mountVPlaceholder(vPlaceholder, parentDom) {
			var dom = document.createTextNode('');

			vPlaceholder.dom = dom;
			if (parentDom) {
				insertOrAppend(parentDom, dom);
			}
			return dom;
		}

		function handleSelects(node) {
			if (node.tag === 'select') {
				selectValue(node);
			}
		}

		function mountBlueprintAttrs(node, bp, dom, instance) {
			handleSelects(node);
			var attrs = node.attrs;

			if (isNull(bp.attrKeys)) {
				var newKeys = Object.keys(attrs);
				bp.attrKeys = bp.attrKeys ? bp.attrKeys.concat(newKeys) : newKeys;
			}
			var attrKeys = bp.attrKeys;

			mountAttributes(node, attrs, attrKeys, dom, instance);
		}

		function mountBlueprintEvents(node, bp, dom) {
			var events = node.events;

			if (isNull(bp.eventKeys)) {
				bp.eventKeys = Object.keys(events);
			}
			var eventKeys = bp.eventKeys;

			mountEvents$1(events, eventKeys, dom);
		}

		function mountVNodeWithBlueprint(node, bp, parentDom, lifecycle, context, instance) {
			var tag = node.tag;

			if (isTrue(bp.isComponent)) {
				return mountComponent(node, tag, node.attrs || {}, node.hooks, node.children, instance, parentDom, lifecycle, context);
			}
			var dom = documentCreateElement(bp.tag, bp.isSVG);

			node.dom = dom;
			if (isTrue(bp.hasHooks)) {
				handleAttachedHooks(node.hooks, lifecycle, dom);
			}
			if (isTrue(bp.lazy)) {
				handleLazyAttached(node, lifecycle, dom);
			}
			var children = node.children;
			// bp.childrenType:
			// 0: no children
			// 1: text node
			// 2: single child
			// 3: multiple children
			// 4: multiple children (keyed)
			// 5: variable children (defaults to no optimisation)

			switch (bp.childrenType) {
				case 1:
					appendText(children, dom, true);
					break;
				case 2:
					mount(node.children, dom, lifecycle, context, instance, bp.isSVG);
					break;
				case 3:
					mountArrayChildren(children, dom, lifecycle, context, instance, bp.isSVG);
					break;
				case 4:
					for (var i = 0; i < children.length; i++) {
						mount(children[i], dom, lifecycle, context, instance, bp.isSVG);
					}
					break;
				case 5:
					mountChildren(node, children, dom, lifecycle, context, instance, bp.isSVG);
					break;
				default:
					break;
			}

			if (isTrue(bp.hasAttrs)) {
				mountBlueprintAttrs(node, bp, dom, instance);
			}
			if (isTrue(bp.hasClassName)) {
				dom.className = node.className;
			}
			if (isTrue(bp.hasStyle)) {
				patchStyle(null, node.style, dom);
			}
			if (isTrue(bp.hasEvents)) {
				mountBlueprintEvents(node, bp, dom);
			}
			if (!isNull(parentDom)) {
				parentDom.appendChild(dom);
			}
			return dom;
		}

		function mountVNodeWithoutBlueprint(node, parentDom, lifecycle, context, instance, isSVG) {
			var tag = node.tag;

			if (isFunction(tag)) {
				return mountComponent(node, tag, node.attrs || {}, node.hooks, node.children, instance, parentDom, lifecycle, context);
			}
			if (!isString(tag) || tag === '') {
				throw Error('Inferno Error: Expected function or string for element tag type');
			}
			if (tag === 'svg') {
				isSVG = true;
			}
			var dom = documentCreateElement(tag, isSVG);
			var children = node.children;
			var attrs = node.attrs;
			var events = node.events;
			var hooks = node.hooks;
			var className = node.className;
			var style = node.style;

			node.dom = dom;
			if (!isNullOrUndefined(hooks)) {
				handleAttachedHooks(hooks, lifecycle, dom);
			}
			if (!isInvalidNode(children)) {
				mountChildren(node, children, dom, lifecycle, context, instance, isSVG);
			}
			if (!isNullOrUndefined(attrs)) {
				handleSelects(node);
				mountAttributes(node, attrs, Object.keys(attrs), dom, instance);
			}
			if (!isNullOrUndefined(className)) {
				dom.className = className;
			}
			if (!isNullOrUndefined(style)) {
				patchStyle(null, style, dom);
			}
			if (!isNullOrUndefined(events)) {
				mountEvents$1(events, Object.keys(events), dom);
			}
			if (!isNull(parentDom)) {
				parentDom.appendChild(dom);
			}
			return dom;
		}

		function mountArrayChildren(children, parentDom, lifecycle, context, instance, isSVG) {
			children.complex = false;
			for (var i = 0; i < children.length; i++) {
				var child = normaliseChild(children, i);

				if (isVText(child)) {
					mountVText(child, parentDom);
					children.complex = true;
				} else if (isVPlaceholder(child)) {
					mountVPlaceholder(child, parentDom);
					children.complex = true;
				} else if (isVList(child)) {
					mountVList(child, parentDom, lifecycle, context, instance, isSVG);
					children.complex = true;
				} else {
					mount(child, parentDom, lifecycle, context, instance, isSVG);
				}
			}
		}

		function mountChildren(node, children, parentDom, lifecycle, context, instance, isSVG) {
			if (isArray(children)) {
				mountArrayChildren(children, parentDom, lifecycle, context, instance, isSVG);
			} else if (isStringOrNumber(children)) {
				appendText(children, parentDom, true);
			} else if (!isInvalidNode(children)) {
				mount(children, parentDom, lifecycle, context, instance, isSVG);
			}
		}

		function mountRef(instance, value, refValue) {
			if (!isInvalidNode(instance) && isString(value)) {
				instance.refs[value] = refValue;
			}
		}

		function mountEvents$1(events, eventKeys, dom) {
			for (var i = 0; i < eventKeys.length; i++) {
				var event = eventKeys[i];

				dom[event] = events[event];
			}
		}

		function mountComponent(parentNode, Component, props, hooks, children, lastInstance, parentDom, lifecycle, context) {
			props = addChildrenToProps(children, props);

			var dom;
			if (isStatefulComponent(Component)) {
				var instance = new Component(props);

				instance._patch = patch;
				instance._componentToDOMNodeMap = componentToDOMNodeMap;
				if (!isNullOrUndefined(lastInstance) && props.ref) {
					mountRef(lastInstance, props.ref, instance);
				}
				var childContext = instance.getChildContext();

				if (!isNullOrUndefined(childContext)) {
					context = Object.assign({}, context, childContext);
				}
				instance.context = context;
				instance._unmounted = false;
				instance._parentNode = parentNode;
				if (lastInstance) {
					instance._parentComponent = lastInstance;
				}
				instance._pendingSetState = true;
				instance.componentWillMount();
				var node = instance.render();

				if (isInvalidNode(node)) {
					node = createVPlaceholder();
				}
				instance._pendingSetState = false;
				dom = mount(node, null, lifecycle, context, instance, false);
				instance._lastNode = node;
				instance.componentDidMount();
				if (parentDom !== null && !isInvalidNode(dom)) {
					parentDom.appendChild(dom);
				}
				componentToDOMNodeMap.set(instance, dom);
				parentNode.dom = dom;
				parentNode.instance = instance;
			} else {
				if (!isNullOrUndefined(hooks)) {
					if (!isNullOrUndefined(hooks.componentWillMount)) {
						hooks.componentWillMount(null, props);
					}
					if (!isNullOrUndefined(hooks.componentDidMount)) {
						lifecycle.addListener(function () {
							hooks.componentDidMount(dom, props);
						});
					}
				}

				/* eslint new-cap: 0 */
				var node$1 = Component(props, context);

				if (isInvalidNode(node$1)) {
					node$1 = createVPlaceholder();
				}
				dom = mount(node$1, null, lifecycle, context, null, false);

				parentNode.instance = node$1;

				if (parentDom !== null && !isInvalidNode(dom)) {
					parentDom.appendChild(dom);
				}
				parentNode.dom = dom;
			}
			return dom;
		}

		function mountAttributes(node, attrs, attrKeys, dom, instance) {
			for (var i = 0; i < attrKeys.length; i++) {
				var attr = attrKeys[i];

				if (attr === 'ref') {
					mountRef(getRefInstance$1(node, instance), attrs[attr], dom);
				} else {
					patchAttribute(attr, null, attrs[attr], dom);
				}
			}
		}

		function patch(lastInput, nextInput, parentDom, lifecycle, context, instance, isSVG) {
			if (lastInput !== nextInput) {
				if (isInvalidNode(lastInput)) {
					mount(nextInput, parentDom, lifecycle, context, instance, isSVG);
				} else if (isInvalidNode(nextInput)) {
					remove(lastInput, parentDom);
				} else if (isStringOrNumber(lastInput)) {
					if (isStringOrNumber(nextInput)) {
						parentDom.firstChild.nodeValue = nextInput;
					} else {
						var dom = mount(nextInput, null, lifecycle, context, instance, isSVG);

						nextInput.dom = dom;
						replaceNode(parentDom, dom, parentDom.firstChild);
					}
				} else if (isStringOrNumber(nextInput)) {
					replaceNode(parentDom, document.createTextNode(nextInput), lastInput.dom);
				} else {
					if (isVList(nextInput)) {
						if (isVList(lastInput)) {
							patchVList(lastInput, nextInput, parentDom, lifecycle, context, instance, isSVG);
						} else {
							replaceNode(parentDom, mountVList(nextInput, null), lastInput.dom);
							unmount(lastInput, null);
						}
					} else if (isVList(lastInput)) {
						replaceVListWithNode(parentDom, lastInput, mount(nextInput, null, lifecycle, context, instance, isSVG));
					} else if (isVPlaceholder(nextInput)) {
						if (isVPlaceholder(lastInput)) {
							patchVFragment(lastInput, nextInput);
						} else {
							replaceNode(parentDom, mountVPlaceholder(nextInput, null), lastInput.dom);
							unmount(lastInput, null);
						}
					} else if (isVPlaceholder(lastInput)) {
						replaceNode(parentDom, mount(nextInput, null, lifecycle, context, instance, isSVG), lastInput.dom);
					} else if (isVText(nextInput)) {
						if (isVText(lastInput)) {
							patchVText(lastInput, nextInput);
						} else {
							replaceNode(parentDom, mountVText(nextInput, null), lastInput.dom);
							unmount(lastInput, null);
						}
					} else if (isVText(lastInput)) {
						replaceNode(parentDom, mount(nextInput, null, lifecycle, context, instance, isSVG), lastInput.dom);
					} else if (isVNode(nextInput)) {
						if (isVNode(lastInput)) {
							patchVNode(lastInput, nextInput, parentDom, lifecycle, context, instance, isSVG, false);
						} else {
							replaceNode(parentDom, mountVNode(nextInput, null, lifecycle, context, instance, isSVG), lastInput.dom);
							unmount(lastInput, null);
						}
					} else if (isVNode(lastInput)) {
						replaceNode(parentDom, mount(nextInput, null, lifecycle, context, instance, isSVG), lastInput.dom);
						unmount(lastInput, null);
					} else {
						return patch(lastInput, normalise(nextInput),parentDomdom, lifecycle, context, instance, isSVG);
					}
				}
			}
			return nextInput;
		}

		function patchTextNode(dom, lastChildren, nextChildren) {
			if (isStringOrNumber(lastChildren)) {
				dom.firstChild.nodeValue = nextChildren;
			} else {
				dom.textContent = nextChildren;
			}
		}

		function patchRef(instance, lastValue, nextValue, dom) {
			if (instance) {
				if (isString(lastValue)) {
					delete instance.refs[lastValue];
				}
				if (isString(nextValue)) {
					instance.refs[nextValue] = dom;
				}
			}
		}

		function patchChildren(lastNode, nextNode, dom, lifecycle, context, instance, isSVG) {
			var nextChildren = nextNode.children;
			var lastChildren = lastNode.children;

			if (lastChildren === nextChildren) {
				return;
			}
			if (isInvalidNode(lastChildren)) {
				if (isStringOrNumber(nextChildren)) {
					patchTextNode(dom, lastChildren, nextChildren);
				} else if (!isInvalidNode(nextChildren)) {
					if (isArray(nextChildren)) {
						mountArrayChildren(nextChildren, dom, lifecycle, context, instance, isSVG);
					} else {
						mount(nextChildren, dom, lifecycle, context, instance, isSVG);
					}
				}
			} else {
				if (isInvalidNode(nextChildren)) {
					removeAllChildren(dom, lastChildren);
				} else {
					if (isArray(lastChildren)) {
						if (isArray(nextChildren)) {
							nextChildren.complex = lastChildren.complex;
							if (isKeyed(lastChildren, nextChildren)) {
								patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, instance, isSVG, null);
							} else {
								patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, instance, isSVG, null);
							}
						} else {
							patchNonKeyedChildren(lastChildren, [nextChildren], dom, lifecycle, context, instance, isSVG, null);
						}
					} else {
						if (isArray(nextChildren)) {
							var lastChild = lastChildren;

							if (isStringOrNumber(lastChildren)) {
								lastChild = createVText(lastChild);
								lastChild.dom = dom.firstChild;
							}
							patchNonKeyedChildren([lastChild], nextChildren, dom, lifecycle, context, instance, isSVG, null);
						} else if (isStringOrNumber(nextChildren)) {
							patchTextNode(dom, lastChildren, nextChildren);
						} else if (isStringOrNumber(lastChildren)) {
							patch(lastChildren, nextChildren, dom, lifecycle, context, instance, isSVG);
						} else {
							patchVNode(lastChildren, nextChildren, dom, lifecycle, context, instance, isSVG, false);
						}
					}
				}
			}
		}

		function patchVNode(lastVNode, nextVNode, parentDom, lifecycle, context, instance, isSVG, skipLazyCheck) {
			var lastBp = lastVNode.bp;
			var nextBp = nextVNode.bp;

			if (lastBp === undefined || nextBp === undefined) {
				patchVNodeWithoutBlueprint(lastVNode, nextVNode, parentDom, lifecycle, context, instance, isSVG);
			} else {
				patchVNodeWithBlueprint(lastVNode, nextVNode, lastBp, nextBp, parentDom, lifecycle, context, instance, skipLazyCheck);
			}
		}

		function patchVNodeWithBlueprint(lastVNode, nextVNode, lastBp, nextBp, parentDom, lifecycle, context, instance, skipLazyCheck) {
			var nextHooks;

			if (nextBp.hasHooks === true) {
				nextHooks = nextVNode.hooks;
				if (nextHooks && !isNullOrUndefined(nextHooks.willUpdate)) {
					nextHooks.willUpdate(lastVNode.dom);
				}
			}
			var nextTag = nextVNode.tag || nextBp.tag;
			var lastTag = lastVNode.tag || lastBp.tag;

			if (lastTag !== nextTag) {
				if (lastBp.isComponent === true) {
					var lastNodeInstance = lastVNode.instance;

					if (nextBp.isComponent === true) {
						replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, instance, false);
					} else if (isStatefulComponent(lastTag)) {
						unmountVNode(lastVNode, null, true);
						var lastNode = lastNodeInstance._lastNode;
						patchVNodeWithBlueprint(lastNode, nextVNode, lastNode.bp, nextBp, parentDom, lifecycle, context, instance, nextBp.isSVG);
					} else {
						unmountVNode(lastVNode, null, true);
						patchVNodeWithBlueprint(lastNodeInstance, nextVNode, lastNodeInstance.bp, nextBp, parentDom, lifecycle, context, instance, nextBp.isSVG);
					}
				} else {
					replaceWithNewNode(lastVNode, nextVNode, parentDom, lifecycle, context, instance, nextBp.isSVG);
				}
			} else if (isNullOrUndefined(lastTag)) {
				nextVNode.dom = lastVNode.dom;
			} else {
				if (lastBp.isComponent === true) {
					if (nextBp.isComponent === true) {
						var instance$1 = lastVNode.instance;

						if (!isNullOrUndefined(instance$1) && instance$1._unmounted) {
							var newDom = mountComponent(nextVNode, lastTag, nextVNode.attrs || {}, nextVNode.hooks, nextVNode.children, instance$1, parentDom, lifecycle, context);
							if (parentDom !== null) {
								replaceNode(parentDom, newDom, lastVNode.dom);
							}
						} else {
							nextVNode.instance = instance$1;
							nextVNode.dom = lastVNode.dom;
							patchComponent(true, nextVNode, nextVNode.tag, lastBp, nextBp, instance$1, lastVNode.attrs || {}, nextVNode.attrs || {}, nextVNode.hooks, nextVNode.children, parentDom, lifecycle, context);
						}
					}
				} else {
					var dom = lastVNode.dom;
					var lastChildrenType = lastBp.childrenType;
					var nextChildrenType = nextBp.childrenType;
					nextVNode.dom = dom;

					if (nextBp.lazy === true && skipLazyCheck === false) {
						var clipData = lastVNode.clipData;

						if (lifecycle.scrollY === null) {
							lifecycle.refresh();
						}

						nextVNode.clipData = clipData;
						if (clipData.pending === true || clipData.top - lifecycle.scrollY > lifecycle.screenHeight) {
							if (setClipNode(clipData, dom, lastVNode, nextVNode, parentDom, lifecycle, context, instance, lastBp.isSVG)) {
								return;
							}
						}
						if (clipData.bottom < lifecycle.scrollY) {
							if (setClipNode(clipData, dom, lastVNode, nextVNode, parentDom, lifecycle, context, instance, lastBp.isSVG)) {
								return;
							}
						}
					}

					if (lastChildrenType > 0 || nextChildrenType > 0) {
						if (nextChildrenType === 5 || lastChildrenType === 5) {
							patchChildren(lastVNode, nextVNode, dom, lifecycle, context, instance);
						} else {
							var lastChildren = lastVNode.children;
							var nextChildren = nextVNode.children;

							if (lastChildrenType === 0 || isInvalidNode(lastChildren)) {
								if (nextChildrenType > 2) {
									mountArrayChildren(nextChildren, dom, lifecycle, context, instance);
								} else {
									mount(nextChildren, dom, lifecycle, context, instance);
								}
							} else if (nextChildrenType === 0 || isInvalidNode(nextChildren)) {
								if (lastChildrenType > 2) {
									removeAllChildren(dom, lastChildren);
								} else {
									remove(lastChildren, dom);
								}
							} else {
								if (lastChildren !== nextChildren) {
									if (lastChildrenType === 4 && nextChildrenType === 4) {
										patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, instance, nextBp.isSVG, null);
									} else if (lastChildrenType === 2 && nextChildrenType === 2) {
										patch(lastChildren, nextChildren, dom, lifecycle, context, instance, true, nextBp.isSVG);
									} else if (lastChildrenType === 1 && nextChildrenType === 1) {
										patchTextNode(dom, lastChildren, nextChildren);
									} else {
										patchChildren(lastVNode, nextVNode, dom, lifecycle, context, instance, nextBp.isSVG);
									}
								}
							}
						}
					}
					if (lastBp.hasAttrs === true || nextBp.hasAttrs === true) {
						patchAttributes(lastVNode, nextVNode, lastBp.attrKeys, nextBp.attrKeys, dom, instance);
					}
					if (lastBp.hasEvents === true || nextBp.hasEvents === true) {
						patchEvents(lastVNode.events, nextVNode.events, lastBp.eventKeys, nextBp.eventKeys, dom);
					}
					if (lastBp.hasClassName === true || nextBp.hasClassName === true) {
						var nextClassName = nextVNode.className;

						if (lastVNode.className !== nextClassName) {
							if (isNullOrUndefined(nextClassName)) {
								dom.removeAttribute('class');
							} else {
								dom.className = nextClassName;
							}
						}
					}
					if (lastBp.hasStyle === true || nextBp.hasStyle === true) {
						var nextStyle = nextVNode.style;
						var lastStyle = lastVNode.style;

						if (lastStyle !== nextStyle) {
							patchStyle(lastStyle, nextStyle, dom);
						}
					}
					if (nextBp.hasHooks === true && !isNullOrUndefined(nextHooks.didUpdate)) {
						nextHooks.didUpdate(dom);
					}
					setFormElementProperties(nextTag, nextVNode);
				}
			}
		}

		function patchVNodeWithoutBlueprint(lastNode, nextNode, parentDom, lifecycle, context, instance, isSVG) {
			var nextHooks = nextNode.hooks;
			var nextHooksDefined = !isNullOrUndefined(nextHooks);

			if (nextHooksDefined && !isNullOrUndefined(nextHooks.willUpdate)) {
				nextHooks.willUpdate(lastNode.dom);
			}
			var nextTag = nextNode.tag || ((isNullOrUndefined(nextNode.bp)) ? null : nextNode.bp.tag);
			var lastTag = lastNode.tag || ((isNullOrUndefined(lastNode.bp)) ? null : lastNode.bp.tag);

			if (nextTag === 'svg') {
				isSVG = true;
			}
			if (lastTag !== nextTag) {
				var lastNodeInstance = lastNode.instance;

				if (isFunction(lastTag)) {
					if (isFunction(nextTag)) {
						replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, instance, isSVG);
					} else if (isStatefulComponent(lastTag)) {
						unmountVNode(lastNode, null, true);
						patchVNodeWithoutBlueprint(lastNodeInstance._lastNode, nextNode, parentDom, lifecycle, context, instance, isSVG);
					} else {
						unmountVNode(lastNode, null, true);
						patchVNodeWithoutBlueprint(lastNodeInstance, nextNode, parentDom, lifecycle, context, instance, isSVG);
					}
				} else {
					replaceWithNewNode(lastNodeInstance || lastNode, nextNode, parentDom, lifecycle, context, instance, isSVG);
				}
			} else if (isNullOrUndefined(lastTag)) {
				nextNode.dom = lastNode.dom;
			} else {
				if (isFunction(lastTag)) {
					if (isFunction(nextTag)) {
						var instance$1 = lastNode._instance;

						if (!isNullOrUndefined(instance$1) && instance$1._unmounted) {
							var newDom = mountComponent(nextNode, lastTag, nextNode.attrs || {}, nextNode.hooks, nextNode.children, instance$1, parentDom, lifecycle, context);
							if (parentDom !== null) {
								replaceNode(parentDom, newDom, lastNode.dom);
							}
						} else {
							nextNode.instance = lastNode.instance;
							nextNode.dom = lastNode.dom;
							patchComponent(false, nextNode, nextNode.tag, null, null, nextNode.instance, lastNode.attrs || {}, nextNode.attrs || {}, nextNode.hooks, nextNode.children, parentDom, lifecycle, context);
						}
					}
				} else {
					var dom = lastNode.dom;
					var nextClassName = nextNode.className;
					var nextStyle = nextNode.style;

					nextNode.dom = dom;

					patchChildren(lastNode, nextNode, dom, lifecycle, context, instance, isSVG);
					patchAttributes(lastNode, nextNode, null, null, dom, instance);
					patchEvents(lastNode.events, nextNode.events, null, null, dom);

					if (lastNode.className !== nextClassName) {
						if (isNullOrUndefined(nextClassName)) {
							dom.removeAttribute('class');
						} else {
							dom.className = nextClassName;
						}
					}
					if (lastNode.style !== nextStyle) {
						patchStyle(lastNode.style, nextStyle, dom);
					}
					if (nextHooksDefined && !isNullOrUndefined(nextHooks.didUpdate)) {
						nextHooks.didUpdate(dom);
					}
					setFormElementProperties(nextTag, nextNode);
				}
			}
		}

		function patchAttributes(lastNode, nextNode, lastAttrKeys, nextAttrKeys, dom, instance) {
			if (lastNode.tag === 'select') {
				selectValue(nextNode);
			}
			var nextAttrs = nextNode.attrs;
			var lastAttrs = lastNode.attrs;
			var nextAttrsIsUndef = isNullOrUndefined(nextAttrs);
			var lastAttrsIsNotUndef = !isNullOrUndefined(lastAttrs);

			if (!nextAttrsIsUndef) {
				var nextAttrsKeys = nextAttrKeys || Object.keys(nextAttrs);
				var attrKeysLength = nextAttrsKeys.length;

				for (var i = 0; i < attrKeysLength; i++) {
					var attr = nextAttrsKeys[i];
					var lastAttrVal = lastAttrsIsNotUndef && lastAttrs[attr];
					var nextAttrVal = nextAttrs[attr];

					if (lastAttrVal !== nextAttrVal) {
						if (attr === 'ref') {
							patchRef(instance, lastAttrVal, nextAttrVal, dom);
						} else {
							patchAttribute(attr, lastAttrVal, nextAttrVal, dom);
						}
					}
				}
			}
			if (lastAttrsIsNotUndef) {
				var lastAttrsKeys = lastAttrKeys || Object.keys(lastAttrs);
				var attrKeysLength$1 = lastAttrsKeys.length;

				for (var i$1 = 0; i$1 < attrKeysLength$1; i$1++) {
					var attr$1 = lastAttrsKeys[i$1];

					if (nextAttrsIsUndef || isNullOrUndefined(nextAttrs[attr$1])) {
						if (attr$1 === 'ref') {
							patchRef(getRefInstance(node, instance), lastAttrs[attr$1], null, dom);
						} else {
							dom.removeAttribute(attr$1);
						}
					}
				}
			}
		}


		function patchStyle(lastAttrValue, nextAttrValue, dom) {
			if (isString(nextAttrValue)) {
				dom.style.cssText = nextAttrValue;
			} else if (isNullOrUndefined(lastAttrValue)) {
				if (!isNullOrUndefined(nextAttrValue)) {
					var styleKeys = Object.keys(nextAttrValue);

					for (var i = 0; i < styleKeys.length; i++) {
						var style = styleKeys[i];
						var value = nextAttrValue[style];

						if (isNumber(value) && !isUnitlessNumber[style]) {
							dom.style[style] = value + 'px';
						} else {
							dom.style[style] = value;
						}
					}
				}
			} else if (isNullOrUndefined(nextAttrValue)) {
				dom.removeAttribute('style');
			} else {
				var styleKeys$1 = Object.keys(nextAttrValue);

				for (var i$1 = 0; i$1 < styleKeys$1.length; i$1++) {
					var style$1 = styleKeys$1[i$1];
					var value$1 = nextAttrValue[style$1];

					if (isNumber(value$1) && !isUnitlessNumber[style$1]) {
						dom.style[style$1] = value$1 + 'px';
					} else {
						dom.style[style$1] = value$1;
					}
				}
				var lastStyleKeys = Object.keys(lastAttrValue);

				for (var i$2 = 0; i$2 < lastStyleKeys.length; i$2++) {
					var style$2 = lastStyleKeys[i$2];
					if (isNullOrUndefined(nextAttrValue[style$2])) {
						dom.style[style$2] = '';
					}
				}
			}
		}

		function patchEvents(lastEvents, nextEvents, _lastEventKeys, _nextEventKeys, dom) {
			var nextEventsDefined = !isNullOrUndefined(nextEvents);
			var lastEventsDefined = !isNullOrUndefined(lastEvents);

			if (nextEventsDefined) {
				if (lastEventsDefined) {
					var nextEventKeys = _nextEventKeys || Object.keys(nextEvents);

					for (var i = 0; i < nextEventKeys.length; i++) {
						var event = nextEventKeys[i];
						var lastEvent = lastEvents[event];
						var nextEvent = nextEvents[event];

						if (lastEvent !== nextEvent) {
							dom[event] = nextEvent;
						}
					}
					var lastEventKeys = _lastEventKeys || Object.keys(lastEvents);

					for (var i$1 = 0; i$1 < lastEventKeys.length; i$1++) {
						var event$1 = lastEventKeys[i$1];

						if (isNullOrUndefined(nextEvents[event$1])) {
							dom[event$1] = null;
						}
					}
				} else {
					mountEvents(nextEvents, _nextEventKeys, dom);
				}
			} else if (lastEventsDefined) {
				removeEvents(lastEvents, _nextEventKeys, dom);
			}
		}

		function patchAttribute(attrName, lastAttrValue, nextAttrValue, dom) {
			if (attrName === 'dangerouslySetInnerHTML') {
				var lastHtml = lastAttrValue && lastAttrValue.__html;
				var nextHtml = nextAttrValue && nextAttrValue.__html;

				if (isNullOrUndefined(nextHtml)) {
					throw new Error('Inferno Error: dangerouslySetInnerHTML requires an object with a __html propety containing the innerHTML content');
				}
				if (lastHtml !== nextHtml) {
					dom.innerHTML = nextHtml;
				}
			} else if (strictProps[attrName]) {
				dom[attrName] = nextAttrValue === null ? '' : nextAttrValue;
			} else {
				if (booleanProps[attrName]) {
					dom[attrName] = nextAttrValue ? true : false;
				} else {
					var ns = namespaces[attrName];

					if (nextAttrValue === false || isNullOrUndefined(nextAttrValue)) {
						if (ns !== undefined) {
							dom.removeAttributeNS(ns, attrName);
						} else {
							dom.removeAttribute(attrName);
						}
					} else {
						if (ns !== undefined) {
							dom.setAttributeNS(ns, attrName, nextAttrValue === true ? attrName : nextAttrValue);
						} else {
							dom.setAttribute(attrName, nextAttrValue === true ? attrName : nextAttrValue);
						}
					}
				}
			}
		}

		function patchComponent(hasBlueprint, lastNode, Component, lastBp, nextBp, instance, lastProps, nextProps, nextHooks, nextChildren, parentDom, lifecycle, context) {
			nextProps = addChildrenToProps(nextChildren, nextProps);

			if (isStatefulComponent(Component)) {
				var prevProps = instance.props;
				var prevState = instance.state;
				var nextState = instance.state;

				var childContext = instance.getChildContext();
				if (!isNullOrUndefined(childContext)) {
					context = Object.assign({}, context, childContext);
				}
				instance.context = context;
				var nextNode = instance._updateComponent(prevState, nextState, prevProps, nextProps);

				if (nextNode === NO_RENDER) {
					nextNode = instance._lastNode;
				} else if (isNullOrUndefined(nextNode)) {
					nextNode = createVPlaceholder();
				}
				patch(instance._lastNode, nextNode, parentDom, lifecycle, context, instance, null, false);
				lastNode.dom = nextNode.dom;
				instance._lastNode = nextNode;
				componentToDOMNodeMap.set(instance, nextNode.dom);
			} else {
				var shouldUpdate = true;
				var nextHooksDefined = (hasBlueprint && nextBp.hasHooks === true) || !isNullOrUndefined(nextHooks);

				if (nextHooksDefined && !isNullOrUndefined(nextHooks.componentShouldUpdate)) {
					shouldUpdate = nextHooks.componentShouldUpdate(lastNode.dom, lastProps, nextProps);
				}
				if (shouldUpdate !== false) {
					if (nextHooksDefined && !isNullOrUndefined(nextHooks.componentWillUpdate)) {
						nextHooks.componentWillUpdate(lastNode.dom, lastProps, nextProps);
					}
					var nextNode$1 = Component(nextProps, context);

					if (isInvalidNode(nextNode$1)) {
						nextNode$1 = createVPlaceholder();
					}
					nextNode$1.dom = lastNode.dom;
					patch(instance, nextNode$1, parentDom, lifecycle, context, null, null, false);
					lastNode.instance = nextNode$1;
					if (nextHooksDefined && !isNullOrUndefined(nextHooks.componentDidUpdate)) {
						nextHooks.componentDidUpdate(lastNode.dom, lastProps, nextProps);
					}
				}
			}
		}

		function patchVList(lastVList, nextVList, parentDom, lifecycle, context, instance, isSVG) {
			var lastItems = lastVList.items;
			var nextItems = nextVList.items;
			var pointer = lastVList.pointer;

			nextVList.dom = lastVList.dom;
			nextVList.pointer = pointer;
			if (!lastItems !== nextItems) {
				if (isKeyed(lastItems, nextItems)) {
					patchKeyedChildren(lastItems, nextItems, parentDom, lifecycle, context, instance, isSVG, nextVList);
				} else {
					patchNonKeyedChildren(lastItems, nextItems, parentDom, lifecycle, context, instance, isSVG, nextVList);
				}
			}
		}

		function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, instance, isSVG, parentVList) {
			var lastChildrenLength = lastChildren.length;
			var nextChildrenLength = nextChildren.length;
			var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
			var i = 0;

			for (; i < commonLength; i++) {
				var lastChild = lastChildren[i];
				var nextChild = normaliseChild(nextChildren, i);

				patch(lastChild, nextChild, dom, lifecycle, context, instance, isSVG);
			}
			if (lastChildrenLength < nextChildrenLength) {
				for (i = commonLength; i < nextChildrenLength; i++) {
					var child = normaliseChild(nextChildren, i);

					insertOrAppend(dom, mount(child, null, lifecycle, context, instance, isSVG), parentVList && parentVList.pointer);
				}
			} else if (lastChildrenLength > nextChildrenLength) {
				for (i = commonLength; i < lastChildrenLength; i++) {
					remove(lastChildren[i], dom);
				}
			}
		}

		function patchVFragment(lastVFragment, nextVFragment) {
			nextVFragment.dom = lastVFragment.dom;
		}

		function patchVText(lastVText, nextVText) {
			var nextText = nextVText.text;
			var dom = lastVText.dom;

			nextVText.dom = dom;
			if (lastVText.text !== nextText) {
				dom.nodeValue = nextText;
			}
		}

		function patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, instance, isSVG, parentVList) {
			var lastChildrenLength = lastChildren.length;
			var nextChildrenLength = nextChildren.length;
			var i;
			var lastEndIndex = lastChildrenLength - 1;
			var nextEndIndex = nextChildrenLength - 1;
			var lastStartIndex = 0;
			var nextStartIndex = 0;
			var lastStartNode = null;
			var nextStartNode = null;
			var nextEndNode = null;
			var lastEndNode = null;
			var index;
			var nextNode;
			var lastTarget = 0;
			var pos;
			var prevItem;

			while (lastStartIndex <= lastEndIndex && nextStartIndex <= nextEndIndex) {
				nextStartNode = nextChildren[nextStartIndex];
				lastStartNode = lastChildren[lastStartIndex];

				if (nextStartNode.key !== lastStartNode.key) {
					break;
				}
				patchVNode(lastStartNode, nextStartNode, dom, lifecycle, context, instance, isSVG, false);
				nextStartIndex++;
				lastStartIndex++;
			}
			while (lastStartIndex <= lastEndIndex && nextStartIndex <= nextEndIndex) {
				nextEndNode = nextChildren[nextEndIndex];
				lastEndNode = lastChildren[lastEndIndex];

				if (nextEndNode.key !== lastEndNode.key) {
					break;
				}
				patchVNode(lastEndNode, nextEndNode, dom, lifecycle, context, instance, isSVG, false);
				nextEndIndex--;
				lastEndIndex--;
			}
			while (lastStartIndex <= lastEndIndex && nextStartIndex <= nextEndIndex) {
				nextEndNode = nextChildren[nextEndIndex];
				lastStartNode = lastChildren[lastStartIndex];

				if (nextEndNode.key !== lastStartNode.key) {
					break;
				}
				nextNode = (nextEndIndex + 1 < nextChildrenLength) ? nextChildren[nextEndIndex + 1].dom : null;
				patchVNode(lastStartNode, nextEndNode, dom, lifecycle, context, instance, isSVG, false);
				insertOrAppend(dom, nextEndNode.dom, nextNode);
				nextEndIndex--;
				lastStartIndex++;
			}
			while (lastStartIndex <= lastEndIndex && nextStartIndex <= nextEndIndex) {
				nextStartNode = nextChildren[nextStartIndex];
				lastEndNode = lastChildren[lastEndIndex];

				if (nextStartNode.key !== lastEndNode.key) {
					break;
				}
				nextNode = lastChildren[lastStartIndex].dom;
				patchVNode(lastEndNode, nextStartNode, dom, lifecycle, context, instance, isSVG, false);
				insertOrAppend(dom, nextStartNode.dom, nextNode);
				nextStartIndex++;
				lastEndIndex--;
			}

			if (lastStartIndex > lastEndIndex) {
				if (nextStartIndex <= nextEndIndex) {
					nextNode = (nextEndIndex + 1 < nextChildrenLength) ? nextChildren[nextEndIndex + 1].dom : parentVList && parentVList.pointer;
					for (; nextStartIndex <= nextEndIndex; nextStartIndex++) {
						insertOrAppend(dom, mount(nextChildren[nextStartIndex], null, lifecycle, context, instance, isSVG), nextNode);
					}
				}
			} else if (nextStartIndex > nextEndIndex) {
				while (lastStartIndex <= lastEndIndex) {
					remove(lastChildren[lastStartIndex++], dom);
				}
			} else {
				var aLength = lastEndIndex - lastStartIndex + 1;
				var bLength = nextEndIndex - nextStartIndex + 1;
				var sources = new Array(bLength);

				// Mark all nodes as inserted.
				for (i = 0; i < bLength; i++) {
					sources[i] = -1;
				}
				var moved = false;
				var removeOffset = 0;

				if (aLength * bLength <= 16) {
					for (i = lastStartIndex; i <= lastEndIndex; i++) {
						var removed = true;
						lastEndNode = lastChildren[i];
						for (index = nextStartIndex; index <= nextEndIndex; index++) {
							nextEndNode = nextChildren[index];
							if (lastEndNode.key === nextEndNode.key) {
								sources[index - nextStartIndex] = i;

								if (lastTarget > index) {
									moved = true;
								} else {
									lastTarget = index;
								}
								patchVNode(lastEndNode, nextEndNode, dom, lifecycle, context, instance, isSVG, false);
								removed = false;
								break;
							}
						}
						if (removed) {
							remove(lastEndNode, dom);
							removeOffset++;
						}
					}
				} else {
					var prevItemsMap = new Map();

					for (i = nextStartIndex; i <= nextEndIndex; i++) {
						prevItem = nextChildren[i];
						prevItemsMap.set(prevItem.key, i);
					}
					for (i = lastEndIndex; i >= lastStartIndex; i--) {
						lastEndNode = lastChildren[i];
						index = prevItemsMap.get(lastEndNode.key);

						if (index === undefined) {
							remove(lastEndNode, dom);
							removeOffset++;
						} else {
							nextEndNode = nextChildren[index];

							sources[index - nextStartIndex] = i;
							if (lastTarget > index) {
								moved = true;
							} else {
								lastTarget = index;
							}
							patchVNode(lastEndNode, nextEndNode, dom, lifecycle, context, instance, isSVG, false);
						}
					}
				}

				if (moved) {
					var seq = lis_algorithm(sources);
					index = seq.length - 1;
					for (i = bLength - 1; i >= 0; i--) {
						if (sources[i] === -1) {
							pos = i + nextStartIndex;
							nextNode = (pos + 1 < nextChildrenLength) ? nextChildren[pos + 1].dom : parentVList && parentVList.pointer;
							insertOrAppend(dom, mount(nextChildren[pos], null, lifecycle, context, instance, isSVG), nextNode);
						} else {
							if (index < 0 || i !== seq[index]) {
								pos = i + nextStartIndex;
								nextNode = (pos + 1 < nextChildrenLength) ? nextChildren[pos + 1].dom : parentVList && parentVList.pointer;
								insertOrAppend(dom, nextChildren[pos].dom, nextNode);
							} else {
								index--;
							}
						}
					}
				} else if (aLength - removeOffset !== bLength) {
					for (i = bLength - 1; i >= 0; i--) {
						if (sources[i] === -1) {
							pos = i + nextStartIndex;
							nextNode = (pos + 1 < nextChildrenLength) ? nextChildren[pos + 1].dom : parentVList && parentVList.pointer;
							insertOrAppend(dom, mount(nextChildren[pos], null, lifecycle, context, instance, isSVG), nextNode);
						}
					}
				}
			}
		}

		// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
		function lis_algorithm(a) {
			var p = a.slice(0);
			var result = [];
			result.push(0);
			var i;
			var j;
			var u;
			var v;
			var c;

			for (i = 0; i < a.length; i++) {
				if (a[i] === -1) {
					continue;
				}

				j = result[result.length - 1];
				if (a[j] < a[i]) {
					p[i] = j;
					result.push(i);
					continue;
				}

				u = 0;
				v = result.length - 1;

				while (u < v) {
					c = ((u + v) / 2) | 0;
					if (a[result[c]] < a[i]) {
						u = c + 1;
					} else {
						v = c;
					}
				}

				if (a[i] < a[result[u]]) {
					if (u > 0) {
						p[i] = result[u - 1];
					}
					result[u] = i;
				}
			}

			u = result.length;
			v = result[u - 1];

			while (u-- > 0) {
				result[u] = v;
				v = p[v];
			}

			return result;
		}

		var screenWidth = isBrowser && window.screen.width;
		var screenHeight = isBrowser && window.screen.height;
		var scrollX = 0;
		var scrollY = 0;
		var lastScrollTime = 0;

		if (isBrowser) {
			window.onscroll = function () {
				scrollX = window.scrollX;
				scrollY = window.scrollY;
				lastScrollTime = performance.now();
			};

			window.resize = function () {
				scrollX = window.scrollX;
				scrollY = window.scrollY;
				screenWidth = window.screen.width;
				screenHeight = window.screen.height;
				lastScrollTime = performance.now();
			};
		}

		function Lifecycle() {
			this._listeners = [];
			this.scrollX = null;
			this.scrollY = null;
			this.screenHeight = screenHeight;
			this.screenWidth = screenWidth;
		}

		Lifecycle.prototype = {
			refresh: function refresh() {
				this.scrollX = isBrowser && window.scrollX;
				this.scrollY = isBrowser && window.scrollY;
			},
			addListener: function addListener(callback) {
				this._listeners.push(callback);
			},
			trigger: function trigger() {
				var this$1 = this;

				for (var i = 0; i < this._listeners.length; i++) {
					this$1._listeners[i]();
				}
			}
		};

		function handleLazyAttached(node, lifecycle, dom) {
			lifecycle.addListener(function () {
				var rect = dom.getBoundingClientRect();

				if (lifecycle.scrollY === null) {
					lifecycle.refresh();
				}
				node.clipData = {
					top: rect.top + lifecycle.scrollY,
					left: rect.left + lifecycle.scrollX,
					bottom: rect.bottom + lifecycle.scrollY,
					right: rect.right + lifecycle.scrollX,
					pending: false
				};
			});
		}

		function hydrateChild(child, childNodes, counter, parentDom, lifecycle, context, instance) {
			var domNode = childNodes[counter.i];

			if (isVText(child)) {
				var text = child.text;

				child.dom = domNode;
				if (domNode.nodeType === 3 && text !== '') {
					domNode.nodeValue = text;
				} else {
					var newDomNode = mountVText(text);

					replaceNode(parentDom, newDomNode, domNode);
					childNodes.splice(childNodes.indexOf(domNode), 1, newDomNode);
					child.dom = newDomNode;
				}
			} else if (isVPlaceholder(child)) {
				child.dom = domNode;
			} else if (isVList(child)) {
				var items = child.items;

				// this doesn't really matter, as it won't be used again, but it's what it should be given the purpose of VList
				child.dom = document.createDocumentFragment();
				for (var i = 0; i < items.length; i++) {
					var rebuild = hydrateChild(normaliseChild(items, i), childNodes, counter, parentDom, lifecycle, context, instance);

					if (rebuild) {
						return true;
					}
				}
				// at the end of every VList, there should be a "pointer". It's an empty TextNode used for tracking the VList
				var pointer = childNodes[counter.i++];

				if (pointer && pointer.nodeType === 3) {
					child.pointer = pointer;
				} else {
					// there is a problem, we need to rebuild this tree
					return true;
				}
			} else {
				var rebuild$1 = hydrateNode(child, domNode, parentDom, lifecycle, context, instance, false);

				if (rebuild$1) {
					return true;
				}
			}
			counter.i++;
		}

		function getChildNodesWithoutComments(domNode) {
			var childNodes = [];
			var rawChildNodes = domNode.childNodes;
			var length = rawChildNodes.length;
			var i = 0;

			while (i < length) {
				var rawChild = rawChildNodes[i];

				if (rawChild.nodeType === 8) {
					if (rawChild.data === '!') {
						var placeholder = document.createTextNode('');

						domNode.replaceChild(placeholder, rawChild);
						childNodes.push(placeholder);
						i++;
					} else {
						domNode.removeChild(rawChild);
						length--;
					}
				} else {
					childNodes.push(rawChild);
					i++;
				}
			}
			return childNodes;
		}

		function hydrateComponent(node, Component, props, hooks, children, domNode, parentDom, lifecycle, context, lastInstance, isRoot) {
			props = addChildrenToProps(children, props);

			if (isStatefulComponent(Component)) {
				var instance = node.instance = new Component(props);

				instance._patch = patch;
				if (!isNullOrUndefined(lastInstance) && props.ref) {
					mountRef(lastInstance, props.ref, instance);
				}
				var childContext = instance.getChildContext();

				if (!isNullOrUndefined(childContext)) {
					context = Object.assign({}, context, childContext);
				}
				instance.context = context;
				instance._unmounted = false;
				instance._parentNode = node;
				if (lastInstance) {
					instance._parentComponent = lastInstance;
				}
				instance._pendingSetState = true;
				instance.componentWillMount();
				var nextNode = instance.render();

				instance._pendingSetState = false;
				if (isInvalidNode(nextNode)) {
					nextNode = createVPlaceholder();
				}
				hydrateNode(nextNode, domNode, parentDom, lifecycle, context, instance, isRoot);
				instance._lastNode = nextNode;
				instance.componentDidMount();

			} else {
				var instance$1 = node.instance = Component(props);

				if (!isNullOrUndefined(hooks)) {
					if (!isNullOrUndefined(hooks.componentWillMount)) {
						hooks.componentWillMount(null, props);
					}
					if (!isNullOrUndefined(hooks.componentDidMount)) {
						lifecycle.addListener(function () {
							hooks.componentDidMount(domNode, props);
						});
					}
				}
				return hydrateNode(instance$1, domNode, parentDom, lifecycle, context, instance$1, isRoot);
			}
		}

		function hydrateNode(node, domNode, parentDom, lifecycle, context, instance, isRoot) {
			var bp = node.bp;
			var tag = node.tag || bp.tag;

			if (isFunction(tag)) {
				node.dom = domNode;
				hydrateComponent(node, tag, node.attrs || {}, node.hooks, node.children, domNode, parentDom, lifecycle, context, instance, isRoot);
			} else {
				if (
					domNode.nodeType !== 1 ||
					tag !== domNode.tagName.toLowerCase()
				) {
					// TODO remake node
				} else {
					node.dom = domNode;
					var hooks = node.hooks;

					if ((bp && bp.hasHooks === true) || !isNullOrUndefined(hooks)) {
						handleAttachedHooks(hooks, lifecycle, domNode);
					}
					var children = node.children;

					if (!isNullOrUndefined(children)) {
						if (isStringOrNumber(children)) {
							if (domNode.textContent !== children) {
								domNode.textContent = children;
							}
						} else {
							var childNodes = getChildNodesWithoutComments(domNode);
							var counter = { i: 0 };
							var rebuild = false;

							if (isArray(children)) {
								for (var i = 0; i < children.length; i++) {
									rebuild = hydrateChild(normaliseChild(children, i), childNodes, counter, domNode, lifecycle, context, instance);

									if (rebuild) {
										break;
									}
								}
							} else {
								if (childNodes.length === 1) {
									rebuild = hydrateChild(children, childNodes, counter, domNode, lifecycle, context, instance);
								} else {
									rebuild = true;
								}
							}

							if (rebuild) {
								// TODO scrap children and rebuild again
							}
						}
					}
					var className = node.className;
					var style = node.style;

					if (!isNullOrUndefined(className)) {
						domNode.className = className;
					}
					if (!isNullOrUndefined(style)) {
						patchStyle(null, style, domNode);
					}
					if (bp && bp.hasAttrs === true) {
						mountBlueprintAttrs(node, bp, domNode, instance);
					} else {
						var attrs = node.attrs;

						if (!isNullOrUndefined(attrs)) {
							handleSelects(node);
							mountAttributes(node, attrs, Object.keys(attrs), domNode, instance);
						}
					}
					if (bp && bp.hasEvents === true) {
						mountBlueprintEvents(node, bp, domNode);
					} else {
						var events = node.events;

						if (!isNullOrUndefined(events)) {
							mountEvents$1(events, Object.keys(events), domNode);
						}
					}
				}
			}
		}

		var documetBody = document.body;

		function hydrate(node, parentDom, lifecycle) {
			if (parentDom && parentDom.nodeType === 1) {
				var rootNode = parentDom.querySelector('[data-infernoroot]');

				if (rootNode && rootNode.parentNode === parentDom) {
					hydrateNode(node, rootNode, parentDom, lifecycle, {}, true);
					return true;
				}
			}
			// clear parentDom, unless it's document.body
			if (parentDom !== documetBody) {
				parentDom.textContent = '';
			} else {
				console.warn('Inferno Warning: rendering to the "document.body" is dangerous! Use a dedicated container element instead.');
			}
			return false;
		}

		var roots = new Map();
		var componentToDOMNodeMap = new Map();

		function findDOMNode(domNode) {
			return componentToDOMNodeMap.get(domNode) || null;
		}

		function render(input, parentDom) {
			var root = roots.get(parentDom);
			var lifecycle = new Lifecycle();

			if (isUndefined(root)) {
				if (!isInvalidNode(input)) {
					if (!hydrate(input, parentDom, lifecycle)) {
						mount(input, parentDom, lifecycle, {}, null, false);
					}
					lifecycle.trigger();
					roots.set(parentDom, { input: input });
				}
			} else {
				var activeNode = getActiveNode();
				var nextInput = patch(root.input, input, parentDom, lifecycle, {}, null, false);

				lifecycle.trigger();
				if (isNull(input)) {
					roots.delete(parentDom);
				}
				root.input = nextInput;
				resetActiveNode(activeNode);
			}
		}

		var index = {
			render: render,
			findDOMNode: findDOMNode,
			mount: mount,
			patch: patch,
			unmount: unmount
		};

		return index;

	}));

/***/ }
/******/ ])
});
;