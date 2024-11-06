const { Pool } = require('pg');
require('dotenv').config(); 

const pool = new Pool({
  user: process.env.DB_USER || 'postgres', 
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'postgres2',
  password: process.env.DB_PASS || 'geraldcool12',
  port: process.env.DB_PORT || 5432,
});


pool.connect()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Database connection error', err.stack));

module.exports = pool;