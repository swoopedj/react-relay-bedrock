const todoApp = require('../reducers/todoApp');
const { createStore, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk');

module.exports = () => {
  const store = createStore(todoApp, applyMiddleware(thunkMiddleware));
  return store;
};
