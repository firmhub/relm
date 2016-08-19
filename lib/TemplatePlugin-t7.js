(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TemplatePlugin-t7"] = factory();
	else
		root["TemplatePlugin-t7"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 34:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = t7;
/*

  t7.js is a small, lightweight library for compiling ES2015 template literals
  into virtual DOM objects.

  By Dominic Gannaway

*/
/* eslint-env browser */
/* eslint no-param-reassign:0, prefer-template:0, no-console:0, func-names:0 */

//we store created functions in the cache (key is the template string)
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
//to save time later, we can pre-create a props object structure to re-use
var output = null;
var precompile = false;

var docHead = null;
if (isBrowser === true) docHead = document.getElementsByTagName('head')[0];

var selfClosingTags = {
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,

  //common self closing svg elements
  path: true,
  circle: true,
  ellipse: true,
  line: true,
  rect: true,
  use: true,
  stop: true,
  polyline: true,
  polygon: true
};

//when creating a new function from a vdom, we'll need to build the vdom's children
function buildUniversalChildren(root, tagParams, childrenProp, component) {
  var childrenText = [];
  var i = 0;
  var n = 0;
  var matches = null;

  //if the node has children that is an array, handle it with a loop
  if (root.children != null && root.children instanceof Array) {
    for (i = 0, n = root.children.length; i < n; i++) {
      if (root.children[i] != null) {
        if (typeof root.children[i] === 'string') {
          root.children[i] = root.children[i].replace(/(\r\n|\n|\r)/gm, '');
          matches = root.children[i].match(/__\$props__\[\d*\]/g);
          if (matches !== null) {
            childrenText.push(root.children[i]);
          } else {
            childrenText.push("'" + root.children[i] + "'");
          }
        } else {
          buildFunction(root.children[i], childrenText, component); // eslint-disable-line
        }
      }
    }
    //push the children code into our tag params code
    if (childrenText.length === 1) {
      tagParams.push((childrenProp ? 'children: ' : '') + childrenText);
    } else if (childrenText.length > 1) {
      tagParams.push((childrenProp ? 'children: ' : '') + '[' + childrenText.join(',') + ']');
    }
  } else if (root.children != null && typeof root.children === 'string') {
    root.children = root.children.replace(/(\r\n|\n|\r)/gm, '').trim();
    //this ensures its a prop replacement
    matches = root.children.match(/__\$props__\[\d*\]/g);
    //find any template strings and replace them
    if (matches !== null) {
      root.children = root.children.replace(/(__\$props__\[.*\])/g, "',$1,'");
    }
    //if the last two characters are ,', replace them with nothing
    if (root.children.substring(root.children.length - 2) === ",'") {
      root.children = root.children.substring(0, root.children.length - 2);
      tagParams.push((childrenProp ? 'children: ' : '') + "['" + root.children + ']');
    } else {
      tagParams.push((childrenProp ? 'children: ' : '') + "['" + root.children + "']");
    }
  }
}

function isComponentName(tagName) {
  if (tagName[0] === tagName[0].toUpperCase()) {
    return true;
  }
  return false;
}

function joinAttrs(assignments, boundTemplateHelper) {
  if (!assignments || !assignments.length) return '{}';

  var str = 'Object.assign(';
  var insideLiteral = false;
  var matches = null;

  for (var i = 0, n = assignments.length; i < n; i++) {
    var it = assignments[i];
    if (typeof it === 'string') {
      if (insideLiteral) {
        str += ' },';
        insideLiteral = false;
      }
      str += it;
      if (i < n - 1) str += ', ';
    } else {
      if (!insideLiteral) {
        str += '{ ';
        insideLiteral = true;
      }
      matches = it[1].match(/__\$props__\[\d*\]/g);
      if (matches === null) {
        str += "'" + it[0] + "':'" + it[1] + "',";
      } else {
        str += "'" + it[0] + "':" + it[1] + ',';
        if (boundTemplateHelper) boundTemplateHelper(it[0], it[1]);
      }
    }
  }

  return str + (insideLiteral ? ' })' : ')');
}

//This takes a vDom array and builds a new function from it, to improve
//repeated performance at the cost of building new Functions()
function buildFunction(root, functionText, component) {
  var tagParams = [];

  if (root instanceof Array) {
    throw new Error('Adjacent elements are not allowed at the top level');
  }

  // Text entry
  if (!root.tag) {
    functionText.push("'" + root + "'");
    return;
  }

  // Component
  if (isComponentName(root.tag)) {
    if ((typeof window !== 'undefined' && component === window || component == null) && precompile === false) {
      throw new Error("Error referencing component '" + root.tag + "'. Components can only be used when within modules. See documentation for more information on t7.module().");
    }
    //we need to apply the tag components
    functionText.push('__$components__.' + root.tag + '(' + joinAttrs(root.assignments) + ')');
    return;
  }

  // we have a tag, add an element
  functionText.push("{tag: '" + root.tag + "'");
  //add the key
  if (root.key != null) {
    tagParams.push('key: ' + root.key);
  }
  //build the attrs
  if (root.assignments != null) {
    tagParams.push('attrs: ' + joinAttrs(root.assignments));
  }
  //build the children for this node
  buildUniversalChildren(root, tagParams, true, component);
  functionText.push(tagParams.join(',') + '}');
}

function handleChildTextPlaceholders(childText, parent /*, onlyChild*/) {
  var parts = childText.split(/(__\$props__\[\d*\])/g);
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].trim() !== '') {
      //set the children to this object
      parent.children.push(parts[i]);
    }
  }
  childText = null;

  return childText;
}

