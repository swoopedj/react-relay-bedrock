var pg = require('./db')

pg.schema.createTableIfNotExists('todos', function(table) {
	table.increments('id').primary();
	table.string('text').notNullable();
	table.boolean('completed').notNullable();
})
.then(function(result) {
	console.log('Successfuly Banked Tables')
})
.catch(function(error) {
	console.log('Error with Schema: ', error)
})