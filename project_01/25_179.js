// mysql 모듈 사용
const mysql = require('mysql');

// 연결할 DB 정보입력
const connection = mysql.createConnection({
  host: 'adidas03315.cafe24.com',
  user: 'adidas03315',
  password: 'cari8087!',
  database: 'adidas03315',
  port: '3306',
});

// 데이터베이스 연결
connection.connect();

//Insert Query문
connection.query('insert into books (genre, name, writer, releasedate) values (\'fantasy\', \'LUMINE\', \'Emma Krogell\', \'2015-05-15\'), (\'comedy\', \'Mygiant Nerd Boyfriend\', \'fishball\', \'2017-03-03\'), (\'romance\', \'I Love Yoo\', \'Quimchee\', \'2016-08-21\'), (\'action\', \'Tower of God\', \'SIU\', \'2017-10-01\'), (\'action\', \'Rise from Ashes\', \'Madeleine Rosca\', \'2016-01-13\');', (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});

//연결 종료
connection.end();
