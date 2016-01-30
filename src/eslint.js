import { merge } from 'lodash';
import cfg from 'eslint-config-strict/es6';

module.exports = merge(cfg, {
  root: true,

  ecmaFeatures: {
    modules: true
  },

  rules: {
    'arrow-parens': 0,
    'array-bracket-spacing': 0,
    'comma-dangle': 0,
    'curly': [2, 'multi-line'],
    'camelcase': [2, { 'properties': 'never' }],
    'spaced-comment': 0,
    'default-case': 0,
    'func-style': [2, 'declaration', { 'allowArrowFunctions': true }],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'init-declarations': 0,
    'id-match': 0,
    'id-length': 0,
    'newline-after-var': 0,
    'no-console': 0,
    'no-negated-condition': 0,
    'no-arrow-condition': 0,
    'no-warning-comments': 1,
    'no-use-before-define': [2, 'nofunc'],
    'no-inline-comments': 0,
    'operator-linebreak': [2, 'before'],
    'prefer-arrow-callback': 0,
    'prefer-reflect': 0,
    'space-in-parens': 0,
    'space-before-function-paren': [2, 'always']
  }
});
