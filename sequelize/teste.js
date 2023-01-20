const reqSequelize = require('sequelize')
const sequelize = new reqSequelize('teste', 'root', '98451', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(function () {
    console.log('Conectado com sucesso!')
  })
  .catch(function (erro) {
    console.log('Falha ao se conectar: ' + erro)
  })

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: reqSequelize.STRING
  },
  conteudo: {
    type: reqSequelize.TEXT
  }
})

/*Postagem.create({
  titulo: 'titulo qualquer',
  conteudo: 'asdiojngsdoigkjdsoigj'
})*/

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: reqSequelize.STRING
  },
  sobrenome: {
    type: reqSequelize.STRING
  },
  idade: {
    type: reqSequelize.INTEGER
  },
  email: {
    type: reqSequelize.STRING
  }
})
//Usuario.sync({ force: true })

Usuario.create({
  nome: 'Samuel',
  sobrenome: 'Rodrigues',
  idade: 18,
  email: 'blabla@gmail.com'
})
