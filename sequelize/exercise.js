const reqSequelize = require('sequelize')
const sequelize = new reqSequelize('exercise', 'root', '98451', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize
  .authenticate()
  .then(function (erro) {
    console.log('Conectado com sucesso!')
  })
  .catch(function (erro) {
    console.log('Falha ao se conectar: ' + erro)
  })

const Post = sequelize.define('posts', {
  title: {
    type: reqSequelize.STRING
  },
  content: {
    type: reqSequelize.TEXT
  }
})
//Post.sync({ force: true })

Post.create({
  title: 'The biggest carrot',
  text: 'asdoikngosdigjsfdobikfdpbonmfdobdnmfoib'
})
