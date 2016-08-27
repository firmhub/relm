(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["list"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["list"] = factory();
})(this, function() {
return webpackJsonprelm__name_([10],{

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_assign__);
/* harmony export */ exports["default"] = list;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

      return state.apply(['list', i], next(__WEBPACK_IMPORTED_MODULE_0_lodash_assign___default()({}, action, { type: type })));
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

/***/ }

},[195])
});
;