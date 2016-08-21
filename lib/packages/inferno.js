'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}

function interopDefault(ex) {
	return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var infernoDom$1 = createCommonjsModule(function (module, exports) {
/*!
 * inferno-dom v0.7.16
 * (c) 2016 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.InfernoDOM = factory());
}(commonjsGlobal, function () { 'use strict';

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
});

var infernoDom$2 = interopDefault(infernoDom$1);


var require$$0 = Object.freeze({
	default: infernoDom$2
});

var infernoDom = createCommonjsModule(function (module) {
'use strict';

module.exports = interopDefault(require$$0);
});

var InfernoDOM = interopDefault(infernoDom);

var isFunction = createCommonjsModule(function (module) {
module.exports = function isFunction(x) {
  return typeof x === 'function';
};
});

var isFunction$1 = interopDefault(isFunction);


var require$$2 = Object.freeze({
  default: isFunction$1
});

var isNil = createCommonjsModule(function (module) {
module.exports = function isNil(x) {
  return x === null || x === void 0;
};
});

var isNil$1 = interopDefault(isNil);


var require$$7 = Object.freeze({
  default: isNil$1
});

var fail = createCommonjsModule(function (module) {
module.exports = function fail(message) {
  throw new TypeError('[tcomb] ' + message);
};
});

var fail$1 = interopDefault(fail);


var require$$1 = Object.freeze({
  default: fail$1
});

var getFunctionName = createCommonjsModule(function (module) {
module.exports = function getFunctionName(f) {
  return f.displayName || f.name || '<function' + f.length + '>';
};
});

var getFunctionName$1 = interopDefault(getFunctionName);


var require$$2$1 = Object.freeze({
  default: getFunctionName$1
});

var stringify = createCommonjsModule(function (module) {
var getFunctionName = interopDefault(require$$2$1);

function replacer(key, value) {
  if (typeof value === 'function') {
    return getFunctionName(value);
  }
  return value;
}

module.exports = function stringify(x) {
  try { // handle "Converting circular structure to JSON" error
    return JSON.stringify(x, replacer, 2);
  }
  catch (e) {
    return String(x);
  }
};
});

var stringify$1 = interopDefault(stringify);


var require$$0$1 = Object.freeze({
  default: stringify$1
});

var assert = createCommonjsModule(function (module) {
var isFunction = interopDefault(require$$2);
var isNil = interopDefault(require$$7);
var fail = interopDefault(require$$1);
var stringify = interopDefault(require$$0$1);

function assert(guard, message) {
  if (guard !== true) {
    if (isFunction(message)) { // handle lazy messages
      message = message();
    }
    else if (isNil(message)) { // use a default message
      message = 'Assert failed (turn on "Pause on exceptions" in your Source panel)';
    }
    assert.fail(message);
  }
}

assert.fail = fail;
assert.stringify = stringify;

module.exports = assert;
});

var assert$1 = interopDefault(assert);


var require$$3 = Object.freeze({
  default: assert$1
});

var isString = createCommonjsModule(function (module) {
module.exports = function isString(x) {
  return typeof x === 'string';
};
});

var isString$1 = interopDefault(isString);


var require$$1$2 = Object.freeze({
  default: isString$1
});

var isArray = createCommonjsModule(function (module) {
module.exports = function isArray(x) {
  return x instanceof Array;
};
});

var isArray$1 = interopDefault(isArray);


var require$$2$3 = Object.freeze({
  default: isArray$1
});

var isObject = createCommonjsModule(function (module) {
var isNil = interopDefault(require$$7);
var isArray = interopDefault(require$$2$3);

module.exports = function isObject(x) {
  return !isNil(x) && typeof x === 'object' && !isArray(x);
};
});

var isObject$1 = interopDefault(isObject);


var require$$4 = Object.freeze({
  default: isObject$1
});

var isType = createCommonjsModule(function (module) {
var isFunction = interopDefault(require$$2);
var isObject = interopDefault(require$$4);

module.exports = function isType(x) {
  return isFunction(x) && isObject(x.meta);
};
});

var isType$1 = interopDefault(isType);


var require$$1$3 = Object.freeze({
  default: isType$1
});

var getTypeName = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);
var getFunctionName = interopDefault(require$$2$1);

module.exports = function getTypeName(constructor) {
  if (isType(constructor)) {
    return constructor.displayName;
  }
  return getFunctionName(constructor);
};
});

var getTypeName$1 = interopDefault(getTypeName);


var require$$5 = Object.freeze({
  default: getTypeName$1
});

var forbidNewOperator = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var getTypeName = interopDefault(require$$5);

module.exports = function forbidNewOperator(x, type) {
  assert(!(x instanceof type), function () { return 'Cannot use the new operator to instantiate the type ' + getTypeName(type); });
};
});

var forbidNewOperator$1 = interopDefault(forbidNewOperator);


var require$$2$2 = Object.freeze({
  default: forbidNewOperator$1
});

var irreducible = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isString = interopDefault(require$$1$2);
var isFunction = interopDefault(require$$2);
var forbidNewOperator = interopDefault(require$$2$2);

module.exports = function irreducible(name, predicate) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isString(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to irreducible(name, predicate) (expected a string)'; });
    assert(isFunction(predicate), 'Invalid argument predicate ' + assert.stringify(predicate) + ' supplied to irreducible(name, predicate) (expected a function)');
  }

  function Irreducible(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      forbidNewOperator(this, Irreducible);
      path = path || [name];
      assert(predicate(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  Irreducible.meta = {
    kind: 'irreducible',
    name: name,
    predicate: predicate,
    identity: true
  };

  Irreducible.displayName = name;

  Irreducible.is = predicate;

  return Irreducible;
};
});

var irreducible$1 = interopDefault(irreducible);


var require$$1$1 = Object.freeze({
  default: irreducible$1
});

var Any = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);

module.exports = irreducible('Any', function () { return true; });
});

var Any$1 = interopDefault(Any);


var require$$0$2 = Object.freeze({
	default: Any$1
});

var _Array = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isArray = interopDefault(require$$2$3);

module.exports = irreducible('Array', isArray);
});

var _Array$1 = interopDefault(_Array);


var require$$30 = Object.freeze({
	default: _Array$1
});

var isBoolean = createCommonjsModule(function (module) {
module.exports = function isBoolean(x) {
  return x === true || x === false;
};
});

var isBoolean$1 = interopDefault(isBoolean);


var require$$9 = Object.freeze({
  default: isBoolean$1
});

var _Boolean = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isBoolean = interopDefault(require$$9);

module.exports = irreducible('Boolean', isBoolean);
});

var _Boolean$1 = interopDefault(_Boolean);


var require$$2$4 = Object.freeze({
	default: _Boolean$1
});

var _Date = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);

module.exports = irreducible('Date', function (x) { return x instanceof Date; });
});

var _Date$1 = interopDefault(_Date);


var require$$28 = Object.freeze({
	default: _Date$1
});

var _Error = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);

module.exports = irreducible('Error', function (x) { return x instanceof Error; });
});

var _Error$1 = interopDefault(_Error);


var require$$27 = Object.freeze({
	default: _Error$1
});

var _Function = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isFunction = interopDefault(require$$2);

module.exports = irreducible('Function', isFunction);
});

var _Function$1 = interopDefault(_Function);


var require$$10 = Object.freeze({
	default: _Function$1
});

var Nil = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isNil = interopDefault(require$$7);

module.exports = irreducible('Nil', isNil);
});

var Nil$1 = interopDefault(Nil);


var require$$3$1 = Object.freeze({
	default: Nil$1
});

var isNumber = createCommonjsModule(function (module) {
module.exports = function isNumber(x) {
  return typeof x === 'number' && isFinite(x) && !isNaN(x);
};
});

var isNumber$1 = interopDefault(isNumber);


var require$$1$4 = Object.freeze({
  default: isNumber$1
});

var _Number = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isNumber = interopDefault(require$$1$4);

module.exports = irreducible('Number', isNumber);
});

var _Number$1 = interopDefault(_Number);


var require$$0$3 = Object.freeze({
	default: _Number$1
});

var isTypeName = createCommonjsModule(function (module) {
var isNil = interopDefault(require$$7);
var isString = interopDefault(require$$1$2);

module.exports = function isTypeName(name) {
  return isNil(name) || isString(name);
};
});

var isTypeName$1 = interopDefault(isTypeName);


var require$$12 = Object.freeze({
  default: isTypeName$1
});

var isIdentity = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var Boolean = interopDefault(require$$2$4);
var isType = interopDefault(require$$1$3);
var getTypeName = interopDefault(require$$5);

// return true if the type constructor behaves like the identity function
module.exports = function isIdentity(type) {
  if (isType(type)) {
    if (process.env.NODE_ENV !== 'production') {
      assert(Boolean.is(type.meta.identity), function () { return 'Invalid meta identity ' + assert.stringify(type.meta.identity) + ' supplied to type ' + getTypeName(type); });
    }
    return type.meta.identity;
  }
  // for tcomb the other constructors, like ES6 classes, are identity-like
  return true;
};
});

var isIdentity$1 = interopDefault(isIdentity);


var require$$2$5 = Object.freeze({
  default: isIdentity$1
});

var create = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);
var getFunctionName = interopDefault(require$$2$1);
var assert = interopDefault(require$$3);
var stringify = interopDefault(require$$0$1);

// creates an instance of a type, handling the optional new operator
module.exports = function create(type, value, path) {
  if (isType(type)) {
    return !type.meta.identity && typeof value === 'object' && value !== null ? new type(value, path): type(value, path);
  }

  if (process.env.NODE_ENV !== 'production') {
    // here type should be a class constructor and value some instance, just check membership and return the value
    path = path || [getFunctionName(type)];
    assert(value instanceof type, function () { return 'Invalid value ' + stringify(value) + ' supplied to ' + path.join('/'); });
  }

  return value;
};
});

var create$1 = interopDefault(create);


var require$$6 = Object.freeze({
  default: create$1
});

var is = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

// returns true if x is an instance of type
module.exports = function is(x, type) {
  if (isType(type)) {
    return type.is(x);
  }
  return x instanceof type; // type should be a class constructor
};
});

var is$1 = interopDefault(is);


var require$$1$6 = Object.freeze({
  default: is$1
});

var refinement = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var forbidNewOperator = interopDefault(require$$2$2);
var isIdentity = interopDefault(require$$2$5);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);
var getTypeName = interopDefault(require$$5);
var getFunctionName = interopDefault(require$$2$1);

function getDefaultName(type, predicate) {
  return '{' + getTypeName(type) + ' | ' + getFunctionName(predicate) + '}';
}

function refinement(type, predicate, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to refinement(type, predicate, [name]) combinator (expected a type)'; });
    assert(isFunction(predicate), function () { return 'Invalid argument predicate supplied to refinement(type, predicate, [name]) combinator (expected a function)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to refinement(type, predicate, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type, predicate);
  var identity = isIdentity(type);

  function Refinement(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      if (identity) {
        forbidNewOperator(this, Refinement);
      }
      path = path || [displayName];
    }

    var x = create(type, value, path);

    if (process.env.NODE_ENV !== 'production') {
      assert(predicate(x), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return x;
  }

  Refinement.meta = {
    kind: 'subtype',
    type: type,
    predicate: predicate,
    name: name,
    identity: identity
  };

  Refinement.displayName = displayName;

  Refinement.is = function (x) {
    return is(x, type) && predicate(x);
  };

  Refinement.update = function (instance, patch) {
    return Refinement(assert.update(instance, patch));
  };

  return Refinement;
}

refinement.getDefaultName = getDefaultName;
module.exports = refinement;
});

var refinement$1 = interopDefault(refinement);


var require$$1$5 = Object.freeze({
  default: refinement$1
});

var Integer = createCommonjsModule(function (module) {
var refinement = interopDefault(require$$1$5);
var Number = interopDefault(require$$0$3);

module.exports = refinement(Number, function (x) { return x % 1 === 0; }, 'Integer');
});

var Integer$1 = interopDefault(Integer);


var require$$23 = Object.freeze({
	default: Integer$1
});

var _Object = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isObject = interopDefault(require$$4);

module.exports = irreducible('Object', isObject);
});

var _Object$1 = interopDefault(_Object);


var require$$22 = Object.freeze({
	default: _Object$1
});

var _RegExp = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);

module.exports = irreducible('RegExp', function (x) { return x instanceof RegExp; });
});

var _RegExp$1 = interopDefault(_RegExp);


var require$$21 = Object.freeze({
	default: _RegExp$1
});

var _String = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isString = interopDefault(require$$1$2);

module.exports = irreducible('String', isString);
});

var _String$1 = interopDefault(_String);


var require$$11 = Object.freeze({
	default: _String$1
});

var Type = createCommonjsModule(function (module) {
var irreducible = interopDefault(require$$1$1);
var isType = interopDefault(require$$1$3);

module.exports = irreducible('Type', isType);
});

var Type$1 = interopDefault(Type);


var require$$19 = Object.freeze({
	default: Type$1
});

var dict = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);
var isObject = interopDefault(require$$4);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);

function getDefaultName(domain, codomain) {
  return '{[key: ' + getTypeName(domain) + ']: ' + getTypeName(codomain) + '}';
}

function dict(domain, codomain, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isFunction(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to dict(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(domain, codomain);
  var domainNameCache = getTypeName(domain);
  var codomainNameCache = getTypeName(codomain);
  var identity = isIdentity(domain) && isIdentity(codomain);

  function Dict(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = {}; // make a temporary copy, will be discarded if idempotent remains true
    for (var k in value) {
      if (value.hasOwnProperty(k)) {
        k = create(domain, k, ( process.env.NODE_ENV !== 'production' ? path.concat(domainNameCache) : null ));
        var actual = value[k];
        var instance = create(codomain, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(k + ': ' + codomainNameCache) : null ));
        idempotent = idempotent && ( actual === instance );
        ret[k] = instance;
      }
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  Dict.meta = {
    kind: 'dict',
    domain: domain,
    codomain: codomain,
    name: name,
    identity: identity
  };

  Dict.displayName = displayName;

  Dict.is = function (x) {
    if (!isObject(x)) {
      return false;
    }
    for (var k in x) {
      if (x.hasOwnProperty(k)) {
        if (!is(k, domain) || !is(x[k], codomain)) {
          return false;
        }
      }
    }
    return true;
  };

  Dict.update = function (instance, patch) {
    return Dict(assert.update(instance, patch));
  };

  return Dict;
}

dict.getDefaultName = getDefaultName;
module.exports = dict;
});

var dict$1 = interopDefault(dict);


var require$$4$1 = Object.freeze({
  default: dict$1
});

var mixin = createCommonjsModule(function (module) {
var isNil = interopDefault(require$$7);
var assert = interopDefault(require$$3);

// safe mixin, cannot override props unless specified
module.exports = function mixin(target, source, overwrite) {
  if (isNil(source)) { return target; }
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      if (overwrite !== true) {
        if (process.env.NODE_ENV !== 'production') {
          assert(!target.hasOwnProperty(k) || target[k] === source[k], function () { return 'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "' + k + '" of target object'; });
        }
      }
      target[k] = source[k];
    }
  }
  return target;
};
});

var mixin$1 = interopDefault(mixin);


var require$$0$4 = Object.freeze({
  default: mixin$1
});

var declare = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isType = interopDefault(require$$1$3);
var isNil = interopDefault(require$$7);
var mixin = interopDefault(require$$0$4);
var getTypeName = interopDefault(require$$5);

// All the .declare-d types should be clearly different from each other thus they should have
// different names when a name was not explicitly provided.
var nextDeclareUniqueId = 1;

module.exports = function declare(name) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isTypeName(name), function () { return 'Invalid argument name ' + name + ' supplied to declare([name]) (expected a string)'; });
  }

  var type;

  function Declare(value, path) {
    if (process.env.NODE_ENV !== 'production') {
      assert(!isNil(type), function () { return 'Type declared but not defined, don\'t forget to call .define on every declared type'; });
    }
    return type(value, path);
  }

  Declare.define = function (spec) {
    if (process.env.NODE_ENV !== 'production') {
      assert(isType(spec), function () { return 'Invalid argument type ' + assert.stringify(spec) +  ' supplied to define(type) (expected a type)'; });
      assert(isNil(type), function () { return 'Declare.define(type) can only be invoked once'; });
      assert(isNil(spec.meta.name) && Object.keys(spec.prototype).length === 0, function () { return 'Invalid argument type ' + assert.stringify(spec) + ' supplied to define(type) (expected a fresh, unnamed type)'; });
    }

    type = spec;
    mixin(Declare, type, true); // true because it overwrites Declare.displayName
    if (name) {
      type.displayName = Declare.displayName = name;
      Declare.meta.name = name;
    }
    Declare.meta.identity = type.meta.identity;
    Declare.prototype = type.prototype;
    return Declare;
  };

  Declare.displayName = name || ( getTypeName(Declare) + "$" + nextDeclareUniqueId++ );
  // in general I can't say if this type will be an identity, for safety setting to false
  Declare.meta = { identity: false };
  Declare.prototype = null;
  return Declare;
};
});

var declare$1 = interopDefault(declare);


var require$$17 = Object.freeze({
  default: declare$1
});

var enums = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var forbidNewOperator = interopDefault(require$$2$2);
var isString = interopDefault(require$$1$2);
var isObject = interopDefault(require$$4);

function getDefaultName(map) {
  return Object.keys(map).map(function (k) { return assert.stringify(k); }).join(' | ');
}

function enums(map, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isObject(map), function () { return 'Invalid argument map ' + assert.stringify(map) + ' supplied to enums(map, [name]) combinator (expected a dictionary of String -> String | Number)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to enums(map, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(map);

  function Enums(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      forbidNewOperator(this, Enums);
      path = path || [displayName];
      assert(Enums.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected one of ' + assert.stringify(Object.keys(map)) + ')'; });
    }

    return value;
  }

  Enums.meta = {
    kind: 'enums',
    map: map,
    name: name,
    identity: true
  };

  Enums.displayName = displayName;

  Enums.is = function (x) {
    return map.hasOwnProperty(x);
  };

  return Enums;
}

enums.of = function (keys, name) {
  keys = isString(keys) ? keys.split(' ') : keys;
  var value = {};
  keys.forEach(function (k) {
    value[k] = k;
  });
  return enums(value, name);
};

enums.getDefaultName = getDefaultName;
module.exports = enums;
});

var enums$1 = interopDefault(enums);


var require$$16 = Object.freeze({
  default: enums$1
});

var list = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);
var isArray = interopDefault(require$$2$3);

function getDefaultName(type) {
  return 'Array<' + getTypeName(type) + '>';
}

function list(type, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to list(type, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to list(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type);
  var typeNameCache = getTypeName(type);
  var identity = isIdentity(type); // the list is identity iif type is identity

  function List(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isArray(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of ' + typeNameCache + ')'; });
    }

    var idempotent = true; // will remain true if I can reutilise the input
    var ret = []; // make a temporary copy, will be discarded if idempotent remains true
    for (var i = 0, len = value.length; i < len; i++ ) {
      var actual = value[i];
      var instance = create(type, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(i + ': ' + typeNameCache) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  List.meta = {
    kind: 'list',
    type: type,
    name: name,
    identity: identity
  };

  List.displayName = displayName;

  List.is = function (x) {
    return isArray(x) && x.every(function (e) {
      return is(e, type);
    });
  };

  List.update = function (instance, patch) {
    return List(assert.update(instance, patch));
  };

  return List;
}

list.getDefaultName = getDefaultName;
module.exports = list;
});

var list$1 = interopDefault(list);


var require$$8 = Object.freeze({
  default: list$1
});

var isMaybe = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

module.exports = function isMaybe(x) {
  return isType(x) && ( x.meta.kind === 'maybe' );
};
});

var isMaybe$1 = interopDefault(isMaybe);


var require$$7$1 = Object.freeze({
  default: isMaybe$1
});

var maybe = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var isMaybe = interopDefault(require$$7$1);
var isIdentity = interopDefault(require$$2$5);
var Any = interopDefault(require$$0$2);
var create = interopDefault(require$$6);
var Nil = interopDefault(require$$3$1);
var forbidNewOperator = interopDefault(require$$2$2);
var is = interopDefault(require$$1$6);
var getTypeName = interopDefault(require$$5);

function getDefaultName(type) {
  return '?' + getTypeName(type);
}

function maybe(type, name) {

  if (isMaybe(type) || type === Any || type === Nil) { // makes the combinator idempotent and handle Any, Nil
    return type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to maybe(type, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to maybe(type, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(type);
  var identity = isIdentity(type);

  function Maybe(value, path) {
    if (process.env.NODE_ENV !== 'production') {
      if (identity) {
        forbidNewOperator(this, Maybe);
      }
    }
    return Nil.is(value) ? value : create(type, value, path);
  }

  Maybe.meta = {
    kind: 'maybe',
    type: type,
    name: name,
    identity: identity
  };

  Maybe.displayName = displayName;

  Maybe.is = function (x) {
    return Nil.is(x) || is(x, type);
  };

  return Maybe;
}

maybe.getDefaultName = getDefaultName;
module.exports = maybe;
});

var maybe$1 = interopDefault(maybe);


var require$$13 = Object.freeze({
  default: maybe$1
});

var getDefaultInterfaceName = createCommonjsModule(function (module) {
var getTypeName = interopDefault(require$$5);

function getDefaultInterfaceName(props) {
  return '{' + Object.keys(props).map(function (prop) {
    return prop + ': ' + getTypeName(props[prop]);
  }).join(', ') + '}';
}

module.exports = getDefaultInterfaceName;
});

var getDefaultInterfaceName$1 = interopDefault(getDefaultInterfaceName);


var require$$3$2 = Object.freeze({
  default: getDefaultInterfaceName$1
});

var isStruct = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

module.exports = function isStruct(x) {
  return isType(x) && ( x.meta.kind === 'struct' );
};
});

var isStruct$1 = interopDefault(isStruct);


var require$$4$2 = Object.freeze({
  default: isStruct$1
});

var isInterface = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

module.exports = function isInterface(x) {
  return isType(x) && ( x.meta.kind === 'interface' );
};
});

var isInterface$1 = interopDefault(isInterface);


var require$$3$3 = Object.freeze({
  default: isInterface$1
});

var decompose = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

function isRefinement(type) {
  return isType(type) && type.meta.kind === 'subtype';
}

function getPredicates(type) {
  return isRefinement(type) ?
    [type.meta.predicate].concat(getPredicates(type.meta.type)) :
    [];
}

function getUnrefinedType(type) {
  return isRefinement(type) ?
    getUnrefinedType(type.meta.type) :
    type;
}

function decompose(type) {
  return {
    predicates: getPredicates(type),
    unrefinedType: getUnrefinedType(type)
  };
}

module.exports = decompose;
});

var decompose$1 = interopDefault(decompose);


var require$$0$6 = Object.freeze({
  default: decompose$1
});

var extend = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isFunction = interopDefault(require$$2);
var isArray = interopDefault(require$$2$3);
var mixin = interopDefault(require$$0$4);
var isStruct = interopDefault(require$$4$2);
var isInterface = interopDefault(require$$3$3);
var isObject = interopDefault(require$$4);
var refinement = interopDefault(require$$1$5);
var decompose = interopDefault(require$$0$6);

function compose(predicates, unrefinedType) {
  return predicates.reduce(function (type, predicate) {
    return refinement(type, predicate);
  }, unrefinedType);
}

function getProps(type) {
  return isObject(type) ? type : type.meta.props;
}

function getDefaultProps(type) {
  return isObject(type) ? null : type.meta.defaultProps;
}

function pushAll(arr, elements) {
  Array.prototype.push.apply(arr, elements);
}

function extend(combinator, mixins, options) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(combinator), function () { return 'Invalid argument combinator supplied to extend(combinator, mixins, options), expected a function'; });
    assert(isArray(mixins), function () { return 'Invalid argument mixins supplied to extend(combinator, mixins, options), expected an array'; });
  }
  var props = {};
  var prototype = {};
  var predicates = [];
  var defaultProps = {};
  mixins.forEach(function (x, i) {
    var decomposition = decompose(x);
    var unrefinedType = decomposition.unrefinedType;
    if (process.env.NODE_ENV !== 'production') {
      assert(isObject(unrefinedType) || isStruct(unrefinedType) || isInterface(unrefinedType), function () { return 'Invalid argument mixins[' + i + '] supplied to extend(combinator, mixins, options), expected an object, struct, interface or a refinement (of struct or interface)'; });
    }
    pushAll(predicates, decomposition.predicates);
    mixin(props, getProps(unrefinedType));
    mixin(prototype, unrefinedType.prototype);
    mixin(defaultProps, getDefaultProps(unrefinedType));
  });
  options = combinator.getOptions(options);
  mixin(options.defaultProps, defaultProps);
  var result = compose(predicates, combinator(props, options));
  mixin(result.prototype, prototype);
  return result;
}

module.exports = extend;
});

var extend$1 = interopDefault(extend);


var require$$0$5 = Object.freeze({
  default: extend$1
});

var struct = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var String = interopDefault(require$$11);
var Function = interopDefault(require$$10);
var isBoolean = interopDefault(require$$9);
var isObject = interopDefault(require$$4);
var isNil = interopDefault(require$$7);
var create = interopDefault(require$$6);
var getTypeName = interopDefault(require$$5);
var dict = interopDefault(require$$4$1);
var getDefaultInterfaceName = interopDefault(require$$3$2);
var extend = interopDefault(require$$0$5);

function getDefaultName(props) {
  return 'Struct' + getDefaultInterfaceName(props);
}

function extendStruct(mixins, name) {
  return extend(struct, mixins, name);
}

function getOptions(options) {
  if (!isObject(options)) {
    options = isNil(options) ? {} : { name: options };
  }
  if (!options.hasOwnProperty('strict')) {
    options.strict = struct.strict;
  }
  if (!options.hasOwnProperty('defaultProps')) {
    options.defaultProps = {};
  }
  return options;
}

function struct(props, options) {

  options = getOptions(options);
  var name = options.name;
  var strict = options.strict;
  var defaultProps = options.defaultProps;

  if (process.env.NODE_ENV !== 'production') {
    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to struct(props, [options]) combinator (expected a dictionary String -> Type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to struct(props, [options]) combinator (expected a string)'; });
    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
    assert(isObject(defaultProps), function () { return 'Invalid argument defaultProps ' + assert.stringify(defaultProps) + ' supplied to struct(props, [options]) combinator (expected an object)'; });
  }

  var displayName = name || getDefaultName(props);

  function Struct(value, path) {

    if (Struct.is(value)) { // implements idempotency
      return value;
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an object)'; });
      // strictness
      if (strict) {
        for (k in value) {
          if (value.hasOwnProperty(k)) {
            assert(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
          }
        }
      }
    }

    if (!(this instanceof Struct)) { // `new` is optional
      return new Struct(value, path);
    }

    for (var k in props) {
      if (props.hasOwnProperty(k)) {
        var expected = props[k];
        var actual = value[k];
        // apply defaults
        if (actual === undefined) {
          actual = defaultProps[k];
        }
        this[k] = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(k + ': ' + getTypeName(expected)) : null ));
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(this);
    }

  }

  Struct.meta = {
    kind: 'struct',
    props: props,
    name: name,
    identity: false,
    strict: strict,
    defaultProps: defaultProps
  };

  Struct.displayName = displayName;

  Struct.is = function (x) {
    return x instanceof Struct;
  };

  Struct.update = function (instance, patch) {
    return new Struct(assert.update(instance, patch));
  };

  Struct.extend = function (xs, name) {
    return extendStruct([Struct].concat(xs), name);
  };

  return Struct;
}

struct.strict = false;
struct.getOptions = getOptions;
struct.getDefaultName = getDefaultName;
struct.extend = extendStruct;
module.exports = struct;
});

var struct$1 = interopDefault(struct);


var require$$11$1 = Object.freeze({
  default: struct$1
});

var tuple = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);
var isArray = interopDefault(require$$2$3);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);

function getDefaultName(types) {
  return '[' + types.map(getTypeName).join(', ') + ']';
}

function tuple(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction), function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to tuple(types, [name]) combinator (expected an array of types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to tuple(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Tuple(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value;
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(isArray(value) && value.length === types.length, function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of length ' + types.length + ')'; });
    }

    var idempotent = true;
    var ret = [];
    for (var i = 0, len = types.length; i < len; i++) {
      var expected = types[i];
      var actual = value[i];
      var instance = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(i + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret.push(instance);
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(ret);
    }

    return ret;
  }

  Tuple.meta = {
    kind: 'tuple',
    types: types,
    name: name,
    identity: identity
  };

  Tuple.displayName = displayName;

  Tuple.is = function (x) {
    return isArray(x) &&
      x.length === types.length &&
      types.every(function (type, i) {
        return is(x[i], type);
      });
  };

  Tuple.update = function (instance, patch) {
    return Tuple(assert.update(instance, patch));
  };

  return Tuple;
}

tuple.getDefaultName = getDefaultName;
module.exports = tuple;
});

var tuple$1 = interopDefault(tuple);


var require$$3$4 = Object.freeze({
  default: tuple$1
});

var isUnion = createCommonjsModule(function (module) {
var isType = interopDefault(require$$1$3);

module.exports = function isUnion(x) {
  return isType(x) && ( x.meta.kind === 'union' );
};
});

var isUnion$1 = interopDefault(isUnion);


var require$$1$7 = Object.freeze({
  default: isUnion$1
});

var union = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);
var isArray = interopDefault(require$$2$3);
var create = interopDefault(require$$6);
var is = interopDefault(require$$1$6);
var forbidNewOperator = interopDefault(require$$2$2);
var isUnion = interopDefault(require$$1$7);
var isNil = interopDefault(require$$7);

function getDefaultName(types) {
  return types.map(getTypeName).join(' | ');
}

function union(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to union(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to union(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Union(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value;
      }
    }

    var type = Union.dispatch(value);
    if (!type && Union.is(value)) {
      return value;
    }

    if (process.env.NODE_ENV !== 'production') {
      if (identity) {
        forbidNewOperator(this, Union);
      }
      path = path || [displayName];
      assert(isFunction(type), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (no constructor returned by dispatch)'; });
      path[path.length - 1] += '(' + getTypeName(type) + ')';
    }

    return create(type, value, path);
  }

  Union.meta = {
    kind: 'union',
    types: types,
    name: name,
    identity: identity
  };

  Union.displayName = displayName;

  Union.is = function (x) {
    return types.some(function (type) {
      return is(x, type);
    });
  };

  Union.dispatch = function (x) { // default dispatch implementation
    for (var i = 0, len = types.length; i < len; i++ ) {
      var type = types[i];
      if (isUnion(type)) { // handle union of unions
        var t = type.dispatch(x);
        if (!isNil(t)) {
          return t;
        }
      }
      else if (is(x, type)) {
        return type;
      }
    }
  };

  Union.update = function (instance, patch) {
    return Union(assert.update(instance, patch));
  };

  return Union;
}

union.getDefaultName = getDefaultName;
module.exports = union;
});

var union$1 = interopDefault(union);


var require$$9$1 = Object.freeze({
  default: union$1
});

var func = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var FunctionType = interopDefault(require$$10);
var isArray = interopDefault(require$$2$3);
var list = interopDefault(require$$8);
var isObject = interopDefault(require$$4);
var create = interopDefault(require$$6);
var isNil = interopDefault(require$$7);
var isBoolean = interopDefault(require$$9);
var tuple = interopDefault(require$$3$4);
var getFunctionName = interopDefault(require$$2$1);
var getTypeName = interopDefault(require$$5);
var isType = interopDefault(require$$1$3);

function getDefaultName(domain, codomain) {
  return '(' + domain.map(getTypeName).join(', ') + ') => ' + getTypeName(codomain);
}

function isInstrumented(f) {
  return FunctionType.is(f) && isObject(f.instrumentation);
}

function getOptionalArgumentsIndex(types) {
  var end = types.length;
  var areAllMaybes = false;
  for (var i = end - 1; i >= 0; i--) {
    var type = types[i];
    if (!isType(type) || type.meta.kind !== 'maybe') {
      return (i + 1);
    } else {
      areAllMaybes = true;
    }
  }
  return areAllMaybes ? 0 : end;
}

function func(domain, codomain, name) {

  domain = isArray(domain) ? domain : [domain]; // handle handy syntax for unary functions

  if (process.env.NODE_ENV !== 'production') {
    assert(list(FunctionType).is(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to func(domain, codomain, [name]) combinator (expected an array of types)'; });
    assert(FunctionType.is(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to func(domain, codomain, [name]) combinator (expected a type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to func(domain, codomain, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(domain, codomain);
  var domainLength = domain.length;
  var optionalArgumentsIndex = getOptionalArgumentsIndex(domain);

  function FuncType(value, path) {

    if (!isInstrumented(value)) { // automatically instrument the function
      return FuncType.of(value);
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(FuncType.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  FuncType.meta = {
    kind: 'func',
    domain: domain,
    codomain: codomain,
    name: name,
    identity: true
  };

  FuncType.displayName = displayName;

  FuncType.is = function (x) {
    return isInstrumented(x) &&
      x.instrumentation.domain.length === domainLength &&
      x.instrumentation.domain.every(function (type, i) {
        return type === domain[i];
      }) &&
      x.instrumentation.codomain === codomain;
  };

  FuncType.of = function (f, curried) {

    if (process.env.NODE_ENV !== 'production') {
      assert(FunctionType.is(f), function () { return 'Invalid argument f supplied to func.of ' + displayName + ' (expected a function)'; });
      assert(isNil(curried) || isBoolean(curried), function () { return 'Invalid argument curried ' + assert.stringify(curried) + ' supplied to func.of ' + displayName + ' (expected a boolean)'; });
    }

    if (FuncType.is(f)) { // makes FuncType.of idempotent
      return f;
    }

    function fn() {
      var args = Array.prototype.slice.call(arguments);
      var argsLength = args.length;

      if (process.env.NODE_ENV !== 'production') {
        // type-check arguments
        var tupleLength = curried ? argsLength : Math.max(argsLength, optionalArgumentsIndex);
        tuple(domain.slice(0, tupleLength), 'arguments of function ' + displayName)(args);
      }

      if (curried && argsLength < domainLength) {
        if (process.env.NODE_ENV !== 'production') {
          assert(argsLength > 0, 'Invalid arguments.length = 0 for curried function ' + displayName);
        }
        var g = Function.prototype.bind.apply(f, [this].concat(args));
        var newDomain = func(domain.slice(argsLength), codomain);
        return newDomain.of(g, true);
      }
      else {
        return create(codomain, f.apply(this, args));
      }
    }

    fn.instrumentation = {
      domain: domain,
      codomain: codomain,
      f: f
    };

    fn.displayName = getFunctionName(f);

    return fn;

  };

  return FuncType;

}

func.getDefaultName = getDefaultName;
func.getOptionalArgumentsIndex = getOptionalArgumentsIndex;
module.exports = func;
});

var func$1 = interopDefault(func);


var require$$8$1 = Object.freeze({
  default: func$1
});

var intersection = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var isFunction = interopDefault(require$$2);
var isArray = interopDefault(require$$2$3);
var forbidNewOperator = interopDefault(require$$2$5);
var is = interopDefault(require$$1$6);
var getTypeName = interopDefault(require$$5);
var isIdentity = interopDefault(require$$2$5);

function getDefaultName(types) {
  return types.map(getTypeName).join(' & ');
}

function intersection(types, name) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to intersection(types, [name]) combinator (expected an array of at least 2 types)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to intersection(types, [name]) combinator (expected a string)'; });
  }

  var displayName = name || getDefaultName(types);
  var identity = types.every(isIdentity);

  function Intersection(value, path) {

    if (process.env.NODE_ENV !== 'production') {
      if (identity) {
        forbidNewOperator(this, Intersection);
      }
      path = path || [displayName];
      assert(Intersection.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
    }

    return value;
  }

  Intersection.meta = {
    kind: 'intersection',
    types: types,
    name: name,
    identity: identity
  };

  Intersection.displayName = displayName;

  Intersection.is = function (x) {
    return types.every(function (type) {
      return is(x, type);
    });
  };

  Intersection.update = function (instance, patch) {
    return Intersection(assert.update(instance, patch));
  };

  return Intersection;
}

intersection.getDefaultName = getDefaultName;
module.exports = intersection;
});

var intersection$1 = interopDefault(intersection);


var require$$7$2 = Object.freeze({
  default: intersection$1
});

var _interface = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isTypeName = interopDefault(require$$12);
var String = interopDefault(require$$11);
var Function = interopDefault(require$$10);
var isBoolean = interopDefault(require$$9);
var isObject = interopDefault(require$$4);
var isNil = interopDefault(require$$7);
var create = interopDefault(require$$6);
var getTypeName = interopDefault(require$$5);
var dict = interopDefault(require$$4$1);
var getDefaultInterfaceName = interopDefault(require$$3$2);
var isIdentity = interopDefault(require$$2$5);
var is = interopDefault(require$$1$6);
var extend = interopDefault(require$$0$5);

function extendInterface(mixins, name) {
  return extend(inter, mixins, name);
}

function getOptions(options) {
  if (!isObject(options)) {
    options = isNil(options) ? {} : { name: options };
  }
  if (!options.hasOwnProperty('strict')) {
    options.strict = inter.strict;
  }
  return options;
}

function inter(props, options) {

  options = getOptions(options);
  var name = options.name;
  var strict = options.strict;

  if (process.env.NODE_ENV !== 'production') {
    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to interface(props, [options]) combinator (expected a dictionary String -> Type)'; });
    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to interface(props, [options]) combinator (expected a string)'; });
    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
  }

  var displayName = name || getDefaultInterfaceName(props);
  var identity = Object.keys(props).map(function (prop) { return props[prop]; }).every(isIdentity);

  function Interface(value, path) {

    if (process.env.NODE_ENV === 'production') {
      if (identity) {
        return value; // just trust the input if elements must not be hydrated
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      path = path || [displayName];
      assert(!isNil(value), function () { return 'Invalid value ' + value + ' supplied to ' + path.join('/'); });
      // strictness
      if (strict) {
        for (var k in value) {
          assert(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
        }
      }
    }

    var idempotent = true;
    var ret = {};
    for (var prop in props) {
      var expected = props[prop];
      var actual = value[prop];
      var instance = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(prop + ': ' + getTypeName(expected)) : null ));
      idempotent = idempotent && ( actual === instance );
      ret[prop] = instance;
    }

    if (idempotent) { // implements idempotency
      ret = value;
    }

    if (process.env.NODE_ENV !== 'production') {
      Object.freeze(ret);
    }

    return ret;

  }

  Interface.meta = {
    kind: 'interface',
    props: props,
    name: name,
    identity: identity,
    strict: strict
  };

  Interface.displayName = displayName;

  Interface.is = function (x) {
    if (strict) {
      for (var k in x) {
        if (!props.hasOwnProperty(k)) {
          return false;
        }
      }
    }
    for (var prop in props) {
      if (!is(x[prop], props[prop])) {
        return false;
      }
    }
    return true;
  };

  Interface.update = function (instance, patch) {
    return Interface(assert.update(instance, patch));
  };

  Interface.extend = function (xs, name) {
    return extendInterface([Interface].concat(xs), name);
  };

  return Interface;
}

inter.strict = false;
inter.getOptions = getOptions;
inter.getDefaultName = getDefaultInterfaceName;
inter.extend = extendInterface;
module.exports = inter;
});

var _interface$1 = interopDefault(_interface);


var require$$6$1 = Object.freeze({
  default: _interface$1
});

var update = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isObject = interopDefault(require$$4);
var isFunction = interopDefault(require$$2);
var isArray = interopDefault(require$$2$3);
var isNumber = interopDefault(require$$1$4);
var mixin = interopDefault(require$$0$4);

function getShallowCopy(x) {
  if (isArray(x)) {
    return x.concat();
  }
  if (x instanceof Date || x instanceof RegExp) {
    return x;
  }
  if (isObject(x)) {
    return mixin({}, x);
  }
  return x;
}

function isCommand(k) {
  return update.commands.hasOwnProperty(k);
}

function getCommand(k) {
  return update.commands[k];
}

function update(instance, patch) {

  if (process.env.NODE_ENV !== 'production') {
    assert(isObject(patch), function () { return 'Invalid argument patch ' + assert.stringify(patch) + ' supplied to function update(instance, patch): expected an object containing commands'; });
  }

  var value = instance;
  var isChanged = false;
  var newValue;
  for (var k in patch) {
    if (patch.hasOwnProperty(k)) {
      if (isCommand(k)) {
        newValue = getCommand(k)(patch[k], value);
        if (newValue !== instance) {
          isChanged = true;
          value = newValue;
        } else {
          value = instance;
        }
      }
      else {
        if (value === instance) {
          value = getShallowCopy(instance);
        }
        newValue = update(value[k], patch[k]);
        isChanged = isChanged || ( newValue !== value[k] );
        value[k] = newValue;
      }
    }
  }
  return isChanged ? value : instance;
}

// built-in commands

function $apply(f, value) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isFunction(f), 'Invalid argument f supplied to immutability helper { $apply: f } (expected a function)');
  }
  return f(value);
}

function $push(elements, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper { $push: elements } (expected an array)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $push (expected an array)');
  }
  if (elements.length > 0) {
    return arr.concat(elements);
  }
  return arr;
}

function $remove(keys, obj) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(keys), 'Invalid argument keys supplied to immutability helper { $remove: keys } (expected an array)');
    assert(isObject(obj), 'Invalid value supplied to immutability helper $remove (expected an object)');
  }
  if (keys.length > 0) {
    obj = getShallowCopy(obj);
    for (var i = 0, len = keys.length; i < len; i++ ) {
      delete obj[keys[i]];
    }
  }
  return obj;
}

function $set(value) {
  return value;
}

function $splice(splices, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(splices) && splices.every(isArray), 'Invalid argument splices supplied to immutability helper { $splice: splices } (expected an array of arrays)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $splice (expected an array)');
  }
  if (splices.length > 0) {
    arr = getShallowCopy(arr);
    return splices.reduce(function (acc, splice) {
      acc.splice.apply(acc, splice);
      return acc;
    }, arr);
  }
  return arr;
}

function $swap(config, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isObject(config), 'Invalid argument config supplied to immutability helper { $swap: config } (expected an object)');
    assert(isNumber(config.from), 'Invalid argument config.from supplied to immutability helper { $swap: config } (expected a number)');
    assert(isNumber(config.to), 'Invalid argument config.to supplied to immutability helper { $swap: config } (expected a number)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $swap (expected an array)');
  }
  if (config.from !== config.to) {
    arr = getShallowCopy(arr);
    var element = arr[config.to];
    arr[config.to] = arr[config.from];
    arr[config.from] = element;
  }
  return arr;
}

function $unshift(elements, arr) {
  if (process.env.NODE_ENV !== 'production') {
    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper {$unshift: elements} (expected an array)');
    assert(isArray(arr), 'Invalid value supplied to immutability helper $unshift (expected an array)');
  }
  if (elements.length > 0) {
    return elements.concat(arr);
  }
  return arr;
}

function $merge(whatToMerge, value) {
  var isChanged = false;
  var result = getShallowCopy(value);
  for (var k in whatToMerge) {
    if (whatToMerge.hasOwnProperty(k)) {
      result[k] = whatToMerge[k];
      isChanged = isChanged || ( result[k] !== value[k] );
    }
  }
  return isChanged ? result : value;
}

update.commands = {
  $apply: $apply,
  $push: $push,
  $remove: $remove,
  $set: $set,
  $splice: $splice,
  $swap: $swap,
  $unshift: $unshift,
  $merge: $merge
};

module.exports = update;
});

var update$1 = interopDefault(update);


var require$$5$1 = Object.freeze({
  default: update$1
});

var match = createCommonjsModule(function (module) {
var assert = interopDefault(require$$3);
var isFunction = interopDefault(require$$2);
var isType = interopDefault(require$$1$3);
var Any = interopDefault(require$$0$2);

module.exports = function match(x) {
  var type, guard, f, count;
  for (var i = 1, len = arguments.length; i < len; ) {
    type = arguments[i];
    guard = arguments[i + 1];
    f = arguments[i + 2];

    if (isFunction(f) && !isType(f)) {
      i = i + 3;
    }
    else {
      f = guard;
      guard = Any.is;
      i = i + 2;
    }

    if (process.env.NODE_ENV !== 'production') {
      count = (count || 0) + 1;
      assert(isType(type), function () { return 'Invalid type in clause #' + count; });
      assert(isFunction(guard), function () { return 'Invalid guard in clause #' + count; });
      assert(isFunction(f), function () { return 'Invalid block in clause #' + count; });
    }

    if (type.is(x) && guard(x)) {
      return f(x);
    }
  }
  assert.fail('Match error');
};
});

var match$1 = interopDefault(match);


var require$$0$7 = Object.freeze({
  default: match$1
});

var index = createCommonjsModule(function (module) {
/*! @preserve
 *
 * tcomb.js - Type checking and DDD for JavaScript
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Giulio Canti
 *
 */

// core
var t = interopDefault(require$$3);

// types
t.Any = interopDefault(require$$0$2);
t.Array = interopDefault(require$$30);
t.Boolean = interopDefault(require$$2$4);
t.Date = interopDefault(require$$28);
t.Error = interopDefault(require$$27);
t.Function = interopDefault(require$$10);
t.Nil = interopDefault(require$$3$1);
t.Number = interopDefault(require$$0$3);
t.Integer = interopDefault(require$$23);
t.IntegerT = t.Integer;
t.Object = interopDefault(require$$22);
t.RegExp = interopDefault(require$$21);
t.String = interopDefault(require$$11);
t.Type = interopDefault(require$$19);
t.TypeT = t.Type;

// short alias are deprecated
t.Arr = t.Array;
t.Bool = t.Boolean;
t.Dat = t.Date;
t.Err = t.Error;
t.Func = t.Function;
t.Num = t.Number;
t.Obj = t.Object;
t.Re = t.RegExp;
t.Str = t.String;

// combinators
t.dict = interopDefault(require$$4$1);
t.declare = interopDefault(require$$17);
t.enums = interopDefault(require$$16);
t.irreducible = interopDefault(require$$1$1);
t.list = interopDefault(require$$8);
t.maybe = interopDefault(require$$13);
t.refinement = interopDefault(require$$1$5);
t.struct = interopDefault(require$$11$1);
t.tuple = interopDefault(require$$3$4);
t.union = interopDefault(require$$9$1);
t.func = interopDefault(require$$8$1);
t.intersection = interopDefault(require$$7$2);
t.subtype = t.refinement;
t.inter = interopDefault(require$$6$1); // IE8 alias
t['interface'] = t.inter;

// functions
t.assert = t;
t.update = interopDefault(require$$5$1);
t.mixin = interopDefault(require$$0$4);
t.isType = interopDefault(require$$1$3);
t.is = interopDefault(require$$1$6);
t.getTypeName = interopDefault(require$$5);
t.match = interopDefault(require$$0$7);

module.exports = t;
});

var t = interopDefault(index);

var Actions = t.dict(t.String, t.Function, 'Actions');
var Overrides = t.dict(t.String, t.Object, 'Overrides');

function shallowCheck(it) {
  if (!t.Function.is(it)) return 'Component should be a function; got ' + JSON.stringify(it);
  if (!t.maybe(t.Object).is(it.components)) return 'components property should be an object';
  if (!t.maybe(t.Function).is(it.styles)) return 'styles should be a function';
  if (!t.maybe(Actions).is(it.actions)) return 'actions should be an object with functions only';
  if (!t.maybe(Overrides).is(it.overrides)) return 'overrides should an object of objects';
  return void 0;
}

/**
 * Type checks a component to make sure it follows the relm API.
 * In case of failure, an error is thrown.
 *
 * @param {Function} component Definition for a normal 'non-list' relm component
 * @param {String[]} path Optionally provide a path where the component being checked is located
 * @returns {void}
 */
function deepCheck(component) {
  var path = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  var err = shallowCheck(component);
  if (err) throw new Error('Invalid component ' + path.join('.') + ': ' + err);
  _.each(component.components, function (it, name) {
    return deepCheck(it, path.concat(name));
  });
}

var deepCheckComponent = process.env.NODE_ENV === 'production' ? _.noop : deepCheck;

var Component = t.irreducible('Component', function isComponent(x) {
  try {
    deepCheckComponent(x);
    return true;
  } catch (ex) {
    return false;
  }
});

var index$2 = createCommonjsModule(function (module) {
module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};
});

