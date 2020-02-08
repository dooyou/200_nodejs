//126 수정하기
const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
  if(err) throw err;
  let contents = data.toString();
  contents = 'replaced';
  fs.writeFile('./message.txt', contents, (err) => {
  if (err) throw err;
  console.log('The file has been replaced!');
  });
});

// 기존 파일 대신 'replaced'문자열을 넣는 예제입니다.

// 4번 라인 : 비동기 방식으로 파일을 엽니다. sync가 붙어 있지 않은 기본 .readFile()
// 이기 때문에 비동기입니다. 두번쨰 인자로 받은 익명함수 (err, data) => {}를 실행.

// 6번 라인 : contents라는 변수에  data.toString()으로 읽어온 데이터를 넣습니다.
// 7번 라인 : 6번 라인에서 읽어온 그 내용을 'replaced'로 변경. 다시 write 합니다.
