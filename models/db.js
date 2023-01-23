const Sequelize = require('sequelize')

const conexao = new Sequelize("cadastro", "root", "Luish@1512", {
    host: 'localhost',
    dialect: 'mysql'
})

conexao.authenticate().then(function(){

    console.log("conectado com sucesso!!")

}).catch(function(){
    console.log("erro conexão com o banco de dados")
})

module.exports = conexao