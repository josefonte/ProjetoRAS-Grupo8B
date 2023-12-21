const mongoose = require('mongoose')

var provaDuplicadaSchema = new mongoose.Schema({
    _id: String,
    id_aluno: String,
    id_prova_original: String,
    publico: Boolean,
    respostas: mongoose.Schema.Types.Mixed // map idquestao: lista de opçoes/respostas
})

module.exports = mongoose.model('provaDuplicada', provaDuplicadaSchema)
