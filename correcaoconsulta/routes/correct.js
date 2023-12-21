const express = require('express');
const router = express.Router();
const Prova = require('../models/prova');
const Questao = require('../models/questao');


/*Lista de provas
Recebe uma lista de to-
dos os IDs de prova
*/

router.get('/listaprova/:id', async (req, res) => {
    try {
      const provasId = req.params.id;
      const provas = await Prova.getProvasByDuplicateId(provasId);
      const uniqueIdProvaDuplicadaSet = new Set(provas.map(prova => prova.id_prova_duplicada));
      res.json(uniqueIdProvaDuplicadaSet);
    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.put('/corrAUTOprovas/:id', async (req, res) => {
    try {
      const provaId = req.params.id;
      var prova;
      var provaCorrigida;

      // nao esta no sitio certo
      axios.get(`http://localhost:8011/api/gestao/prova/${provaId}`).then(resp => {
        // pode ser necessario tratar a data ?
        prova = resp.data;
      })


      
      const prova = await Prova.updateProva(provaId,provaCorrigida);
      res.json(prova);


    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.put('/corriMANUALprovas/:id', async (req, res) => {
    try {
      const provaId = req.params.id;
      var provaCorrigida;

      axios.get("http://localhost:porta_q_nao_sei/ frontend ou api do frontend manda as correçoes q o stor colocou na interface e eu ponho? n sei onde raiz isso acontece ").then(resp => {
        // pode ser necessario tratar a data ?
        provaCorrigida = resp.data;
      })

      
      const prova = await Prova.updateProva(provaId,provaCorrigida);
      res.json(prova);

    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


//mesma coisa q o anterior ?!?!?!?!?!
router.put('/prova/:id', async (req, res) => {
    try {
      const provaId = req.params.id;
      var provaCorrigidaSubmetida;

      axios.get("http://localhost:porta_q_nao_sei/ frontend ou api do frontend manda as correçoes q o stor colocou na interface e eu ponho? n sei onde raiz isso acontece ").then(resp => {
        // pode ser necessario tratar a data ?
        provaCorrigidaSubmetida = resp.data;
      })

      const prova = await Prova.updateProva(provaId,provaCorrigidaSubmetida);
      res.json(prova);

    } catch (error) {
      console.error('Error getting Provas:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  


module.exports = router;
