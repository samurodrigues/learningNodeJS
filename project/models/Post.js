const db = require('./db')

const Post = db.sequelize.define('postagens', {
  titulo: {
    type: db.reqSequelize.STRING
  },
  conteudo: {
    type: db.reqSequelize.TEXT
  }
})

//Post.sync({ force: true })

module.exports = Post
