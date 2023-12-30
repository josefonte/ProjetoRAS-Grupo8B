var express = require('express');
var router = express.Router();
var axios = require('axios');


/* GET /api/gestao/gestprovas/<IDU>?id=<IDP> */
router.get('/api/gestao/gestprovas/:idUtilizador', function(req, res, next) {
  const provaId = req.query.id
  if (provaId != undefined){
    axios.get(`http://localhost:8011/api/gestao/gestprovas/${req.params.idUtilizador}?id=${provaId}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro na obtenção da prova com o id: " + provaId}))
  }
  else{
    axios.get(`http://localhost:8011/api/gestao/gestprovas/${req.params.idUtilizador}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(522).json({erro: erro, mensagem: "Erro na obtenção das provas do docente " + req.params.idUtilizador}))

  }
});


/* GET /api/gestao/edit/:idProva?idDocente=<ID_DOCENTE> */
router.get('/api/gestao/editar/:idProva', function(req, res, next) {
  const idDocente = req.query.idDocente;
  if (idDocente != undefined){
    axios.get(`http://localhost:8011/api/gestao/editar/${req.params.idProva}?idDocente=${idDocente}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(523).json({erro: erro, mensagem: "Erro na obtenção da prova com o id: " + req.params.idProva}))
  }
  else res.status(524).json({mensagem: "Rota Inválida"})
})


/* POST /api/gestao/CREATE/<IDU>*/
router.post('/api/gestao/criar/:idUtilizador', function(req, res, next) {

  console.log(req.body)

  axios.post(`http://localhost:8011/api/gestao/criar/${req.params.idUtilizador}`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(525).json({erro: erro, mensagem: "Erro na criação da prova"}))

})


/* POST /api/gestao/CREATE/questao/<IDU>?idProva=<IDP> */
router.post('/api/gestao/criar/questao/:idUtilizador', function(req, res, next){
  const idProva = req.query.idProva;
  if (idProva != undefined){
    axios.post(`http://localhost:8011/api/gestao/criar/questao/${req.params.idUtilizador}?idProva=${idProva}`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro na edição da prova com o id " + req.params.idProva}))

  }
  else res.status(528).json({mensagem: "Rota Inválida"})
});


/* PUT /api/gestao/gestprovas/edit/:idProva?idDocente=<ID_DOCENTE> */
router.put('/api/gestao/editar/:idProva', function(req, res, next){

  const idDocente = req.query.idDocente;
  
  if (idDocente != undefined){
    axios.put(`http://localhost:8011/api/gestao/editar/${req.params.idProva}?idDocente=${idDocente}`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro na edição da prova com o id " + req.params.idProva}))

  }
  else res.status(529).json({mensagem: "Rota Inválida"})
});

/* DELETE /api/gestao/gestprovas/apagar/:idProva?idDocente=<ID_DOCENTE> */
router.delete('/api/gestao/apagar/:idProva', function(req, res, next){
  const idDocente = req.query.idDocente;

  if (idDocente != undefined){
    axios.delete(`http://localhost:8011/api/gestao/apagar/${req.params.idProva}?idDocente=${idDocente}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(528).json({erro: erro, mensagem: "Erro na eliminação da prova com o id " + req.params.idProva}))
  }
  else res.status(530).json({mensagem: "Rota Inválida"})
  
});

/* GET /api/realizacao/prova?idProva=<ID_PROVA> */
router.get('/api/realizacao/prova', function(req, res, next) {
  const idProva = req.query.idProva;
  if (idProva != undefined){
    axios.get(`http://localhost:9999/api/realizacao/prova?id=${idProva}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(550).json({erro: erro, mensagem: "Erro na obtenção da prova com o id: " + req.params.idProva}))
  }
  else res.status(551).json({mensagem: "Rota Inválida"})
})

/* PUT /api/realizacao/updateRespostas body={id_prova,id_questao, respostas} */
router.put('/api/realizacao/updateRespostas', function(req, res, next){
  
  if (req.body != undefined){
    axios.put(`http://localhost:9999/api/realizacao/updateRespostas`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(552).json({erro: erro, mensagem: "Erro na edição da prova com o id " + req.params.idProva}))

  }
  else res.status(553).json({mensagem: "Rota Inválida"})
});


/* POST /api/realizacao/save/<ID_PROVA>  body=prova*/
router.post('/api/realizacao/save/:idProva', function(req, res, next){
  const idProva = req.params.idProva;
  if (idProva != undefined){
    axios.post(`http://localhost:9999/api/realizacao/save/${idProva}`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(554).json({erro: erro, mensagem: "Erro na adição da prova " + req.params.idProva}))

  }
  else res.status(555).json({mensagem: "Rota Inválida"})
});


module.exports = router;
