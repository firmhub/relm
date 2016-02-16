import { merge } from 'lodash';
import cfg from 'eslint-config-strict/es6';

const off = 0;
const warn = 1;
const on = 2;

module.exports = merge(cfg, {
  root: true,
  rules: {
    'camelcase': [on, { 'properties': 'never' }],
    'curly': [on, 'multi-line'],
    'func-style': [on, 'declaration', { 'allowArrowFunctions': true }],
    'indent': [on, on, { 'SwitchCase': 1 }],
    'no-use-before-define': [on, 'nofunc'],
    'no-magic-numbers': [on, { ignoreArrayIndexes: true, ignore: [ 0 ] }],
    'space-before-function-paren': [on, 'always'],
    'operator-linebreak': [on, 'before'],

    'no-warning-comments': warn,

    'arrow-parens': off,
    'array-bracket-spacing': off,
    'comma-dangle': off,
    'consistent-this': off,
    'spaced-comment': off,
    'default-case': off,
    'init-declarations': off,
    'id-match': off,
    'id-length': off,
    'newline-after-var': off,
    'no-console': off,
    'no-negated-condition': off,
    'no-arrow-condition': off,
    'no-inline-comments': off,
    'prefer-arrow-callback': off,
    'prefer-reflect': off,
    'sort-imports': off,
    'space-in-parens': off,
  }
});

cfg.plugins = [];

cfg.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    impliedStrict: true,
    experimentalObjectRestSpread: true
  }
};

delete cfg.rules['filenames/filenames'];
