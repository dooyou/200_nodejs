const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: '.cafe24.com',
  user: '',
  password: '',
  database: '',
  port: '3306',
  // multipleStatements: true,
  //   typeCast: function (field, next) {
  //       if (field.type == 'VAR_STRING') {
  //           return field.string();
  //       }
  //       return next();
  //   }
});

const app = express();
app.use(bodyParser.urlencoded({
  extended : false,
}));

app.listen(3000, () => {
  console.log('Running');
  connection.connect();
});

// 조회
app.get('/', (req,res) => {
  fs.readFile('26_192.html', 'utf-8', (error, data) => {
    //select 쿼리
    connection.query('SELECT * from books', (error, results, fields) => {
      if(error) throw error;
      res.send(ejs.render(data, {
        data:results,
      }));
    });
  });
});

// 데이터 추가
app.get('/create', (req,res) => {
  fs.readFile('26_193.html', 'utf-8', (error, data) => {
    if (error) throw error;
    res.send(data);
  });
});

// 데이터 추가
app.post('/create', (req,res) => {
  const body = req.body;
  connection.query('INSERT INTO books (genre, name, writer, releasedate) VALUE (?, ?, ?, ?)',
    [body.genre, body.name, body.writer, body.releasedate], () => {
      // 조회 페이지로 이동
      res.redirect('/');
    });
});
