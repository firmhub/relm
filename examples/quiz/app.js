/* eslint-env browser */
import { relmApp } from '../../src/packages/inferno';
import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import Quiz from './components/Quiz';

export function start (data) {
  const app = relmApp(Quiz, document.querySelector('#main'), {
    theme: {
      grayColor: '#fc605b'
    },
    customizeMiddleware (middleware) {
      return applyMiddleware(middleware, createLogger());
    }
  });

  app.actions.updateTopics(data);

  return app;
}
