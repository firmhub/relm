import { merge } from 'lodash';
import cfg from 'eslint-config-strict/es6';

const off = 0;
const warn = 1;
const on = 2;

module.exports = merge(cfg, {
  root: true,
  rules: {
    'arrow-parens': off,
    'array-bracket-spacing': off,
    'comma-dangle': off,
    'curly': [on, 'multi-line'],
    'camelcase': [on, { 'properties': 'never' }],
    'spaced-comment': off,
    'default-case': off,
    'func-style': [on, 'declaration', { 'allowArrowFunctions': true }],
    'indent': [on, on, { 'SwitchCase': 1 }],
    'init-declarations': off,
    'id-match': off,
    'id-length': off,
    'newline-after-var': off,
    'no-console': off,
    'no-negated-condition': off,
    'no-arrow-condition': off,
    'no-warning-comments': warn,
    'no-use-before-define': [on, 'nofunc'],
    'no-inline-comments': off,
    'operator-linebreak': [on, 'before'],
    'prefer-arrow-callback': off,
    'prefer-reflect': off,
    'sort-imports': off,
    'space-in-parens': off,
    'space-before-function-paren': [on, 'always']
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
