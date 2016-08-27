(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["CSJSPlugin"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["CSJSPlugin"] = factory();
})(this, function() {
return webpackJsonprelm__name_([2,17],{

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var csjs = __webpack_require__(149);

module.exports = csjs;
module.exports.csjs = csjs;
module.exports.getCss = __webpack_require__(150);


/***/ },

/***/ 138:
/***/ function(module, exports) {

var containers = []; // will store container HTMLElement references
var styleElements = []; // will store {prepend: HTMLElement, append: HTMLElement}

module.exports = function (css, options) {
    options = options || {};

    var position = options.prepend === true ? 'prepend' : 'append';
    var container = options.container !== undefined ? options.container : document.querySelector('head');
    var containerId = containers.indexOf(container);

    // first time we see this container, create the necessary entries
    if (containerId === -1) {
        containerId = containers.push(container) - 1;
        styleElements[containerId] = {};
    }

    // try to get the correponding container + position styleElement, create it otherwise
    var styleElement;

    if (styleElements[containerId] !== undefined && styleElements[containerId][position] !== undefined) {
        styleElement = styleElements[containerId][position];
    } else {
        styleElement = styleElements[containerId][position] = createStyleElement();

        if (position === 'prepend') {
            container.insertBefore(styleElement, container.childNodes[0]);
        } else {
            container.appendChild(styleElement);
        }
    }

    // actually add the stylesheet
    if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText += css
    } else {
        styleElement.textContent += css;
    }

    return styleElement;
};

function createStyleElement() {
    var styleElement = document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    return styleElement;
}


/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(153);


/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(155);


/***/ },

/***/ 151:
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * base62 encode implementation based on base62 module:
 * https://github.com/andrew/base62.js
 */

var CHARS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

module.exports = function encode(integer) {
  if (integer === 0) {
    return '0';
  }
  var str = '';
  while (integer > 0) {
    str = CHARS[integer % 62] + str;
    integer = Math.floor(integer / 62);
  }
  return str;
};


/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var makeComposition = __webpack_require__(55).makeComposition;

module.exports = function createExports(classes, keyframes, compositions) {
  var keyframesObj = Object.keys(keyframes).reduce(function(acc, key) {
    var val = keyframes[key];
    acc[val] = makeComposition([key], [val], true);
    return acc;
  }, {});

  var exports = Object.keys(classes).reduce(function(acc, key) {
    var val = classes[key];
    var composition = compositions[key];
    var extended = composition ? getClassChain(composition) : [];
    var allClasses = [key].concat(extended);
    var unscoped = allClasses.map(function(name) {
      return classes[name] ? classes[name] : name;
    });
    acc[val] = makeComposition(allClasses, unscoped);
    return acc;
  }, keyframesObj);

  return exports;
}

function getClassChain(obj) {
  var visited = {}, acc = [];

  function traverse(obj) {
    return Object.keys(obj).forEach(function(key) {
      if (!visited[key]) {
        visited[key] = true;
        acc.push(key);
        traverse(obj[key]);
      }
    });
  }

  traverse(obj);
  return acc;
}


/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var extractExtends = __webpack_require__(154);
var isComposition = __webpack_require__(55).isComposition;
var buildExports = __webpack_require__(152);
var scopify = __webpack_require__(158);
var cssKey = __webpack_require__(81);

module.exports = function csjsHandler(strings) {
  // Fast path to prevent arguments deopt
  var values = Array(arguments.length - 1);
  for (var i = 1; i < arguments.length; i++) {
    values[i - 1] = arguments[i];
  }
  var css = joiner(strings, values.map(selectorize));

  var ignores = values.reduce(function(acc, val) {
    if (isComposition(val)) {
      val.classNames.forEach(function(name, i) {
        acc[name] = val.unscoped[i];
      });
    }
    return acc;
  }, {});

  var scoped = scopify(css, ignores);
  var extracted = extractExtends(scoped.css);

  var localClasses = without(scoped.classes, ignores);
  var localKeyframes = without(scoped.keyframes, ignores);
  var compositions = extracted.compositions;

  var exports = buildExports(localClasses, localKeyframes, compositions);

  return Object.defineProperty(exports, cssKey, {
    enumerable: false,
    configurable: false,
    writeable: false,
    value: extracted.css
  });
};

/**
 * Replaces class compositions with comma seperated class selectors
 * @param  value - the potential class composition
 * @return       - the original value or the selectorized class composition
 */
function selectorize(value) {
  return isComposition(value) ? value.selector : value;
}

/**
 * Joins template string literals and values
 * @param  {array} strings - array of strings
 * @param  {array} values  - array of values
 * @return {string}        - strings and values joined
 */
function joiner(strings, values) {
  return strings.map(function(str, i) {
    return (i !== values.length) ? str + values[i] : str;
  }).join('');
}

/**
 * Returns first object without keys of second
 * @param  {object} obj      - source object
 * @param  {object} unwanted - object with unwanted keys
 * @return {object}          - first object without unwanted keys
 */
function without(obj, unwanted) {
  return Object.keys(obj).reduce(function(acc, key) {
    if (!unwanted[key]) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}


/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var makeComposition = __webpack_require__(55).makeComposition;

var regex = /\.([^\s]+)(\s+)(extends\s+)(\.[^{]+)/g;

module.exports = function extractExtends(css) {
  var found, matches = [];
  while (found = regex.exec(css)) {
    matches.unshift(found);
  }

  function extractCompositions(acc, match) {
    var extendee = getClassName(match[1]);
    var keyword = match[3];
    var extended = match[4];

    // remove from output css
    var index = match.index + match[1].length + match[2].length;
    var len = keyword.length + extended.length;
    acc.css = acc.css.slice(0, index) + " " + acc.css.slice(index + len + 1);

    var extendedClasses = splitter(extended);

    extendedClasses.forEach(function(className) {
      if (!acc.compositions[extendee]) {
        acc.compositions[extendee] = {};
      }
      if (!acc.compositions[className]) {
        acc.compositions[className] = {};
      }
      acc.compositions[extendee][className] = acc.compositions[className];
    });
    return acc;
  }

  return matches.reduce(extractCompositions, {
    css: css,
    compositions: {}
  });

};

function splitter(match) {
  return match.split(',').map(getClassName);
}

function getClassName(str) {
  var trimmed = str.trim();
  return trimmed[0] === '.' ? trimmed.substr(1) : trimmed;
}


/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var cssKey = __webpack_require__(81);

module.exports = function getCss(csjs) {
  return csjs[cssKey];
};


/***/ },

/***/ 156:
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * djb2 string hash implementation based on string-hash module:
 * https://github.com/darkskyapp/string-hash
 */

module.exports = function hashStr(str) {
  var hash = 5381;
  var i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i)
  }
  return hash >>> 0;
};


/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var encode = __webpack_require__(151);
var hash = __webpack_require__(156);

module.exports = function fileScoper(fileSrc) {
  var suffix = encode(hash(fileSrc));

  return function scopedName(name) {
    return name + '_' + suffix;
  }
};


/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var fileScoper = __webpack_require__(157);

var findClasses = /(\.)(?!\d)([^\s\.,{\[>+~#:)]*)(?![^{]*})/.source;
var findKeyframes = /(@\S*keyframes\s*)([^{\s]*)/.source;
var ignoreComments = /(?!(?:[^*/]|\*[^/]|\/[^*])*\*+\/)/.source;

var classRegex = new RegExp(findClasses + ignoreComments, 'g');
var keyframesRegex = new RegExp(findKeyframes + ignoreComments, 'g');

module.exports = scopify;

function scopify(css, ignores) {
  var makeScopedName = fileScoper(css);
  var replacers = {
    classes: classRegex,
    keyframes: keyframesRegex
  };

  function scopeCss(result, key) {
    var replacer = replacers[key];
    function replaceFn(fullMatch, prefix, name) {
      var scopedName = ignores[name] ? name : makeScopedName(name);
      result[key][scopedName] = name;
      return prefix + scopedName;
    }
    return {
      css: result.css.replace(replacer, replaceFn),
      keyframes: result.keyframes,
      classes: result.classes
    };
  }

  var result = Object.keys(replacers).reduce(scopeCss, {
    css: css,
    keyframes: {},
    classes: {}
  });

  return replaceAnimations(result);
}

function replaceAnimations(result) {
  var animations = Object.keys(result.keyframes).reduce(function(acc, key) {
    acc[result.keyframes[key]] = key;
    return acc;
  }, {});
  var unscoped = Object.keys(animations);

  if (unscoped.length) {
    var regexStr = '((?:animation|animation-name)\\s*:[^};]*)('
      + unscoped.join('|') + ')([;\\s])' + ignoreComments;
    var regex = new RegExp(regexStr, 'g');

    var replaced = result.css.replace(regex, function(match, preamble, name, ending) {
      return preamble + animations[name] + ending;
    });

    return {
      css: replaced,
      keyframes: result.keyframes,
      classes: result.classes
    }
  }

  return result;
}


/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_mapValues__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_csjs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_csjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_csjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_insert_css__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_insert_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_insert_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StylesPlugin__ = __webpack_require__(51);
/* harmony export */ exports["substitueStyle"] = substitueStyle;/* harmony export */ exports["createCSS"] = createCSS;/* harmony export */ exports["default"] = CSJSPlugin;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






var usedStyles = {};

function substitueStyle(x) {
  if (typeof x !== 'string') return x;
  if (usedStyles.hasOwnProperty(x)) return usedStyles[x];
  return x;
}

function createCSS(pieces) {
  for (var _len = arguments.length, substitutions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    substitutions[_key - 1] = arguments[_key];
  }

  var styles = __WEBPACK_IMPORTED_MODULE_1_csjs___default.a.apply(undefined, [pieces].concat(_toConsumableArray(substitutions.map(substitueStyle))));

  __WEBPACK_IMPORTED_MODULE_2_insert_css___default()(__WEBPACK_IMPORTED_MODULE_1_csjs___default.a.getCss(styles));

  return __WEBPACK_IMPORTED_MODULE_0_lodash_mapValues___default()(styles, function (x) {
    var generatedName = x.toString();
    usedStyles[generatedName] = x;
    return generatedName;
  });
}

function CSJSPlugin() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$theme = _ref.theme;
  var theme = _ref$theme === undefined ? {} : _ref$theme;

  return new __WEBPACK_IMPORTED_MODULE_3__StylesPlugin__["default"](createCSS, theme);
}

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_mapValues__);




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StylesPlugin = function () {
  function StylesPlugin(tag) {
    var theme = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, StylesPlugin);

    this.tag = tag;
    this.theme = theme;
  }

  _createClass(StylesPlugin, [{
    key: 'apply',
    value: function apply(component, source) {
      if (!this.tag) {
        component.styles = {};
        return;
      }

      var childStyles = __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues___default()(component.components, function (x) {
        return x.styles || {};
      });
      if (!__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(source.styles)) {
        component.styles = childStyles;
      } else {
        var result = source.styles(this.tag, {
          components: childStyles,
          theme: this.theme
        });

        component.styles = __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()(result || {}, childStyles);
      }
    }
  }]);

  return StylesPlugin;
}();

/* harmony default export */ exports["default"] = StylesPlugin;

/***/ },

/***/ 55:
/***/ function(module, exports) {

"use strict";
'use strict';

module.exports = {
  makeComposition: makeComposition,
  isComposition: isComposition
};

/**
 * Returns an immutable composition object containing the given class names
 * @param  {array} classNames - The input array of class names
 * @return {Composition}      - An immutable object that holds multiple
 *                              representations of the class composition
 */
function makeComposition(classNames, unscoped, isAnimation) {
  var classString = classNames.join(' ');
  return Object.create(Composition.prototype, {
    classNames: { // the original array of class names
      value: Object.freeze(classNames),
      configurable: false,
      writable: false,
      enumerable: true
    },
    unscoped: { // the original array of class names
      value: Object.freeze(unscoped),
      configurable: false,
      writable: false,
      enumerable: true
    },
    className: { // space-separated class string for use in HTML
      value: classString,
      configurable: false,
      writable: false,
      enumerable: true
    },
    selector: { // comma-separated, period-prefixed string for use in CSS
      value: classNames.map(function(name) {
        return isAnimation ? name : '.' + name;
      }).join(', '),
      configurable: false,
      writable: false,
      enumerable: true
    },
    toString: { // toString() method, returns class string for use in HTML
      value: function() {
        return classString;
      },
      configurable: false,
      writeable: false,
      enumerable: false
    }
  });
}

/**
 * Returns whether the input value is a Composition
 * @param value      - value to check
 * @return {boolean} - whether value is a Composition or not
 */
function isComposition(value) {
  return value instanceof Composition;
}

/**
 * Private constructor for use in `instanceof` checks
 */
function Composition() {}


/***/ },

/***/ 81:
/***/ function(module, exports) {

"use strict";
'use strict';

/**
 * CSS identifiers with whitespace are invalid
 * Hence this key will not cause a collision
 */

module.exports = ' css ';


/***/ }

},[307])
});
;