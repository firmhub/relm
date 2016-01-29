import {
  component
} from './component';

import {
  joinArgs,
  createDispatcher,
  createStore,
} from './state';

import {
  updateStrategy,
  updateNested,
} from './updaters';

import {
  addStyles,
} from './stylesheet';

// Usage:
//    import { component, ... } from 'relm';
export {
  component,
  joinArgs,
  createDispatcher,
  createStore,
  updateStrategy,
  updateNested,
  addStyles,
};

// Usage:
//    import relm from 'relm';
//    relm.component(), etc.
export default {
  component,
  joinArgs,
  createDispatcher,
  createStore,
  updateStrategy,
  updateNested,
  addStyles,
};
