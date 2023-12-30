var express = require('express');
var router = express.Router();
var axios = require('axios');




router.get('/api/correct/listaprova/:id', function(req, res, next) {
    axios.get(`http://localhost:7778/api/correct/listaprova/${req.params.id}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(523).json({erro: erro, mensagem: "Erro na obtenção das provas corrigidas com id " + req.params.id}))

})

router.put('/api/correct/corrAUTOprovas/:id', function(req, res, next){  
    axios.put(`http://localhost:7778/api/correct/corrAUTOprovas/${req.params.id}'`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro na correçao auto com id " + req.params.idProva}))
});


router.put('/api/correct/corriMANUALprovas/:id', function(req, res, next){
    axios.put(`http://localhost:7778/api/correct/corriMANUALprovas/${req.params.id}`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro na correçao manual com id " + req.params.idProva}))
});

router.put('/api/correct/prova/:id', function(req, res, next){
  axios.put(`http://localhost:7778/api/correct/prova/:id${req.params.id}`, req.body).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro na edição da prova corrigida com id " + req.params.idProva}))
});




router.get('/api/correcaoconsulta/provas', async (req, res) => {
  axios.get(`http://localhost:7778/api/provas`).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(528).json({erro: erro, mensagem: "Erro na pedir as provas"}))
});

router.post('/api/correcaoconsulta/provas/', function(req, res, next){ 
    axios.post(`http://localhost:7778/api/provas`, req.body).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro a criar prova "}))
});

router.put('/api/correcaoconsulta/provas/:id', function(req, res, next){
  axios.put(`http://localhost:7778/api/provas/${req.params.id}`, req.body).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro na edição da prova corrigida com id " + req.params.idProva}))
});

router.delete('/api/correcaoconsulta/provas/:id', function(req, res, next){
    axios.delete(`http://localhost:7778/api/provas/${req.params.id}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(528).json({erro: erro, mensagem: "Erro na eliminação da prova com o id " + req.params.idProva}))
});





router.get('/api/correcaoconsulta/questoes', async (req, res) => {
  axios.get(`http://localhost:7778/api/questoes`).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(528).json({erro: erro, mensagem: "Erro na pedir as questoes"}))
});

router.get('/api/correcaoconsulta/questoes/:id', async (req, res) => {
  axios.get(`http://localhost:7778/api/questoes/${req.params.id}`).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(528).json({erro: erro, mensagem: "Erro na pedir a questao com id " + req.params.id}))
});

router.put('/api/correcaoconsulta/questoes/:id', function(req, res, next){
  axios.put(`http://localhost:7778/api/questoes/${req.params.id}`, req.body).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(526).json({erro: erro, mensagem: "Erro na edição da questao com id " + req.params.idProva}))
});

router.delete('/api/correcaoconsulta/questoes', function(req, res, next){
    axios.delete(`http://localhost:7778/api/questoes/${req.params.id}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(528).json({erro: erro, mensagem: "Erro na eliminação da questao com o id " + req.params.idProva}))
});






router.get('/api/see/listprovas/:id/ready', async (req, res) => {
  axios.get(`http://localhost:7778/api/see/listprovas/${req.params.id}/ready`).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(528).json({erro: erro, mensagem: " "+req.params.id}))
});

router.get('/api/see/prova/:id', async (req, res) => {
  axios.get(`http://localhost:7778/api/see/prova/${req.params.id}`).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(528).json({erro: erro, mensagem: " "+req.params.id}))
});

router.get('/api/see/alunoready/:id', function(req, res, next){ 
    axios.get(`http://localhost:7778/api/see/alunoready/${req.params.id}`).then(resp => {
      res.status(200).json(resp.data)
    })
    .catch(erro => res.status(526).json({erro: erro, mensagem: " "+req.params.id}))
});

router.get('/api/see/alunoready/:id/:id2', function(req, res, next){ 
  axios.get(`http://localhost:7778/api/see/alunoready/${req.params.id}/${req.params.id2}`).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(526).json({erro: erro, mensagem: " "+req.params.id+" "+req.params.id2}))
});

router.post('/api/see/prova/:id/recorrect', function(req, res, next){ 
  axios.post(`http://localhost:7778/api/see/prova/${req.params.id}/recorrect`, req.body).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(526).json({erro: erro, mensagem: " " +req.params.id}))
});




router.get('/api/correcaoconsulta/tipoquestoes', function(req, res, next){ 
  axios.get(`http://localhost:7778/api/tipoquestoes`).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(526).json({erro: erro, mensagem: " "}))
});

router.post('/api/correcaoconsulta/tipoquestoes', function(req, res, next){ 
  axios.post(`http://localhost:7778/api/tipoquestoes`, req.body).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(526).json({erro: erro, mensagem: " "}))
});

router.delete('/api/correcaoconsulta/tipoquestoes/:id', function(req, res, next){
  axios.delete(`http://localhost:7778/api/tipoquestoes/${req.params.id}`).then(resp => {
    res.status(200).json(resp.data)
  })
  .catch(erro => res.status(528).json({erro: erro, mensagem: " " + req.params.idProva}))
});


module.exports = router;
