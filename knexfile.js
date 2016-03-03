
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'development'
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    debug: false, // set true for verbose database operations
  },

  test: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'test'
    },
    debug: false, // set true for verbose database operations
  },
};