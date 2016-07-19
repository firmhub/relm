/* @jsx html */

export function Main (html, { state, actions }) {
  return (
    <div>
      <h2>cats</h2>
      <button onClick={() => actions.$getRandomGif(state.topic)}>More please</button>
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

    const request = fetch(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${topic}`);
    const decodeGifUrl = response => response.data.image_url;

    request
      .then(response => response.json())
      .then(decodeGifUrl)
      .then(actions.fetchSuccess)
      .then(null, actions.fetchFailure)
      .then(task.done);

    return request.abort;
  },
};
