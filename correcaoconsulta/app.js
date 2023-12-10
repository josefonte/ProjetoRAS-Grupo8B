var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const cors = require('cors');
const mysql = require('mysql2')
const fs = require('fs');


var correctRouter = require('./routes/correct');
var seeRouter = require('./routes/see');

var app = express();




const connection = mysql.createConnection({
  host: `localhost`,
  user: `gajofixe`,
  password: `raposeira`,
  database: `fixe`,
});

const resetTables = `
SELECT CONCAT('DROP TABLE IF EXISTS ', table_name, ';')
FROM information_schema.tables
WHERE table_schema = 'fixe';
`
connection.query(resetTables, (err, results) => {
  if (err) {
    console.error('Error deleting tables:', err);
  } else {
    console.log('Tables deleted successfully');
  }}
)

const createTableProva=`
CREATE TABLE IF NOT EXISTS Prova (
  id_prova_realizada VARCHAR(255) NOT NULL,
  id_prova_duplicada VARCHAR(255) NOT NULL,
  classificacao_final INT(10) NULL,
  num_Aluno VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_prova_realizada));
`
connection.query(createTableProva, (err, results) => {
  if (err) {
    console.error('Error creating table Prova:', err);
  } else {
    console.log('Prova table created successfully');
  }}
)


const createTableTipoQuestao = `
CREATE TABLE IF NOT EXISTS TipoQuestao(
  id_tipo VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_tipo));`
connection.query(createTableTipoQuestao, (err, results) => {
  if (err) {
    console.error('Error creating table TipoQuestao:', err);
  } else {
    console.log('TipoQuestao Table created successfully');
  }}
)

const createTableQuestao = `
CREATE TABLE IF NOT EXISTS Questao (
  id_questao VARCHAR(255) NOT NULL,
  cotacaoTotal FLOAT(10) NULL,
  Prova_id_prova_realizada VARCHAR(255) NOT NULL,
  TipoQuestão_id_tipo VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_questao),
    FOREIGN KEY (Prova_id_prova_realizada)
    REFERENCES Prova (id_prova_realizada)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    FOREIGN KEY (TipoQuestão_id_tipo)
    REFERENCES TipoQuestao (id_tipo)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);`
connection.query(createTableQuestao, (err, results) => {
  if (err) {
    console.error('Error creating table Questao:', err);
  } else {
    console.log('Questao table created successfully');
  }}
)
/*
const createUser=`
CREATE USER gajofixe@localhost IDENTIFIED BY raposeira ;
GRANT ALL PRIVILEGES ON fixe.* TO gajofixe@localhost;
GRANT ALL PRIVILEGES ON *.* TO gajofixe@localhost;`
connection.query(createUser, (err, results) => {
  if (err) {
    console.error('Error creating table Questao:', err);
  } else {
    console.log('Questao table created successfully');
  }}
)
*/

app.use(cors()); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/correct', correctRouter);
app.use('/api/see', seeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({erro:err});
});

module.exports = app;
