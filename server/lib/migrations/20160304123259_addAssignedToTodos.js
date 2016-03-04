exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.table('todos', (table) => {
      table.string('assigned_to').notNullable();
    }),
  ]);
};

exports.down = () => {};
