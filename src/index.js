import {
  createStore,
} from './internals/state';

import {
  component,
  combineComponents,
} from './internals/component';

// Usage:
//    import { component, ... } from 'relm';
export {
  createStore,
  component,
  combineComponents
};

// Usage:
//    import relm from 'relm';
//    relm.component(), etc.
export default {
  createStore,
  component,
  combineComponents
};
