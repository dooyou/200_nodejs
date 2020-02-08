//125 fs.readfile() 비동기로 파일 열기
const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
  if(err) throw err;
  console.log('async work01');
  console.log(data.toString());
});

// 124번 예제에서 만든 message.txt를 비동기 방시으로 여는 예제입니다.
// 비동기 방식은 동기 방식에 비해 속도가 빠르기 때문에 실제 프로젝트에서도 많이 사용.
// 여러개의 파일에 있는 여러줄의 내용을 동시에 처리해야 하는 경우
// 비동기의 장점을 확인 할 수 있습니다.

// 비동기 방식은 return이 없기 때문에 다음에 실행할 로직을 callback 함수를 이용해
// 넘겨주고, 바로 이어서 실행하는 구조 입니다.

// (err,data) => { if(err) throw err; }는  해당 경로에 파일이 없는 등의 이유로
// err에 값이 들어오면 에러를 발생시키는 코드.

// 프로그램 형태에 따라 순서가 중요한 경우라면 동기 방식을 쓰고,
// 순서가 중요하지 않은 경우라면 비동기 방식을 쓰는 것이 효율적입니다.
