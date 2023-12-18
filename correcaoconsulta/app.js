const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const connection = require('./mysql/conn');
const ProvaController = require('./controler/prova');
const QuestaoController = require('./controler/questao'); // Add this line
const TipoQuestaoController = require('./controler/tipoquestao'); // Add this line

const seeTables=`SHOW TABLES;`;
const seeDatabase=`SHOW DATABASES;`;
const seeProva =  `SHOW COLUMNS FROM prova;`
const seeTipoQuestao =  `SHOW COLUMNS FROM tipoquestao;`
const seeQuestao =  `SHOW COLUMNS FROM questao;`


connection.query(seeDatabase, (err, results) => {
  if (err) {
    console.error('Error creating table TipoQuestao:', err);
  } else {
    console.log('TipoQuestao Table created successfully', results);
  }
});


const dropdatabase=`DROP DATABASE IF EXISTS fixe;`
// Create tables at the start
const createdatabase = `CREATE DATABASE fixe;`;

const usedatabase= 'USE fixe;'
connection.query(dropdatabase,(err, results) => {
  if (err) {
    console.error('Error deleting tables:', err);
  } else {
    console.log('Tables deleted successfully');
  }
});


connection.query(createdatabase,(err, results) => {
  if (err) {
    console.error('Error deleting tables:', err);
  } else {
    console.log('Tables deleted successfully');
  }
});
connection.query(usedatabase,(err, results) => {
  if (err) {
    console.error('Error deleting tables:', err);
  } else {
    console.log('Tables deleted successfully');
  }
});

connection.query(seeTables, (err, results) => {
  if (err) {
    console.error('Error creating table TipoQuestao:', err);
  } else {
    console.log('TipoQuestao Table created successfully', results);
  }
});


const createTableProva = `
  CREATE TABLE IF NOT EXISTS Prova (
    id_prova_realizada VARCHAR(255) NOT NULL,
    id_prova_duplicada VARCHAR(255) NOT NULL,
    classificacao_final INT(10) NULL,
    num_Aluno VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_prova_realizada)
  );
`;

connection.query(createTableProva, (err, results) => {
  if (err) {
    console.error('Error creating table Prova:', err);
  } else {
    console.log('Prova table created successfully');
  }
});
const createTableTipoQuestao = `
  CREATE TABLE IF NOT EXISTS TipoQuestao(
    id_tipo VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_tipo)
  );
`;

connection.query(createTableTipoQuestao, (err, results) => {
  if (err) {
    console.error('Error creating table TipoQuestao:', err);
  } else {
    console.log('TipoQuestao Table created successfully');
  }
});
const createTableQuestao = `
  CREATE TABLE IF NOT EXISTS Questao (
    id_questao VARCHAR(255) NOT NULL,
    cotacaoTotal FLOAT(10) NULL,
    Prova_id_prova_realizada VARCHAR(255) NOT NULL,
    TipoQuestao_id_tipo VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_questao),
    FOREIGN KEY (Prova_id_prova_realizada)
      REFERENCES Prova (id_prova_realizada)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION,
    FOREIGN KEY (TipoQuestao_id_tipo)
      REFERENCES TipoQuestao (id_tipo)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
  );
`;

connection.query(createTableQuestao, (err, results) => {
  if (err) {
    console.error('Error creating table Questao:', err);
  } else {
    console.log('Questao table created successfully');
  }
});



app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/api/prova', ProvaController.getProvaData);
app.get('/api/questao', QuestaoController.getQuestaoData); // Add this line
app.get('/api/tipoquestao', TipoQuestaoController.getTipoQuestaoData); // Add this line

connection.query(seeTables, (err, results) => {
  if (err) {
    console.error('Error creating table TipoQuestao:', err);
  } else {
    console.log('TipoQuestao Table created successfully', results);
  }
});

connection.query(seeProva, (err, results) => {
  if (err) {
    console.error('Error creating table TipoQuestao:', err);
  } else {
    console.log('TipoQuestao Table created successfully', results);
  }
});

connection.query(seeQuestao, (err, results) => {
  if (err) {
    console.error('Error creating table TipoQuestao:', err);
  } else {
    console.log('TipoQuestao Table created successfully', results);
  }
});

connection.query(seeTipoQuestao, (err, results) => {
  if (err) {
    console.error('Error creating table TipoQuestao:', err);
  } else {
    console.log('TipoQuestao Table created successfully', results);
  }
});


// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
