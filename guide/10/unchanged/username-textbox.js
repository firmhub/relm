import { checkable } from 'relm/ui';
import request from 'superagent';

import Textbox from './textbox';

const minLength = 5;

export default checkable('UsernameTextbox', Textbox, {
  delay: 500,
  resultPath: [],
  validate: function validateUsername (username, done) {
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
      .get(`https://api.github.com/users/${username}`)
      .end(function handleResponse (err, res) {
        if (err) {
          // If a 404 error, then we have a special error message
          if (res.notFound) return done({ error: 'Username not found' });

          // For all other errors, show generic error message
          return done({ error: res.statusText || err.message });
        }

        // No error, means a username exists
        done({ fullName: res.body.name });
      });

    return function cancel () {
      req.abort();
    };
  }
});
