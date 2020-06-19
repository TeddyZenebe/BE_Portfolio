// Update with your config settings.
require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    migrations: {
      directory:  './Database/migrations',
    },
    seeds: {
      directory: './Database/seeds',
    },
    connection: {
      host: process.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME,
      user:  process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
