/* @jsx html */
import xhr from 'xhr';

export function Main (html, { state, actions, styles }) {
  const getRandomGif = () => actions.$getRandomGif(state.topic);
  return (
    <div>
      <h2>cats</h2>
      <button className={styles.moreButton} onClick={getRandomGif}>More please</button>
      {!state.url ? null : <img alt='Cat' src={state.url} />}
    </div>
  );
}

Main.actions = {
  initializeState: (state) => state.set('topic', 'cats'),
  fetchSuccess: (state, url) => state.set('url', url),
  fetchFailure: (state) => state,  // Do nothing on failure - for now

  // Async actions begin with a $ (dollar sign)
  $getRandomGif (task, actions, topic = 'cats') {
    if (task.isRunning) return task.done();

    const src = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${topic}`;

    // Async actions can trigger other actions as needed
    const request = xhr(src, { json: true }, function callback (err, response, body) {
      if (err) actions.fetchFailure(err);
      else actions.fetchSuccess(body.data.image_url);
    });

    // Async actions can return a cancel function for cleanup
    // which is called when a task is cancelled
    return function cancel () {
      request.abort();
    };
  },
};

Main.styles = css => css`
  .moreButton {
    display: block;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
  }
`;
