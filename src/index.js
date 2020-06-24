// @ts-check
const Url = require('url')
const Path = require('path')
const FS = require('fs')
const Http = require('http')

/**
 * @param {Http.IncomingMessage} req 
 * @param {Http.ServerResponse} res 
 * @param {String} dir 
 */
module.exports = function(req, res, dir){
  const filename = Url.parse(req.url).query
  const path = Path.join(dir, filename)
  if(!FS.existsSync(path))
    return true // 真代表错误
  FS.createReadStream(path).pipe(res)
}