function replaceQuotes(string) {
  // string = string.replace(/'/g,"\\'")
  if (string.indexOf("'") > -1) {
    string = string.replace(/'/g, "\\'");
  }
  return string;
}

function applyValues(string, values) {
  var re = /__\$props__\[([0-9]*)\]/;

  var placeholders = string.match(/__\$props__\[([0-9]*)\]/g);
  if (!placeholders) return string;

  for (var i = 0; i < placeholders.length; i++) {
    var index = re.exec(placeholders[i])[1];
    string = string.replace(placeholders[i], values[index]);
  }
  return string;
}

function getVdom(html, values) {
  var char = '';
  var lastChar = ''; // eslint-disable-line
  var root = null;
  var insideTag = false;
  var tagContent = '';
  var tagName = '';
  var vElement = null;
  var childText = '';
  var parent = null;
  var tagData = null;
  var hasRootNodeAlready = false;

  for (var i = 0, n = html.length; i < n; i++) {
    //set the char to the current character in the string
    char = html[i];
    if (char === '<') {
      insideTag = true;
    } else if (char === '>' && insideTag === true) {
      //check if first character is a close tag
      if (tagContent[0] === '/') {
        //bad closing tag
        if (tagContent !== '/' + parent.tag && !selfClosingTags[parent.tag] && !parent.closed) {
          console.error('Template error: ' + applyValues(html, values));
          throw new Error("Expected corresponding t7 closing tag for '" + parent.tag + "'.");
        }
        //when the childText is not empty
        if (childText.trim() !== '') {
          //escape quotes etc
          childText = replaceQuotes(childText);
          //check if childText contains one of our placeholders
          childText = handleChildTextPlaceholders(childText, parent, true);
          if (childText !== null && parent.children.length === 0) {
            parent.children = childText;
          } else if (childText != null) {
            parent.children.push(childText);
          }
        }
        //move back up the vDom tree
        parent = parent.parent;
        if (parent) {
          parent.closed = true;
        }
      } else {
        //check if we have any content in the childText, if so, it was a text node that needs to be added
        if (childText.trim().length > 0 && !(parent instanceof Array)) {
          //escape quotes etc
          childText = replaceQuotes(childText);
          //check the childtext for placeholders
          childText = handleChildTextPlaceholders(childText.replace(/(\r\n|\n|\r)/gm, ''), parent);
          parent.children.push(childText);
          childText = '';
        }
        //check if there any spaces in the tagContent, if not, we have our tagName
        if (tagContent.indexOf(' ') === -1) {
          tagData = {};
          tagName = tagContent;
        } else {
          //get the tag data via the getTagData function
          tagData = getTagData(tagContent); // eslint-disable-line
          tagName = tagData.tag;
        }
        //now we create out vElement
        vElement = {
          tag: tagName,
          assignments: tagData && tagData.assignments ? tagData.assignments : null,
          children: [],
          closed: tagContent[tagContent.length - 1] === '/' || Boolean(selfClosingTags[tagName])
        };

        if (tagData && tagData.key) {
          vElement.key = tagData.key;
        }
        //push the node we've constructed to the relevant parent
        if (parent === null) {
          if (hasRootNodeAlready === true) {
            throw new Error('t7 templates must contain only a single root element');
          }
          hasRootNodeAlready = true;
          if (root === null && vElement.closed === false) {
            root = parent = vElement;
          } else {
            root = vElement;
          }
        } else if (parent instanceof Array) {
          parent.push(vElement);
        } else {
          parent.children.push(vElement);
        }
        if (!selfClosingTags[tagName] && vElement.closed === false) {
          //set our node's parent to our current parent
          if (parent === vElement) {
            vElement.parent = null;
          } else {
            vElement.parent = parent;
          }
          //now assign the parent to our new node
          parent = vElement;
        }
      }
      //reset our flags and strings
      insideTag = false;
      tagContent = '';
      childText = '';
    } else if (insideTag === true) {
      tagContent += char;
      lastChar = char;
    } else {
      childText += char;
      lastChar = char;
    }
  }
  //return the root (our constructed vDom)
  return root;
}

function getTagData(tagText) {
  var parts = [];
  var assignments = [];
  var char = '';
  var s = 0;
  var n2 = 0;
  var currentString = '';
  var inQuotes = false;
  var attrParts = [];
  var key = '';
  var lastChar = ''; // eslint-disable-line

  //build the parts of the tag
  for (var i = 0, n = tagText.length; i < n; i++) {
    char = tagText[i];

    if (char === ' ' && inQuotes === false) {
      parts.push(currentString);
      currentString = '';
    } else if (char === "'") {
      if (inQuotes === false) {
        inQuotes = true;
      } else {
        inQuotes = false;
        parts.push(currentString);
        currentString = '';
      }
    } else if (char === '"') {
      if (inQuotes === false) {
        inQuotes = true;
      } else {
        inQuotes = false;
        parts.push(currentString);
        currentString = '';
      }
    } else {
      currentString += char;
    }
  }

  if (currentString !== '') {
    parts.push(currentString);
  }
  currentString = '';

  //loop through the parts of the tag
  for (var _i = 1, _n = parts.length; _i < _n; _i++) {
    attrParts = [];
    lastChar = '';
    currentString = '';

    for (s = 0, n2 = parts[_i].length; s < n2; s++) {
      char = parts[_i][s];

      //if the character is =, then we're able to split the attribute name and value
      if (char === '=') {
        attrParts.push(currentString);
        currentString = '';
      } else {
        currentString += char;
        lastChar = char;
      }
    }

    if (currentString !== '') {
      attrParts.push(currentString);
    }
    if (attrParts.length > 1) {
      var matches = attrParts[1].match(/__\$props__\[\d*\]/g);
      if (matches !== null) {
        if (attrParts[0] === '@@assign') {
          assignments.push(attrParts[1]);
        } else {
          assignments.push(attrParts);
        }
      } else {
        assignments.push(attrParts);
        if (attrParts[0] === 'key') key = attrParts[1];
      }
    }
  }

  //return the attributes and the tag name
  return {
    tag: parts[0],
    key: key,
    assignments: assignments
  };
}

function addNewScriptFunction(scriptString, templateKey) {
  var funcCode = scriptString + '\n//# sourceURL=' + templateKey;
  var scriptElement = document.createElement('script');
  scriptElement.textContent = funcCode;
  docHead.appendChild(scriptElement);
}

function createTemplateKey(tpl) {
  var hash = 0;
  var i = void 0;
  var chr = void 0;
  var len = void 0;

  if (tpl.length === 0) return tpl;
  for (i = 0, len = tpl.length; i < len; i++) {
    chr = tpl.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}

//main t7 compiling function
function t7(template) {
  var values = [].slice.call(arguments, 1);
  var fullHtml = null;
  var i = 1;
  var n = arguments.length;
  var functionString = null;
  var scriptString = null;
  var scriptCode = '';
  var templateKey = null;
  var tpl = template[0];

  //build the template string
  for (; i < n; i++) {
    tpl += template[i];
  }
  //set our unique key
  templateKey = createTemplateKey(tpl);

  //check if we have the template in cache
  if (t7._cache[templateKey] == null) {
    fullHtml = '';
    //put our placeholders around the template parts
    for (i = 0, n = template.length; i < n; i++) {
      if (i === template.length - 1) {
        fullHtml += template[i];
      } else if (template[i].slice(-4) === ' ...') {
        fullHtml += template[i].slice(0, template[i].length - 3) + '@@assign=__$props__[' + i + ']';
      } else {
        fullHtml += template[i] + '__$props__[' + i + ']';
      }
    }
    //once we have our vDom array, build an optimal function to improve performance
    functionString = [];
    buildFunction(
    //build a vDom from the HTML
    getVdom(fullHtml, values), functionString, this, templateKey);
    scriptCode = functionString.join(',');
    //build a new Function and store it depending if on node or browser
    if (precompile === true) {
      return {
        templateKey: templateKey,
        template: 'return ' + scriptCode
      };
    }

    if (isBrowser === true) {
      scriptString = 't7._cache["' + templateKey + '"]=function(__$props__, __$components__, t7)';
      scriptString += '{"use strict";return ' + scriptCode + '}';
      addNewScriptFunction(scriptString, templateKey);
    } else {
      t7._cache[templateKey] = new Function('"use strict";const __$props__ = arguments[0];const __$components__ = arguments[1];const t7 = arguments[2];return ' + scriptCode);
    }
  }
  return t7._cache[templateKey](values, this, t7);
}

t7._cache = {};
t7._templateCache = {};

t7.getTemplateCache = function (id) {
  return t7._templateCache[id];
};

t7.getOutput = function () {
  return output;
};

t7.setPrecompile = function (val) {
  precompile = val;
};

t7.clearCache = function () {
  t7._cache = {};
  t7._templateCache = {};
};

t7.assign = function (compName) {
  throw new Error("Error assigning component '" + compName + "'. You can only assign components from within a module. Please check documentation for t7.module().");
};

t7.module = function (callback) {
  var components = {};

  var instance = function instance() {
    return t7.apply(components, arguments);
  };

  instance.assign = function (name, val) {
    if (arguments.length === 2) {
      components[name] = val;
    } else {
      Object.assign(components, name);
    }
  };

  instance.loadComponent = function (name) {
    return components[name];
  };

  instance.clearCache = t7.clearCache;
  instance.precompile = t7.precompile;

  callback(instance);
};

/***/ }

/******/ })
});
;