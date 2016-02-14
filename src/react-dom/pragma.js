import React from 'react';
import { component } from '../internals/component';

module.exports = function pragma (tag, attrs, ...args) {
  if (component.is(tag)) return tag.view(attrs, args);
  args.unshift(tag, attrs);
  return React.createElement(...args);
};
