const connection = require('../mysql/conn');

const TipoQuestaoModel = {
  getTipoQuestaoData: () => {
    return new Promise((resolve, reject) => {
      const selectQuery = 'SELECT * FROM TipoQuestao';
      connection.query(selectQuery, (err, results) => {
        if (err) {
          reject(err);
        } else {
          const tipoQuestaoData = results.map(result => ({
            id_tipo: result.id_tipo,
          }));
          resolve(tipoQuestaoData);
        }
      });
    });
  },
};

module.exports = TipoQuestaoModel;
