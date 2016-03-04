const todos = require('./todos');
const isLoading = require('./isLoading');
const combineReducers = require('redux').combineReducers;
const { routerReducer } = require('react-router-redux');

const todoApp = combineReducers({
  todos,
  isLoading,
  routing: routerReducer,
});
module.exports = todoApp;
