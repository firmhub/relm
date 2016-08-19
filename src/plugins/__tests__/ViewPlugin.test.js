import test from 'ava';

import { internals } from '../ViewPlugin';

const style = {
  want: 'want_hashed'
};

test('joinClasses', t => {
  t.is('other want_hashed classes', internals.joinClasses(style, 'other want classes'));
  t.is('other want_hashed classes', internals.joinClasses(style, [{ other: true, want: true }, null, ' ', 'classes']));
  t.is('other want_hashed classes', internals.joinClasses(style, { other: true, want: 1, classes: [] }));
});
