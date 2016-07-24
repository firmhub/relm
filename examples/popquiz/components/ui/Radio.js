export default function Radio (h, { props, styles }) {
  const id = `${props.name}_${props.value}`;
  return (
    <li className={[styles.container, { checked: props.checked }, props.className]}>
      <input
        className={styles.radio}
        type='radio'
        id={id}
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label className={styles.label} {...{ for: id }}>{props.label}</label>
    </li>
  );
}

Radio.styles = css => css`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-bottom: 1px solid #ededed;
  }

  .label {
    flex: 1;
    color: #4d4d4d;
    white-space: pre-line;
    word-break: break-all;
    margin-left: 1em;
    transition: all 0.4s;
  }
`;
