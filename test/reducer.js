import test from 'ava';
import { makeReducer } from '../src/reducer';

function Root () {}
function Child () {}
function GrandChild () {}

Root.components = { ChildA: Child, ChildB: Child };
Child.components = { Baby: GrandChild };

Root.actions = {

};

Child.actions = {

};

GrandChild.actions = {

};

test('propagates actions down the component hierarcy', (t) => {
  const reducer = makeReducer(Root);
  t.pass();
});
