const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const connection = mysql.createConnection({
  host: 'adidas03315.cafe24.com',
  user: 'adidas03315',
  password: 'daeyun0331!',
  database: 'adidas03315',
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
