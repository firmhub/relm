import _ from 'lodash';
import * as redux from 'redux';

export default class ReduxPlugin {
  constructor ({ customizeReducer, customizeMiddleware }) {
    this.customizeReducer = customizeReducer || _.identity;
    this.customizeMiddleware = customizeMiddleware || (x => redux.applyMiddleware(x));
  }

  apply (component, source, root) {
    if (component === root) {
      const { init, update, middleware } = component;
      const reducer = this.customizeReducer((state = init(), action = {}) => update(state, action));
      const initialState = _.merge(reducer() || {}, this.initialState || {});

      const store = redux.createStore(reducer, initialState, this.customizeMiddleware(middleware));

      component.dispatch = store.dispatch;
      component.getState = store.getState;
      component.subscribe = store.subscribe;

      Object.defineProperty(component, 'state', { get: store.getState });
    } else {
      Object.defineProperty(component, 'state', { get: getComponentState });
    }

    function getComponentState () {
      return _.get(root.getState(), component.path) || component.init();
    }
  }
}

