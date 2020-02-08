// 131 파일을 json 형식으로 불러오기, JSON.parse()
const fs = require('fs');
fs.readFile('./list.json', (err, data) => {
  if(err) throw err;
  const json = JSON.parse(data.toString());
  console.log('name : ', json[0].name);
  console.log('age : ', json[0].age);
  console.log('name : ', json[1].name);
  console.log('age : ', json[1].age);
})

// JSON.parse()는 JSON String 객체를 자바스크립트 오브젝트로 변환하는 기능.
// 즉, JSON.stringify()의 기능과 반대되는 역할을 한다고 볼 수 있습니다.

// 위 소스코드에서는 JSON 형식의 파일을 읽어들여 JSON 오브젝트로 변환한 후,
// 자바스크립트 오브젝트로 바꿔 출력.

// 5번 라인 설명 : 파일에서 읽은 data를 문자열로 변환시키는 data.toString()를 수행.
// 변환된 문자열을 JSON.parse(data.toString()) 이용해 JSON 객체로 다시 변환.
// 따라서 json 상수명은 JSON.parse(data.toString())에서 반환된 JSON 오브젝트로 초기화 됨.
