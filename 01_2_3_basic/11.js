//94 함수를 return
console.log("=94========================================================");
const returnFunction = () => (a,b) => a+b;
const plus = returnFunction();
console.log(plus(10,20));
//95 재귀함수 countdown
console.log("=95========================================================");
const countdown = (value) => {
  console.log('value : ', value);
  if(value === 0) return value;
  return countdown(value - 1);
};
console.log('result : ', countdown(10));
//96 재귀함수 1~n까지 더하기
console.log("=96========================================================");
const sumNumber = (start, end, accumulator) => {
  if(start > end) return accumulator;
  return sumNumber(start + 1, end, accumulator + start);
};
console.log('result : ', sumNumber(1,10,0));
//97 팩토리얼
console.log("=97========================================================");
const factorial = (n) => {
  if(n === 0) return 1;
  return n * factorial(n-1)
};
console.log('result : ', factorial(4));
