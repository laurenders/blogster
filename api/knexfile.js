// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.POSTGRES_HOST || "127.0.0.1",
      database: process.env.POSTGRES_DB || 'postgres',
      user:     process.env.POSTGRES_USER || 'postgres',
      password:  process.env.POSTGRES_PASSWORD ||'docker',
      port:  process.env.POSTGRES_PORT || 5432
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
