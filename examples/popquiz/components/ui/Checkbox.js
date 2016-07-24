export default function Checkbox (h, { props, styles }) {
  return (
    <input className={styles.toggle} type='checkbox' {...props} />
  );
}

Checkbox.styles = css => css`
  .toggle {
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 5px;
    margin: auto 0;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    outline: none;
  }

  .toggle:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }

  .toggle:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
`;
