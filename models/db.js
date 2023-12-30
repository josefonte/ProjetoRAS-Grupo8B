
const Sequelize = require('sequelize');

const sequelize = new Sequelize("Logistica", "root", "Probum123", 
{
    host: 'localhost',
    dialect: 'mysql'
});
//sequelize.authenticate().then(function(){
 // console.log("Conexão com banco de dados realizada com sucesso")
//}).catch(function(){
    //console.log("Erro: Conexão com o banco de dados não realizada")});
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}