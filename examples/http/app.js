/* eslint-env browser */
import { relmApp } from '../../src/packages/inferno';
import { Main } from './main.jsx';

const targetEl = document.querySelector('#main');

// Start the application
window.app = relmApp(targetEl, Main, {
  debug: true,
});
