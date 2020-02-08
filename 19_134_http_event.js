const http = require('http');
const server = http.createServer();

// 이벤트 연결
server.on('request', () => {
  console.log('Request');
});
server.on('connection', () => {
  console.log('Connection');
});
server.on('close', () => {
  console.log('Close');
});
server.listen(50000, () =>{
  console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
const testClose = function () {
  server.close();
  console.log('서버가 종료되었습니다. http://127.0.0.1:50000');
};
setTimeout(testClose, 3000)

// 주요 이벤트
// request : 클라이언트가 요청할 때 발생하는 이벤트
// connection : 클라이언트가 접속할 때 발생하는 이벤트
// close : 서버가 종료 될 때 발생하는 이벤트
// clientError : 클라이언트에서 오류가 날 때 발생하는 이벤트
// checkContinue : 클라이언트가 지속적인 연결을 하고 있을 때 발생하는 이벤트
