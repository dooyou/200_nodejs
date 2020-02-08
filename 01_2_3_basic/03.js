//26 삼항연산자
console.log("=26========================================================");
const num1 = 1;
const num2 = 2;
const list = [1,2,3,4];
const emptyList = [];
const result = num1>num2 ? 'num1' : 'num2';
console.log(result, '이(가) 더 큽니다.');

list.length > 0 ? console.log(list) : console.log('list가 비었습니다');
emptyList.length > 0 ? console.log(emptyList) : console.log('emptyList가 비었습니다');

//25 논리연산자
console.log("=25========================================================");
const value30 = 30;
const value50 = 50;
const andTrueTrue = value30 >= 30 && value50 >= 30;
const andTrueFalse= value30 >= 30 && value50 >= 100;
const andFalseFalse = value30 >= 40 && value50 >= 100;
const orTrueTrue = value30 >= 30 || value50 >= 30;
const orTrueFalse= value30 >= 30 || value50 >= 100;
const orFalseFalse = value30 >= 40 || value50 >= 100;
console.log("andTrueTrue", andTrueTrue);
console.log("andTrueFalse", andTrueFalse);
console.log("andFalseFalse",andFalseFalse);
console.log("---------------------------");
console.log("orTrueTrue", orTrueTrue);
console.log("orTrueFalse", orTrueFalse);
console.log("orFalseFalse",orFalseFalse);
//24 비교연산자
console.log("=24========================================================");
const a = 5;
const b = 6;
if(a==5){
  console.log( a == 5 );
  console.log( a == b);
  console.log( a == '5');
}
if(a===5){
  console.log( a === 5 );
  console.log( a === b);
  console.log( a === '5');
}
if(a>b){
  console.log( a > b);
}
if (a<b) {
  console.log(a < b);
}
if (a>=5) {
  console.log(a>=5);
  console.log(a>=b);
}
if (a<=5) {
  console.log(a<=5);
  console.log(a<=b);
}

//23 증감연산자
console.log("=23========================================================");
let number = 1;
console.log('number : ', number);
number += 1;
console.log('after number += 1 : ', number);
number -= 1;
console.log('after number -= 1 : ', number);
number += 10;
console.log('after number += 10 : ', number);
number -= 5;
console.log('after number -= 5 : ', number);

//22 true, false Boolean
console.log("=22========================================================");
console.log('10 > 20 : ', 10>20);
console.log('10 < 20 : ', 10<20);
const isTrue = true;
const isFalse = false;
console.log('isTrue : ', isTrue);
console.log('isfalse : ', isFalse);
console.log('typeof (true) :', typeof (true));
console.log('typeof (false) : ', typeof (false));
const number_3 = !1;
console.log(number_3);

//21 typeof로 변수의 타입(형) 알아보기
console.log("=21========================================================");
const pi = 3.14;
const name = "KangAgee";
console.log('hello : %s', typeof 'hello');
console.log("'20' : %s", typeof '20');
console.log("pi : %s", typeof 'pi');
console.log("name : %s", typeof 'name');
console.log("30 : %s", typeof 30);
console.log("[] : %s", typeof []);
console.log("{} : %s", typeof {});

//20 json 값 뽑기
console.log("=20========================================================");
const user3 = {name:"KangAgee", age:33};
console.log("user : ", user3);
console.log("user.name : ", user3.name);
console.log("user.age : ", user3.age);
user3.job = "developer";
user3.nation = "Korea";
console.log(user3);
const memberName = 'age';
console.log(user3[memberName]);

//19 json이란
console.log("=19========================================================");
const user = {};
user.name="KangAgee";
user.age=33;
console.log("User : ", user)
const user2 = {name:"KangAgee", age:33};
console.log("User2 : ", user2)
