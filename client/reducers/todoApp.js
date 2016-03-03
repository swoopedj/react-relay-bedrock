var todos = require('./todos');
var isLoading = require('./isLoading');
var combineReducers = require('redux').combineReducers;
const todoApp = combineReducers({
  todos,
  isLoading,
});
module.exports = todoApp;