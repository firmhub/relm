(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Input"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["Input"] = factory();
})(this, function() {
return webpackJsonprelm__name_([12],{

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export */ exports["default"] = Input;
function Input() {}

/***/ }

},[317])
});
;