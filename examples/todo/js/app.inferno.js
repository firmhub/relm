/* eslint-env browser */
import { startApp } from 'relm/inferno';
import { TodoMVC } from './components.jsx';

const app = startApp(document.querySelector('#main'), TodoMVC, {
  initialState: JSON.parse(localStorage.getItem('myTodos') || '{}')
});

app.subscribe(function presist () {
  localStorage.setItem('myTodos', JSON.stringify(app.getState()));
});
