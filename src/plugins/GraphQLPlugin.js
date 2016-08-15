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
    const { fragments, queries } = source.graphql(tag, { components: component.fragments });

    // Assign any newly defined fragments so parents can use them
    _.assign(component.fragments, fragments);

    const createQuery = this.createQuery;

    // Make query creators
    component.queries = _.mapValues(queries, (query, name) => {
      const queryCreator = function runQuery (variables = {}) {
        return createQuery({
          variables,
          query,
        });
      };

      Object.defineProperty(queryCreator, 'name', { value: name });

      return queryCreator;
    });
  }
}

const Types = {
  Document: 'Document',
  Fragment: 'FragmentDefinition',
  Operation: 'OperationDefinition',
  Spread: 'FragmentSpread',
};

function tag (literals, ...substitutions) {
  if (!literals.length) return '';
  const fragments = {};
  const subs = {};
  const queries = {};

  function joinString (str, sub, i) {
    if (!isKind(Types.Fragment, sub)) {
      throw new Error('GraphQL substitutions must be fragments');
    }

    if (!_.endsWith(literals[i], '...')) {
      throw new Error('All substitutions must be preceeded by a spread "..." operator');
    }

    const fragmentName = sub.name.value;
    subs[fragmentName] = sub;
    return str + literals[i] + fragmentName;
  }

  const source = _.reduce(substitutions, joinString, '') + _.last(literals);
  const doc = parse(source);

  if (!doc || doc.kind !== Types.Document) {
    throw new Error('Not a valid GraphQL document.');
  }

  function buildQuery (queryNode) {
    const definitions = [queryNode];
    traverse(queryNode.selectionSet, function collectFragments (node) {
      // Skip everything but spread operators
      if (!isKind(Types.Spread, node)) return;

      const nodeName = node && node.name && node.name.value;

      // Some child fragment
      if (_.has(subs, nodeName)) {
        definitions.push(subs[nodeName]);
        return;
      }

      // Self defined fragment - sub the hashed name
      if (_.has(fragments, nodeName)) {
        node.name.value = fragments[nodeName].name.value;
        definitions.push(fragments[nodeName]);
      }
    });

    return {
      kind: Types.Document,
      definitions
    };
  }

  traverse(doc.definitions, function collectQueriesAndFragments (node) {
    const nodeName = node && node.name && node.name.value;

    // Hash the fragment names defined in this doc
    if (isKind(Types.Fragment, node)) {
      node.name.value = `${nodeName}_hashed`;
      fragments[nodeName] = node;
      return null;
    }

    // Collect queries in result object
    if (isKind(Types.Operation, node) && node.operation === 'query') {
      queries[nodeName] = buildQuery(node);
      return false;
    }

    return null;
  });

  return {
    queries,
    fragments,
  };
}

function isKind (kind, node) {
  return node && node.kind === kind;
}

function traverse (obj, f) {
  if (Array.isArray(obj)) obj.forEach(it => traverse(it, f));
  const falseReturnedToStop = f(obj);
  if (falseReturnedToStop === false) return;
  if (obj.selectionSet) obj.selectionSet.selections.forEach(it => traverse(it, f));
}