var index$3 = interopDefault(index$2);


var require$$0$8 = Object.freeze({
  default: index$3
});

var index$1 = createCommonjsModule(function (module) {
var isarray = interopDefault(require$$0$8)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string} str
 * @return {!Array}
 */
function parse (str) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || '/'
    var pattern = capture || group || (asterisk ? '.*' : '[^' + delimiter + ']+?')

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: escapeGroup(pattern)
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @return {!function(Object=, Object=)}
 */
function compile (str) {
  return tokensToFunction(parse(str))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  var tokens = parse(path)
  var re = tokensToRegExp(tokens, options)

  // Attach keys back to the regexp.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] !== 'string') {
      keys.push(tokens[i])
    }
  }

  return attachKeys(re, keys)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Object=} options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, options) {
  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''
  var lastToken = tokens[tokens.length - 1]
  var endsWithSlash = typeof lastToken === 'string' && /\/$/.test(lastToken)

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithSlash ? route.slice(0, -2) : route) + '(?:\\/(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithSlash ? '' : '(?=\\/|$)'
  }

  return new RegExp('^' + route, flags(options))
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  keys = keys || []

  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys)
    keys = []
  } else if (!options) {
    options = {}
  }

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
});

var pathToRegexp = interopDefault(index$1);

