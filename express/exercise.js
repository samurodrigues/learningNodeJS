const express = require('express')
const app = express()
var soma = require('../aula03/somar')
var strSoma = String(soma(1, 2))

app.get('/', function (req, res) {
  res.send(strSoma)
})

app.get('/ola/:nome/:cargo', function (req, res) {
  res.send('Ola ' + req.params.nome)
})

app.get('/test/:cargo/:nome/:cidade', function (req, res) {
  res.send(
    '<h1> Ola, ' +
      req.params.nome +
      '!</h1>' +
      '<h2> Seu cargo e: ' +
      req.params.cargo +
      ';</h2>' +
      '<h3> Resido na cidade de: ' +
      req.params.cidade +
      '.'
  )
})

app.listen(8081, function () {
  console.log("It's OK.")
})
