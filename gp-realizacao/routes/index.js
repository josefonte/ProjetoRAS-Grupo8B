var express = require('express');
var router = express.Router();
var ProvaDuplicada = require('../controllers/prova')
var axios = require('axios')

/* GET home page. */
router.get('/api/realizacao/prova', function(req, res, next) {
  if (req.query) {
    if (req.query.id) {
      ProvaDuplicada.getById(req.query.id)
        .then(prova => {
          res.jsonp(prova)
        })
        .catch(erro => {
          res.jsonp({'error':erro})
        })
    }
    else {
      res.jsonp({'error':'Id nonexistent in query string'})
    }
  }
  else {res.jsonp({'error':'Id nonexistent in query string'})}
});


router.get('/api/realizacao/prova_list', function(req, res, next) {
  ProvaDuplicada.list()
    .then(lista => {
      res.jsonp(lista)
    })
    .catch(erro => {
      res.jsonp({'error':erro})
    })
});

router.get('/api/realizacao/correct', function(req, res, next) {
  if (req.query) {
    if (req.query.id) {
      ProvaDuplicada.getById(req.query.id)
        .then(prova => {
          
          info = {
              prova: {
                id_prova_realizada: prova._id,
                id_prova_duplicada: prova.id_prova_original,
                classificacao_final: null,
                num_Aluno: prova.id_aluno,
                respostas: prova.respostas
              }
          }


          axios.post('http://localhost:7778/api/cc/prova', newprova)
            .then(response => {
              res.jsonp(response)
            })
            .catch(e =>{
              res.jsonp({'error':e})
            })
        })
        .catch(erro => {
          res.jsonp({'error':erro})
        })
    }
    else {
      res.jsonp({'error':'Id nonexistent in query string'})
    }
  }
  else {res.jsonp({'error':'Id nonexistent in query string'})}
});

router.put('/api/realizacao/prova', function(req, res, next) {
  if (req.query) {
    if (req.query.id && req.body._id == req.query.id) {
      ProvaDuplicada.updateProva(req.body)
        .then(dados => {
          res.jsonp(dados)
        })
        .catch(erro => {
          res.jsonp({'error':erro})
        })
    }
    else {
      res.jsonp({'error':'Id nonexistent in query string'})
    }
  }
  else {res.jsonp({'error':'Id nonexistent in query string'})}
});


router.put('/api/realizacao/updateRespostas', function(req, res, next) {
  if (req.body) {
      ProvaDuplicada.updateRespostasInQuestao(req.body.id_prova, req.body.id_questao, req.body.respostas)
        .then(dados => {
          res.jsonp(dados)
        })
        .catch(erro => {
          res.jsonp({'error':erro})
        })
  }
  else {res.jsonp({'error':'Error in body'})}
});


router.post('/api/realizacao/save/:idProva', function(req, res, next) {
  if (req.params.idProva == req.body._id)
    ProvaDuplicada.addProva(req.body)
      .then(dados => {
        res.jsonp(dados)
        axios.get('http://localhost:9999/api/realizacao/correct')
          .then(response => {
            res.jsonp(response)
          })
          .catch(e =>{
            res.jsonp({'error':e})
          })
      })
      .catch(erro => {
        res.jsonp({'error':erro})
      })
});




module.exports = router;
