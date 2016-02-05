import { startApp } from 'relm/react-dom';

// Simpler component import instead of import * as FancyForm from ...
import FancyForm from './fancy-form';

const container = document.createElement('div');
document.body.appendChild(container);

// This time our top level component is the FancyForm
startApp(container, FancyForm);
