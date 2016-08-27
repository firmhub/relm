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

eval("/* eslint-env mocha, browser */\n/* globals expect, relm */\ndescribe('inferno-dom can start an app', function () {\n  it('renders a hello world into the dom', function (done) {\n    var div = document.createElement('div');\n    var initialHTML = '';\n\n    var timer = setInterval(function () {\n      if (div.innerHTML === initialHTML) return;\n      expect(div.innerHTML).to.equal('<h1>Hello World!</h1>');\n      clearInterval(timer);\n      done();\n    }, 200);\n\n    function HelloWorld(h) {\n      return h('h1', 'Hello World!');\n    }\n\n    relm.start(HelloWorld, { el: div });\n  });\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFja2FnZXMvX190ZXN0c19fL2luZmVybm8tZG9tLmUyZS5qcz83YTNmIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJkb25lIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5pdGlhbEhUTUwiLCJ0aW1lciIsInNldEludGVydmFsIiwiaW5uZXJIVE1MIiwiZXhwZWN0IiwidG8iLCJlcXVhbCIsImNsZWFySW50ZXJ2YWwiLCJIZWxsb1dvcmxkIiwiaCIsInJlbG0iLCJzdGFydCIsImVsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0FBLFNBQVMsOEJBQVQsRUFBeUMsWUFBTTtBQUM3Q0MsS0FBRyxvQ0FBSCxFQUF5QyxVQUFDQyxJQUFELEVBQVU7QUFDakQsUUFBTUMsTUFBTUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0EsUUFBTUMsY0FBYyxFQUFwQjs7QUFFQSxRQUFNQyxRQUFRQyxZQUFZLFlBQU07QUFDOUIsVUFBSUwsSUFBSU0sU0FBSixLQUFrQkgsV0FBdEIsRUFBbUM7QUFDbkNJLGFBQU9QLElBQUlNLFNBQVgsRUFBc0JFLEVBQXRCLENBQXlCQyxLQUF6QixDQUErQix1QkFBL0I7QUFDQUMsb0JBQWNOLEtBQWQ7QUFDQUw7QUFDRCxLQUxhLEVBS1gsR0FMVyxDQUFkOztBQU9BLGFBQVNZLFVBQVQsQ0FBcUJDLENBQXJCLEVBQXdCO0FBQ3RCLGFBQU9BLEVBQUUsSUFBRixFQUFRLGNBQVIsQ0FBUDtBQUNEOztBQUVEQyxTQUFLQyxLQUFMLENBQVdILFVBQVgsRUFBdUIsRUFBRUksSUFBSWYsR0FBTixFQUF2QjtBQUNELEdBaEJEO0FBaUJELENBbEJEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IG1vY2hhLCBicm93c2VyICovXG4vKiBnbG9iYWxzIGV4cGVjdCwgcmVsbSAqL1xuZGVzY3JpYmUoJ2luZmVybm8tZG9tIGNhbiBzdGFydCBhbiBhcHAnLCAoKSA9PiB7XG4gIGl0KCdyZW5kZXJzIGEgaGVsbG8gd29ybGQgaW50byB0aGUgZG9tJywgKGRvbmUpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbml0aWFsSFRNTCA9ICcnO1xuXG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoZGl2LmlubmVySFRNTCA9PT0gaW5pdGlhbEhUTUwpIHJldHVybjtcbiAgICAgIGV4cGVjdChkaXYuaW5uZXJIVE1MKS50by5lcXVhbCgnPGgxPkhlbGxvIFdvcmxkITwvaDE+Jyk7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9LCAyMDApO1xuXG4gICAgZnVuY3Rpb24gSGVsbG9Xb3JsZCAoaCkge1xuICAgICAgcmV0dXJuIGgoJ2gxJywgJ0hlbGxvIFdvcmxkIScpO1xuICAgIH1cblxuICAgIHJlbG0uc3RhcnQoSGVsbG9Xb3JsZCwgeyBlbDogZGl2IH0pO1xuICB9KTtcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhY2thZ2VzL19fdGVzdHNfXy9pbmZlcm5vLWRvbS5lMmUuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);