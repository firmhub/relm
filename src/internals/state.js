import _ from 'lodash';
import { createStore as createReduxStore, applyMiddleware } from 'redux';

// Helpers to be assigned to a dispatch function; using inheritance
// instead of closures to avoid creating many copies of helper
// functions
const helpers = {
  using (f, ...args) {
    if (!_.isFunction(f)) {
      throw new Error(
        'The first argument passed to "dispatch.using" method '
      + `must be a function. I got "${ typeof f }"`
      );
    }

    const dispatch = this;

    return wrapDispatcher(function dispatchUsing (...moreArgs) {
      dispatch(f(...args, ...moreArgs));
    });
  },

  from (f, ...args) {
    if (!_.isFunction(f)) {
      throw new Error(
        'The first argument passed to "dispatch.callback" method '
      + `must be a function. I got "${ typeof f }"`
      );
    }

    const dispatch = this;

    return wrapDispatcher(function dispatchAsync (...moreArgs) {
      f(dispatch, ...args, ...moreArgs);
    });
  },

  payload (target, prop = 'payload') {
    const dispatch = this;

    // Allow target to be a string representing type. Example:
    //    dispatch.payload(CHANGE, 'result')
    //
    // Prop is also optional and defaults to 'payload'
    //    dispatch.payload({ type: CHANGE, index: 1 });
    const obj = _.isString(target) ? { type: target } : (target || {});

    return wrapDispatcher(function dispatchPayload (action) {
      dispatch({ ...obj, [prop]: action });
    });
  }
};

function wrapDispatcher (dispatch) {
  return _.extend(dispatch, helpers);
}

export function createStore ({
  reducer,
  initialState,
  middleware,
  enhancers = []
}) {
  // If middleware is proveded, add it to enhancers array
  if (middleware && middleware.length) {
    enhancers.push(applyMiddleware(...middleware));
  }

  // Apply enhancers, if any, and create the store
  const store = _.isEmpty(enhancers)
    ? createReduxStore(reducer, initialState)
    : createReduxStore(reducer, initialState, _.flow(enhancers));

  store.dispatch = wrapDispatcher(store.dispatch);

  return store;
}
