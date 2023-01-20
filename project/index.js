const express = require('express')
const app = express()
const reqSequelize = require('sequelize')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// Config
// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Conexão com o banco de dados mySQL
const sequelize = new reqSequelize('teste', 'root', '98451', {
  host: 'localhost',
  dialect: 'mysql',
  query: { raw: true }
})

//Rotas

app.get('/', (req, res) => {
  Post.findAll().then(function (posts) {
    res.render('home', { posts: posts })
  })
})

app.get('/cad', function (req, res) {
  res.render('formulario')
})

app.post('/add', (req, res) => {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  })
    .then(() => {
      res.redirect('/')
    })
    .catch(erro => {
      res.send('Houve um erro: ' + erro)
    })
})

app.listen(8081, () => {
  console.log("Server's run")
})

//GET envia os dados pela URL
//POST não passa os dados pela URL
