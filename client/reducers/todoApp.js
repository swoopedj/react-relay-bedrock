var todos = require('./todos');
var combineReducers = require('redux').combineReducers;
const todoApp = combineReducers({
  todos
});
module.exports = todoApp;