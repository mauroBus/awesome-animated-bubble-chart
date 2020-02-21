require('dotenv').config()
const { HOST, NODE_ENV, API_HOST } = process.env

const stringifiedEnv = Object.entries({
  NODE_ENV,
}).reduce((acc, [key, value]) => {
  acc[key] = JSON.stringify(value)
  return acc
}, {})

module.exports = {
  API_HOST,
  HOST,
  NODE_ENV,
  stringifiedEnv,
}
