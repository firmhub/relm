import _ from 'lodash';
import * as redux from 'redux';

export default class ReduxPlugin {
  constructor ({ customizeStore }) {
    this.customizeStore = customizeStore || function createReduxStore (reducer, initialState, middlewares = []) {
      return redux.createStore(reducer, initialState, redux.applyMiddleware(...middlewares));
    };
  }

  apply (component, source, root) {
    if (component === root) {
      const { init, update, middleware } = component;

      const store = this.customizeStore.call(redux, update, init(), [].concat(middleware));

      component.dispatch = store.dispatch;
      component.getState = store.getState;
      component.subscribe = store.subscribe;

      Object.defineProperty(component, 'state', {
        get: () => store.getState() || init()
      });
    } else {
      Object.defineProperty(component, 'state', {
        get: () => _.get(root.getState(), component.path) || component.init()
      });
    }
  }
}

