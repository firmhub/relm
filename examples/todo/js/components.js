import classNames from 'classnames';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;
const focus = (setFocus) => (el) => { if (setFocus) el.focus(); };

export function TodoMVC (m, { state, actions, components: { Todos } }) {
  const allTodos = state.Todos.length;
  const activeTodos = state.Todos.filter(x => !x.completed).length;
  const filterLink = (type, href) => ({
    href,
    className: classNames({ selected: state.filter === type }),
    onclick: () => actions.changeFilter(type)
  });

  return m('section.todoapp', [
    m('header.header', [
      m('h1', 'todos'),
      m('input.new-todo', {
        placeholder: 'What needs to be done?',
        value: state.newTodo || '',
        onkeyup: actions.newTodoInput,
        autofocus: true
      })
    ]),
    // Main section should be hidden by default and shown when there are todos
    allTodos === 0 ? null : m('section.main', [
      m('input.toggle-all', { type: 'checkbox', onclick: actions.toggleAll }),
      m('label', { htmlFor: 'toggle-all' }, 'Mark all as complete'),
      m('ul.todo-list', Todos.map((Item, index) => {
        const todoCompleted = state.Todos[index].completed;
        if (state.filter !== 'all' && state.filter !== (todoCompleted ? 'completed' : 'active')) return null;
        return Item({ onRemove: () => actions.removeTodo(index) });
      }))
    ]),
    // Footer should hidden by default and shown when there are todos
    allTodos === 0 ? null : m('footer.footer', [
      m('span.todo-count', m.trust(`<strong>${activeTodos}</string> items left`)),
      m('ul.filters', [
        m('li', m('a', filterLink('all', '#/'), 'All')),
        m('li', m('a', filterLink('active', '#/active'), 'Active')),
        m('li', m('a', filterLink('completed', '#/completed'), 'Completed')),
      ]),
      m('button.clear-completed', { onclick: actions.clearCompleted }, 'Clear completed')
    ])
  ]);
}

TodoMVC.components = { Todos: [TodoComponent] };

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

export function TodoComponent (m, { actions, props, state: { editing, completed, title } }) {
  return m('li', { className: classNames({ completed, editing }) }, editing ?
    // Edit mode
    m('input.edit', { value: title, onkeyup: actions.textInput, config: focus(editing) }) :
    // View mode
    m('div.view', [
      m('input.toggle', { onclick: actions.toggleCompleted, type: 'checkbox', checked: completed }),
      m('label', { ondblclick: actions.startEditing }, title),
      m('button.destroy', { onclick: props.onRemove })
    ]));
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
