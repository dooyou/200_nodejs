const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'adidas03315.cafe24.com',
  user: 'adidas03315',
  password: 'daeyun0331!',
  database: 'adidas03315',
  port: '3306',
  multipleStatements: true,
    typeCast: function (field, next) {
        if (field.type == 'VAR_STRING') {
            return field.string();
        }
        return next();
    }
});

connection.connect();

connection.query('SELECT * from books', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

connection.end();
