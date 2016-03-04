const db = require('../lib/db');
const Todo = module.exports;

Todo.create = function(attrs) {
  return db('todos').insert(attrs, ['id', 'text', 'completed'])
  .then(function(response) {
  	return response[0];
  })
  .catch(function(error) {
  	console.log('ERROR on Todo create', error)
  	throw error;
  })
};

Todo.read = function() {
  return db('todos').select()
  .then(function(response) {
  	return response;
  })
  .catch(function(error) {
  	console.log('ERROR', error)
  	throw error;
  })
};

Todo.update = function(attrs) {
	
};

Todo.remove = function(attrs) {
	
};
