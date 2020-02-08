// 123 fs.write() 파일로 출력
const fs = require('fs');
const contents = 'hello\nbye\n안녕\n내용추가';
fs.writeFile('./message.txt', contents, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
// 책 예제는 에러남 : fs.writeFile('./message.txt', contents)
// 비동기 방식으로 해야하는데 동기방식 쓰듯이 해서...
// nodejs 버전이 올라간 이후로 fs.writeFile는 콜백함수가 필수인 것으로 판단..
// 저자 블로그에서 확인 https://krksap.tistory.com/1200

// 파일로 실행결과 저장하고 싶을 때는 fs.write()을 사용.
// 첫 번째 인자로 파일 경로, 두 번째 인자로 내용.
