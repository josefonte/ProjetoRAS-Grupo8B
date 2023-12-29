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

  axios.post(`http://localhost:8011/api/gestao/criar/${req.params.idUtilizador}`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(525).json({erro: erro, mensagem: "Erro na criação da prova"}))

})


/* PUT /api/gestao/gestprovas/edit/:idProva?idDocente=<ID_DOCENTE> */
router.put('/api/gestao/editar/:idProva', function(req, res, next){

  const idDocente = req.query.idDocente;
  
  if (idDocente != undefined){
    axios.put(`http://localhost:8011/api/gestao/editar/${req.params.idProva}?idDocente=${idDocente}`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro na edição da prova com o id " + req.params.idProva}))

  }
  else res.status(527).json({mensagem: "Rota Inválida"})
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
  else res.status(529).json({mensagem: "Rota Inválida"})
  
});





module.exports = router;