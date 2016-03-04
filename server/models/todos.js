const db = require('../../lib/db');
const Todo = module.exports;

Todo.create = function(attrs) {
  return db('todos').insert({id: attrs.id, text: attrs.text, completed: attrs.completed})
  .then(function(response) {
  	console.log (response);
  	return response;
  })
  .catch(function(error) {
  	console.log('ERROR', error)
  	return error;
  })
};

Todo.read = function(attrs) {
  return db('todos').select(*)
  .then(function(response) {
  	console.log (response);
  	return response;
  })
  .catch(function(error) {
  	console.log('ERROR', error)
  	return error;
  })
};

Todo.update = function(attrs) {

};

Todo.remove = function(attrs) {

};
