var express = require('express');
var router = express.Router();
var ProvaDuplicada = require('../controllers/prova')

/* GET home page. */
router.get('/api/evaluation/prova', function(req, res, next) {
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

router.put('/api/evaluation/prova', function(req, res, next) {
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

router.post('/api/evaluation/correct', function(req, res, next) {
  // !REVIEW - post incoerente
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

router.post('/api/evaluation/save/:idProva', function(req, res, next) {
  if (req.params.idProva == req.body._id)
    ProvaDuplicada.addProva(req.body)
      .then(dados => {
        res.jsonp(dados)
      })
      .catch(erro => {
        res.jsonp({'error':erro})
      })
});

module.exports = router;
