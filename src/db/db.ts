const knex = require('knex');
const knexfile = require('./knexfile');

// TODO in prod, use DI to create knex 
// instance so db access can be mocked for tests

// TODO in prod, dont access knexfile.development directly
// but decide from env vars which config to use

const db1 = knex(knexfile.development);
module.exports = db1;
