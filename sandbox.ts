const pool = require('./src/utils/pool')

pool.query('DROP TABLE IF EXISTS vegetables CASCADE;')

pool.query('CREATE TABLE vegetables (name TEXT NOT NULL UNIQUE)')

process.on('exit', () => {
  console.log('goodbye');
  pool.end();
})