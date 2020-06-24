const Path = require('path')
const { HandleRequest, Constant, Server } = require('kuaizi')
const writeStaticFile = require('../../src/index')

HandleRequest.get('/static', ctx => {
  const notFound = writeStaticFile(ctx.req, ctx.res, Path.join(__dirname, './static'))
  if(notFound)
    return 404
  return Constant.Nothing
})

Server.start()