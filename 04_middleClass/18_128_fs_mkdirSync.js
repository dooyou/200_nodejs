// 128 fs.mkdirSync
const fs = require('fs');
const dirName = `${__dirname}/img`;
console.log("dirName : ", dirName);

if (!fs.existsSync(dirName)) {
  fs.mkdirSync(dirName);
}

// 3번 라인 : 디렉토리 이름과 경로를 지정하기 위한 설정/
// ${__dirname}은 실행 환경 디렉토리의 절대경로를 받아옵니다.
// __ (언더바) 2개가 붙어 있는 모양입다.
// 본 소스파일이 들어 있는 디렉토리까지의 절대경로에 /img로 하위 디렉토리 이름을 설정.

// fs.existsSync(dirName) 함수는 dirName에서 지정한 디렉토리가 있는지 확인하는 함수.
// 존재하지 않을 경우에만 fs.existsSync(dirName)를 실행시켜서
// dirName대로 경로와 이름에 디렉토리를 생성.
