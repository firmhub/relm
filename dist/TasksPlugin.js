(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TasksPlugin"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["TasksPlugin"] = factory();
})(this, function() {
return webpackJsonprelm__name_([5],{

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

var baseDifference = __webpack_require__(172),
    baseRest = __webpack_require__(39),
    isArrayLikeObject = __webpack_require__(116);

/**
 * Creates an array excluding all given values using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * **Note:** Unlike `_.pull`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see _.difference, _.xor
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
var without = baseRest(function(array, values) {
  return isArrayLikeObject(array)
    ? baseDifference(array, values)
    : [];
});

module.exports = without;


/***/ },

/***/ 166:
/***/ function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
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

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(83),
    arrayIncludes = __webpack_require__(86),
    arrayIncludesWith = __webpack_require__(166),
    arrayMap = __webpack_require__(88),
    baseUnary = __webpack_require__(94),
    cacheHas = __webpack_require__(196);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;

  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}

module.exports = baseDifference;


/***/ },

/***/ 196:
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

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_without__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_mapValues__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_mapValues__);

/* harmony export */ __webpack_require__.d(exports, "internals", function() { return internals; });




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TasksPlugin = function () {
  function TasksPlugin() {
    _classCallCheck(this, TasksPlugin);
  }

  _createClass(TasksPlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      var TASK_TYPE = '  @relm_task  ';

      component.tasks = __WEBPACK_IMPORTED_MODULE_3_lodash_mapValues___default()(source.tasks, function (__, taskName) {
        var type = [TASK_TYPE].concat(component.path, taskName);
        var fn = function fn() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return root.dispatch({ type: type, args: args });
        };

        Object.defineProperties(fn, {
          name: { value: taskName },
          displayName: { value: taskName }
        });

        return fn;
      });

      if (component !== root) return;

      component.middleware = function (store) {
        return function (next) {
          return function (action) {
            // Skip non-relm or non-async actions; async actions are ones where the
            // action name (last item in type array) starts with a $ sign
            if (!__WEBPACK_IMPORTED_MODULE_2_lodash_isArray___default()(action.type)) return next(action);
            if (action.type[0] !== TASK_TYPE) return next(action);

            // Get the path of the component
            var path = action.type.slice(1);

            // Find the component
            var targetComponent = root;
            for (var i = 0, n = path.length - 1; i < n; i++) {
              var key = path[i];
              var nextComponent = targetComponent.components[key];
              if (!nextComponent) return null;
              targetComponent = nextComponent;
            }

            if (!targetComponent && "production" !== 'production') {
              throw new Error('Unable to find component for task ' + path);
            }

            // Create the task api
            var task = {
              dispatch: store.dispatch,
              getState: path.length <= 1 ? store.getState : function () {
                return __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(store.getState(), path.slice(0, -1));
              },
              actions: targetComponent.actions,
              queries: targetComponent.queries
            };

            return handleAsyncAction(task, source, path, action.args);
          };
        };
      };
    }
  }]);

  return TasksPlugin;
}();

/* harmony default export */ exports["default"] = TasksPlugin;


function attachTaskAPI(task, handler) {
  task.instances = handler.instances = handler.instances || [];
  task.isRunning = task.instances.length > 0;

  task.done = function done() {
    handler.instances = __WEBPACK_IMPORTED_MODULE_0_lodash_without___default()(handler.instances, task);
  };

  task.cancel = function cancel() {
    handler.instances = __WEBPACK_IMPORTED_MODULE_0_lodash_without___default()(handler.instances, task);
    if (task.onCancel) task.onCancel();
  };
}

function handleAsyncAction(task, component, type) {
  var args = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

  var _type = _toArray(type);

  var head = _type[0];

  var tail = _type.slice(1);

  var handler = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(component, ['tasks', head]);
  var child = __WEBPACK_IMPORTED_MODULE_1_lodash_get___default()(component, ['components', head]);

  function next() {
    for (var _len2 = arguments.length, overriddenArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      overriddenArgs[_key2] = arguments[_key2];
    }

    handleAsyncAction(task, child, tail, overriddenArgs);
    task.done();
  }

  // Overridden task
  if (child && handler) {
    attachTaskAPI(task, handler);

    var result = handler.apply(undefined, [task, next].concat(_toConsumableArray(args)));
    if (typeof result === 'function') task.onCancel = result;
    return;
  }

  // Own task
  if (handler) {
    attachTaskAPI(task, handler);

    var _result = handler.apply(undefined, [task].concat(_toConsumableArray(args)));
    if (typeof _result === 'function') task.onCancel = _result;
    return;
  }

  // Child task
  if (child) {
    handleAsyncAction(task, child, tail, args);
    return;
  }

  throw new Error('Unable to find task ' + head);
}

var internals = {
  attachTaskAPI: attachTaskAPI,
  handleAsyncAction: handleAsyncAction
};

/***/ }

},[312])
});
;