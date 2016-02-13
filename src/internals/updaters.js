import _ from 'lodash';

export function updateNested ({ updateHandler, statePath, actionPath }) {
  // Convert both source and target into functions
  const source = _.isFunction(actionPath) ? actionPath : _.constant(actionPath);
  const target = _.isFunction(statePath) ? statePath : _.constant(statePath);

  return function updateNested (state, action) {
    const nestedAction = _.get(action, source(action));
    const prevState = _.get(state, target(action));
    const updatedState = updateHandler(prevState, nestedAction);

    if (prevState === updatedState) return state;

    // TODO: Simple copy for now; replace with recursive cloning
    return _.set(_.clone(state), target(action), updatedState);
  };
}

const toUpdateFn = x => _.isPlainObject(x) ? updateNested(x) : x;

export function updateStrategy (init, src) {
  const handlers = _.mapValues(src, toUpdateFn);
  return function reducer (state = init(), action) {
    if (!_.has(handlers, action.type)) return state; // No match
    return handlers[action.type](state, action);     // Match
  };
}
