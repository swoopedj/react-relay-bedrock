
let nextID = 0
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

