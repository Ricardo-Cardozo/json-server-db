const jServer = require('json-server')
const server = jServer.create()
const router = jServer.router('db.json')
const middlewares = jServer.defaults()
const port = 3000

server.use(middlewares)
server.use(router)
server.listen(port)