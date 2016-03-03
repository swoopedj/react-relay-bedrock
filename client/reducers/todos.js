const R = require('ramda')
const {createReducer, indexAndConcat} = require('../lib/redux-helpers');

const todo = createReducer(undefined, {
  'ADD_TODO' : (todo, action) => {
    return {
        id: action.id,
        text: action.text,
        completed: false  
    };
  },
  'TOGGLE_TODO' : (todo, action) => {
    if (todo.id !== action.id) {
      return todo
    }
    return R.evolve({
      completed : R.not,
    }, todo);
  }
});
 

const todos = createReducer([], {
  'ADD_TODO' : (todos, action) => {
    return indexAndConcat(todo(undefined, action), todos);
  },
  'TOGGLE_TODO' : (todos, action) => {
    return todos.map(t =>
      todo(t, action)
    );
  }
});

module.exports = todos;