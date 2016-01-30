import { merge } from 'lodash';
import cfg from '../eslint';

module.exports = merge(cfg, {
  globals: {
    m: true
  },
  env: {
    browser: true
  }
});
