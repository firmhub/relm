/* eslint-env browser */
import { relmApp } from '../../../src/packages/inferno';
import { TodoMVC } from './components.jsx';

const targetEl = document.querySelector('#main');
//
// Start the application
const app = window.app = relmApp(targetEl, TodoMVC, {
  // debug: true,
  initialState: JSON.parse(localStorage.getItem('myTodos') || '{}')
});

app.subscribe(function saveChangesToLocalStorage () {
  localStorage.setItem('myTodos', JSON.stringify(app.getState()));
});
