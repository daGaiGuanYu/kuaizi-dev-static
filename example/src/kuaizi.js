const Path = require('path')
const { HandleRequest, Constant, Server } = require('kuaizi')
const writeStaticFile = require('../../src/index')

const position = Path.join(__dirname, './static')

HandleRequest.get('/static', ctx => {
  writeStaticFile(ctx.req, ctx.res, position)
  return Constant.Nothing // 这个一定不要漏
})

Server.start()