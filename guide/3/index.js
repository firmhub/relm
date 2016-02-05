import { startApp } from 'relm/react-dom';
import * as Textbox from './textbox';

const container = document.createElement('div');
document.body.appendChild(container);

// Start app will initialize the textbox state,
// and then call Textbox.view with a props object
// which has `state` and `dispatch` properties
startApp(container, Textbox);
