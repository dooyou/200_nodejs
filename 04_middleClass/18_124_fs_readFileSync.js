// 124 fs.readFileSync() 동기로 파일 열기
const fs = require('fs');

const data = fs.readFileSync('./message.txt');
const string = data.toString();

console.log('sync work01');
console.log(string);

// readFileSync 함수는 동기적 읽기 함수로, 함수가 실행되면 해당 파일을 읽으면서
// 다른 작업을 동시에 할 수 없게 됩니다. 동기로 파일을 읽는 방법이 동시성을 해치기 때문에
// 프로그램 실행을 느리게 할 수 있지만, 설정 파일을 읽고 적용해야 하거나
// 사용자 로그 파일을 보고 출입을 허가해야 하는 등 실행 순서를 반드시 보장해야 할 때 등
// 활용할 수 있는 상황이 많습니다.

// 4번째 라인 : 현재 디렉토리(./)에 있는 message.txt 파일을 동기적으로 읽는
// readFileSync() 사용하여 data 상수로 저장.

// 5번째 라인 : data 상수를 toString() 함수를 사용하여 문자열 타입으로 변환하고
// string 상수에 저장.

// 7~8번째 라인 : sync work01을 출력하고, string에 저장된 문자열 출력.
