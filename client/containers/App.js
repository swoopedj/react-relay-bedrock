var React = require('react');
var connect = require('react-redux').connect;
var TodoList = require('../components/TodoList');
var AddTodo = require('../components/AddTodo');
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

var onSubmit = function(inputValue) {
	console.log(inputValue);
}

const App = () => (
	<div>
		<TodoList 
	  	todos={todos}
	  	onTodoClick={onTodoClick}
	  />
	  <AddTodo 
	  	onSubmit={onSubmit}
	  />
  </div>
)

const mapStateToProps = (dispatch, props) => {
	return {
		onTodoClick : (id) => {
			dispatch()
		}
	};
}

const WrappedApp = 


module.exports = App;
