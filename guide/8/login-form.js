import { component, combineComponents } from 'relm';
import { checkable } from 'relm/ui';
import request from 'superagent';

import Textbox from './textbox';

const minLength = 5;

const UsernameTextbox = checkable('UsernameTextbox', Textbox, {
  delay: 500,
  propsPath: [],
  validate: function validateUsername (state, done) {
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
      .get(`https://api.github.com/users/${username}`)
      .end(function handleResponse (err, res) {
        if (err) {
          // If a 404 error, then we have a special error message
          if (res.notFound) return done({ error: 'Username not found' });

          // For all other errors, show generic error message
          return done({ error: res.statusText || err.message });
        }

        // No error, means a username exists
        done({ match: res.body });
      });

    return function cancel () {
      req.abort();
    };
  }
});

const LoginFields = combineComponents('LoginFields', [
  UsernameTextbox,
  Textbox,
]);

export default component('LoginForm', {
  init: LoginFields.init,
  update: LoginFields.update,
  view (props) {
    const [ Username, Password ] = LoginFields.with(props);

    return (
      <div className={props.classes.container}>
        <Username label='Username' />
        <Password label='Password' />
      </div>
    );
  },

  classes: {
    container: {
      padding: '2rem',
      background: '#cecece',
      margin: '2rem auto'
    }
  }
});
