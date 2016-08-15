import _ from 'lodash';
import t7 from './TemplatePlugin-t7'; global.t7 = t7;
import InfernoCreateElement from 'inferno-create-element';
import { extendHyperscript } from './ViewPlugin';

function transformAttributes (attrs, k) {
  const v = this[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  switch (k) {
    case 'onLoad': attrs.onAttached = v; break;
    case 'onUnload': attrs.onWillDetach = v; break;
    default: attrs[k] = v;
  }

  return attrs;
}

export const createElement = extendHyperscript(function infernoEl (tag, props, ...children) {
  const attrs = Object.keys(props || {}).reduce(_.bind(transformAttributes, props), {});
  return InfernoCreateElement(tag, attrs, ...children);
});

export default class TemplatePlugin {
  apply (component, source) {
    let render;

    const views = _.mapValues(component.components, (child, key) => {
      child.view.displayName = key;
      return child.view;
    });

    t7.module(tag => {
      _.each(views, (view, key) => tag.assign(key, view));
      render = source.bind(null, tag);
    });

    component.view = function view (propsArg, ...children) {
      const props = _.omit(propsArg || {}, 'styles');
      const styles = _.defaults(props.styles || {}, component.styles);

      return render({
        actions: component.actions,
        state: component.state,         // <- getter
        styles,
        components: views,
        props,
        children,
      });
    };
  }
}
