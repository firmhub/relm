/* eslint-env browser */
import _ from 'lodash';
import { relmApp } from '../../src/packages/inferno';

import * as UI from './components/ui';
import Flashcard from './components/Flashcard';

import * as Crypto from './services/crypto';
import encryptedData from 'raw!./data.txt'; // eslint-disable-line import/no-unresolved

const debug = true;

function App (h, { actions, state, components: x }) {
  return (
    <x.Window>
      {state.isUnlocked ? (
        <x.Quiz />
      ) : (
        <x.Password onSubmit={login} />
      )}
    </x.Window>
  );

  function login (e) {
    e.preventDefault();
    actions.$decryptData(state.Password.value);
  }
}

App.components = {
  Quiz,
  Password,
  Window: UI.Window,
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

export function Password (h, { styles, props, state, actions, components: x }) {
  return (
    <x.Window>
      <form {...props} className={styles.form}>
        <input value={state.value || ''} onInput={actions.passwordInput} />
        <button type='submit'>Login</button>
        <div>{state.errorMessage}</div>
      </form>
    </x.Window>
  );
}

Password.components = {
  Window: UI.Window,
};

Password.actions = {
  passwordInput (state, e) {
    return state.set('value', e.target.value);
  }
};

Password.styles = (css) => css`
  .form {

  }
`;

function Quiz (h, { actions, state, components: x }) {
  const question = state.question;
  if (!question) return null;

  return (
    <div>
      <x.Navigation topics={state.topics} />
      <x.Flashcard
        question={question.q}
        answer={question.a}
        options={state.options}
        onCorrect={actions.correctAnswer}
        onIncorrect={actions.incorrectAnswer}
      />
    </div>
  );
}

Quiz.components = {
  Navigation,
  Flashcard,
};

Quiz.actions = {
  initializeState (state) {
    return state.set('question', null);
  },

  updateTopics (state, topics) {
    const randomTopic = _.sample(topics);
    const question = _.sample(randomTopic.questions);
    const options = _.shuffle(question.o);
    return state.merge({ topics, question, options });
  },

  correctAnswer () {

  },

  incorrectAnswer () {

  }
};


function Navigation (h, { props, styles, components: { Nav } }) {
  return (
    <Nav>
      <h5 className={styles.Nav.title}>Topics</h5>
      {_.map(props.topics, (it) => (
        <a className={[styles.Nav.item, styles.Nav.active]}>
          <span className='icon icon-home'></span>{it.label}
        </a>
      ))}
    </Nav>
  );
}

Navigation.components = {
  Nav: UI.Nav
};


// Start the application
const app = window.app = relmApp(document.querySelector('#main'), App, { debug });

const savedPass = localStorage.getItem('savedPass');
if (savedPass) app.actions.$decryptData(savedPass);
