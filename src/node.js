import _ from 'lodash';

import { State } from './state';

function isProduction () {
  return false;
  // return process.env.NODE_ENV === 'production';
}

function defineName (obj, name) {
  Object.defineProperties(obj, {
    name: { value: name },
    displayName: { value: name }
  });
}

function getNodeAtPath (node, path) {
  return _.reduce(path, (n, name) => n.childNodes[name], node);
}

function getAction (node, action) {
  return _.get(node, ['actions', action]);
}

function hasAction (node, action) {
  return _.isFunction(getAction(node, action));
}

function badAction (node, path, type) {
  return new Error(`unknown action ${node} [type:${type}] [path:${path}]`);
}

function getActionOverride(actions, path, type) {
  return _.get(actions, [...path, type]);
}

function isActionOverrideSpecified (actions, path, type) {
  return _.isFunction(getActionOverride(actions, path, type));
}

function isChildAction (node, path) {
  if (!path.length) return false;
  return _.has(node, ['childNodes', _.head(path)]);
}

/**
 * When a node has an action override function specified, this
 * function calls the override; the override function receives
 * a second argument `actionShortcut` which can be used by the
 * overriding node to call through to the underlying action
 */
function useActionOverride (node, override, path, type, args) {
  const child = getNodeAtPath(node, path);
  if (!hasAction(child, type)) throw badAction(child, path, type);

  const actionShortcut = (...childArgs) => child.handleAction([], type, childArgs);
  return override(node.state, actionShortcut, ...args);
}

/**
 * Processes a child action in the context of a node, using
 * any overrides which may be specified
 */
function processNestedAction (node, actions, path, type, args) {
  if (isActionOverrideSpecified(actions, path, type)) {
    // TODO: allow intercepting all actions instead of specific types
    const override = getActionOverride(actions, path, type);
    return useActionOverride(node, override, path, type, args);
  }

  if (!isChildAction(node, path)) {
    throw badAction(node, path, type);
  }

  const [child, ...restOfPath] = path;
  return node.childNodes[child].handleAction(restOfPath, type, args);
}

/**
 * createActionHandler creates the node.handleAction() method for a specified
 * node. Node and its actions are pre-bound in the node's constructor function.
 * The path, type and args come later. Based on the path, the action is
 * propagated down the component tree until a handler is found.
 *
 * node.handleAction() performs the same function as elm's update function
 * and redux reducer, except that the actions are propagated based on paths
 * in the component hierarchy instead of manually on the user side
 */
const createActionHandler = (node, actions) => (path, type, args) => {
  if (isChildAction(node, path)) {
    return processNestedAction(node, actions, path, type, args);
  }

  if (!hasAction(node, type)) {
    throw badAction(node, path, type);
  }

  return _.get(actions, type)(node, ...args);
};

const isDispatcherNeeded = (node, action, type) => {
  if (!_.isFunction(action)) return false; // All actions must be functions
  if (_.has(node.childNodes, type)) return false; // Don't need dispatchers for child action overrides
  return true;
};

/**
 * createActionDispatchers returns a reducer function which creates dispatchers
 * for a given node (i.e node.actions.someAction()). These dispatchers all emit
 * action using rootState.dispatch and provide the node's path so the actions
 * can flow from using a top-down approach
 */
const createActionDispatchers = (node) => (output, action, type) => {
  if (!isDispatcherNeeded(node, action, type)) return output;
  const dispatcher = (...args) => node.rootState.dispatch(node.path, type, args);
  return _.set(output, type, dispatcher);
};

export class Node {
  static createRoot (rootComponent, initialState = {}) {
    let currentState = initialState;

    function rootState (updatedState) {
      if (arguments.length > 0) currentState = updatedState;
      return currentState;
    }

    const rootNode = new Node(rootComponent, {
      rootState,
      path: []
    });

    rootState.dispatch = rootNode.handleAction;

    return rootNode;
  }

  static createChildNode (parentNode, component, key) {
    if (_.isArray(component)) {
      return Node.createListNode(parentNode, _.head(component), key);
    }
    return new Node(component, {
      path: parentNode.path.concat(key),
      rootState: parentNode.rootState,
    });
  }

  static createListNode (parentNode, component, key) {
    throw new Error(`TODO: Implement createListNode ${parentNode.name}:${key}`);
  }

  constructor (it, opts = {}) {
    this.render = it;
    this.path = opts.path;
    this.rootState = opts.rootState;

    defineName(this, it.displayName || it.name || _.last(this.path));

    // Create child nodes
    this.childNodes = _.mapValues(it.components, _.partial(Node.createChildNode, this));
    this.childViews = _.mapValues(this.childNodes, child => _.bind(child.view, child));

    // Create node.actions object which contains all actions that this node can dispatch
    this.actions = _.reduce(it.actions || {}, createActionDispatchers(this), {});

    // Create a handler function for actions that are received by this node
    // It is the node's job to either handle actions and update rootState or
    // dispatch those actions to its children
    this.handleAction = createActionHandler(this, it.actions || {});
    defineName(this.handleAction, `${this.displayName}ActionHandler`);
  }

  get state () {
    if (this._previousRootState === this.rootState()) return this._state;

    const nodeState = new State(this);

    if (!isProduction()) Object.freeze(nodeState);

    this._previousRootState = this.rootState();
    this._state = nodeState;
    return this._state;
  }

  toString () {
    return `Node<${this.displayName}>`;
  }

  view (props = {}, children = []) {
    const { actions, state, childViews: components } = this;
    return this.render({ actions, state, props, children, components });
  }
}
