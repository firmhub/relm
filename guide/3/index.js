import { startApp } from 'relm/react-dom';
import * as Counter from './counter';

const container = document.createElement('div');
document.body.appendChild(container);

// Start app will initialize the counter state,
// and then call Counter.view with a props object
// which has `state` and `dispatch` properties
startApp(container, Counter);
