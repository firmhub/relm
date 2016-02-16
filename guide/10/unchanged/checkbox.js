import { component } from 'relm';

const CHANGE = 'checkbox/change';

export default component('Checkbox', {
  init: (value = false) => Boolean(value),

  update: {
    [CHANGE]: (state) => !state,
  },

  view ({ state, dispatch, styles, label = 'Check me' }) {
    return (
      <div onClick={dispatch.payload(CHANGE)} style={styles.container}>
        <input type='checkbox' checked={state} />
        {label}
      </div>
    );
  },

  styles: {
    container: {
      padding: '0.5rem 0',
      margin: '1rem 0',
      cursor: 'pointer',
    }
  }
});
