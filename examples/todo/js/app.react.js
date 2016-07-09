/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import relm from 'relm';
import { TodoMVC } from './components.jsx';

const App = relm(TodoMVC, { debug: true });

function draw () {
  ReactDOM.render(<App />, document.querySelector('#main'));
}

App.subscribe(draw);
draw();
