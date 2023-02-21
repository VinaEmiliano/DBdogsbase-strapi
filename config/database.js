module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfq83c1gp3jo0b643lsg-a.frankfurt-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dbdogsbase'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Vb8JdJL8wh3waqqsQgDnCelF8NNC1q0g'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
