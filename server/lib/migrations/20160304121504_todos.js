exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTableIfNotExists('todos', (table) => {
      table.increments(); // integer id

      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();

      // It's null if the list is public
      table.integer('list_id').notNullable();
      table.string('text').notNullable();
      table.boolean('checked').notNullable();
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('lists'),
    knex.schema.dropTable('todos'),
  ]);
};