/**
 * Creates a single route parser given a path (ex /some/:named/:path*)
 * The return exec method returns an object of all named parameters
 *
 * Returned exec() method takes a url string and returns an object with route params
 *
 * @param {Regex} path
 * @returns {Object} with exec() method to match against strings
 */
function routeParser(path) {
  var keys = [];
  var re = pathToRegexp(path, keys);

  return {
    exec: function exec(str) {
      var matches = re.exec(str);
      if (!matches) return null;

      return _.reduce(_.tail(matches), function (obj, match, i) {
        if (!match) return obj;

        obj[keys[i].name] = match;
        return obj;
      }, {});
    }
  };
}

/**
 * Takes multiple route definitions and returns a single
 * parse function to match against all the definitions
 * Example of a definition: {
 *   SomeRoute: [Component, '/some/:named/:path*']
 * }
 * @param {Object} definitions
 * @returns {Function} parser
 */
function routeMapper(definitions) {
  var parsers = _.map(definitions, function definitionsToParser(def, name) {
    var parser = routeParser(def[1]);
    return function exec(str) {
      var params = parser.exec(str);
      if (!params) return null;
      return { name: name, params: params };
    };
  });

  return function parser(str) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = parsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var parse = _step.value;

        var result = parse(str);
        if (result) return result;
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

    return null;
  };
}

