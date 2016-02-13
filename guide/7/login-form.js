import Textbox from './textbox';

import { checkable } from 'relm/ui';
import request from 'superagent';

const minLength = 5;

export default checkable('UsernameField', Textbox, {
  validate (state, done) {
    // The Textbox's state gets wrapped by checkable
    // It is available at the `value` property
    const username = state.value;

    // Perform some basic validation
    if (!username) {
      return done({ warning: 'Username is required' });
    }

    if (username.length < minLength) {
      return done({ error: 'Username is too short (minimum 5 characters)' });
    }

    // Now for some more advanced stuff; check github
    // to see if username exists
    const req = request
      .head(`https://api.github.com/users/${username}`)
      .end(function handleResponse (err, res) {
        if (err) {
          // If a 404 error, then we have a special error message
          if (res.notFound) return done({ error: 'Username not found' });

          // For all other errors, show generic error message
          return done({ error: res.statusText || err.message });
        }

        // No error, means a usernam exists
        return done();
      });

    return function cancel () {
      req.abort();
    };
  }
});
