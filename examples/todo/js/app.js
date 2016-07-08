/* eslint-env browser */
import m from 'mithril';
import relm from 'relm';

import { TodoMVC } from './components';

const app = relm(TodoMVC);

m.mount(document.querySelector('#main'), { view: app });

app.subscribe(m.redraw);
