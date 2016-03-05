const R = require('ramda');
const { createReducer, indexAndConcat } = require('../lib/redux-helpers');

// FIXME: ESLint
const todo = createReducer(undefined, {
  REQUEST_NEW_TODO: (todo, action) => {
    return {
      id: action.id,
      text: action.text,
      completed: false,
    };
  },
  RECEIVE_NEW_TODO: (todo, action) => {
    if (todo.id !== 'creating') {
      return todo;
    }
    return R.assoc('id', action.id, todo);
  },
  TOGGLE_TODO: (todo, action) => {
    if (todo.id !== action.id) {
      return todo;
    }
    return R.evolve({
      completed: R.not,
    }, todo);
  },
});

const todos = createReducer([], {
  RECEIVE_TODOS: (state, action) => {
    return action.todos.slice();
  },
  REQUEST_NEW_TODO: (todos, action) => {
    return indexAndConcat(todo(undefined, action), todos);
  },
  TOGGLE_TODO: (todos, action) => {
    return todos.map(t =>
      todo(t, action)
    );
  },
  RECEIVE_NEW_TODO: (todos, action) => {
    return todos.map(t =>
      todo(t, action)
    );
  },
});

module.exports = todos;
