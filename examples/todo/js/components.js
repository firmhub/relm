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

export function Todo ({ actions, state: todo }) {
  return (
    <li className='completed'>
      <div className='view'>
        <input className='toggle' type='checkbox' checked />
        <label>Taste JavaScript</label>
        <button className='destroy'></button>
      </div>
      <input className='edit' value='Create a TodoMVC template' />
    </li>
  );
}

Todo.actions = {
  complete: (todo) => (todo.completed = true),
  remove: (todo) => (todo.removed = true),

  edit (todo) {
    todo.previousTitle = todo.title;
    todo.editing = true;
  },

  doneEditing (todo) {
    todo.title = todo.title.trim();
    todo.previousTitle = null;
    todo.editing = false;
  },

  cancelEditing (todo) {
    todo.title = todo.previousTitle;
  },

  textInput (todo, e) {
    todo.title = e.target.value;
  }
};

export function MainSection ({ actions, components: { Items } }) {
  return (
    <section className='main'>
      <input className='toggle-all' type='checkbox' onClick={actions.toggleAll} />
      <label htmlFor='toggle-all'>Mark all as complete</label>
      <ul className='todo-list'>
        {Items.map(Item => <Item />)}
      </ul>
    </section>
  );
}

MainSection.components = {
  Items: [Todo]
};

MainSection.actions = {
  toggleAll (state) {
    state.Items.forEach(item => (item.completed = true));
  }
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
