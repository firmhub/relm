import _ from 'lodash';

export function asyncMiddleware (rootComponent) {
  return store => next => action => {
    if (!_.isArray(action.type)) return next(action);
    if (!_.startsWith(_.last(action.type), '$')) return next(action);

    console.log(action);
  };
}
