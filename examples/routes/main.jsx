import router from '../../src/router';
import { Main as HttpExample } from '../http/main.jsx';
import { TodoMVC } from '../todo/js/components.jsx';

export function Main (dom, { styles, components: { Example } }) {
  return (
    <section>
      <ul className={styles.sidebar}>
        <li><a href='/todos'>Todos</a></li>
        <li><a href='/http'>HTTP</a></li>
      </ul>
      <Example url='/todos' />
    </section>
  );
}

Main.components = {
  Example: router({
    Todo: [TodoMVC, '/todos'],
    Http: [HttpExample, '/http'],
  })
};

Main.styles = css => css`
  .sidebar {
    float: left;
    margin-right: 2rem;
  }

  .sidebar > li {
    display: block;
    line-height: 1.2;
  }
`;
