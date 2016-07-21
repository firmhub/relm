import 'babel-register';
import test from 'ava';

import { routeParser } from '../src/router';

test('parses some basic routes', (t) => {
  t.deepEqual(routeParser('/:id').exec('/123'), { id: '123' });
  t.deepEqual(routeParser('/:id/:section*').exec('/123'), { id: '123' });
  t.deepEqual(routeParser('/:id/:section*').exec('/123/overview'), { id: '123', section: 'overview' });
  t.deepEqual(routeParser('/:id/:section*').exec('/123/overview/other'), { id: '123', section: 'overview/other' });
});
