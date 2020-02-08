// 127 fs.appendFile() 파일에 내용 추가하기.
const fs = require('fs');
const list = [1,2,3,4,5];

list.forEach(item => fs.appendFile('./chapters.txt', `chapter ${item}\n`, (err) => {
  if (err) throw err;
  console.log(`The file has been append! ${item}`);
}));

// 앞에서 배운 fs.write()를 이용하면 파일을 새로 만들기 때문에 기존에 있는 내용에
// 다른 내용을 추가하려면 파일을 열어서 기존 내용을 읽은 후 추가하고 저장해야해서 불편.

// fs.appendFile()을 이용하면 이 과정은 쉽게 할 수 있습니다.

// 5번 라인 : list 배열의 1~5까지 값들을 하나씩 뽑아서 item 변수에 하나씩 넣습니다.
// item에 들어 있는 숫자 앞에 chapter를 붙이고 \n 을 이용해 한줄 띄웁니다.
// 만든 문자열을 fs.appendFile()을 이용해 chapters.txt에 한줄씩 추가.
// 한 줄씩 추가될 때 순서는 비동기이기 때문에 랜덤하게 됩니다.
