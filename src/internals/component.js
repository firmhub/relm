import _ from 'lodash';
import { addStyles } from './stylesheet';
import { updateStrategy } from './updaters';

export function component (displayName, src) {
  const init = (src.init || _.noop);

  const update = _.isPlainObject(src.update)
    ? updateStrategy(init, src.update)
    : (src.update || _.identity);

  if (!_.isFunction(src.view)) {
    throw new Error(`Invalid view for component ${displayName}`);
  }

  // Wrap the view to add styles and classes
  const view = addStyles(src, displayName);
  view.displayName = displayName;

  // Return the component as a plain object so it is still
  // possible to, for example, read the styles of the component;
  // only replacing properties that need to be wrapped and defaulted
  return { ...src, displayName, init, update, view };
}

export function combineComponents (displayName, components) {
  return component(displayName, {
    init () {
      return _.map(components, it => it.init());
    },

    update (state, { index, payload }) {
      const previous = _.get(state, index);
      const updated = components[index].update(previous, payload);
      if (updated === previous) return state;

      const clone = _.clone(state);
      clone.splice(index, 1, updated);
      return clone;
    },

    view (props) {
      const { state, dispatch } = props;
      return _.map(components, (it, index) => it.view({
        ...props,
        dispatch: dispatch.payload({ index }),
        state: _.get(state, index)
      }));
    },

    partial ({ state, dispatch }) {
      return _.map(components, (it, index) => (props, ...args) =>
        it.view({
          key: index,
          state: _.get(state, index),
          dispatch: dispatch.payload({ index }),
          ...props
        }, ...args)
      );
    }
  });
}
