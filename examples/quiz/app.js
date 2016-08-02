/* eslint-env browser */
import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import { relmApp } from '../../src/packages/inferno';
import Quiz from './components/Quiz';
import data from './questions.js';

// Start the application
const app = window.app = relmApp(document.querySelector('#main'), Quiz, {
  theme: {
    grayColor: '#fc605b'
  },
  customizeMiddleware (middleware) {
    return applyMiddleware(middleware, createLogger());
  }
});

app.dispatch({
  type: ['updateTopics'],
  args: [data]
});
