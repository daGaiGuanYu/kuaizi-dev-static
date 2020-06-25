# kuaizi-dev-static
筷子本身未提供将来也不会提供静态文件下载功能，但是网站开发中，文件下载是不可避免的  
筷子建议使用 nginx 做代理  
但是很多时候，我们需要做一些小测试，单单为测试而配一通代理，是很令人不高兴的事  
本项目为筷子提供一个**测试用的**静态文件下载功能

请不要在生产项目中使用（不安全、性能低、功能少）

## 在筷子中的应用
```javascript
const Path = require('path')
const { HandleRequest, Constant, Server } = require('kuaizi')
const writeStaticFile = require('kuaizi-dev-static')

const position = Path.join(__dirname, './static')

HandleRequest.get('/static', ctx => {
  writeStaticFile(ctx.req, ctx.res, position)
  return Constant.Nothing // 这个一定不要漏
})

Server.start()
```

## 在原生应用中
```javascript
const Http = require('http')
const Path = require('path')
const writeStaticFile = require('kuaizi-dev-static')

const position = Path.join(__dirname, './static')

const server = Http.createServer( (req, res) => {
  writeStaticFile(req, res, position)
})
server.listen(8080)
```