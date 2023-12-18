const ProvaModel = require('../models/prova');
const connection = require('../mysql/conn');


const ProvaController = {
  getProvaData: async (req, res) => {
    try {
      const provaData = await ProvaModel.getProvaData();
      res.json({ provaData });
    } catch (err) {
      console.error('Error in ProvaController:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = ProvaController;
