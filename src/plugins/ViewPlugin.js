import classNames from 'classnames';
import _ from 'lodash';

export default class ViewPlugin {
  constructor (createElement) {
    this.createElement = createElement;
  }

  apply (component, source, root) {
    component.view = function view (props, ...children) {
      const styles = props && props.styles ? _.defaults(props.styles, view.styles) : view.styles;

      return view.render({
        props: _.omit(props, 'styles'),
        children,
        actions: view.actions,
        state: view.getState(),
        styles,
        components: view.components,
      });
    };

    const components = {};

    // Clone the tag function so we can assign components to it (i.e. h.Component syntax)
    const h = extendHyperscript(this.createElement, components);
    Object.defineProperty(h, 'createElement', { value: this.createElement });

    // Optimization - assign components to h and components object in one pass
    _.each(component.components, function assignChildComponents (child, key) {
      components[key] = h[key] = child.view;
      child.view.displayName = key;
    });

    // Optimization - closure elimination - assign necessary props to the view fn
    _.assign(component.view, {
      render: source.bind(null, h),
      displayName: source.displayName || source.name,
      actions: component.actions,
      styles: component.styles,
      components,
      getState: !component.path.length
        ? () => root.getState()
        : () => _.get(root.getState(), component.path) || component.init()
    });
  }
}

export function extendHyperscript (createElement, components = {}) {
  return function hyperscript () {
    let selector = arguments[0];
    const attrs = {};
    const children = [];

    // Attributes (second hyperscript arg) are optional
    if (_.isArray(arguments[1])) {
      children.push(...arguments[1]);
    } else {
      _.assign(attrs, arguments[1]);
    }

    // Filter and flatten children
    for (let i = 2, n = arguments.length; i < n; i++) {
      const child = arguments[i];

      // Filter falsey children (null, undefined, false)
      if (!child && typeof child !== 'string') continue;

      if (_.isArray(child)) {
        children.push(...child.filter(Boolean));
      } else {
        children.push(child);
      }
    }

    // Support extended tag syntax
    if (typeof selector === 'string') {
      const parsed = parseTag(selector);
      // Attributes can be defined in selector as key value pairs or using # for id
      if (parsed.attrs) _.assign(attrs, parsed.attrs);

      // Classes can be defined using dot syntax
      if (parsed.classes) {
        if (!attrs.className) attrs.className = parsed.classes;
        else attrs.className = [attrs.className, parsed.classes];
      }

      // Allow components to be defined also as h('SomeComponent.class#id', ...)
      if (components.hasOwnProperty(parsed.tag)) {
        selector = components[parsed.tag];
      } else {
        selector = parsed.tag;
      }
    }

    // Join class names if not already joined
    if (attrs.className && typeof className !== 'string') {
      attrs.className = classNames(attrs.className);
    }

    // Sub components
    if (selector instanceof Function) {
      return selector(attrs, children);
    }

    return createElement(selector, attrs, children);
  };
}

function parseTag (selector) {
  let tag = selector;
  let attrs;
  let classes;
  const parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;
  let match;

  // eslint-disable-next-line no-cond-assign
  while ((match = parser.exec(selector))) {
    if (match[1] === '' && match[2]) {
      tag = match[2];
    } else if (match[1] === '#') {
      attrs = attrs || {};
      attrs.id = match[2];
    } else if (match[1] === '.') {
      classes = classes || [];
      classes.push(match[2]);
    } else if (match[3][0] === '[') {
      const pair = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(match[3]);
      attrs = attrs || {};
      attrs[pair[1]] = pair[3] || '';
    }
  }

  return { tag, attrs, classes };
}

export const internals = {
  parseTag,
  extendHyperscript,
};
