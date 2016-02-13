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
  component,
  createStore,
};

// Usage:
//    import relm from 'relm';
//    relm.component(), etc.
export default {
  createStore,
  component,
  combineComponents
};
