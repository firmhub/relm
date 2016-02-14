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

component.is = function isComponent (x) {
  return Boolean(x) && _.isFunction(x.view);
};

export function combineComponents (displayName, components) {
  const PAYLOAD = `${displayName}/payload`;

  function $PAYLOAD (index, payload) {
    return { type: PAYLOAD, index, payload };
  }

  return component(displayName, {
    init () {
      return _.map(components, it => it.init());
    },

    update: {
      [PAYLOAD]: (state, { index, payload }) => {
        const previous = _.get(state, index);
        const updated = components[index].update(previous, payload);
        if (updated === previous) return state;

        const clone = _.clone(state);
        clone.splice(index, 1, updated);
        return clone;
      }
    },

    view ({ state, dispatch, classes, styles }) {
      const views = _.map(components, (child, index) => child.view({
        classes: classes[index] || {},
        styles: styles[index] || {},
        dispatch: dispatch.using($PAYLOAD, index),
        state: _.get(state, index)
      }));

      return React.createElement('div', {
        className: classes.container,
        style: styles.container,
      }, ...views);
    },

    getViews ({ state, dispatch }) {
      function partiallyApplied (child, index) {
        const childProps = {
          state: _.get(state, index),
          dispatch: dispatch.using($PAYLOAD, index),
        };

        function render (moreProps, ...args) {
          return child.view(
            { ...childProps, ...moreProps },
            ...args
          );
        }

        render.displayName = `${displayName}-${child.displayName}-${index}`;

        return render;
      }

      return _.map(components, partiallyApplied);
    }
  });
}
