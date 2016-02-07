/* eslint callback-return: 0 */
export function persistState (sessionId) {
  if (!sessionId) {
    return next => (...args) => next(...args);
  }

  return next => (reducer, initialState, enhancer) => {
    const key = `redux-dev-session-${sessionId}`;

    let finalInitialState;
    try {
      const json = localStorage.getItem(key);
      if (json) {
        finalInitialState = JSON.parse(json) || initialState;
        next(reducer, initialState);
      }
    } catch (e) {
      console.warn('Could not read debug session from localStorage:', e);
      try {
        localStorage.removeItem(key);
      } finally {
        finalInitialState = null;
      }
    }

    const store = next(reducer, finalInitialState, enhancer);

    return {
      ...store,
      dispatch (action) {
        store.dispatch(action);

        try {
          localStorage.setItem(key, JSON.stringify(store.getState()));
        } catch (e) {
          console.warn('Could not write debug session to localStorage:', e);
        }

        return action;
      }
    };
  };
}
