import _ from 'lodash';
import { makeImmutable, unwrapImmutable } from '../immutable';

export default class StatePlugin {
  apply (component, source, root) {
    const components = component.components;

    const handlers = _.reduce(source.actions, function convertChildActions (obj, action, name) {
      if (!_.isFunction(action)) return obj;

      // Child action override
      if (components[name]) {
        obj[name] = createOverrideHandler(action);
        return obj;
      }

      obj[name] = action;
      return obj;
    }, {});

    component.init = unwrapAfter(function init () {
      const state = _.mapValues(component.components, child => child.init());
      if (!handlers.initializeState) return state;
      return handlers.initializeState(makeImmutable(state));
    });

    component.update = unwrapAfter(function update (state, action) {
      if (!_.isArray(action.type)) return state;

      const [head, ...tail] = action.type;
      const isChildAction = _.has(components, head);
      const hasLocalHandler = _.isFunction(handlers[head]);

      if (isChildAction) {
        // No override; let the child component handle it
        if (!hasLocalHandler) {
          const childAction = _.defaults({ type: tail }, action);
          const nextChildState = components[head].update(makeImmutable(state[head]), childAction);
          return state.set(head, nextChildState);
        }

        // Action type is overriden, so use the override
        const child = components[head];
        const next = (childState, ...args) => child.update(makeImmutable(childState), { type: tail, args });
        next.path = tail;
        return handlers[head](makeImmutable(state), next, ...action.args);
      }

      if (hasLocalHandler) {
        return handlers[head](makeImmutable(state), ...action.args);
      }

      return state;
    });

    component.actions = _.mapValues(source.actions, (__, actionName) => {
      const type = component.path.concat(actionName);

      const fn = (...args) => root.dispatch({ type, args });

      Object.defineProperties(fn, {
        name: { value: actionName },
        displayName: { value: actionName }
      });

      return fn;
    });
  }
}

function createOverrideHandler (override) {
  if (_.isFunction(override)) return override;

  const strategy = _.mapValues(override, (o) => (_.isFunction(o) ? o : createOverrideHandler(o)));

  return function reducer (state, next, action) {
    const fn = _.get(strategy, action.type[0]);
    if (fn) return fn(state, next, action);
    return next(state, action);
  };
}

function unwrapAfter (fn) {
  return function unwrap () {
    return unwrapImmutable(fn.apply(this, arguments));
  };
}
