export {};
const app = require('./')
const { pool } = require('./utils/pool')

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  console.log(`Started on ${PORT}`)
})


process.on('exit', () => {
  console.log('goodbye');
  pool.end();
})