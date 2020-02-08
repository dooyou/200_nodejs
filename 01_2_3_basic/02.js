//18 배열(array) 출력
console.log("=18========================================================");
const arCoffee = [];
arCoffee.push("Cappuccino");
arCoffee.push("Caffe Latte");
arCoffee.push("Caffe Mocha");
arCoffee.push("Americano","Espresso","Caramel macchiato");
console.log("arCoffee : ", arCoffee);
console.log("arCoffee length : ", arCoffee.length);
console.log("arCoffee[6] : ", arCoffee[6]);
console.log("arCoffee[0] : ", arCoffee[0]);

//17 배열(array) 선언
console.log("=17========================================================");
const arNumbers = [];
arNumbers.push(1);
arNumbers.push(2);
arNumbers.push(3);
const arTexts = [];
arTexts.push('hello', 'welcome', 'bye');
console.log(arNumbers);
console.log(arTexts);

//16 배열(array) 선언
console.log("=16========================================================");
const numbers_ = [1, 2, 3];
const strings = ['hello', 'bye', 'welcome'];
// new Array()를 이용하는 방법은 []를 이용하는 방법과 동일. []를 이용하는게 좋음.
const numbers_2 = new Array(1,2,3);
const strings2 = new Array('hello', 'bye', 'welcome');
console.log('numbers_ : ', numbers_);
console.log('numbers_2 : ', numbers_2);
console.log('strings : ', strings);
console.log('strings2 : ', strings2);

//15 문자열 찾기 indexOf()
console.log("=15========================================================");
const string_1 = 'hello';
const string_2 = 'helelelelelello';
const string_3 = 'The method then selects elements from the start argument.';
console.log('hel : ', string_1.indexOf('hel'));
console.log('el : ', string_1.indexOf('el'));
console.log('elelelel : ', string_2.indexOf('elelelel'));
console.log('method : ', string_3.indexOf('method'));
console.log('bye : ',string_3.indexOf('bye'));

//14 문자열 개수 세기 .length
console.log("=14========================================================");
const string = 'hello';
const string2 = 'The method then selects elements from the start argument, and up to (but not including) the end argument.';
console.log('string:', string.length);
console.log('string2:', string2.length);
console.log('string[0]:', string[0]);
console.log('string2[104]:', string[104]);

//13 나머지 구하기 - 홀수, 짝수 판단
console.log("=13========================================================");
console.log('5 % 2 :', 5%2);
const numbers = [5,6,7,8];
console.log(numbers[0], 'is even number:', numbers[0] % 2 === 0);
console.log(numbers[1], 'is even number:', numbers[1] % 2 === 0);
console.log(numbers[2], 'is even number:', numbers[2] % 2 === 0);
console.log(numbers[3], 'is even number:', numbers[3] % 2 === 0);

//12 더하기, 빼기, 곱하기, 나누기
console.log("=12========================================================");
const number10 = 10;
const number20 = 20;
const plusResult = number10 + number20;
const minusResult = number10 - number20;
const multipleresult = number10 * number20;
const divideResult = number10 / number20;
console.log('10 + 20 = ', plusResult);
console.log('10 - 20 = ', minusResult);
console.log('10 * 20 = ', multipleresult);
console.log('10 / 20 = ', divideResult);
