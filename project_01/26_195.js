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

// 데이터 수정
app.get('/modify/:id', (req,res) => {
  // 파일을 읽어옵니다.
  fs.readFile('26_194.html', 'utf-8', (error, data) => {
    connection.query('SELECT * from books WHERE number =?', [req.params.id], (error, results) => {
      if (error) throw error;
      console.log(req.params.id);
      res.send(ejs.render(data, {
        data: results[0],
      }));
    });
  });
});

app.post('/modify/:id', (req,res) => {
  const body = req.body;
  connection.query('UPDATE books SET genre = ?, name = ?, writer = ? WHERE number = ?',
    [body.genre, body.name, body.writer, req.params.id], (error, results) => {
      if (error) throw error;
      // 조회페이지로 이동
      res.redirect('/');
    });
});

// 데이터 삭제
app.get('/delete/:id', (req, res) => {
  connection.query('DELETE FROM books where number=?', [req.params.id], () => {
    // 조회 페이지로 이동
    res.redirect('/');
  });
});
