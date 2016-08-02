import classNames from 'classnames';
import _ from 'lodash';

export default class ViewPlugin {
  constructor (tag) {
    this.tag = extendHyperscript(tag);
  }

  apply (component, source, root) {
    const name = source.displayName || source.name;
    component.view = this.normalComponent(component, name, source, root);
  }

  normalComponent (it, name, source, root) {
    const render = source.bind(null, this.tag);

    const getState = !it.path.length
      ? () => root.getState()
      : () => _.get(root.getState(), it.path) || it.init();

    const views = _.mapValues(it.components, (child, key) => {
      const isListComponent = _.isArray(source.components[key]);
      if (isListComponent) return this.listComponent(child, key, _.head(source.components[key]), root);
      return this.normalComponent(child, key, source.components[key], root);
    });

    it.actions = _.mapValues(source.actions, (__, actionName) => {
      const type = it.path.concat(actionName);
      return (...args) => root.dispatch({ type, args });
    });

    function view (props, ...children) {
      const styles = props && props.styles
        ? _.defaults(props.styles, it.styles)
        : it.styles;

      return render({
        props: _.omit(props, 'styles'),
        children,
        components: views,
        actions: it.actions,
        state: getState(),
        styles,
      });
    }

    view.displayName = name;

    return view;
  }

  listComponent (it, name, source, root) {
    const render = source.bind(null, this.tag);

    const views = _.mapValues(it.components, (child, key) => {
      const isListComponent = _.isArray(source.components[key]);
      return isListComponent ? this.listComponent(child, key) : this.normalComponent(child, key);
    });

    it.actions = key => _.mapValues(source.actions, (__, actionName) => {
      const type = it.path.concat(actionName, key);
      return (...args) => root.dispatch({ type, args });
    });

    function view (props, ...children) {
      if (!props.key) throw new Error('List components should be render with a key');
      const state = _.get(root.getState(), it.path) || [];
      const styles = props && props.styles
        ? _.defaults(props.styles, it.styles)
        : it.styles;

      return render({
        props: _.omit(props, 'styles'),
        children,
        components: views,
        actions: it.actions(props.key),
        state: state[props.key] || it.init(),
        styles,
      });
    }

    view.displayName = name;

    return view;
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

function extendHyperscript (createElement) {
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
  extendHyperscript,
};
