import _ from 'lodash';
import { makeImmutable, unwrapImmutable, update } from './update';

export function makeReducer (component) {
  const isListComponent = _.isArray(component);
  const source = isListComponent ? _.head(component) : component;

  const components = _.mapValues(source.components, makeReducer);

  const actions = _.reduce(source.actions, function convertActions (output, action, name) {
    if (!_.isFunction(action)) return output;
    output[name] = action;
    return output;
  }, {});

  const init = () => {
    const childState = _.mapValues(components, childReducer => childReducer());
    if (!actions.initializeState) return childState;

    const clone = makeImmutable(childState);
    const initialState = actions.initializeState(clone);
    return unwrapImmutable(initialState);
  };

  const reducerType = isListComponent ? 'list' : 'normal';
  return makeReducer[reducerType](components, actions, init);
}

makeReducer.normal = function makeNormalReducer (components, actions, init) {
  return function reducer (state = init(), event = {}) {
    if (!event.type) return state;

    const [head, ...tail] = event.type;

    const componentHasAction = _.has(actions, head);
    const isChildEvent = _.has(components, head);

    // Use action if defined
    if (componentHasAction) {
      const result = _.get(actions, head)(makeImmutable(state), ...(event.args || []));

      // Action overrides can return undefined to let the action pass through
      const ignoreResult = result === void 0;
      if (!ignoreResult) return unwrapImmutable(result);
    }

    // Call child reducer if not already handled by local action
    if (isChildEvent) {
      const childReducer = components[head];
      const result = childReducer(state[head], _.defaults({ type: tail }, event));
      return update(state, { [head]: { $set: result } });
    }

    // No-op by default
    return state;
  };
};

makeReducer.list = function makeListReducer (components, actions, init) {
  return function listReducer (list = [], event = {}) {
    if (!event.type) return list;

    const [index, head, ...tail] = event.type;
    const componentHasAction = _.has(actions, head);
    const isChildEvent = _.has(components, head);

    // Use action if defined
    if (componentHasAction) {
      const state = list[index] || init();
      const result = _.get(actions, head)(makeImmutable(state), ...(event.args || []));

      // Action overrides can return undefined to let the action pass through
      const ignoreResult = result === void 0;
      if (!ignoreResult) return update(list, { $splice: [[index, 1, unwrapImmutable(result)]] });
    }

    // Call child reducer if not already handled by local action
    if (isChildEvent) {
      const childReducer = components[head];
      const result = childReducer(list[head], _.defaults({ type: tail }, event));
      return update(list, { [index]: { [head]: { $set: result } } });
    }

    // No-op by default
    return list;
  };
};
