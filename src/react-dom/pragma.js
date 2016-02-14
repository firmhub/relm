import React from 'react';
import { component } from '../internals/component';

export default function pragma (tag, attrs, ...children) {
  if (component.is(tag)) return tag(attrs, children);
  return React.createElement(tag, attrs, children);
}
