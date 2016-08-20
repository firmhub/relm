import _ from 'lodash';
import { makeImmutable, unwrapImmutable } from '../immutable';

export default class StatePlugin {
  apply (component, source, root) {
    const components = component.components;

    const handlers = _.reduce(source.actions, function convertChildActions (obj, action, name) {
      if (_.isFunction(action)) obj[name] = action;
      if (components[name]) return createOverrideHandler(action);
      return obj;
    }, {});

    component.init = unwrapAfter(function init () {
      const state = _.mapValues(component.components, invokeInit);
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
          const nextChildState = components[head].update(state[head], childAction);
          return state.set(head, nextChildState);
        }

        // Action type is overriden, so use the override
        const child = components[head];
        const next = (childState, ...args) => child.update(makeImmutable(childState), ...args);
        return handlers[head](state, next, ...action.args);
      }

      if (hasLocalHandler) {
        return handlers[head](makeImmutable(state), ...action.args);
      }

      return state;
    });

    component.actions = _.mapValues(source.actions, (__, actionName) => {
      const type = component.path.concat(actionName);

      const fn = (...args) => root.dispatch({ type, args });
      // const fn = _.startsWith(actionName, '$')
      //   ? (...args) => root.dispatch({ type, args, component })
      //   : (...args) => root.dispatch({ type, args });

      Object.defineProperties(fn, {
        name: { value: actionName },
        displayName: { value: actionName }
      });

      return fn;
    });
  }
}

function createOverrideHandler (obj) {
  const strategy = _.mapValues(obj, (o) => (_.isFunction(o) ? o : createOverrideHandler(o)));

  return function reducer (state, next, action) {
    const override = _.get(strategy, action.type[0]);
    if (override) return override(state, next, action);
    return next(state, action);
  };
}

function invokeInit (it) {
  return it.init();
}

function unwrapAfter (fn) {
  return function unwrap (state, ...args) {
    return unwrapImmutable(fn(makeImmutable(state), ...args));
  };
}
