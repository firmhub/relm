import { startApp } from 'relm/react-dom';
import FancyForm from './fancy-form';

const container = document.createElement('div');
document.body.appendChild(container);

const app = startApp(container, FancyForm);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./fancy-form', function asdasd () {
    app.hotReload(require('./fancy-form').default);
  });
}
