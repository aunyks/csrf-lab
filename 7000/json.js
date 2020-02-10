const { text } = require('micro')

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const cookieToken = 'JSONALJfjldakjfalwiejnc'
    console.log('cookie set as:', cookieToken)
    res.setHeader('Set-Cookie', `token=${cookieToken}; SameSite=Strict`)
    res.end('json 7000')
  } else {
    console.log('method', req.method)
    console.log('cookie', req.headers.cookie)
    console.log('body', await text(req))
    res.end()
  }
}
