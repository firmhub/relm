/* eslint-disable react/prop-types */
export function Header ({ props }) {
  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        className='new-todo'
        onInput={props.onInput}
        placeholder='What needs to be done?'
        autoFocus
      />
    </header>
  );
}

export function Todo ({ actions, state, props }) {
  return (
    <li className={{ completed: state.completed }}>
      {state.editing ? (
        // Editing view
        <input
          className='edit'
          value={state.title}
          onInput={actions.textInput}
        />
      ) : (
        // Normal view
        <div className='view'>
          <input
            className='toggle'
            type='checkbox'
            checked={state.completed}
            onClick={actions.toggleCompleted}
          />
          <label onClick={actions.startEditing}>{state.title}</label>
          <button className='destroy' onClick={props.onRemove}></button>
        </div>
      )}
    </li>
  );
}

Todo.actions = {
  toggleCompleted: ({ state }) => (state.completed = !state.completed),

  startEditing: ({ state }) => state.merge({
    editing: true,
    previousTitle: state.title
  }),

  textInput ({ state }, e) {
    switch (e.keyCode) {
      // When enter is pressed, stop editing
      case 13: return state.merge({
        title: e.target.value.trim(),
        previousTitle: null,
        editing: false
      });

      // When escape is pressed; discard changes and stop editing
      case 'escape': return state.merge({
        editing: false,
        title: state.previousTitle,
        previousTitle: null,
      });

      // All other keystrokes, simply update the title
      default: return (state.title = e.target.value);
    }
  },

};

export function MainSection ({ actions, components: { Items } }) {
  return (
    <section className='main'>
      <input className='toggle-all' type='checkbox' onClick={actions.toggleAll} />
      <label htmlFor='toggle-all'>Mark all as complete</label>
      <ul className='todo-list'>
        {Items.map((Item, i) => <Item onRemove={() => actions.removeTodo(i)} />)}
      </ul>
    </section>
  );
}

MainSection.components = {
  Items: [Todo]
};

MainSection.actions = {
  toggleAll: ({ state }) => state.Items.map(item => (item.completed = !item.completed)),
  removeTodo: ({ state }, i) => state.Items.splice(i, 1),
};

export function Footer ({ props }) {
  return (
    <footer className='footer'>
      <span className='todo-count'><strong>{props.count}</strong> item left</span>
      <ul className='filters'>
        <li>
          <a className='selected' href='#/'>All</a>
        </li>
        <li>
          <a href='#/active'>Active</a>
        </li>
        <li>
          <a href='#/completed'>Completed</a>
        </li>
      </ul>
      <button className='clear-completed'>Clear completed</button>
    </footer>
  );
}
