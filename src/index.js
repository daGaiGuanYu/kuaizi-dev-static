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
  const path = Path.join(dir, filename)
  if(!FS.existsSync(path))
    return true // 真，代表错误
  return FS.createReadStream(path).pipe(res)
}