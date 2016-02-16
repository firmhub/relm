import { startApp } from 'relm/react-dom';
import GithubViewer from './app';

const container = document.createElement('div');
document.body.appendChild(container);

const app = startApp(container, GithubViewer);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./app', function asdasd () {
    app.hotReload(require('./app').default);
  });
}
