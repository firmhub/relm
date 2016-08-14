import classNames from 'classnames';
import _ from 'lodash';

export default class ViewPlugin {
  constructor (tag) {
    this.tag = tag;
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

    // Closure elimination - assign necessary prosp to the view fn
    _.assign(component.view, {
      render: source.bind(null, this.tag),
      displayName: source.displayName || source.name,
      actions: component.actions,
      styles: component.styles,
      components: _.mapValues(component.components, getComponentView),
      getState: !component.path.length
        ? () => root.getState()
        : () => _.get(root.getState(), component.path) || component.init()
    });

    function getComponentView (child, key) {
      child.view.displayName = key;
      tag[key] = child.view;  // For convenience also assign components to tag ex: <h.Component />
      return child.view;
    }
  }
}


function parseTag (tag) {
  const cell = { attrs: {}, classes: [] };
  const parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;
  let match;

  // eslint-disable-next-line no-cond-assign
  while ((match = parser.exec(tag))) {
    if (match[1] === '' && match[2]) {
      cell.tag = match[2];
    } else if (match[1] === '#') {
      cell.attrs.id = match[2];
    } else if (match[1] === '.') {
      cell.classes.push(match[2]);
    } else if (match[3][0] === '[') {
      const pair = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(match[3]);
      cell.attrs[pair[1]] = pair[3] || '';
    }
  }

  return cell;
}

function isAttributesObject (attrs) {
  return attrs && typeof attrs === 'object' && !Array.isArray(attrs) && !attrs.children;
}

export function extendHyperscript (createElement) {
  return function hyperscript (tag, attrs, ...children) {
    // Sub-components
    if (tag instanceof Function) {
      if (isAttributesObject(attrs)) attrs.className = classNames(attrs.className);
      return tag(attrs, ...children);
    }

    // Hyperscript extension (div.class-name#someid[attr=value])
    const parsed = parseTag(tag);

    if (isAttributesObject(attrs)) {
      Object.assign(parsed.attrs, attrs);
      parsed.attrs.className = classNames(attrs.className, parsed.classes);
      parsed.children = children;
    } else {
      parsed.attrs.className = classNames(parsed.classes);
      parsed.children = [attrs].concat(children);
    }

    return createElement(parsed.tag, parsed.attrs, ...parsed.children);
  };
}

export const internals = {
  parseTag,
  isAttributesObject,
};
