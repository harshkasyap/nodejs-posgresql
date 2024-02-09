const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'postgres://db_tu4w_user:Kq2KtC1qkSKj591Bc3u40P5XdrUl6cFG@dpg-cn30m55jm4es73bh5lrg-a/db_tu4w',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'db_tu4w_user',
    password: env.DB_PASSWORD || 'Kq2KtC1qkSKj591Bc3u40P5XdrUl6cFG',
    database: env.DB_NAME || 'db_tu4w',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;
