//41 예외처리 try catch
console.log("=41========================================================");
try {
  printMessage('Hello');
} catch (e) {
  console.log('error : ', e);
}
console.log('program finished');

//42 예외처리 try catch final
console.log("=42========================================================");
const printHello = () => console.log('Hello');
try{
  printHello();
} catch (e){
  console.error(e);
} finally {
  console.log('finally1');
}
try{
  printBye();
} catch (e) {
  console.error(e);
} finally {
  console.log('finally2');
}
//43 전역 객체 Global Object
console.log("=43========================================================");
//process
// console.log(process.env);
// console.log('------------');
// console.log(process.arch);
// console.log('------------');
// console.log(process.uptime());
// console.log('------------');
// console.log(process.memoryUsage());
// console.log('------------');
// console.log(process.version);
// console.log('------------');
// console.log(process.versions);
// // console
// console.log('Number : %d+%d=%d', 1,2,3+4);
// console.log('String : %s', 'Hello World!');
// console.log('JSON : %j', {name : 'node.js'});
// console.log('String1', 'String2.');

//44 function 함수 선언
console.log("=44========================================================");
function sayHello() {
  console.log("Hello");
}
sayHello();
const printBye = () => {
  console.log('bye');
}
printBye();

//45 매개변수 parameter와 인자 argument
console.log("=45========================================================");
function printMessage(pMessage){
  console.log(pMessage);
}
printMessage('Hello');
const printMessage2 = (pMessage) => {
  console.log(pMessage);
}
printMessage2('Bye');

// 46 function 함수의 값 반환, return
console.log("=46========================================================");
function sum(a, b){
  const r = a+b;
  return r;
}
const result = sum(100, 200);
console.log(result);

//47 등급 구하는 함수 만들기
console.log("=47========================================================");
const userList = [
  {name:'kangAgee', age:23, score:70},
  {name:'goYangI', age:27, score:90},
  {name:'tokki', age:31, score:60}
];

function getDegree(score){
  if( score >= 90 ){
    return "A";
  } else if (score >= 80 ){
    return "B";
  } else if (score >= 70 ){
    return "C";
  } else {
    return "F";
  }
}

userList.forEach((user) => {
    const result_user = `name: ${user.name}, score: ${getDegree(user.score)}`;
    console.log(result_user);
});

//48 여러가지 함수 선언 방법
console.log("=48========================================================");
function printSaymsg(message){
  console.log(message);
}
const printWelcome = function() {
  console.log('welcome');
};
printSaymsg('Bye');
printWelcome();

console.log('typeof printSaymsg : %s', typeof printSaymsg);
console.log('typeof printWelcome : %s', typeof printWelcome);

const pm = printSaymsg;
pm('good morning');
console.log('typeof pm : %s', typeof pm);

//49 일급객체
console.log("=49========================================================");
function plus(a,b){
  return a + b;
}
function minus(a,b){
  return a - b;
}

let p = plus;
console.log('typeof plus : %s', typeof plus);
console.log('typeof p : %s', typeof p);
console.log('10+20=%d', p(10,20));
//함수를 파라미터로 받는 함수
function calculate(a,b, func){
  return func(a,b);
}
// 함수를 넘겨서 계산함
console.log(calculate(10, 20, minus));
console.log(calculate(10, 20, plus));
