import { component } from 'relm';

const CHANGE = 'textbox/change';

function $CHANGE (event) {
  return { type: CHANGE, value: event.target.value };
}

export default component('Textbox', {
  init: (value = '') => value,

  update: {
    [CHANGE]: (state, action) => action.value
  },

  view ({
    dispatch,
    state,
    styles,
    error,
    warning,
    isDirty,
    label = 'Textbox',
    placeholder = 'Type here...',
  }) {
    const hasError = Boolean(error);
    const hasWarning = Boolean(warning);

    const errorMessage = !hasError ? null : (
      <div style={styles.error}>{error}</div>
    );

    const warningMessage = (hasError || !hasWarning) ? null : (
      <div style={styles.warning}>{warning}</div>
    );

    const validMessage = (!isDirty || hasError || hasWarning) ? null : (
      <span style={styles.valid}>{': OK'}</span>
    );

    return (
      <div>
        <label style={{ display: 'block' }}>
          {label}
          {validMessage}
        </label>
        <input
          onChange={dispatch.using($CHANGE)}
          type='text'
          placeholder={placeholder}
          value={state}
        />
        {errorMessage}
        {warningMessage}
      </div>
    );
  },

  styles: {
    valid: {
      color: 'green'
    },
    error: {
      color: 'red'
    },
    warning: {
      color: 'orange'
    }
  }
});
