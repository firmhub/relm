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
        title: state.previousTitle,
        previousTitle: null,
        editing: false,
      });

      // All other keystrokes, simply update the title
      default: return (state.title = e.target.value);
    }
  },
};

export function App ({ state, actions, components: { Todos } }) {
  const todoCount = state.Todos.length;
  const visibleTodos = () => true;
  const todoView = (TodoView, index) => <TodoView onRemove={() => actions.removeTodo(index)} />;

  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <input
          className='new-todo'
          onInput={actions.newTodoInput}
          placeholder='What needs to be done?'
          autoFocus
        />
      </header>
      // Main section should be hidden by default and shown when there are todos
      {todoCount === 0 ? null : (
        <section className='main'>
          <input className='toggle-all' type='checkbox' onClick={actions.toggleAll} />
          <label htmlFor='toggle-all'>Mark all as complete</label>
          <ul className='todo-list'>
            {Todos.filter(visibleTodos).map(todoView)}
          </ul>
          <Todos filterTodos={actions.filterTodos} onRemove={actions.removeTodo} />
        </section>
      )}
      // Footer should hidden by default and shown when there are todos
      {todoCount === 0 ? null : (
        <footer className='footer'>
          <span className='todo-count'><strong>{todoCount}</strong> item left</span>
          <ul className='filters'>
            <li><a className='selected' href='#/'>All</a></li>
            <li><a href='#/active'>Active</a></li>
            <li><a href='#/completed'>Completed</a></li>
          </ul>
          <button className='clear-completed'>Clear completed</button>
        </footer>
      )}
    </section>
  );
}

App.components = {
  Todos: [Todo]
};

App.actions = {
  toggleAll: ({ state }) => state.Todos.map(todo => (todo.completed = !todo.completed)),
  removeTodo: ({ state }, i) => state.Todos.splice(i, 1),
  newTodoInput () {

  }
};

import { startApp } from 'relm/yoyo';

export default startApp(App);
