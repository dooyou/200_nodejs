//32 중첩 for문 구구단
console.log("=32========================================================");
for (let dan=2; dan<10; dan++) {
  console.log(`==${dan} 시작==`);
  for (let num=1; num<10; num++){
    console.log(`${dan} X ${num} = ${dan*num}`);
  }
}
//31 for 반복문
console.log("=31========================================================");
const number_ex31 = 9;
for(let value=1; value<10; value++){
  console.log(number_ex31 * value);
}
//30 조건문
console.log("=30========================================================");
const number_ex30 = 3;
let msg = "";
switch (number_ex30) {
  case 1:
    msg = "값이 아닙니다.";
    break;
  case 2:
    msg = "값이 아닙니다.";
    break;
  case 3:
    msg = "찾는 값입니다.";
    break;
  case 4:
    msg = "값이 아닙니다.";
    break;
  case 5:
    msg = "값이 아닙니다.";
    break;
  default:
}
console.log(msg);

//29 조건문 if else if else
console.log("=29========================================================");
const score = 85;
let degree = "";
if(score >= 90){
  degree = "A";
} else if (score >= 80){
  degree = "B";
} else if (score >= 60){
  degree = "C";
} else {
  degree = "F";
}
console.log("degree : ", degree);

//28 조건문 if else
console.log("=28========================================================");
if (true) {
  console.log("true");
} else {
  console.log("false");
}

//27 조건문 if
console.log("=27========================================================");
if (true) {
  console.log("조건이 true일 때 실해됩니다.");
}
const number = 100;
if (number >= 100) {
  console.log("number는 100보다 큽니다.");
}
if (number > 200) {
  console.log("number는 200보다 큽니다.");
}
