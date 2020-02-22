const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('./src/mock-data/api.json')
const middlewares = jsonServer.defaults({
  static: './dist',
})

const port = process.env.PORT || 4000

server.use(middlewares)

server.use(jsonServer.rewriter({
  '/api/*': '/$1'
}))

server.use(router)

server.listen(port, () => {
  console.log('Success!  👍')
  console.log(`Server running at http://localhost:${port}`)
})
