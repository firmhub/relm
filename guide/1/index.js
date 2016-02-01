import { startApp } from 'relm/react-dom';
import * as HelloWorld from './hello-world';

// Create an element which will contain our app
const container = document.createElement('div');

// Render the application in the target element
startApp(container, HelloWorld);

// Add the element that contains the app to the page
document.body.appendChild(container);
