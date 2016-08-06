import _ from 'lodash';
import csjs from 'csjs';
import insertCSS from 'insert-css';

import StylesPlugin from './StylesPlugin';

const usedStyles = {};

export function substitueStyle (x) {
  if (typeof x !== 'string') return x;
  if (usedStyles.hasOwnProperty(x)) return usedStyles[x];
  return x;
}

export function createCSS (pieces, ...substitutions) {
  const styles = csjs(pieces, ...substitutions.map(substitueStyle));

  insertCSS(csjs.getCss(styles));

  return _.mapValues(styles, x => {
    const generatedName = x.toString();
    usedStyles[generatedName] = x;
    return generatedName;
  });
}

export default function CSJSPlugin (theme = {}) {
  return new StylesPlugin(createCSS, theme);
}
