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
                id_prova_realizada: prova._id,
                id_prova_duplicada: prova.id_prova_original,
                classificacao_final: null,
                num_Aluno: prova.id_aluno,
                //respostas: prova.respostas
          }
          /*
          info = {
              prova: {
                id_prova_realizada: prova._id,
                id_prova_duplicada: prova.id_prova_original,
                classificacao_final: null,
                num_Aluno: prova.id_aluno,
                respostas: prova.respostas
              }
          }
	*/
	
          axios.post('http://localhost:7778/api/cc/prova', info)
            .then(response => {
            
            	for(var i=0;i<prova.respostas.length;i++){
            	  resposta={}
            	  resposta["_id"]=prova._id
            	  for(var j=0;j<prova.respostas.selectedIndexes.length;j++){
            	    resposta["questionId"]= prova.respostas[i].questionId
            	    resposta["resposta"]= prova.respostas[i].selectedIndexes[j]
            	
            	    axios.post('http://localhost:7778/api/cc/questão',resposta )
            	  }
            	}
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
  //if (req.params.idProva == req.body._id)
  console.log(req.body)

  var lista=[]

  //for (var i=0;i<req.body.length;i++){
    //lista.push({"opcoes":req.body["respostas"][i]["selectedIndexes"]}) 
  //} 
  
  var lista=req.body["respostas"]
/*
  var dados={
    "_id":req.body._id,
    "id_aluno":req.body.id_aluno,
    "id_prova_original":req.body.id_prova_original,
    "respostas":lista
  }
  
*/
var dados={
  "_id":req.body._id+req.body._id_aluno,
  "id_aluno":req.body._id_aluno,
  "id_prova_original":req.body._id,
  "respostas":lista
}

    ProvaDuplicada.addProva(dados)
      .then( _ => {
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