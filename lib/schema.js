var pg = require('./db')

pg.schema.createTableIfNotExists('todos', function(table) {
	table.increments('id').primary();
	table.string('todo').notNullable()
})
.then(funciton(result) {
	console.log('Successfuly Banked Tables')
})
.catch(function(error) {
	console.log('Error with Schema: ', error)
})