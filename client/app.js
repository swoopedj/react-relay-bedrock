var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
var TodoList = require('./components/TodoList');
// var store = createStore({});

var todos = [
	{
		id : 1,
		text : "First one",
		completed : true,
	},
	{
		id : 2,
		text : "Second One",
		completed : false,
	},
];

var onTodoClick = function(id) {
	console.log(id);
}

ReactDOM.render(
  <TodoList 
  	todos={todos}
  	onTodoClick={onTodoClick}
  />,
  document.getElementById('root')
);