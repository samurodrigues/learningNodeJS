var http = require('http')
var soma = require('../aula03/somar')
var somaStr = String(soma(1, 3))
http
  .createServer(function (req, res) {
    res.end(somaStr)
  })
  .listen(3001)

console.log(`serve's run`)
