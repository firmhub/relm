export default function Pane (h, { styles, props, children }) {
  return (
    <div {...props} className={[styles.pane, props.className, styles[props.size]]}>
      {children}
    </div>
  );
}

Pane.styles = (css, { theme }) => css`
  .pane {
    position: relative;
    overflow-y: auto;
    flex: 1;
    border-left: 1px solid ${theme.borderColor};
  }

  .pane:first-child {
    border-left: 0;
  }

  .small {
    max-width: 220px;
    min-width: 150px;
  }

  .mini {
    width: 80px;
    flex: none;
  }

  .fourth {
    width: 25%;
    flex: none;
  }

  .third {
    width: 33.3%;
    flex: none;
  }
`;

