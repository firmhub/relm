/* eslint-env browser */
import _ from 'lodash';
import { relmApp } from '../../src/packages/inferno';

import * as UI from './components/ui';
import Flashcard from './components/Flashcard';

import * as Crypto from './services/crypto';
import encryptedData from 'raw!./data.txt'; // eslint-disable-line import/no-unresolved

const preventDefaultThen = fn => e => { e.preventDefault(); fn(); };

function App (h, { actions, state, components: x }) {
  return (
    <x.Window>
      {state.isUnlocked ? (
        <x.Quiz />
      ) : (
        <x.Password onSubmit={preventDefaultThen(actions.decryptData)} />
      )}
    </x.Window>
  );
}

App.components = {
  Quiz,
  Password,
  Window: UI.Window,
};

App.actions = {
  initializeState (state) {
    return state.merge({ data: [], isUnlocked: false });
  },

  decryptData (state, pass = state.Password.value) {
    let str = '';
    try {
      str = Crypto.password(pass).decrypt(encryptedData);
    } catch (ex) {
      return state.set('Password.errorMessage', 'Invalid password');
    }

    const questions = JSON.parse(str);

    localStorage.setItem('savedPass', pass);

    const topics = _.reduce(questions, (obj, question) => {
      _.each(question.tags, tag => {
        obj[tag] = obj[tag] || [];
        obj[tag].push(tag);
      });

      return obj;
    }, {});

    return state.set('isUnlocked', true).merge('Quiz', { questions, topics });
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
  return (
    <x.PaneGroup>
      <x.Pane className='sidebar' size='small'>
        <x.Navigation topics={state.topics} />
      </x.Pane>
      <x.Pane>
        <x.Flashcard
          {...state.questions[0]}
          onCorrect={actions.correctAnswer}
          onIncorrect={actions.incorrectAnswer}
        />
      </x.Pane>
    </x.PaneGroup>
  );
}

Quiz.components = {
  PaneGroup: UI.PaneGroup,
  Pane: UI.Pane,
  Navigation,
  Flashcard,
};

Quiz.actions = {
  correctAnswer () {

  },

  incorrectAnswer () {

  }
};


function Navigation (h, { props, styles, components: { Nav } }) {
  return (
    <Nav>
      <h5 className={styles.Nav.title}>Topics</h5>
      {_.map(props.topics, (it, tag) => (
        <a className={[styles.Nav.item, styles.Nav.active]}>
          <span className='icon icon-home'></span>{tag}
        </a>
      ))}
    </Nav>
  );
}

Navigation.components = {
  Nav: UI.Nav
};


// Start the application
const app = window.app = relmApp(document.querySelector('#main'), App);

const savedPass = localStorage.getItem('savedPass');
if (savedPass) app.dispatch({ type: ['decryptData'], args: [savedPass] });
