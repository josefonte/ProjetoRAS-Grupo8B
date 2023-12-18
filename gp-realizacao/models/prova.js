const mongoose = require('mongoose')

var respostaSchema = new mongoose.Schema({
    _id: String,
    id_questao: String,
    opcoes: [String]
})

var provaDuplicadaSchema = new mongoose.Schema({
    _id: String,
    id_aluno: String,
    id_prova_original: String,
    publico: Boolean,
    respostas: [respostaSchema]
})




//module.exports = mongoose.model('resposta', respostaSchema)
module.exports = mongoose.model('provaDuplicada', provaDuplicadaSchema)