/**
 * Main router function; takes a set of route definitions and
 * returns a relm component which utilizies those routes
 * Example of a definition: {
 *   SomeRoute: [Component, '/some/:named/:path*']
 * }
 * @param {Object} routeDefinitions
 * @returns {Object} component
 */
function router(routeDefinitions) {
  if (process.env.NODE_ENV !== 'production') {
    (function () {
      var Path = t.refinement(t.String, function (x) {
        return _.startsWith('/', x);
      }, 'Path');

      var RouteWithoutOptions = t.tuple([Component, Path], '-');
      var RouteWithOptions = t.tuple([Component, Path, t.Boolean], '-');

      var RouteDefinition = t.union([RouteWithoutOptions, RouteWithOptions], 'Route');

      RouteDefinition.dispatch = function (x) {
        return x.length > 2 ? RouteWithOptions : RouteWithoutOptions;
      };

      t.dict(t.String, RouteDefinition, 'Routes')(routeDefinitions);
    })();
  }

  var parseRoute = routeMapper(routeDefinitions);

  function Router(html, params) {
    var props = params.props;
    var children = params.children;
    var components = params.components;


    var url = props.url || '';
    var prefixedUrl = _.startsWith(url, '/') ? url : '/' + url;
    var route = parseRoute(prefixedUrl);
    if (!route) return null;

    var child = components[route.name];
    var childProps = _.assign(props, route.params);

    return child(childProps, children);
  }

  Router.components = _.mapValues(routeDefinitions, function (def) {
    return def[0];
  });

  return Router;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

function list$2(Component) {
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
      var _action$type = toArray(action.type);

      var i = _action$type[0];

      var type = _action$type.slice(1);

      return state.apply(['list', i], next(_.assign({}, action, { type: type })));
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

function parser() {
  var plugins = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return function parse(component, source, path, root) {
    // Parse child components
    var components = _.mapValues(source.components || {}, function (it, key) {
      var child = _.isArray(it) ? _.head(it) : it;
      return parse({}, child, path.concat(key), root);
    });

    // Assign some basic props to the component
    var displayName = source.displayName || source.name;
    Object.assign(component, { components: components, path: path, displayName: displayName });

    // Run the component through the plugins
    _.each(plugins, function (plugin) {
      return plugin.apply(component, source, root);
    });

    return component;
  };
}

function relm(component, _ref) {
  var _ref$plugins = _ref.plugins;
  var plugins = _ref$plugins === undefined ? [] : _ref$plugins;
  var _ref$path = _ref.path;
  var path = _ref$path === undefined ? [] : _ref$path;

  deepCheckComponent(component);
  var rootComponent = {};
  var parse = parser(plugins);

  return parse(rootComponent, component, path, rootComponent);
}

relm.router = router;
relm.list = list$2;

var devMode = process.env.NODE_ENV !== 'production';

function _update(source, mutation) {
  var isChanged = false;
  var value = source;
  var newValue = void 0;

  _.each(mutation, function (mut, key) {
    if (_update.isCommand(key)) {
      newValue = _update.getCommand(key)(mut, value);
      if (newValue !== source) {
        isChanged = true;
        value = newValue;
      } else {
        value = source;
      }
    } else {
      if (value === source) value = _.clone(source) || {};
      newValue = _update(value[key], mut);
      isChanged = isChanged || newValue !== value[key];
      value[key] = newValue;
    }
  });

  return isChanged ? value : source;
}

_update.isCommand = function isCommand(k) {
  return _update.commands.hasOwnProperty(k);
};

_update.getCommand = function getCommand(k) {
  return _update.commands[k];
};

_update.commands = {
  $apply: function $apply(f, value) {
    return f(value);
  },
  $set: function $set(value) {
    return value;
  },
  $concat: function $concat(elements, arr) {
    return arr.concat(elements);
  },
  $splice: function $splice(splices, arr) {
    if (splices.length > 0) {
      return _.reduce(splices, function (acc, splice) {
        acc.splice.apply(acc, splice);
        return acc;
      }, _.clone(arr));
    }

    return arr;
  },
  $merge: function $merge(whatToMerge, obj) {
    var result = _.clone(obj);
    var isChanged = false;

    _.each(whatToMerge, function (v, k) {
      result[k] = v;
      isChanged = isChanged || v !== obj[k];
    });

    return isChanged ? result : obj;
  }
};

function Immutable(props) {
  if (!(this instanceof Immutable)) return new Immutable(props);
  _.assign(this, props);
  if (devMode) Object.freeze(this);
}

Immutable.prototype = {
  select: function select(path) {
    return makeImmutable(_.get(this, path));
  },
  update: function update(spec) {
    return makeImmutable(_update(this, spec));
  },
  set: function set(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $set: a } : _.set({}, a, { $set: b })));
  },
  concat: function concat(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $concat: a } : _.set({}, a, { $concat: b })));
  },
  splice: function splice(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $splice: a } : _.set({}, a, { $splice: b })));
  },
  map: function map(a, b) {
    // mapWith :: (a -> b) -> [a] -> [b]
    var mapWith = function mapWith(f) {
      return function (arr) {
        return arr.map(function immutableMapper(v, i) {
          var value = makeImmutable(v);
          var result = f(value, i, arr);
          return unwrapImmutable(result);
        });
      };
    };

    return makeImmutable(_update(this, arguments.length === 1 ? { $apply: mapWith(a) } : _.set({}, a, { $apply: mapWith(b) })));
  },
  merge: function merge(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $merge: a } : _.set({}, a, { $merge: b })));
  }
};

