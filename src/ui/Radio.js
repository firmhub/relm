export default function Radio (h, { props, styles }) {
  const id = `${props.name}_${props.value}`;
  const classes = [
    styles.container,
    props.className,
    { /*[styles.checked]: props.checked,*/ [styles.disabled]: props.disabled }
  ];

  return (
    <li className={classes}>
      <input
        className={styles.radio}
        type='radio'
        id={id}
        name={props.name}
        disabled={props.disabled}
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
    border-bottom: 1px solid #ededed;
  }

  .radio {
    margin-left: 1rem;
    margin-right: -2.5rem;
    cursor: inherit;
  }

  .label {
    flex: 1;
    color: #4d4d4d;
    white-space: pre-line;
    word-break: break-all;
    padding: 0.5rem 1rem 0.5rem 3.5rem;
    transition: all 0.4s;
    cursor: inherit;
  }
`;
