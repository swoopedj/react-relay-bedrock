var React = require('react');
var Todo = require('./Todo');
const TodoList = ({todos, onTodoClick}) => (
	  <ul>
	    {todos.map(todo =>
	      <Todo
	        key={todo.id}
	        {...todo}
	        onClick={() => onTodoClick(todo.id)}
	      />
	    )}
	  </ul>
)

module.exports = TodoList;
