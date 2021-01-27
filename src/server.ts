const expressApp = require('./')
const { pool } = require('./utils/pool')

const PORT = process.env.PORT || 7890;

expressApp.listen(PORT, () => {
  console.log(`Started on ${PORT}`)
})


process.on('exit', () => {
  console.log('goodbye');
  pool.end();
})