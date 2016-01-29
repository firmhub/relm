import { startApp } from 'relm/react-dom';
import * as Counter from './counter';

// Find the element where we want to render the application
const targetElement = document.getElementById('app-container');

// Render the application in the target element
startApp(targetElement, Counter);
