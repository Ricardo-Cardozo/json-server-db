const jServer = require('json-server')
const server = jServer.create()
const router = jServer.router('db.json')
const middlewares = jServer.defaults()
const port = 3000

console.log("deu certo");

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log("deu certo");
})