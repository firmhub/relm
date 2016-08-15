/* eslint-env browser */
import { relmApp } from '../../src/packages/inferno';
import * as UI from '../../src/ui';

function GitHunt (h, { styles, actions, components: { Flex } }) {
  return (
    <Flex row auto onLoad={actions.$runQuery}>
      <Flex column width='30%' className={styles.sidebar}>Sidebar</Flex>
      <Flex column className={styles.content}>Main content</Flex>
    </Flex>
  );
}

GitHunt.components = {
  Flex: UI.Flexbox,
};

GitHunt.styles = css => css`
  .sidebar {
    width: 20%;
  }

  .content {

  }
`;

GitHunt.actions = {
  $runQuery (task) {
    task.queries.authorById()
      .then(something => console.log(something))
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

GitHunt.graphql = gql => gql`
  fragment feedInfo on Feed {
    createdAt
    commentCount
    score
    id
    postedBy {
      login
      html_url
    }
    vote {
      vote_value
    }
    repository {
      name
      full_name
      description
      html_url
      stargazers_count
      open_issues_count
      created_at
      owner {
        avatar_url
      }
    }
  }

  query Feed ($type: FeedType!, $offset: Int, $limit: Int) {
    feed (type: $type, offset: $offset, limit: $limit) {
      ...feedInfo
    }
  }

  query authorById {
    author {
      name
      books {
        id
        title
      }
    }
  }
`;

// Start the application
window.app = relmApp(GitHunt, document.querySelector('#main'), { debug: true });
