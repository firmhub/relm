/* eslint-env browser */
import { relmApp } from '../../src/packages/inferno';
import * as UI from '../../src/ui';

function StarWars (h, { styles, actions, components: { Flex } }) {
  return (
    <Flex row auto onLoad={actions.$runQuery}>
      <Flex column width='30%' className={styles.sidebar}>Sidebar</Flex>
      <Flex column className={styles.content}>Main content</Flex>
    </Flex>
  );
}

StarWars.components = {
  Flex: UI.Flexbox,
};

StarWars.styles = css => css`
  .sidebar {
    width: 20%;
  }

  .content {

  }
`;

StarWars.actions = {
  $runQuery (task) {
    if (task.isRunning) return task.done();

    task.queries.starWars()
      .then(respose => respose.data.allFilms.films)
      .then(result => console.log(result))
      .catch(err => {
        if (err.graphQLErrors) {
          err.graphQLErrors.forEach(x => console.error(x.message));
        } else {
          console.error(err);
        }
      })
      .then(task.done);

    return null;
  }
};

StarWars.graphql = gql => gql`
  query starWars {
    allFilms (first: 5) {
      films {
        title
        releaseDate
        director
        characterConnection (first: 5) {
          characters {
            name
          }
        }
      }
    }
  }
`;

// Start the application
window.app = relmApp(StarWars, document.querySelector('#main'), { debug: true });
