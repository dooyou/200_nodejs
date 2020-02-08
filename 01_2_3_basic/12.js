//98 피보나치 수열
console.log("=98========================================================");
const fibonacci = (n) => {
  if(n<=1) return 1;
  return fibonacci(n - 1) + fibonacci(n-2);
};
for(let i=1; i<10; i+=1){
  console.log(fibonacci(i));
}
//99 재귀함수로 합계 구하기
console.log("=99========================================================");
const scores = [85,95,76];
const sum = (list, total, length) => {
  if(length === list.length) return total;
  return sum(list, total+list[length], length+1);
};
console.log('sum : ', sum(scores, 0, 0));
//100 재귀함수로 평균 궇기
console.log("=100========================================================");
const average = (list, total, length) => {
  if(length === list.length) return total / length;
  return average(list, total + list[length], length+1);
};
console.log('average : ', average(scores, 0, 0));
