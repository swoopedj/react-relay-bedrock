const createReducer = require('../lib/redux-helpers').createReducer;

const todo = createReducer(undefined, {
  'ADD_TODO' : (state, action) => {
    id: action.id,
    text: action.text,
    completed: false
  },
  'TOGGLE_TODO' : (state, action) => {
    if (state.id !== action.id) {
      return state
    }

    return Object.assign({}, state, {
      completed: !state.completed
    })
  }
});
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {

      }
    case 'TOGGLE_TODO':


    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

module.exports = todos;