import config from '@/config';

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: config.postgres.host,
    port: config.postgres.postgres_port,
    user: config.postgres.user,
    password: config.postgres.password,
    database: '',
    searchPath: ['knex', 'public']
  },
});

export default knex;
