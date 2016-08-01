/* eslint-env browser */
import { relmApp } from '../../src/packages/inferno';

import Quiz from './components/Quiz';

import * as Crypto from './services/crypto';
import encryptedData from 'raw!./data.txt'; // eslint-disable-line import/no-unresolved

function App (h, { actions, state, components: x }) {
  return state.isUnlocked ? (
    <x.Quiz />
  ) : (
    <x.Password onSubmit={login} />
  );

  function login (e) {
    e.preventDefault();
    actions.$decryptData(state.Password.value);
  }
}

App.components = {
  Quiz,
  Password,
};

App.actions = {
  initializeState (state) {
    return state.merge({ isUnlocked: false, encrypted: encryptedData });
  },

  successfulLogin (state) {
    return state.set('isUnlocked', true);
  },

  failedLogin (state) {
    return state.set('Password.errorMessage', 'Invalid password');
  },

  $decryptData (task, pass) {
    let topics;
    try {
      // Parse the data
      topics = JSON.parse(Crypto.password(pass).decrypt(task.getState().encrypted));
    } catch (ex) {
      task.actions.failedLogin(ex.message);
      return task.done();
    }

    // On successfull parse, save the password in local storage
    localStorage.setItem('savedPass', pass);

    // Unlock the app
    task.actions.successfulLogin();

    // Update quiz state
    task.dispatch({
      type: ['Quiz', 'updateTopics'],
      args: [topics]
    });

    return task.done();
  },
};

export function Password (h, { styles, props, state, actions }) {
  return (
    <form {...props} className={styles.form}>
      <input value={state.value || ''} onInput={actions.passwordInput} />
      <button type='submit'>Login</button>
      <div>{state.errorMessage}</div>
    </form>
  );
}

Password.actions = {
  passwordInput (state, e) {
    return state.set('value', e.target.value);
  }
};

Password.styles = (css) => css`
  .form {

  }
`;


// Start the application
const app = window.app = relmApp(document.querySelector('#main'), App, {
  theme: {
    grayColor: '#fc605b'
  }
});

const savedPass = localStorage.getItem('savedPass');
if (savedPass) app.actions.$decryptData(savedPass);
