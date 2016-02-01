import { startApp } from 'relm/react-dom';
import * as Counter from './counter';

// Create an element which will contain our app
const container = document.createElement('div');

// Render the application in the target element
startApp(container, Counter);

// Add the element that contains the app to the page
document.body.appendChild(container);
