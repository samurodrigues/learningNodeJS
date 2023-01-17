const express = require('express')
const app = express()
var soma = require('../aula03/somar')
var strSoma = String(soma(1, 1))

app.get('/', function (req, res) {
  res.send(strSoma)
})

app.listen(8081, function () {
  console.log("It's OK.")
})
