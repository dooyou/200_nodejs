
const printHello = () => console.log("Hello");
//50 화살표 함수
console.log("=50========================================================");
const printHello2 = () => "Hello2";
const printMessage = message => console.log(message);
const plus = (a,b) => a+b;
const minus = (a,b) => a-b;

printHello();
console.log(printHello2());
printMessage('how are you');
console.log('plus : %d', plus(10,20));
console.log('minus : %d', minus(20,10));

//51 화살표 함수 {} 이용하기
console.log("=51========================================================");
const sumAndPrint = (a,b) => {
  const result = a+b;
  return `결과는 ${result}입니다.`
}
const result = sumAndPrint(19,29);
console.log(result);

//52 화살표 함수 예제
console.log("=52========================================================");
const studentList = [
  {name:'kangAgee', age:31, math:85, science:75},
  {name:'goYangI', age:31, math:95, science:83},
  {name:'lion', age:35, math:76, science:98}
];
const pluss = (a,b) => a+b;
studentList.forEach(student => console.log(`${student.name} total: ${pluss(student.math, student.science)}`));
console.log('--------------------------------');

studentList.forEach((student) => {
  console.log(`${student.name} total: ${pluss(student.math, student.science)}`);
});
//53 콜백함수 callback()
console.log("=53========================================================");
const sum = (a,b) => a+b;
const printResult = (result) => {
  console.log(`결과는 ${result}입니다.`);
};
const calculationAndPrint = (calculationResult, callback) => {
  callback(calculationResult);
};

calculationAndPrint(sum(10,20), printResult);

//54 함수의 유효범위 scope 및 익명 함수
console.log("=54========================================================");

//전역 변수
let resultSubtraction ;
function subtraction(a,b){
  resultSubtraction = a - b;
}
subtraction(100,50);
console.log(resultSubtraction);

// 변수에 익명함수 형태로 함수를 정의 할 수 있음.
function multiple(a,b){
  const result = a*b;
  return result;
}

const r = multiple(12,3);
console.log(r);

//지역 변수
// function summ(a,b){
//   const resultSum = a+b;
// }
// sum(20,30);
// console.log(resultSum);

//55 난수 생성(reandom)
console.log("=55========================================================");
const randomNumber = Math.random();
const zeroToNine = Math.floor(Math.random() * 10, 10); //0 to 9
const twentyToThirth = Math.floor(Math.random() * ((30-20)+1), 10) + 20; // 20 to 30
const oneToTen = Math.floor(Math.random() * 10, 10) + 1; // 1 to 10
const makeRandom = (min,max) => Math.floor(Math.random() * ((max-min)+1), 10) + min;

console.log('randomNumber:', randomNumber);
console.log('zeroToNine:', zeroToNine);
console.log('twentyToThirth:', twentyToThirth);
console.log('oneToTen', oneToTen);

for(let value=1; value<7; value +=1){
  console.log('10 to 20 : ', makeRandom(1,45));
}
//56 반올림 round(number)
console.log("=56========================================================");
const number = 88.7;
const divide = 1 / 2 ;
console.log('type:%s %d', typeof number, number);
console.log('round', typeof number, Math.round(number));
console.log('divide:%d,%d', divide, Math.round(divide));
//57 최대값 max(), 최소값 min()
console.log("=57========================================================");
const maxResult = Math.max(-10,10,20,30,40);
const minResult = Math.min(-10,10,20,30,40);
console.log("max : ", maxResult);
console.log("min : ", minResult);
//58 절대값
console.log("=58========================================================");
const abs1 = Math.abs('-1');
const abs2 = Math.abs('-3.141592');
const abs3 = Math.abs([2]);
const abs4 = Math.abs([1,2]);
const abs5 = Math.abs({});
const abs6 = Math.abs(null);
const abs7 = Math.abs('');
const abs8 = Math.abs([]);

console.log("abs1 :", abs1);
console.log("abs2 :", abs2);
console.log("abs3 :", abs3);
console.log("abs4 :", abs4);
console.log("abs5 :", abs5);
console.log("abs6 :", abs6);
console.log("abs7 :", abs7);
console.log("abs8 :", abs8);
//59 거듭제곱
console.log("=59========================================================");
const pow1 = Math.pow(7,2);
const pow2 = Math.pow(2, 10);
const pow3 = Math.pow(8, 1/3);
const pow4 = Math.pow(2, 0.5);
const pow5 = Math.pow(7, -2);
const pow6 = Math.pow(8, -1/3);
const pow7 = Math.pow(-7, 2);
const pow8 = Math.pow(-7, 1/2);

console.log("pow1 :", pow1);
console.log("pow2 :", pow2);
console.log("pow3 :", pow3);
console.log("pow4 :", pow4);
console.log("pow5 :", pow5);
console.log("pow6 :", pow6);
console.log("pow7 :", pow7);
console.log("pow8 :", pow8);