function makeImmutable(arg) {
  if (arg instanceof Immutable) return arg;
  return new Immutable(arg);
}

function unwrapImmutable(arg) {
  if (arg instanceof Immutable) return _.clone(arg);
  return arg;
}

var StatePlugin = function () {
  function StatePlugin() {
    classCallCheck(this, StatePlugin);
  }

  createClass(StatePlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      var components = component.components;

      var handlers = _.reduce(source.actions, function convertChildActions(obj, action, name) {
        if (!_.isFunction(action)) return obj;

        // Child action override
        if (components[name]) {
          obj[name] = createOverrideHandler(action);
          return obj;
        }

        obj[name] = action;
        return obj;
      }, {});

      component.init = unwrapAfter(function init() {
        console.log(component.displayName, handlers);
        var state = _.mapValues(component.components, function (child) {
          return child.init();
        });
        if (!handlers.initializeState) return state;
        return handlers.initializeState(makeImmutable(state));
      });

      component.update = unwrapAfter(function update(state, action) {
        if (!_.isArray(action.type)) return state;

        var _action$type = toArray(action.type);

        var head = _action$type[0];

        var tail = _action$type.slice(1);

        var isChildAction = _.has(components, head);
        var hasLocalHandler = _.isFunction(handlers[head]);

        if (isChildAction) {
          var _ret = function () {
            // No override; let the child component handle it
            if (!hasLocalHandler) {
              var childAction = _.defaults({ type: tail }, action);
              var nextChildState = components[head].update(makeImmutable(state[head]), childAction);
              return {
                v: state.set(head, nextChildState)
              };
            }

            // Action type is overriden, so use the override
            var child = components[head];
            var next = function next(childState) {
              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return child.update(makeImmutable(childState), { type: tail, args: args });
            };
            next.path = tail;
            return {
              v: handlers[head].apply(handlers, [makeImmutable(state), next].concat(toConsumableArray(action.args)))
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        if (hasLocalHandler) {
          return handlers[head].apply(handlers, [makeImmutable(state)].concat(toConsumableArray(action.args)));
        }

        return state;
      });

      component.actions = _.mapValues(source.actions, function (__, actionName) {
        var type = component.path.concat(actionName);

        var fn = function fn() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return root.dispatch({ type: type, args: args });
        };
        // const fn = _.startsWith(actionName, '$')
        //   ? (...args) => root.dispatch({ type, args, component })
        //   : (...args) => root.dispatch({ type, args });

        Object.defineProperties(fn, {
          name: { value: actionName },
          displayName: { value: actionName }
        });

        return fn;
      });
    }
  }]);
  return StatePlugin;
}();

