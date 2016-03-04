const React = require('react');
const R = require('ramda');
const connect = require('react-redux').connect;
const TodoList = require('../components/TodoList');
const AddTodo = require('../components/AddTodo');
const actions = require('../actionCreators/todos');
const todos = [
  {
    id: 1,
    text: 'First one',
    completed: true,
  },
  {
    id: 2,
    text: 'Second One',
    completed: false,
  },
];

// FIXME: ESLint
const App = ({ onSubmit, onTodoClick, todos, isLoading }) => {
  if (isLoading) return (<p>Loading</p>);
  return (
		<div>
      <TodoList
        todos={todos}
        onTodoClick={onTodoClick}
      />
      <AddTodo
        onSubmit={onSubmit}
      />
    </div>
	);
};

const mapStateToProps = (state) => {
  return R.pick(['todos', 'isLoading'], state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (value) => {
      dispatch(actions.addTodo(value));
    },
    onTodoClick: (id) => {
      dispatch(actions.toggleTodo(id));
    },
  };
};

const WrappedApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

module.exports = WrappedApp;
