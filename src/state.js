import _ from 'lodash';

import { update } from './update';

export class State {
  constructor (node) {
    this.node = node;

    const collectState = mapChildrenFn => _.defaults(
      _.mapValues(node.components, mapChildrenFn),
      _.get(node.rootState(), node.path)
    );

    // Assign state properties to this instance
    _.assign(this, collectState(child => child.state));

    Object.defineProperties(this, {
      toJSON: { value: () => collectState(child => child.state.toJSON()) }
    });
  }

  // state.update() accepts optional sub path as third argument to
  // make implementing state mutation methods simpler;
  // i.e. state.set('some.path', 'some value');
  update (mutation, optionalValuePath = []) {
    // Create the mutation path
    const valuePath = _.isString(optionalValuePath) ? optionalValuePath.split('.') : optionalValuePath;
    const fullStatePath = [...this.node.path, ...valuePath];
    const updateSpec = _.set({}, fullStatePath, mutation);

    // Apply the updateSpec to the root state
    const currentRoot = this.node.rootState();
    const updatedRoot = update(currentRoot, updateSpec);
    if (currentRoot !== updatedRoot) this.node.rootState(updatedRoot);

    // Return a new instance
    return new State(this.node);
  }

  set (path, value) {
    return this.update({ $set: value }, path);
  }

  merge (value) {
    return this.update({ $merge: value });
  }
}
