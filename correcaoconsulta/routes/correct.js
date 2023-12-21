const express = require('express');
const router = express.Router();
const Prova = require('../models/prova');
const Questao = require('../models/questao');


/*Lista de provas
Recebe uma lista de to-
dos os IDs de prova
*/

/*FAZ O CODIGO RAPOSO*/
router.get('/listaprova/:id', async (req, res) => {
    try {
      //insere codigo
    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/corrAUTOprovas/:id', async (req, res) => {
    try {
      //insere codigo
    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/corriMANUALprovas/:id', async (req, res) => {
    try {
      //insere codigo
    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/prova/:id', async (req, res) => {
    try {
      //insere codigo
    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  


module.exports = router;