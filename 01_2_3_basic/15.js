// 106 프리디케이트 predicate
console.log("=106========================================================");
const isApple = (fruit) => {
  if(fruit === 'apple') return true;
  return false;
}
console.log(isApple('apple'));

// 107 프리디케이트로 정렬 .sort(predicate)
console.log("=107========================================================");
const numbers = [1,2,19,38,4,98,25];
const isFirstBiggerThenSecond = (first, second) => {
  if(first > second) return true;
  return false;
}
const sortedNumbers = numbers.sort(isFirstBiggerThenSecond);
console.log(sortedNumbers);
