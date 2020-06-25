const http = require('http')
const writeStaticFile = require('../../src/index')

http.createServer( (req, res) => {
  writeStaticFile(req, res, )
})