const expressApp = require('./src/index')
const { pool } = require('./src/utils/pool')

const PORT = process.env.PORT || 7890;

expressApp.listen(PORT, () => {
  console.log(`Started on ${PORT}`)
})

process.on('exit', () => {
  console.log('goodbye');
  pool.end();
})
