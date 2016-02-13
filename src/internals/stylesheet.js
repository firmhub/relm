import _ from 'lodash';
import jss from 'jss';
import nested from 'jss-nested'; jss.use(nested());
import vendorPrefixer from 'jss-vendor-prefixer'; jss.use(vendorPrefixer());
import camelCase from 'jss-camel-case'; jss.use(camelCase());

const sheet = window.sheet = jss.createStyleSheet();

export function addStyles (src, displayName = 'UnamedComponent') {
  const { view, styles } = src;

  // Add classes to the relm stylesheet and provide the component
  // with the generated classnames for rendering
  const classes = {};
  if (src.classes) {
    _.each(src.classes, (rule, selector) => {
      const generated = sheet.addRule(`${displayName}-${selector}`, rule);
      classes[selector] = generated.className;
    });
    sheet.attach();
  }

  return function augmented (props, ...args) {
    // Add styles and classes (with any overrides) to the props
    const extendedProps = _.defaults({
      classes: _.defaults(props.classes || {}, classes),
      styles: _.defaults(props.styles || {}, styles),
    }, props);

    return view(extendedProps, ...args);
  };
}
