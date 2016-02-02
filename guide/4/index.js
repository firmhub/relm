import { startApp } from 'relm/react-dom';
import * as CounterList from './counter-list';

const container = document.createElement('div');
document.body.appendChild(container);

// This time our top level component is the CounterList
startApp(container, CounterList);
