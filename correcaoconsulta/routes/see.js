const express = require('express');
const router = express.Router();
const Prova = require('../models/prova');
const Questao = require('../models/questao');

/*FAZ O CODIGO RAPOSO*/


router.get('/listprovas/:id/ready', async (req, res) => {
    try {
      //insere codigo
    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  router.get('/prova/:id', async (req, res) => {
    try {
      //insere codigo
    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/prova/:id/recorrect', async (req, res) => {
    try {
      //insere codigo
      console.log("ISTO NAO FAZ SENTIDO, NAO FAÇO")
    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


module.exports = router;