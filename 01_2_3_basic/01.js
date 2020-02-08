//11 숫자인지 판단하기
console.log("=11========================================================")
const isNaN123 = isNaN(123);
const isNaNMinus123 = isNaN(-123);
const isNaN234 = isNaN("234");
const isNaNHello = isNaN("Hello");
console.log("isNaN123 : ", isNaN123);
console.log("isNaNMinus123 : ", isNaNMinus123);
console.log("isNaN234 : ", isNaN234);
console.log("isNaNHello : ", isNaNHello);

//10 문자와 숫자
console.log("=10========================================================")
const string10 = "10";
const string20 = "20";
const number10 = 10;
const number20 = 20;
console.log("string:%s", string10 + string20);
console.log("number:%d", number10 + number20);
console.log("string + number:%s", string10 + number20);

//09 let 변수와 const 상수
console.log("=09========================================================")
let fruit1 = "apple";
fruit1 = "banana";
const pi = 3.14;
console.log("fruit1 : ", fruit1);
console.log("pi : ", pi);

//08 let 변수
console.log("=08========================================================")
let fruit = "apple";
console.log("fruit : ", fruit);
fruit = "grape";
console.log("fruit : ", fruit);

//07 주석
console.log("=07========================================================")
console.log("Hello, kangAgee");
// console.log("Hello, KangAgee"); 한줄주석
/*여러줄 주석
console.log("Hello, KangAgee");
console.log("Hello, Goyangi");
*/

//06 백틱
console.log("=06========================================================")
const greeting1 = "hello";
const greeting2 = "bye";
const name1 = "KangAgee";
const name2 = "Goyangi";

const statement = `${greeting1}! My name is ${name2}`;
const statement2 = `${greeting2}! My name is ${name2}`;

console.log(`${greeting1}! My name is ${name1}`);
console.log(`${greeting2}! My name is ${name1}`);
console.log("statement : ", statement);
console.log("statement2 : ", statement2);

//05 Formatting
console.log("=05========================================================")
console.log("name:%s", "KangAgee");
console.log("age:%d", 31);
console.log("pi:%d", 3.14);
console.log("math:%d science:%d", 92,84);
console.log("name:%s age:%d", "KangAgee",31);
console.log("name:%s math:%d science:%d", "KangAgee", 92, 84);
console.log("name:%s math:%s science:%s", "KangAgee", 92, 84);

//04 Hello World
console.log("=04========================================================")
console.log("Hello", "World");
console.log(`I love coding, This line ${'can make error'}`);