function createOverrideHandler(override) {
  if (_.isFunction(override)) return override;

  var strategy = _.mapValues(override, function (o) {
    return _.isFunction(o) ? o : createOverrideHandler(o);
  });

  return function reducer(state, next, action) {
    var fn = _.get(strategy, action.type[0]);
    if (fn) return fn(state, next, action);
    return next(state, action);
  };
}

function unwrapAfter(fn) {
  return function unwrap() {
    return unwrapImmutable(fn.apply(this, arguments));
  };
}

var TasksPlugin = function () {
  function TasksPlugin() {
    classCallCheck(this, TasksPlugin);
  }

  createClass(TasksPlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      if (component === root) {
        component.middleware = function (store) {
          return function (next) {
            return function (action) {
              // Skip non-relm or non-async actions; async actions are ones where the
              // action name (last item in type array) starts with a $ sign
              if (!_.isArray(action.type)) return next(action);
              if (!isAsyncAction(_.last(action.type))) return next(action);

              // Get the path of the component
              var path = _.initial(action.type);

              // Find the component
              var targetComponent = root;
              for (var i = 0, n = path.length; i < n; i++) {
                var key = path[i];
                var nextComponent = targetComponent.components[key];
                if (!nextComponent) return null;
                targetComponent = nextComponent;
              }

              // Create the task api
              var task = {
                dispatch: store.dispatch,
                getState: !path.length ? store.getState : function () {
                  return _.get(store.getState(), path);
                },
                actions: targetComponent.actions,
                queries: targetComponent.queries
              };

              return handleAsyncAction(task, source, action.type, action.args);
            };
          };
        };
      }
    }
  }]);
  return TasksPlugin;
}();

