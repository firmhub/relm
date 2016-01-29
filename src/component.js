import _ from 'lodash';
import { addStyles } from './stylesheet';
import { updateStrategy } from './state';

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
