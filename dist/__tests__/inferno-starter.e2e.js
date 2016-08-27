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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("/* eslint-env mocha, browser */\n/* globals expect, relm */\ndescribe('inferno-starter can start an app', function () {\n  it('renders a hello world into the dom', function (done) {\n    var div = document.createElement('div');\n    var initialHTML = '';\n\n    var timer = setInterval(function () {\n      if (div.innerHTML === initialHTML) return;\n      expect(div.innerHTML).to.equal('<h1>Hello World!</h1>');\n      clearInterval(timer);\n      done();\n    }, 200);\n\n    function HelloWorld(h) {\n      return h('h1', 'Hello World!');\n    }\n\n    relm.start(HelloWorld, { el: div });\n  });\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvX190ZXN0c19fL2luZmVybm8tc3RhcnRlci5lMmUuanM/NTQ4OCJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiZG9uZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImluaXRpYWxIVE1MIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsImV4cGVjdCIsInRvIiwiZXF1YWwiLCJjbGVhckludGVydmFsIiwiSGVsbG9Xb3JsZCIsImgiLCJyZWxtIiwic3RhcnQiLCJlbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBQSxTQUFTLGtDQUFULEVBQTZDLFlBQU07QUFDakRDLEtBQUcsb0NBQUgsRUFBeUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ2pELFFBQU1DLE1BQU1DLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLFFBQU1DLGNBQWMsRUFBcEI7O0FBRUEsUUFBTUMsUUFBUUMsWUFBWSxZQUFNO0FBQzlCLFVBQUlMLElBQUlNLFNBQUosS0FBa0JILFdBQXRCLEVBQW1DO0FBQ25DSSxhQUFPUCxJQUFJTSxTQUFYLEVBQXNCRSxFQUF0QixDQUF5QkMsS0FBekIsQ0FBK0IsdUJBQS9CO0FBQ0FDLG9CQUFjTixLQUFkO0FBQ0FMO0FBQ0QsS0FMYSxFQUtYLEdBTFcsQ0FBZDs7QUFPQSxhQUFTWSxVQUFULENBQXFCQyxDQUFyQixFQUF3QjtBQUN0QixhQUFPQSxFQUFFLElBQUYsRUFBUSxjQUFSLENBQVA7QUFDRDs7QUFFREMsU0FBS0MsS0FBTCxDQUFXSCxVQUFYLEVBQXVCLEVBQUVJLElBQUlmLEdBQU4sRUFBdkI7QUFDRCxHQWhCRDtBQWlCRCxDQWxCRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBtb2NoYSwgYnJvd3NlciAqL1xuLyogZ2xvYmFscyBleHBlY3QsIHJlbG0gKi9cbmRlc2NyaWJlKCdpbmZlcm5vLXN0YXJ0ZXIgY2FuIHN0YXJ0IGFuIGFwcCcsICgpID0+IHtcbiAgaXQoJ3JlbmRlcnMgYSBoZWxsbyB3b3JsZCBpbnRvIHRoZSBkb20nLCAoZG9uZSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGluaXRpYWxIVE1MID0gJyc7XG5cbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChkaXYuaW5uZXJIVE1MID09PSBpbml0aWFsSFRNTCkgcmV0dXJuO1xuICAgICAgZXhwZWN0KGRpdi5pbm5lckhUTUwpLnRvLmVxdWFsKCc8aDE+SGVsbG8gV29ybGQhPC9oMT4nKTtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgZG9uZSgpO1xuICAgIH0sIDIwMCk7XG5cbiAgICBmdW5jdGlvbiBIZWxsb1dvcmxkIChoKSB7XG4gICAgICByZXR1cm4gaCgnaDEnLCAnSGVsbG8gV29ybGQhJyk7XG4gICAgfVxuXG4gICAgcmVsbS5zdGFydChIZWxsb1dvcmxkLCB7IGVsOiBkaXYgfSk7XG4gIH0pO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFja2FnZXMvX190ZXN0c19fL2luZmVybm8tc3RhcnRlci5lMmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);