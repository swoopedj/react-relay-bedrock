var todos = require('./todos');
var isLoading = require('./isLoading');
var combineReducers = require('redux').combineReducers;
let { routerReducer } = require('react-router-redux');

const todoApp = combineReducers({
  todos,
  isLoading,
  routing : routerReducer,
});
module.exports = todoApp;