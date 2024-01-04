const db = require("./db")
const Sequelize = require('sequelize');


const horarios = db.define('Horarios', {
    Hora: {
        type: Sequelize.DATE,
        allowNull: false,
    },

    idProva: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idDocente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Lista_Alunos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Disponibilidade: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});
//horarios.sync();
module.exports = horarios;
