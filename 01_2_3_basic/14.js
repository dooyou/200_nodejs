// 102 합성함수
console.log("=102========================================================");
const multiple5 = x => x*5;
const add10 = x => x+10;

const plus = (a,b) => a+b;
const minus = (a,b) => a-b;
//(20+10)*5
console.log(multiple5(add10(20)));
//(10+20)-40
console.log(minus(add10(20),40));

// 103 커링 curring
console.log("=103========================================================");
const add = x => y => x+y;
const add_10 = add(10);
console.log("add(10) : ", add(10));
console.log("add_10(20) : ", add_10(20));
console.log("add(10)(20) : ", add(10)(20));

// 104 커링 curring 예제 1
console.log("=104========================================================");
const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;
const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');
const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');
console.log("americano : ", americano);
console.log("latte : ", latte);

// 105 커링 curring 예제 2
console.log("=105========================================================");
const fs = require('fs');
const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err, data) => {
  if(err) throw err;
  console.log(data.toString());
});
const thisDirOpenFileAndPrint = openFileAndPrint('./');
const otherDirOpenFileAndPrint = openFileAndPrint('../');

thisDirOpenFileAndPrint('104_curring_example.js');
otherDirOpenFileAndPrint('test.txt');
