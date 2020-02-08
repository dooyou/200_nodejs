require('http').createServer((request, response) => {
  response.writeHead(200, { 'content-Type' : 'text/html' });
  response.end('Hello World!');
}).listen(50000, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

// response객체는 사용자의 요청(request)에 대해 응답(response)을 줄 때 사용합니다.

// 주요 메소드
// writeHead() : 응답 헤더 작성
// end() : 응답 본문 작성
