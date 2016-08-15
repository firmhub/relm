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
    task.queries.starWars()
      .then(res => res.data.allFilms.films)
      .then(x => console.log(x))
      .catch(err => {
        if (err.graphQLErrors) {
          err.graphQLErrors.forEach(x => console.error(x.message));
        } else {
          console.error(err);
        }
      });
    return task.done();
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
