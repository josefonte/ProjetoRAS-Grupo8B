const db = require("./db")

const Sala = db.sequelize.define('sala', {
    ID: {
        type: db.Sequelize.INTEGER
    },
    Edificio: {
        type: db.Sequelize.STRING
    },
    Capacidade: {
        type: db.Sequelize.INTEGER
    },
    Nome: {
        type: db.Sequelize.STRING
    }
})
module.exports = Sala