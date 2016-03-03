let todoApp = require('../reducers/todoApp');
let {createStore, applyMiddleware} = require('redux');
let thunkMiddleware = require('redux-thunk');

module.exports = function(initialState) {
	let store = createStore(
		todoApp,
		applyMiddleware(thunkMiddleware)
	);
	
	return store;
}