function isAsyncAction(name) {
  return _.startsWith(name, '$');
}

function handleWith(task, handler, args) {
  task.instances = handler.instances = handler.instances || [];
  task.isRunning = task.instances.length > 0;

  task.done = function done() {
    handler.instances = _.without(handler.instances, task);
    return task.done;
  };

  task.cancel = function cancel() {
    handler.instances = _.without(handler.instances, task);
    if (task.onCancel) task.onCancel();
  };

  var result = handler.apply(undefined, [task].concat(toConsumableArray(args)));
  if (result === task.done) return 'task:done';
  if (result === void 0) return 'task:relay';
  if (typeof result === 'function') task.onCancel = result;
  return result;
}

function handleAsyncAction(task, component, type) {
  var args = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

  var _type = toArray(type);

  var head = _type[0];

  var tail = _type.slice(1);

  // Own action


  var ownAction = _.get(component.actions, head);
  if (ownAction) return handleWith(task, ownAction, args);

  // Child override
  var override = _.get(component.overrides, type);
  if (override) {
    var result = handleWith(task, override, args);
    if (result !== void 0) return result;
  }

  // Child action
  var child = _.get(component.components, head);
  if (child) return handleAsyncAction(task, child, tail, args);

  throw new Error('Unable to find action ' + head);
}

var _getPrototype = createCommonjsModule(function (module) {
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
});

var _getPrototype$1 = interopDefault(_getPrototype);


var require$$2$7 = Object.freeze({
  default: _getPrototype$1
});

var _isHostObject = createCommonjsModule(function (module) {
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
});

var _isHostObject$1 = interopDefault(_isHostObject);


var require$$1$9 = Object.freeze({
  default: _isHostObject$1
});

var isObjectLike = createCommonjsModule(function (module) {
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
});

var isObjectLike$1 = interopDefault(isObjectLike);


var require$$0$9 = Object.freeze({
  default: isObjectLike$1
});

var isPlainObject = createCommonjsModule(function (module) {
var getPrototype = interopDefault(require$$2$7),
    isHostObject = interopDefault(require$$1$9),
    isObjectLike = interopDefault(require$$0$9);

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
});

var isPlainObject$1 = interopDefault(isPlainObject);


var require$$1$8 = Object.freeze({
  default: isPlainObject$1
});

var ponyfill = createCommonjsModule(function (module) {
'use strict';

module.exports = function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};
});

var ponyfill$1 = interopDefault(ponyfill);


var require$$0$11 = Object.freeze({
	default: ponyfill$1
});

var index$6 = createCommonjsModule(function (module) {
/* global window */
'use strict';

module.exports = interopDefault(require$$0$11)(commonjsGlobal || window || commonjsGlobal);
});

var index$7 = interopDefault(index$6);


var require$$0$10 = Object.freeze({
	default: index$7
});

var createStore$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
exports.ActionTypes = undefined;
exports["default"] = createStore;

var _isPlainObject = interopDefault(require$$1$8);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = interopDefault(require$$0$10);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
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
 */
function createStore(reducer, initialState, enhancer) {
  var _ref2;

  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
    enhancer = initialState;
    initialState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, initialState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = initialState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
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
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
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
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2["default"])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */

      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2["default"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
}
});

var createStore$2 = interopDefault(createStore$1);
var ActionTypes = createStore$1.ActionTypes;

var require$$2$6 = Object.freeze({
  default: createStore$2,
  ActionTypes: ActionTypes
});

var warning = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
exports["default"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
});

var warning$1 = interopDefault(warning);


var require$$0$12 = Object.freeze({
  default: warning$1
});

var combineReducers$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
exports["default"] = combineReducers;

var _createStore = interopDefault(require$$2$6);

var _isPlainObject = interopDefault(require$$1$8);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = interopDefault(require$$0$12);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2["default"])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key);
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
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
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
      if (warningMessage) {
        (0, _warning2["default"])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
});

var combineReducers$2 = interopDefault(combineReducers$1);


var require$$4$3 = Object.freeze({
  default: combineReducers$2
});

var bindActionCreators$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
exports["default"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
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
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
});

var bindActionCreators$2 = interopDefault(bindActionCreators$1);


var require$$3$5 = Object.freeze({
  default: bindActionCreators$2
});

var compose$1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;
exports["default"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  } else {
    var _ret = function () {
      var last = funcs[funcs.length - 1];
      var rest = funcs.slice(0, -1);
      return {
        v: function v() {
          return rest.reduceRight(function (composed, f) {
            return f(composed);
          }, last.apply(undefined, arguments));
        }
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }
}
});

var compose$2 = interopDefault(compose$1);


var require$$0$13 = Object.freeze({
  default: compose$2
});

var applyMiddleware$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = applyMiddleware;

var _compose = interopDefault(require$$0$13);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
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
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var store = createStore(reducer, initialState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
});

var applyMiddleware$2 = interopDefault(applyMiddleware$1);


var require$$2$8 = Object.freeze({
  default: applyMiddleware$2
});

var index$4 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = interopDefault(require$$2$6);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = interopDefault(require$$4$3);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = interopDefault(require$$3$5);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = interopDefault(require$$2$8);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = interopDefault(require$$0$13);

var _compose2 = _interopRequireDefault(_compose);

var _warning = interopDefault(require$$0$12);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2["default"];
exports.combineReducers = _combineReducers2["default"];
exports.bindActionCreators = _bindActionCreators2["default"];
exports.applyMiddleware = _applyMiddleware2["default"];
exports.compose = _compose2["default"];
});

var index$5 = interopDefault(index$4);
var compose = index$4.compose;
var applyMiddleware = index$4.applyMiddleware;
var bindActionCreators = index$4.bindActionCreators;
var combineReducers = index$4.combineReducers;
var createStore = index$4.createStore;

var redux = Object.freeze({
  default: index$5,
  compose: compose,
  applyMiddleware: applyMiddleware,
  bindActionCreators: bindActionCreators,
  combineReducers: combineReducers,
  createStore: createStore
});

var ReduxPlugin = function () {
  function ReduxPlugin(_ref) {
    var customizeStore = _ref.customizeStore;
    classCallCheck(this, ReduxPlugin);

    this.customizeStore = customizeStore || function createReduxStore(reducer, initialState) {
      var middlewares = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

      return createStore(reducer, initialState, applyMiddleware.apply(redux, toConsumableArray(middlewares)));
    };
  }

  createClass(ReduxPlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      var _this = this;

      if (component === root) {
        (function () {
          var init = component.init;
          var update = component.update;
          var middleware = component.middleware;


          var store = _this.customizeStore.call(redux, update, init(), [].concat(middleware));

          component.dispatch = store.dispatch;
          component.getState = store.getState;
          component.subscribe = store.subscribe;

          Object.defineProperty(component, 'state', {
            get: function get() {
              return store.getState() || init();
            }
          });
        })();
      } else {
        Object.defineProperty(component, 'state', {
          get: function get() {
            return _.get(root.getState(), component.path) || component.init();
          }
        });
      }
    }
  }]);
  return ReduxPlugin;
}();

