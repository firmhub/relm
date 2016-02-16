import { component } from 'relm';

const CHANGE = 'textbox/change';

function $CHANGE (event) {
  return { type: CHANGE, value: event.target.value };
}

function errorMessage ({ styles, error }) {
  if (!error) return null;
  return (
    <div style={styles.error}>{error}</div>
  );
}

function warningMessage ({ styles, error, warning }) {
  if (!warning) return null;
  if (error) return null;
  return (
    <div style={styles.warning}>{warning}</div>
  );
}

function validMessage ({ styles, error, warning, isDirty }, message) {
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
      type = 'text',
      label = 'Textbox',
      placeholder = 'Type here...',
    } = props;

    return (
      <div style={styles.container}>
        <label style={{ display: 'block' }}>
          {label}
          {validMessage(props, 'OK')}
        </label>
        <input
          onChange={dispatch.using($CHANGE)}
          value={state}
          style={styles.input}
          type={type}
          placeholder={placeholder}
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
