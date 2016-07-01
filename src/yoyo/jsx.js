/* eslint-disable no-param-reassign */
import _ from 'lodash';
import yo from 'yo-yo';

function propsToYoYoAttributes (obj, v, k) {
  // Remove nil attributes
  if (_.isNil(v)) return obj;

  // Lower case event names (i.e. onClick to onclick)
  if (_.startsWith(k, 'on')) {
    obj[k.toLowerCase()] = v;
    return obj;
  }

  // Other attributes get passed through
  obj[k] = v;
  return obj;
}

export default function jsxToYoYo (tag, props, ...children) {
  // Sub components
  if (_.isFunction(tag)) return tag(props, children);

  const attrs = _.reduce(props || {}, propsToYoYoAttributes, {});
  return yo.createElement(tag, attrs, children);
}
