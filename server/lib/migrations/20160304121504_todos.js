exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('lists', (table) => {
      table.increments(); // integer id

      table.timestamp('created_at').defaultTo(knex.raw('now()')).notNullable();

      // It's null if the list is public
      table.integer('user_id').nullable();

      // The name will be the same as the ID
      table.string('name').defaultTo(knex.raw('"List "||currval("lists_id_seq")')).notNullable();
    }),

    knex.schema.createTable('todos', (table) => {
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
