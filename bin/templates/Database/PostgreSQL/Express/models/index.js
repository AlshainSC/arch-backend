const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'chat_server_dev',
  password: 'admin',
  port: 5432
});

module.exports = pool;
