const Http = require('http')
const Path = require('path')
const writeStaticFile = require('../../src/index')

const position = Path.join(__dirname, './static')

const server = Http.createServer( (req, res) => {
  writeStaticFile(req, res, position)
})

server.listen(8080)