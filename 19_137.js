const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
  fs.readFile('americano_starbucks.jpg', (err, data) => {
    response.writeHead(200, {'Content-Type' : 'image/jpeg'});
    response.end(data);
  });
}).listen(50001, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50001');
});

http.createServer((request, response) => {
  fs.readFile('Someonelikeyou.mp3', (err, data) => {
    response.writeHead(200, {'Content-Type' : 'audio/mp3'});
    response.end(data);
  });
}).listen(50002, () => {
  console.log('서버가 동작 중입니다, http://127.0.0.1:50002');
})
