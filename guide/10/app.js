import { component } from 'relm';
import request from 'superagent';

import LoginForm from './login-form';

const FORM_ACTION = 'app/login-form-action';
const INVALID_LOGIN = 'app/invalid-login';
const LOGIN = 'app/login';

function $LOGIN (dispatch, formdata, event) {
  event.preventDefault();

  const { username, password, remember } = formdata;

  if (!username || !password) {
    return dispatch({
      type: INVALID_LOGIN,
      message: 'Invalid login credentials. Enter your username and password'
    });
  }

  return request
    .get(`https://api.github.com/users/${ formdata.username }/repos`)
    .end(function handleResponse (loginError, loginResponse) {
      if (loginError) {
        dispatch({
          type: INVALID_LOGIN,
          message: loginResponse.body || loginError.message
        });
      } else {
        dispatch({
          type: LOGIN,
          user: { username, remember },
          repos: loginResponse.body
        });
      }
    });
}

export default component('GithubViewer', {
  init: () => ({
    loginForm: LoginForm.init(),
    loginError: '',
    user: null
  }),

  update: {
    [FORM_ACTION]: {
      statePath: ['loginForm'],
      actionPath: ['payload'],
      updateHandler: LoginForm.update
    },

    [LOGIN]: (state, action) => ({
      ...state,
      loginForm: LoginForm.init(),
      user: action.user
    }),

    [INVALID_LOGIN]: (state, action) => ({
      ...state,
      loginError: action.message
    })
  },

  view ({ state, dispatch }) {
    if (!state.user) {
      return (
        <LoginForm
          state={state.loginForm}
          dispatch={dispatch.payload(FORM_ACTION)}
          onLogin={dispatch.from($LOGIN)}
          error={state.loginError}
        />
      );
    }

    return (null);
  }
});
