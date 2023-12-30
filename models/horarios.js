const db = require("./db")

const Horarios = db.sequelize.define('horarios', {
    idHorarios: {
        type: db.Sequelize.INTEGER
    },
    Hora: {
        type: db.Sequelize.STRING
    },
    idProva: {
        type: db.Sequelize.STRING
    },
    idDocente: {
        type: db.Sequelize.STRING
    },
    Lista_Alunos: {
        type: db.Sequelize.STRING
    },
    Disponibilidade: {
        type: db.Sequelize.BOOLEAN
    }
})
module.exports = Horarios