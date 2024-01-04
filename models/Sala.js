const db = require("./db")
const Sequelize = require('sequelize');


const Sala = db.define('sala', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    idEdificio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Capacidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});
//Sala.sync();
module.exports = Sala