var composition = createCommonjsModule(function (module) {
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
});

var composition$1 = interopDefault(composition);
var makeComposition = composition.makeComposition;
var isComposition = composition.isComposition;

var require$$0$15 = Object.freeze({
  default: composition$1,
  makeComposition: makeComposition,
  isComposition: isComposition
});

var cssExtractExtends = createCommonjsModule(function (module) {
'use strict';

var makeComposition = interopDefault(require$$0$15).makeComposition;

var regex = /\.([^\s]+)(\s+)(extends\s+)(\.[^{]+)/g;

module.exports = function extractExtends(css, hashed) {
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
});

var cssExtractExtends$1 = interopDefault(cssExtractExtends);


var require$$5$2 = Object.freeze({
  default: cssExtractExtends$1
});

var buildExports = createCommonjsModule(function (module) {
'use strict';

var makeComposition = interopDefault(require$$0$15).makeComposition;

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
});

var buildExports$1 = interopDefault(buildExports);


var require$$3$6 = Object.freeze({
  default: buildExports$1
});

var base62Encode = createCommonjsModule(function (module) {
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
});

var base62Encode$1 = interopDefault(base62Encode);


var require$$1$11 = Object.freeze({
  default: base62Encode$1
});

var hashString = createCommonjsModule(function (module) {
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
});

var hashString$1 = interopDefault(hashString);


var require$$0$17 = Object.freeze({
  default: hashString$1
});

var scopedName = createCommonjsModule(function (module) {
'use strict';

var encode = interopDefault(require$$1$11);
var hash = interopDefault(require$$0$17);

module.exports = function fileScoper(fileSrc) {
  var suffix = encode(hash(fileSrc));

  return function scopedName(name) {
    return name + '_' + suffix;
  }
};
});

var scopedName$1 = interopDefault(scopedName);


var require$$0$16 = Object.freeze({
  default: scopedName$1
});

var scopeify = createCommonjsModule(function (module) {
'use strict';

var fileScoper = interopDefault(require$$0$16);

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
});

var scopeify$1 = interopDefault(scopeify);


var require$$2$9 = Object.freeze({
  default: scopeify$1
});

var cssKey = createCommonjsModule(function (module) {
'use strict';

/**
 * CSS identifiers with whitespace are invalid
 * Hence this key will not cause a collision
 */

module.exports = ' css ';
});

var cssKey$1 = interopDefault(cssKey);


var require$$0$18 = Object.freeze({
	default: cssKey$1
});

var mergeProperties = createCommonjsModule(function (module) {
'use strict';

/**
 * Shallowly merges each argument's properties into a new object
 * Does not modify source objects and does not check if hasOwnProperty
 * @param {...object} - the objects to be merged
 * @returns {object}  - the new object
 */
module.exports = function mergeProperties() {
  var target = {};

  var i = arguments.length;
  while (i--) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }

  return target;
};
});

var mergeProperties$1 = interopDefault(mergeProperties);


var require$$0$19 = Object.freeze({
  default: mergeProperties$1
});

var csjs$4 = createCommonjsModule(function (module) {
'use strict';

var extractExtends = interopDefault(require$$5$2);
var isComposition = interopDefault(require$$0$15).isComposition;
var buildExports = interopDefault(require$$3$6);
var scopify = interopDefault(require$$2$9);
var cssKey = interopDefault(require$$0$18);
var mergeProperties = interopDefault(require$$0$19);

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
  var hashes = mergeProperties(scoped.classes, scoped.keyframes);
  var extracted = extractExtends(scoped.css, hashes);

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
});

var csjs$5 = interopDefault(csjs$4);


var require$$0$14 = Object.freeze({
  default: csjs$5
});

var csjs$2 = createCommonjsModule(function (module) {
'use strict';

module.exports = interopDefault(require$$0$14);
});

var csjs$3 = interopDefault(csjs$2);


var require$$1$10 = Object.freeze({
	default: csjs$3
});

var getCss$3 = createCommonjsModule(function (module) {
'use strict';

var cssKey = interopDefault(require$$0$18);

module.exports = function getCss(csjs) {
  return csjs[cssKey];
};
});

var getCss$4 = interopDefault(getCss$3);


var require$$0$21 = Object.freeze({
  default: getCss$4
});

var getCss$1 = createCommonjsModule(function (module) {
'use strict';

module.exports = interopDefault(require$$0$21);
});

var getCss$2 = interopDefault(getCss$1);


var require$$0$20 = Object.freeze({
	default: getCss$2
});

var index$8 = createCommonjsModule(function (module) {
'use strict';

var csjs = interopDefault(require$$1$10);

module.exports = csjs;
module.exports.csjs = csjs;
module.exports.getCss = interopDefault(require$$0$20);
});

var csjs = interopDefault(index$8);

var index$9 = createCommonjsModule(function (module) {
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
});

var insertCSS = interopDefault(index$9);

var StylesPlugin = function () {
  function StylesPlugin(tag) {
    var theme = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
    classCallCheck(this, StylesPlugin);

    this.tag = tag;
    this.theme = theme;
  }

  createClass(StylesPlugin, [{
    key: 'apply',
    value: function apply(component, source) {
      if (!this.tag) {
        component.styles = {};
        return;
      }

      var childStyles = _.mapValues(component.components, function (x) {
        return x.styles || {};
      });
      if (!_.isFunction(source.styles)) {
        component.styles = childStyles;
      } else {
        var result = source.styles(this.tag, {
          components: childStyles,
          theme: this.theme
        });

        component.styles = _.defaults(result || {}, childStyles);
      }
    }
  }]);
  return StylesPlugin;
}();

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

  var styles = csjs.apply(undefined, [pieces].concat(toConsumableArray(substitutions.map(substitueStyle))));

  insertCSS(csjs.getCss(styles));

  return _.mapValues(styles, function (x) {
    var generatedName = x.toString();
    usedStyles[generatedName] = x;
    return generatedName;
  });
}

function CSJSPlugin() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$theme = _ref.theme;
  var theme = _ref$theme === undefined ? {} : _ref$theme;

  return new StylesPlugin(createCSS, theme);
}

var infernoCreateElement$1 = createCommonjsModule(function (module, exports) {
/*!
 * inferno-create-element v0.7.16
 * (c) 2016 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.InfernoCreateElement = factory());
}(commonjsGlobal, function () { 'use strict';

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
});

var infernoCreateElement$2 = interopDefault(infernoCreateElement$1);


var require$$0$22 = Object.freeze({
	default: infernoCreateElement$2
});

var infernoCreateElement = createCommonjsModule(function (module) {
'use strict';

module.exports = interopDefault(require$$0$22);
});

var InfernoCreateElement = interopDefault(infernoCreateElement);

var ViewPlugin = function () {
  function ViewPlugin(createElement) {
    classCallCheck(this, ViewPlugin);

    this.createElement = createElement;
  }

  createClass(ViewPlugin, [{
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
      _.each(component.components, function assignChildComponents(child, key) {
        components[key] = h[key] = child.view;
        child.view.displayName = key;
      });

      // Closure elimination - assign necessary props to the view fn
      _.assign(component.view, {
        render: source.bind(null, h),
        displayName: source.displayName || source.name,
        actions: component.actions,
        tasks: component.tasks,
        styles: styles,
        components: components,
        getState: !component.path.length ? function () {
          return root.getState();
        } : function () {
          return _.get(root.getState(), component.path) || component.init();
        }
      });
    }
  }]);
  return ViewPlugin;
}();

function extendHyperscript(createElement) {
  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var components = config.components || {};
  var styles = config.styles || {};

  return function hyperscript() {
    var selector = arguments[0];
    var attrs = {};
    var children = [];

    // Attributes (second hyperscript arg) are optional
    if (_.isPlainObject(arguments[1])) {
      _.assign(attrs, arguments[1]);
    } else if (_.isArray(arguments[1])) {
      children.push.apply(children, toConsumableArray(arguments[1]));
    } else {
      children.push(arguments[1]);
    }

    // Filter and flatten children
    for (var i = 2, n = arguments.length; i < n; i++) {
      var child = arguments[i];

      // Filter falsey children (null, undefined, false)
      if (!child && typeof child !== 'string') continue;

      if (_.isArray(child)) {
        children.push.apply(children, toConsumableArray(child.filter(Boolean)));
      } else {
        children.push(child);
      }
    }

    // Support extended tag syntax
    if (typeof selector === 'string') {
      var parsed = parseTag(selector);
      // Attributes can be defined in selector as key value pairs or using # for id
      if (parsed.attrs) _.assign(attrs, parsed.attrs);

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

  if (_.isArray(source)) {
    return _.reduce(source, function cat(agg, it) {
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

function InfernoPlugin() {
  return new ViewPlugin(createElement);
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
  var attrs = _.reduce(_.keys(props), _.partial(transformAttributes, props), {});

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return InfernoCreateElement.apply(undefined, [tag, attrs].concat(children));
}

/* eslint-env browser */
function inferno(component, opts) {
  var _ref = opts || {};

  var el = _ref.el;
  var theme = _ref.theme;
  var customizePlugins = _ref.customizePlugins;
  var customizeStore = _ref.customizeStore;


  var identity = function identity(x) {
    return x;
  };

  var app = relm(component, {
    plugins: (customizePlugins || identity)([new StatePlugin(), new TasksPlugin(), new ReduxPlugin({ customizeStore: customizeStore }), new CSJSPlugin({ theme: theme }), new InfernoPlugin()])
  });

  if (app.actions.initializeState) {
    app.actions.initializeState();
  }

  function redraw() {
    InfernoDOM.render(app.view(), el);
  }

  if (el) {
    app.subscribe(requestAnimationFrame.bind(null, redraw));
    redraw();
  }

  return app;
}

Object.assign(relm, { inferno: inferno });

exports['default'] = relm;