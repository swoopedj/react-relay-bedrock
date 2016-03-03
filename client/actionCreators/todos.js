
let nextID = 0

function fetchTodos(currentTime) {
	return dispatch => {
		dispatch(requestTodos(currentTime));
		return 
	}
}

function requestTodos (currentTime) {
	return {
		type : 'REQUEST_TODOS',
		time : currentTime,
	};
}

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id : nextID++,
    text
  }
}

function toggleTodo(id) {
	return {
		type : 'TOGGLE_TODO', 
		id,
	}
}

module.exports = {
	addTodo,
	toggleTodo
};

