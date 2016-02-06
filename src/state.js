import _ from 'lodash';
import * as Redux from 'redux';

const result = (x) => _.isFunction(x) ? x() : x;
const join = (args, it) => _.isFunction(it) ? [ it(...args) ] : [ it, ...args ];

// Used in the dispatcher to reduce arguments from right to
// left, using any included functions for composition
export function joinArgs (args) {
  if (!_.isArray(args)) {
    throw new Error('Join args expects an array to be joined');
  }

  const first = _.head(args);

  switch (args.length) {
    case 0: return [];
    case 1: return [ result(first) ];
  }

  if (!_.isFunction(first)) {
    throw new Error(`
      relm.joinArgs was provided ${args.length} args to be joined,
      but the first argument is not a function so the arguments cannot
      be joined. If using dispatch.partial() make sure, a function is
      provided before any other arguments;

      ${JSON.stringify(args)}
    `);
  }

  // When multiple arguments are supplied, they are handled as follows:
  // Any functions get joined with all arguments provided
  // to the right of them; ex:
  //   [fnX, a, b, fnY, d, e] --is equal to--> fnX(a, b, fnY(d, e))
  return _.reduceRight(_.initial(args), join, [ result(_.last(args)) ]);
}

export function createDispatcher (boundArgs, done) {
  function dispatch (...args) {
    const joined = joinArgs(boundArgs.concat(args));
    return joined.length === 1 ? done(joined[0]) : done(...joined);
  }

  // Useful when providing a parent dispatcher down to child
  // components and the parent needs to attach some variadic
  // arguments to all child actions
  dispatch.partial = function dispatchPartial (...args) {
    return createDispatcher(boundArgs.concat(args), done);
  };

  dispatch.using = function dispatchUsing (f, ...args) {
    if (!_.isFunction(f)) {
      throw new Error(
        `The first argument passed to dispatch.using must be a function`
      );
    }
    return createDispatcher(boundArgs.concat(f, args), done);
  };

  // Useful in the most common case of dispatch.partial() when
  // we just want to dispatch some props along with the
  // action being emitted by the child component
  dispatch.assign = function dispatchAssign (actionProp, obj) {
    return createDispatcher(boundArgs, (action) => {
      done({ ...obj, [actionProp]: action });
    });
  };

  return dispatch;
}

export function createStore (reducer, initialState, middleware = []) {
  // Create a store with the supplied reducer
  const withMiddleware = Redux.applyMiddleware(...middleware);
  const store = withMiddleware(Redux.createStore)(reducer, initialState);

  return {
    ...store,
    dispatch: createDispatcher([], store.dispatch),
  };
}
