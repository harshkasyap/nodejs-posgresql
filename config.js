const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'dpg-cn30m55jm4es73bh5lrg-a.oregon-postgres.render.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'db_tu4w_user',
    password: env.DB_PASSWORD || 'Kq2KtC1qkSKj591Bc3u40P5XdrUl6cFG',
    database: env.DB_NAME || 'db_tu4w',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
