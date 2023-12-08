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

const script = fs.readFileSync('mysql/fixe.sql', 'utf8');

connection.query(script, (err, results) => {
  if (err) {
    console.error('Error executing SQL script:', err.message);
  } else {
    console.log('SQL script executed successfully');
  }

  connection.end();
});

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
