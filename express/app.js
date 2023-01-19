const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html')
})

app.get('/about', function (req, res) {
  res.sendFile(__dirname + '/html/about.html')
})

app.listen(8082, function () {
  console.log("serve's run")
})
