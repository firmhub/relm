export function Header (h, { props, styles }) {
  const { title } = props;

  const containerInlineStyle = { backgroundColor: props.color || '#3f51b5' };

  return (
    <header className={styles.container} style={containerInlineStyle}>
      {!title ? null : (<h1 className={styles.title}>{title}</h1>)}
    </header>
  );
}

Header.styles = css => css`
  .container {
    display: block;
    margin: -2rem -2rem 0 -2rem;
    padding: 0.5rem 1rem;
  }

  .title {
    color: #e8eaf6;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export default function Window (h, { styles, props, children }) {
  return (
    <div className={[styles.window, props.className]} {...props}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

Window.styles = (css, { theme }) => css`
  .window {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: ${theme.chromeColor};
  }

  .content {
    position: relative;
    overflow-y: auto;
    display: flex;
    flex: 1;
  }
`;
