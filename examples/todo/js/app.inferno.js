/* eslint-env browser */
import Inferno from 'inferno-dom';
import relm from 'relm';
import { TodoMVC } from './components.jsx';

const App = relm(TodoMVC);

function draw () {
  Inferno.render(<App />, document.querySelector('#main'));
}

App.subscribe(draw);
draw();
