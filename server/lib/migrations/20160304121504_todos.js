exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTableIfNotExists('todos', (table) => {
      table.increments('id').primary(); // integer id
      table.string('text').notNullable();
      table.boolean('completed').default(false);
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('todos'),
  ]);
};
