import _ from 'lodash';
import { makeImmutable, unwrapImmutable } from '../immutable';

export default class ReduxPlugin {
  apply (component, source) {
    const actions = _.omitBy(source.actions, (x, key) => _.startsWith(key, '$'));

    component.init = function init () {
      const state = _.mapValues(component.components, invokeInit);
      if (!actions.initializeState) return state;
      return unwrapImmutable(actions.initializeState(makeImmutable(state)));
    };

    component.update = function update (state = component.init(), action = {}) {
      if (!_.isArray(action.type)) return state;
      if (action.type.length < component.path.length) return state;

      // Get the path from this component and down
      const path = action.type.slice(component.path.length);

      // Child component action
      const head = _.head(path);
      const child = component.components[head];
      if (child) {
        const childState = child.update(makeImmutable(state[head]), action);
        if (childState === state[head]) return state;
        return _.assign({}, state, { [head]: unwrapImmutable(childState) });
      }

      // Looking for a deeper action but no child component
      if (path.length > 1) throw new Error(`Invalid action ${action.type.join('.')}`);

      // Own action
      const fn = actions[head];
      if (fn) return unwrapImmutable(fn(makeImmutable(state), ...action.args));

      return state;
    };
  }
}

function invokeInit (it) {
  return it.init();
}
