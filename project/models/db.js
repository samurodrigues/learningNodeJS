const reqSequelize = require('sequelize')
//Conexão com o banco de dados MySQL
const sequelize = new reqSequelize('postapp', 'root', '98451', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = {
  reqSequelize: reqSequelize,
  sequelize: sequelize
}
