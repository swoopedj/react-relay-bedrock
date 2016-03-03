var Todo = require('./todoModel.js');

//These handle all of the requests to the database.
module.exports = function(app) {
	app.get('/', function(req, res, next) {
     
	});
	app.post('/', function(req, res, next) {
		
	});
	app.delete('/:todo_id', function(req, res, next) {

	});
	app.put('/:todo_id', function(req, res, next) {

	});

};

// GET 'api/todos'

// POST 'api/todos'

// PUT 'api/todos/:todo_id

// DELELE 'api/todos/:todo_id