// 132 파일 이름 바꾸기
const fs = require('fs');

const renameFile = (fromFilePathName, toFilePathName) => {
  fs.rename(fromFilePathName, toFilePathName, (err) => {
    if(err) console.log(`ERROR : ${err}`);
  });
};

const fromFilePathName = './chapters.txt';
const toFilePathName = './bye.txt';

renameFile(fromFilePathName, toFilePathName);

// renameFile이름으로 함수를 선언.
// 함수의 내용은 fs.rename()을 파라미터로 받은 두 개의 값 from 경로 파일명,
// to 경로 파일명으로 fs.reame()을 실행합니다.
// 파일 이름을 변경하는 중에 에러가 나면 익명함수 (err) => { }가 에러를 출력.
