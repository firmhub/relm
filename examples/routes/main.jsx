import _ from 'lodash';
import router from '../../src/router';

import { HTTPExample } from '../http/main.jsx';
import { TodoMVC } from '../todo/js/components.jsx';

export function Main (dom, { state, actions, styles, components: { Example } }) {
  return (
    <section>
      <ul className={styles.sidebar}>
        <li><button className={styles.button} onClick={_.partial(actions.changeRoute, '/todos')}>Todos</button></li>
        <li><button className={styles.button} onClick={_.partial(actions.changeRoute, '/http')}>HTTP</button></li>
      </ul>
      <Example url={state.activeRoute} />
    </section>
  );
}

Main.components = {
  Example: router({
    Todo: [TodoMVC, '/todos/:url*'],
    Http: [HTTPExample, '/http'],
  })
};

Main.actions = {
  initializeState (state) {
    return state.set('activeRoute', '/todos/something');
  },
  changeRoute (state, url) {
    return state.set('activeRoute', url);
  }
};

Main.styles = css => css`
  .sidebar {
    float: left;
    padding: 0.5rem;
    padding-right: 2rem;
  }

  .sidebar > li {
    display: block;
  }

  .button {
    line-height: 1.2;
    margin: 0.5rem 0;
  }
`;
