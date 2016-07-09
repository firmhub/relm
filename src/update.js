import _ from 'lodash';

const devMode = process.env.NODE_ENV !== 'production';

export function update (source, mutation) {
  let isChanged = false;
  let value = source;
  let newValue;

  _.each(mutation, (mut, key) => {
    if (update.isCommand(key)) {
      newValue = update.getCommand(key)(mut, value);
      if (newValue !== source) {
        isChanged = true;
        value = newValue;
      } else {
        value = source;
      }
    } else {
      if (value === source) value = _.clone(source) || {};
      newValue = update(value[key], mut);
      isChanged = isChanged || (newValue !== value[key]);
      value[key] = newValue;
    }
  });

  return isChanged ? value : source;
}

update.isCommand = function isCommand (k) {
  return update.commands.hasOwnProperty(k);
};

update.getCommand = function getCommand (k) {
  return update.commands[k];
};

update.commands = {
  $apply (f, value) {
    return f(value);
  },

  $set (value) {
    return value;
  },

  $push (elements, arr) {
    if (elements.length > 0) return arr.concat(elements);
    return arr;
  },

  $splice (splices, arr) {
    if (splices.length > 0) {
      return _.reduce(splices, (acc, splice) => {
        acc.splice.apply(acc, splice);
        return acc;
      }, _.clone(arr));
    }

    return arr;
  },

  $merge (whatToMerge, obj) {
    const result = _.clone(obj);
    let isChanged = false;

    _.each(whatToMerge, (v, k) => {
      result[k] = v;
      isChanged = isChanged || (v !== obj[k]);
    });

    return isChanged ? result : obj;
  }
};

export function Immutable (props) {
  if (!(this instanceof Immutable)) return new Immutable(props);
  _.assign(this, props);
  if (devMode) Object.freeze(this);
}

export function makeImmutable (arg) {
  return new Immutable(arg);
}

export function unwrapImmutable (result) {
  if (result instanceof Immutable) return _.clone(result);
  return result;
}


Immutable.prototype = {
  update (spec) {
    return makeImmutable(update(this, spec));
  },

  set (a, b) {
    return makeImmutable(update(this, arguments.length === 1
      ? { $set: a }
      : _.set({}, a, { $set: b })
    ));
  },

  splice (a, b) {
    return makeImmutable(update(this, arguments.length === 1
      ? { $splice: a }
      : _.set({}, a, { $splice: b })
    ));
  },

  map (a, b) {
    // mapWith :: (a -> b) -> [a] -> [b]
    const mapWith = f => arr => arr.map(function immutableMapper (v, i) {
      const value = makeImmutable(v);
      const result = f(value, i, arr);
      return unwrapImmutable(result);
    });

    return makeImmutable(update(this, arguments.length === 1
      ? { $apply: mapWith(a) }
      : _.set({}, a, { $apply: mapWith(b) })
    ));
  },

  merge (a, b) {
    return makeImmutable(update(this, arguments.length === 1
      ? { $merge: a }
      : _.set({}, a, { $merge: b })
    ));
  }
};
