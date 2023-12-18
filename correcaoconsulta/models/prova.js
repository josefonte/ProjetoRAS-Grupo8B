const connection = require('../mysql/conn');

const ProvaModel = {
  getProvaData: () => {
    return new Promise((resolve, reject) => {
      const selectQuery = 'SELECT * FROM Prova';
      connection.query(selectQuery, (err, results) => {
        if (err) {
          reject(err);
        } else {
          const provaData = results.map(result => ({
            id_prova_realizada: result.id_prova_realizada,
            id_prova_duplicada: result.id_prova_duplicada,
            classificacao_final: result.classificacao_final,
            num_Aluno: result.num_Aluno,
          }));
          resolve(provaData);
        }
      });
    });
  },
};

module.exports = ProvaModel;
