import t from 'tcomb';

export const Component = t.declare('Component');

const ValidComponents = t.union([
  Component,
  t.tuple([Component], 'ListComponent')
]);

Component.define(t.intersection([
  t.Function,
  t.interface({
    components: t.maybe(t.dict(t.String, ValidComponents)),
    styles: t.maybe(t.Function),
    actions: t.maybe(t.Object),
  }, 'Component<Interface>')
]));
