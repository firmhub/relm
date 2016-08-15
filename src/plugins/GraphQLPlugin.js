import _ from 'lodash';
import { parse } from 'graphql-tag/parser';

export default class GraphQLPlugin {
  constructor (createQuery) {
    this.createQuery = createQuery;
  }

  apply (component, source) {
    // Get the child fragments - saved for access from parent compoennts
    component.fragments = _.mapValues(component.components, it => it.fragments || {});

    if (!source.graphql) return;

    // Parse GQL
    const result = source.graphql(tag, { components: component.fragments });

    // Assign any newly defined fragments so parents can use them
    _.assign(component.fragments, result.fragments);

    const createQuery = this.createQuery;
    const fragments = _.values(result.fragments);

    // Make query creators
    component.queries = _.mapValues(result.queries, (queryDefinition, name) => {
      const queryCreator = function runQuery (variables = {}) {
        return createQuery({
          variables,
          query: _.defaults({ definitions: fragments.concat(queryDefinition) }, result.doc)
        });
      };

      Object.defineProperty(queryCreator, 'name', { value: name });

      return queryCreator;
    });
  }
}

const Types = {
  Fragement: 'FragmentDefinition',
  Operation: 'OperationDefinition',
  Spread: 'FragmentSpread',
};

function tag (literals, ...substitutions) {
  if (!literals.length) return '';
  const result = { fragments: {}, queries: {} };

  // Parse the incoming query and collect any substituted fragments
  const collectAndJoin = queryStringReducer(result.fragments, literals);
  const str = _.reduce(substitutions, collectAndJoin, '') + _.last(literals);
  const doc = parse(str);

  if (!doc || doc.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  traverse(doc.definitions, function collectQueriesAndFragments (node) {
    const nodeName = node && node.name && node.name.value;

    // Hash the fragment names defined in this doc
    if (isKind(Types.Fragement, node)) {
      result.fragments[nodeName] = node;
      node.name.value = `${nodeName}_hashed`;
      return;
    }

    // Substitue hashed fragment names into query
    if (isKind(Types.Spread, node) && _.has(result.fragments, nodeName)) {
      node.name.value = result.fragments[nodeName].name.value;
      return;
    }

    // Collect queries in result object
    if (isKind(Types.Operation, node) && node.operation === 'query') {
      console.log(node);
      result.queries[nodeName] = node;
      return;
    }
  });

  result.doc = doc;
  doc.definitions = [];

  return result;
}

function isKind (kind, node) {
  return node && node.kind === kind;
}

function queryStringReducer (fragments, literals) {
  return (str, sub, i) => {
    // In case of fragments, collect them for later use
    if (isKind(Types.Fragment, sub) && _.endsWith(str, '...')) {
      const fragmentName = sub.name.value;
      fragments[fragmentName] = sub;
      return str + literals[i] + fragmentName;
    }

    // All other substitutions, just add to the string
    // This is default graphql-tag behaviour
    return str + literals[i] + sub;
  };
}

function traverse (obj, f) {
  if (Array.isArray(obj)) obj.forEach(it => traverse(it, f));
  f(obj);
  if (obj.selectionSet) obj.selectionSet.selections.forEach(it => traverse(it, f));
}

