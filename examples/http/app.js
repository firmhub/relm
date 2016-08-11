/* eslint-env browser */
import { relmApp } from '../../src/packages/inferno';
import { HTTPExample } from './main.jsx';

// Start the application
window.app = relmApp(HTTPExample, document.querySelector('#main'), {
  debug: true,
});
