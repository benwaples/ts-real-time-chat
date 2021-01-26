const pool = require('./src/utils/pool')
const fs = require('fs')

pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));


process.on('exit', () => {
  console.log('goodbye');
  pool.end();
})