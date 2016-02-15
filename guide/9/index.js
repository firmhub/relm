import { startApp } from 'relm/react-dom';
import LoginForm from './login-form';

const container = document.createElement('div');
document.body.appendChild(container);

const app = startApp(container, LoginForm);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./login-form', function asdasd () {
    app.hotReload(require('./login-form').default);
  });
}
