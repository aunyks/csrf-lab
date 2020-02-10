module.exports = (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Allow', 'GET, PUT, POST, DELETE')
    res.setHeader('Content-Type', '*')
    res.end()
  } else {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Allow', 'GET, PUT, POST, DELETE')
    res.setHeader('Content-Type', '*')
    res.setHeader('Location', 'http://localhost:7000')
    res.statusCode = 307
    res.end()
  }
}
