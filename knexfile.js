// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/gci',
    migrations: {
      directory: './db/migrations'
    }
  },
  useNullAsefault: true
};
