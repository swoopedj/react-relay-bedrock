//requires knexfile
const config = require('../../knexfile');
//sets environment to either NODE_ENV or development
const env = process.env.NODE_ENV || 'development';
//sets up postgres with knex and the environment
const pg = require('knex')(config[env]);

module.exports = pg;

//This is to make sure that the running database's schema is up to date