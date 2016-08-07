import classNames from 'classnames';
import _ from 'lodash';

export default class ViewPlugin {
  constructor (tag) {
    this.tag = tag;
  }

  apply (component, source, root) {
    const name = source.displayName || source.name;
    const render = source.bind(null, this.tag);

    const getState = !component.path.length
      ? () => root.getState()
      : () => _.get(root.getState(), component.path) || component.init();

    const views = _.mapValues(component.components, (child, key) => {
      child.view.displayName = key;
      return child.view;
    });

    function view (props, ...children) {
      const styles = props && props.styles
        ? _.defaults(props.styles, component.styles)
        : component.styles;

      return render({
        props: _.omit(props, 'styles'),
        children,
        components: views,
        actions: component.actions,
        state: getState(),
        styles,
      });
    }

    view.displayName = name;
    component.view = view;
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
