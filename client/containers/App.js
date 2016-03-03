var React = require('react');
var R = require('ramda');
var connect = require('react-redux').connect;
var TodoList = require('../components/TodoList');
var AddTodo = require('../components/AddTodo');
var actions = require('../actionCreators/todos');
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

const App = ({onSubmit, onTodoClick, todos}) => (
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

const mapStateToProps = (state) => {
	return R.pick(['todos'], state);
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onSubmit : (value) => {
			dispatch(actions.addTodo(value))
		},
		onTodoClick : (id) => {
			dispatch(actions.toggleTodo(id))
		}
	};
}

const WrappedApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

module.exports = WrappedApp;
