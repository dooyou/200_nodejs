//http 모듈
const http = require('http');

const server = http.createServer();

// 웹서버 실행
server.listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

// 웹서버 종료
const testClose = function() {
  server.close();
  console.log('서버가 종료되었습니다. http://127.0.0.1:50000');
};

// 강제 서버 종료
setTimeout(testClose, 3000)

// nodejs.org에 있는 코드
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
