const TipoQuestaoModel = require('../models/tipoquestao');
const connection = require('../mysql/conn');

const TipoQuestaoController = {
  getTipoQuestaoData: async (req, res) => {
    try {
      const tipoQuestaoData = await TipoQuestaoModel.getTipoQuestaoData();
      res.json({ tipoQuestaoData });
    } catch (err) {
      console.error('Error in TipoQuestaoController:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = TipoQuestaoController;
