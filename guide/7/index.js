import { startApp } from 'relm/react-dom';
import SignupForm from './signup-form';

const container = document.createElement('div');
document.body.appendChild(container);

const app = startApp(container, SignupForm);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./signup-form', function asdasd () {
    app.hotReload(require('./signup-form').default);
  });
}
