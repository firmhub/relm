/* eslint-env browser */
import { relmApp } from '../../src/packages/inferno';
import { HTTPExample } from './main.jsx';

const targetEl = document.querySelector('#main');

// Start the application
window.app = relmApp(targetEl, HTTPExample, {
  debug: true,
});
