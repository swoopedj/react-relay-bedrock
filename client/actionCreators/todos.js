let nextID = 2;

function fakeInsertNewTodo() {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve(nextID++)
		}, 500);
	});
}

function fakeFetch() {
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			resolve([
				{
					id : 0,
					text : 'First Todo',
					completed : false,
				},
				{
					id : 1,
					text : 'Second Todo',
					completed : true,
				},
			])
		}, 500);
	});
}

function addTodo(value) {
	return dispatch => {
		dispatch(requestNewTodo(value));
		return fakeInsertNewTodo().then(id => dispatch(receiveNewTodo(id)))
	}
}

function fetchTodos(currentTime) {
	return dispatch => {
		dispatch(requestTodos(currentTime));
		return fakeFetch().then(todos => {
			dispatch(receiveTodos(todos))
		})
	}
}

function requestTodos () {
	return {
		type : 'REQUEST_TODOS',
	};
}

function receiveTodos(todos) {
	return {
		type : 'RECEIVE_TODOS',
		todos,
	};
}

function receiveNewTodo(id) {
	return {
		type : 'RECEIVE_NEW_TODO',
		id,
	};
}

function requestNewTodo(text) {
  return {
    type: 'REQUEST_NEW_TODO',
    id : 'creating',
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
	toggleTodo,
	fetchTodos
};

