var Todo = require('./todosModel.js');

var router = require('express').Router();
//These handle all of the requests to the database.

	router.get('/', function(req, res, next) {
     Todo.create(req.body)
     .then(function(response) {
     	console.log('Response in Server', response)
     })
	});

	router.post('/', function(req, res, next) {
		Todo.create(req.body)
    .then(function(response) {
    console.log('Response in Server', response)
    })
	});

	router.delete('/:todo_id', function(req, res, next) {

	});

	router.put('/:todo_id', function(req, res, next) {

	});

	module.exports = router;


// GET 'api/todos'

// POST 'api/todos'

// PUT 'api/todos/:todo_id

// DELELE 'api/todos/:todo_id