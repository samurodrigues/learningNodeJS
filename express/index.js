const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Seja bem vindo')
})

app.get('/sobre', function (req, res) {
  res.send('Minha outra pagina')
})

app.listen(8081, function () {
  console.log('OK.')
})
