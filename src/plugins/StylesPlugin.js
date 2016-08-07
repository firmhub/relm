import _ from 'lodash';

export default class StylesPlugin {
  constructor (tag, theme = {}) {
    this.tag = tag;
    this.theme = theme;
  }

  apply (component, source) {
    if (!this.tag) {
      component.styles = {};
      return;
    }

    const childStyles = _.mapValues(component.components, x => x.styles || {});
    if (!_.isFunction(source.styles)) {
      component.styles = childStyles;
    } else {
      const result = source.styles(this.tag, {
        components: childStyles,
        theme: this.theme
      });

      component.styles = _.defaults(result || {}, childStyles);
    }
  }
}
