var Todo = require('../models/todos.js');
var router = require('express').Router();
//These handle all of the requests to the database.

	router.get('/', function(req, res, next) {
     Todo.read()
     .then(function(todos) {
     		res.json({todos});
     })
	});

	router.post('/', function(req, res, next) {
		var todo = req.body;
		todo['completed'] = false;
		Todo.create(todo)
    .then(function(todo) {
    	res.json({todo});
    })
	});

	router.delete('/:todo_id', function(req, res, next) {
		
	});

	router.put('/:todo_id', function(req, res, next) {

	});

module.exports = router;