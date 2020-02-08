const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
  fs.readFile('./19_136.html', (error, data) => {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end(data);
  });
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
})

// fs 모듈을 이용해 서버에 있는 디스크에서 html페이지를 읽어와
// 사용자에게 제공 할 수 있습니다.

// request 이벤트 발생 시 readFile() 메소드를 사용해 html 페이지를 제공.
// 우선 사전에 readFile() 메소드를 사용해 불러올 html 페이지를 작성.
// 해당 html을 불러와 소스를 실행시킨 후
// 웹 브라우저를 열고 요청을 보내면 html 내용을 볼 수 있습니다.
