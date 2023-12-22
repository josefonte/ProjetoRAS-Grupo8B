var Prova = require('../models/prova')

/* Número de registos de provas na BD */ 
module.exports.getAll = () => {
    return Prova.find()
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}


/* Get prova com o respetivo ID */ 
module.exports.getProva = (idProva, idUtilizador) => {
    return Prova.findOne({_id: idProva, acesso_autorizado: idUtilizador})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

/* Get todas as provas que um Utilizador tem acesso */
module.exports.getProvas = idUtilizador => {
    return Prova.find({acesso_autorizado: idUtilizador})
        .then(respostas => {
            return respostas
        })
        .catch(erro => {
            return erro
        }); 
}


/* Criar uma nova prova */
module.exports.criarProva = (novaProva) => {
    return Prova.create(novaProva)
        .then(resposta => {
            return resposta;
        })
        .catch(erro => {
            return erro;
        });
}

/* Verifica se o docente é o responsável pela prova */
module.exports.verificarCriadorProva = (idProva, idDocente) => {
    return Prova.findOne({ _id: idProva, id_docente: idDocente })
        .then(resposta => {
            return resposta !== null; // Retorna true se o docente for o responsável, false caso contrário
        })
        .catch(erro => {
            return erro;
        });
}

/* Após realizar a verificação do docente apaga a prova */
module.exports.apagarProva = (idProva) => {
    return Prova.deleteOne({_id:idProva})
        .then(resposta => {
            return resposta;
        })
        .catch(erro => {
            return erro;
        });
}

/* Obter detalhes da prova para edição */
module.exports.obterDetalhesProvaParaEdicao = (idProva, idDocente) => {
    return Prova.findOne({ _id: idProva, id_docente: idDocente })
        .then(resposta => {
            return resposta;
        })
        .catch(erro => {
            return erro;
        });
}

/* Atualizar uma prova existente */
module.exports.atualizarProvaExistente = (idProva, idDocente, novaProva) => {
    return Prova.findOneAndUpdate({ _id: idProva, id_docente: idDocente }, novaProva, { new: true })
        .then(resposta => {
            return resposta;
        })
        .catch(erro => {
            return erro;
        });
}