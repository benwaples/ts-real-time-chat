const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.PGGSSLMODE && {
        rejectUnauthorized: false 
    }
});

pool.on('connect', () => console.log('Postgres Connected'));

module.exports = pool;