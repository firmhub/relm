export default function PaneGroup (h, { styles, props, children }) {
  return (
    <div {...props} className={[styles.paneGroup, props.className]}>
      {children}
    </div>
  );
}

PaneGroup.styles = (css) => css`
  .paneGroup {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
  }
`;
