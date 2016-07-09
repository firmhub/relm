
import classNames from 'classnames';

export function parseTag (tag) {
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
  return function hyperscript (tag, ...args) {
    // Sub-components
    if (tag instanceof Function) return tag(...args);

    // Hyperscript extension (div.class-name#someid[attr=value])
    const parsed = parseTag(tag);
    const attrs = args[0];

    if (isAttributesObject(attrs)) {
      Object.assign(parsed.attrs, attrs);
      parsed.attrs.className = classNames(attrs.className, parsed.classes);
      parsed.children = args.slice(1);
    } else {
      parsed.attrs.className = classNames(parsed.classes);
      parsed.children = args;
    }

    return createElement(parsed.tag, parsed.attrs, ...parsed.children);
  };
}
