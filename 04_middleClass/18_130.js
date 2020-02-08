// 130 list를 json 형식으로 파일에 저장하기, JSON.stringify()
const fs = require('fs');
const userList = [
  {name:'k', age:31 },
  {name:'j', age:31 },
];

fs.writeFile('./list.json', JSON.stringify(userList), err => {
  if (err) throw err ;
  console.log('saved!');
});


// JSON.stringify()는 JSON 오브젝트를 JSON 문자열(string)로 변환 해줍니다.

// 위 소스코드에서는 일반적으로 쓰이는 오브젝트가 담긴 리스트를
// JSON String 객체로 바꿔 현재 디렉토리에 파일로 저장합니다.
