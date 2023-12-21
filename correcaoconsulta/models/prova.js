const connection = require('../mysql/conn');

const ProvaModel = {
  getAllProvas: () => {
    return new Promise((resolve, reject) => {
      const selectQuery = 'SELECT * FROM Prova';
      connection.query(selectQuery, (err, results) => {
        if (err) {
          reject(err);
        } else {
          const ProvaData = results.map(result => ({
            id_prova_realizada: result.id_prova_realizada,
            id_prova_duplicada: result.id_prova_duplicada,
            classificacao_final: result.classificacao_final,
            num_Aluno: result.num_Aluno,
          }));
          resolve(ProvaData);
        }
      });
    });
  },

  getProvaById: (id) => {
    return new Promise((resolve, reject) => {
      const selectQuery = 'SELECT * FROM Prova WHERE id_prova_realizada = ?';
      connection.query(selectQuery, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            const questaoData = {
              id_questao: results[0].id_questao,
              cotacaoTotal: results[0].cotacaoTotal,
              Prova_id_prova_realizada: results[0].Prova_id_prova_realizada,
              TipoQuestao_id_tipo: results[0].TipoQuestao_id_tipo,
            };
            resolve(questaoData);
          } else {
            resolve(null);
          }
        }
      });
    });
  },

  createProva: (prova) => {
    return new Promise((resolve, reject) => {
      const insertQuery = 'INSERT INTO Prova (id_prova_realizada, id_prova_duplicada, classificacao_final, num_Aluno) VALUES (?, ?, ?, ?)';
      const values = [prova.id_prova_realizada, prova.id_prova_duplicada, prova.classificacao_final, prova.num_Aluno];
  
      connection.query(insertQuery, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.insertId);
        }
      });
    });
  },

  updateProva: (id, updatedProva) => {
    return new Promise((resolve, reject) => {
      const keys = Object.keys(updatedProva);
      const values = Object.values(updatedProva);
  
      // Generate SET clause dynamically
      const setClause = keys.map((key) => `${key} = ?`).join(', ');
  
      // Create the update query with the dynamic SET clause
      const updateQuery = `UPDATE Prova SET ${setClause} WHERE id_prova_realizada = ?`;
  
      // Execute the query with values array including the values and id
      connection.query(updateQuery, [...values, id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.affectedRows > 0);
        }
      });
    });
  },

  getProvasByDuplicateId: (duplicateId) => {
  return new Promise((resolve, reject) => {
    const selectQuery = 'SELECT * FROM Prova WHERE id_prova_duplicada = ?';

    
    connection.query(selectQuery, [duplicateId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const ProvaData = results.map(result => ({
          id_prova_realizada: result.id_prova_realizada,
          id_prova_duplicada: result.id_prova_duplicada,
          classificacao_final: result.classificacao_final,
          num_Aluno: result.num_Aluno,
        }));
        resolve(ProvaData);
        }
      });
    });
  },

  getProvasReady: (id) => {
  return new Promise((resolve, reject) => {
    const selectQuery = `
      SELECT Prova.*, COUNT(Questao.id_questao) AS total_questoes
      FROM Prova
      JOIN Questao ON Prova.id_prova_realizada = Questao.Prova_id_prova_duplicada
      WHERE Prova.id_prova_duplicada = ? AND Questao.cotacaoTotal IS NOT NULL
      GROUP BY Prova.id_prova_duplicada
      HAVING COUNT(Questao.id_questao) > 0
         AND COUNT(Questao.id_questao) = SUM(CASE WHEN Questao.cotacaoTotal IS NOT NULL THEN 1 ELSE 0 END)
    `;

    connection.query(selectQuery, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          const ProvaData = results.map(result => ({
            id_prova_realizada: result.id_prova_realizada,
            id_prova_duplicada: result.id_prova_duplicada,
            classificacao_final: result.classificacao_final,
            num_Aluno: result.num_Aluno,
          }));
          resolve(ProvaData);
        }
      });
    });
  },

  deleteProva: (id) => {
    return new Promise((resolve, reject) => {
      const deleteQuery = 'DELETE FROM Prova WHERE id_prova_realizada = ?';
      connection.query(deleteQuery, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.affectedRows > 0);
        }
      });
    });
  },
};

module.exports = ProvaModel;
