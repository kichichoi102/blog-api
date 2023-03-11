import type { Knex } from 'knex';

// set env var directory to root
require('dotenv').config({path:__dirname+'/./../../.env'});

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.POSTGRES_CLIENT,
    connection: {
      database: process.env.POSTGRES_USER,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: process.env.MIGRATIONS_TABLE_NAME,
    },
  },

  production: {
    client: process.env.POSTGRES_CLIENT,
    connection: {
      database: process.env.POSTGRES_USER,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: process.env.MIGRATIONS_TABLE_NAME,
    },
  },
};

module.exports = config;
