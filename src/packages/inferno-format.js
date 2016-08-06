/* eslint-disable prefer-template */
import _ from 'lodash';
import prettyFormat from 'pretty-format';
import printString from 'pretty-format/printString';
import chalk from 'chalk';
import { diffLines, diffChars } from 'diff';

function printChildren(children, print, indent) {
  return children.map(child => printElement(child, print, indent)).join('\n');
}

function printProps(props, print, indent) {
  return Object.keys(props).sort().map(name => {
    const prop = props[name];
    let printed = print(prop);

    if (typeof prop !== 'string') {
      if (printed.indexOf('\n') !== -1) {
        printed = '{\n' + indent(indent(printed) + '\n}');
      } else {
        printed = '"' + printed + '"';
      }
    }

    return '\n' + indent(name + '=') + printed;
  }).join('');
}

function printElement(element, print, indent) {
  if (!element) return '';

  if (typeof element === 'number') {
    return print(element);
  } else if (typeof element === 'string') {
    return printString(element);
  }

  let tag = element.tag;
  if (typeof tag === 'function') {
    tag = element.tag().tag;
  }

  let result = '<' + tag;

  if (element.attrs) {
    result += printProps(element.attrs, print, indent);
  }

  if (element.children) {
    const children = printChildren([].concat(element.children), print, indent);
    result += '>\n' + indent(children) + '\n</' + tag + '>';
  } else {
    result += ' />';
  }

  return result;
}

export const infernoPlugin = {
  test (object) {
    return object && object.hasOwnProperty('tag') && object.hasOwnProperty('className');
  },
  print (val, print, indent) {
    return printElement(val, print, indent);
  },
};

export const escape = str => str.replace(/`/g, '\\`');

export const unescape = str => str.replace(/\\("|\\|')/g, '$1');

export function serialize (data) {
  return `\n${escape(prettyFormat(data, { plugins: [infernoPlugin], }))}\n`;
}

export function deserialize (str) {
  return unescape(str);
}

function isMultiline (str) {
  return /[\r\n]/.test(str);
}

function getColor (change) {
  if (change.added) return chalk.green;
  if (change.removed) return chalk.red;
  return chalk.white;
}

function getPrefix (change) {
  if (change.added) return '+';
  if (change.removed) return '-';
  return ' ';
}

function formatChangedLines (change) {
  const lines = change.value.split('\n').filter(str => _.trim(str));
  const color = getColor(change);
  return lines.map(line => `${getPrefix(change)} ${color(line)}\n`).join('');
}

function formatChangedCharacters (change) {
  return getColor(change)(change.value);
}

export function diff (a, b) {
  const multiline = _.every([a, b], isMultiline);
  const diffMethod = multiline ? diffLines : diffChars;
  const formatMethod = multiline ? formatChangedLines : formatChangedCharacters;

  let isChanged = false;

  const result = _.reduce(diffMethod(a, b), (str, change) => {
    if (change.added || change.removed) isChanged = true;
    return (str += formatMethod(change));
  }, '');

  return isChanged ? result : null;
}
