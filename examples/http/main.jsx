import xhr from 'xhr';

export function HTTPExample (h, { state, actions, styles }) {
  const getRandomGif = () => actions.$getRandomGif(state.topic);
  return (
    <div>
      <input className={styles.topicInput} onChange={actions.changeTopic} value={state.topic} />
      <button className={styles.moreButton} onClick={getRandomGif}>More please</button>
      {!state.url ? null : <img alt='Cat' src={state.url} />}
    </div>
  );
}

HTTPExample.actions = {
  initializeState: (state) => state.set('topic', 'random'),
  fetchSuccess: (state, url) => state.set('url', url),
  fetchFailure: (state) => state,  // Do nothing on failure - for now
  changeTopic: (state, e) => state.set('topic', e.target.value),

  // Async actions begin with a $ (dollar sign)
  $getRandomGif (task, actions, topic) {
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

HTTPExample.styles = css => css`
  .topicInput {
    font-size: 1.4em;
    border: 0;
  }

  .moreButton {
    display: block;
    padding: 0.5rem 1rem;
    margin: 1rem 0;
  }
`;
