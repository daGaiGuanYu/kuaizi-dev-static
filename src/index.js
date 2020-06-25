// @ts-check
const Url = require('url')
const Path = require('path')
const FS = require('fs')

/**
 * @param {import('http').IncomingMessage} req 
 * @param {import('http').ServerResponse} res 
 * @param {String} dir 
 * @returns {import('stream').Writable|boolean}
 */
module.exports = function(req, res, dir){
  const filename = Url.parse(req.url).query
  if(!filename){
    res.statusCode = 400
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('路径有点问题，别忘了路径要以问号开头')
    return
  }

  const path = Path.join(dir, filename)
  if(!FS.existsSync(path)){
    res.statusCode = 404
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('没找到文件')
    return
  }

  return FS.createReadStream(path).pipe(res)
}