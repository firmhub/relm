import _ from 'lodash';

export default function list (Component) {
  function List (h, { state, props }) {
    return (
      <Component state={state.list[props.index]} {...props} />
    );
  }

  List.components = {
    Component
  };

  List.actions = {
    init(state) {
      return state.set('list', []);
    },
    Component(state, action, next) {
      const [i, ...type] = action.type;
      return state.apply(['list', i], next(_.assign({}, action, { type })));
    },
  };

  return List;
}

// // Higher order component for lists

// function hash () {
//   return 'sd8a7d';
// }

// export default function list (source) {
//   const displayName = source.displayName || source.name;
//   const Component = `${displayName}_${hash()}`;

//   function List (tag, { state, props, children }) {
//     if (!props.key) throw new Error(`list component "${displayName}" was called without a key property`);
//     return tag`
//       <${Component} state=${state.list[props.key]} key=${props.key}>
//         ${children}
//       </${Component}>
//     `;
//   }

//   List.displayName = displayName;
//   List.components = { [Component]: source };

//   List.actions = {
//     initializeState (state) {
//       if (Array.isArray(state.list)) return state;
//       return state.set('list', []);
//     },
//     [Component] (state, next, ...args) {
//       const key = next.path[0];
//       const updateChild = child => next(child, ...args);
//       return state.apply(['list', key], updateChild);
//     }
//   };
// }
