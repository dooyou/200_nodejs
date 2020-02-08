//클로저
console.log("=101========================================================");
function grandParent(g1, g2){
  const g3 = 3;
  return function parent(p1, p2){
    const p3 = 33;
    return function child(c1, c2){
      const c3 = 333;
      return g1+g2+g3+p1+p2+p3+c1+c2+c3;
    };
  };
}
const parentFunction = grandParent(1,2);
console.log("parentFunction : ", parentFunction);
const childFunction = parentFunction(11,22);
console.log("childFunction : ",childFunction);
console.log("childFunction : 111,222 : ", childFunction(111,222));
console.log("=========================================================");
const first = () => {
  second();
  console.log('첫 번쨰');
}
const second = () => {
  third();
  console.log('두 번째');
}
const third = () => {
  console.log('세 번쨰');
}
first();
