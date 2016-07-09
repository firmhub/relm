import classNames from 'classnames';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export function TodoMVC ({ state, actions, components: { Todos } }) {
  const allTodos = state.Todos.length;
  const activeTodos = state.Todos.filter(x => !x.completed).length;

  function renderVisibleTodos (Todo, index) {
    const todoState = state.Todos[index].completed ? 'completed' : 'active';
    if (state.filter !== 'all' && state.filter !== todoState) return null;
    return (<Todo onRemove={() => actions.removeTodo(index)} />);
  }

  function filterLink (type) {
    return {
      className: classNames({ selected: state.filter === type }),
      onClick () { actions.changeFilter(type); }
    };
  }

  return (
    <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          value={state.newTodo || ''}
          onKeyUp={actions.newTodoInput}
          autoFocus
        />
      </header>
      {allTodos === 0 ? null : (
        <section className='main'>
          <input className='toggle-all' type='checkbox' onClick={actions.toggleAll} />
          <label {...({ for: 'toggle-all' })}>Mark all as complete</label>
          <ul className='todo-list'>{Todos.map(renderVisibleTodos)}</ul>
        </section>
      )}
      {allTodos === 0 ? null : (
        <footer className='footer'>
          <span className='todo-count'><strong>{activeTodos}</strong> items left</span>
          <ul className='filters'>
            <li><a href='#/' {...filterLink('all')}>All</a></li>
            <li><a href='#/active' {...filterLink('active')}>Active</a></li>
            <li><a href='#/completed' {...filterLink('completed')}>Completed</a></li>
          </ul>
          <button className='clear-completed' onClick={actions.clearCompleted}>Clear completed</button>
        </footer>
      )}
    </section>
  );
}

TodoMVC.components = {
  Todos: [TodoComponent]
};

TodoMVC.actions = {
  getInitialState: (state) => state.merge({ filter: 'all', newTodo: '' }),
  changeFilter: (state, value) => state.set('filter', value),
  clearCompleted: (state) => state.set('Todos', state.Todos.filter(todo => !todo.completed)),
  removeTodo: (state, index) => state.splice('Todos', [[index, 1]]),

  toggleAll: (state) => {
    const completed = !state.Todos[0].completed;
    return state.map('Todos', todo => todo.merge({ completed }));
  },

  newTodoInput (state, event) {
    switch (event.keyCode) {
      // When enter is pressed and input is not empty, create the new todo and clear the input
      case ENTER_KEY: return !event.target.value ? state : state.update({
        Todos: { $splice: [[0, 0, { title: event.target.value }]] },
        newTodo: { $set: '' }
      });
      // All other keystrokes, simply update the newTodo
      default: return state.set('newTodo', event.target.value);
    }
  },
};

export function TodoComponent ({ actions, props, state: { editing, completed, title } }) {
  return (
    <li className={classNames({ completed, editing })}>
      {editing === true ? (
        // Edit mode
        <input
          className='edit'
          value={title}
          onKeyUp={actions.textInput}
          config={(el) => { if (editing) el.focus(); }}
        />
      ) : (
        // Normal mode
        <div className='view'>
          <input className='toggle' checked={completed} type='checkbox' onClick={actions.toggleCompleted} />
          <label onDblClick={actions.startEditing}>{title}</label>
          <button className='destroy' onClick={props.onRemove}></button>
        </div>
      )}
    </li>
  );
}

TodoComponent.actions = {
  toggleCompleted: (todo) => todo.set('completed', !todo.completed),
  startEditing: (todo) => todo.merge({ editing: true, previousTitle: todo.title }),

  textInput (todo, event) {
    switch (event.keyCode) {
      // When enter is pressed, stop editing
      case ENTER_KEY: return todo.merge({
        title: event.target.value.trim(),
        previousTitle: null,
        editing: false
      });
      // When escape is pressed; discard changes and stop editing
      case ESCAPE_KEY: return todo.merge({
        title: todo.previousTitle,
        previousTitle: null,
        editing: false,
      });
      // All other keystrokes, simply update the title
      default: return todo.set('title', event.target.value);
    }
  }
};
