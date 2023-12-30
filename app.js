const express = require('express');
const app = express();
const Handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const salas = require("./models/Sala")
const horario = require("./models/horarios")

//const hbs = handlebars.create({ defaultLayout:'main' });
//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');
app.engine('handlebars', Handlebars.engine({ defaultLayout: './views/layouts/main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//rotas

app.get("/sala", function(req, res){
    salas.findAll({order: [['idSala', 'DESC']]}).then(function(sala){
       res.render('salas', {sala: sala});
    });
});

app.get("/add_salas", function(req, res){
    res.render('cad-sala');
});
app.post("/add_sala", function(req, res){
    salas.create({
        idEdificio: req.body.valor,
        Capacidade: req.body.valor1,
        Nome: req.body.nome
    }).then(function(){
        res.redirect('/salas')
    }).catch(function(erro){
        res.send("Erro: Cadastramento não realizado" + erro)
    })
   // res.render("Número: " + req.body.valor + "<br>Nome:" + req.body.nome + "<br>Valor: " + req.body.valor1 +"<br>");
});

//Rota para Apagar salas
app.get('/del-sala/:id', function (req, res){
    salas.destroy({
        where: {'ID' : req.params.id}
    }).then(function(){
        res.redirect('/salas')
        //res.send("Dados da sala pagado com sucesso")
    }).catch(function (erro){
        res.send("Sala não apagada");
    })
});

//Rotas Horario
app.get("/sala", function(req, res){
    horario.findAll({order: [['idSala', 'DESC']]}).then(function(sala){
       res.render('salas', {sala: sala});
    });
});



app.post("/add_horario", function(req, res){
    horario.create({
        Hora: req.body.hora,
        Prova: req.body.nome,
        Docente: req.body.nome2,
        Alunos: req.body.lista,
        Disponivel: req.body.Dispon,
    }).then(function(){
        res.redirect('/Horario')
    }).catch(function(erro){
        res.send("Erro: Cadastramento não realizado" + erro)
    })
   
});


app.listen(8050, ()=> {
    console.log("Servidor iniciado na porta 8050: http://localhost:8050");
});