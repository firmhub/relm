import _ from 'lodash';
// import t7 from 't7';

export default class TemplatePlugin {
  apply (component, source) {
    let render;

    t7.module(tag => {
      _.each(component.components, (c, k) => tag.assign(k, c.view));
      render = source.bind(null, tag);
    });

    component.view = function view (propsArg, ...children) {
      const props = _.omit(propsArg || {}, 'styles');
      const styles = _.defaults(props.styles || {}, component.styles);

      return render({
        actions: component.actions,
        state: component.state,       // <-- getter
        styles,
        props,
        children,
      });
    };
  }
}
