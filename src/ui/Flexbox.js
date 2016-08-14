
export default function Flexbox (h, { props, children, styles }) {
  props.style = Object.assign(flex(props), props.style);
  props.className = [props.className, styles.Flexbox];
  return (
    <div {...props}>{children}</div>
  );
}

Flexbox.styles = css => css`
  .Flexbox {
    display: flex;
    box-sizing: border-box;
    flex: 1 0 auto;
    flex-wrap: nowrap;
    align-items: stretch;
    align-content: space-between;
    justify-content: space-between;
  }
`;

function flex (props) {
  const css = { flexDirection: Boolean(props.row) ? 'row' : 'column' };

  if (props.auto) css.flex = '0 0 auto';

  if (Number.isFinite(props.width)) {
    css.flexGrow = props.width;
    return css;
  }

  if (!props.width && !props.height) return css;

  css.flexBasis = 'auto';
  css.flexGrow = 0;
  css.flexShrink = 0;

  if (props.width) css.width = props.width;
  if (props.height) css.height = props.height;

  return css;
}
