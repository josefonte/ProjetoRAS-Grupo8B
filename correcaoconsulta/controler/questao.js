const QuestaoModel = require('../models/questao');
const connection = require('../mysql/conn');

const QuestaoController = {
  getQuestaoData: async (req, res) => {
    try {
      const questaoData = await QuestaoModel.getQuestaoData();
      res.json({ questaoData });
    } catch (err) {
      console.error('Error in QuestaoController:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = QuestaoController;
