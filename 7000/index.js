const { buffer } = require('micro')

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const cookieToken = 'ialphabetagammeJFKADLFJ'
    console.log('cookie set as:', cookieToken)
    res.setHeader('Set-Cookie', `token=${cookieToken}; SameSite=Strict`)
    res.end('7000')
  } else {
    console.log('method', req.method)
    console.log('cookie', req.headers.cookie)
    console.log('body', (await buffer(req)).toString('utf8'))
    res.end()
  }
}
