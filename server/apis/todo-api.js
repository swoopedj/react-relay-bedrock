/* eslint new-cap: [2, {"capIsNewExceptions": ["Router"]}] */
const Todo = require('../models/todos.js');
const router = require('express').Router();
// These handle all of the requests to the database.

	router.get('/', (req, res) => {
  Todo.read()
     .then((todos) => {
       res.json({ todos });
     });
	});

	router.post('/', (req, res) => {
  const todo = req.body;
  todo.completed = false;
  Todo.create(todo)
    .then((returnedTodo) => {
      res.json({ returnedTodo });
    });
	});

	// router.delete('/:todo_id', (req, res) => {
	// });

	// router.put('/:todo_id', (req, res) => {

	// });

module.exports = router;
