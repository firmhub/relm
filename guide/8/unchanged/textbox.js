import { component } from 'relm';

const CHANGE = 'textbox/change';

function $CHANGE (event) {
  return { type: CHANGE, value: event.target.value };
}

function errorMessage ({ styles, isDirty, error }) {
  if (!isDirty || !error) return null;
  return (
    <div style={styles.error}>{error}</div>
  );
}

function warningMessage ({ styles, isDirty, error, warning }) {
  if (!isDirty || !warning) return null;
  if (error) return null;
  return (
    <div style={styles.warning}>{warning}</div>
  );
}

function validMessage ({ styles, isDirty, error, warning }, message) {
  if (!isDirty) return null;
  if (error || warning) return null;
  return (
    <span style={styles.valid}>{message}</span>
  );
}

export default component('Textbox', {
  init: (value = '') => value,

  update: {
    [CHANGE]: (state, action) => action.value
  },

  view (props) {
    const {
      dispatch,
      state,
      styles,
      label = 'Textbox',
      type = 'text',
      placeholder = 'Type here...',
    } = props;

    return (
      <div style={styles.container}>
        <label style={{ display: 'block' }}>
          {label}
          {validMessage(props, 'OK')}
        </label>
        <input
          style={styles.input}
          onChange={dispatch.using($CHANGE)}
          type={type}
          placeholder={placeholder}
          value={state}
        />
        {errorMessage(props)}
        {warningMessage(props)}
      </div>
    );
  },

  styles: {
    container: {
      margin: '1rem 0'
    },
    input: {
      display: 'block',
      padding: '0.5rem',
      width: '100%',
      boxSizing: 'border-box'
    },
    valid: {
      color: 'green',
      float: 'right'
    },
    error: {
      color: 'red'
    },
    warning: {
      color: 'orange'
    }
  }
});
