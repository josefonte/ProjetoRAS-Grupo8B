const connection = require('../mysql/conn');

const QuestaoModel = {
  getQuestaoData: () => {
    return new Promise((resolve, reject) => {
      const selectQuery = 'SELECT * FROM Questao';
      connection.query(selectQuery, (err, results) => {
        if (err) {
          reject(err);
        } else {
          const questaoData = results.map(result => ({
            id_questao: result.id_questao,
            cotacaoTotal: result.cotacaoTotal,
            Prova_id_prova_realizada: result.Prova_id_prova_realizada,
            TipoQuestao_id_tipo: result.TipoQuestao_id_tipo,
          }));
          resolve(questaoData);
        }
      });
    });
  },
};

module.exports = QuestaoModel;
