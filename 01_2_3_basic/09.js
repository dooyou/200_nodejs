//70 replace() 특정 문자열 바꾸기
console.log("=70========================================================");
const greeting = "hello";
const dateStrig = "2020-08-24T11:00:00";
const smallBracket = "()";
//replace
const replacedGreeting = greeting.replace('el', '');
const replcedDateString = dateStrig.replace('T', ' ');
const middleBracket = smallBracket.replace('(', '{').replace(')', '}');
//print
console.log('el 없애기 : %s', replacedGreeting);
console.log('T를 공백으로 : %s', replcedDateString);
console.log('() => {} : %s', middleBracket);

//71 문자열 나누기 split()
console.log("=71========================================================");
const dateString = '2020-01-14 11:00:00';
//split
const date = dateString.split(' ')[0];
const time = dateString.split(' ')[1];
//print
console.log('date : %s', date);
console.log('time : %s', time);
const result = 'abc'.split('b');
console.log('result : ', result);

//72 문자열 추출하기 substrig()
console.log("=72========================================================");
const string = 'abcdefghijklmnopqrstuvwxyz';
const substrig1 = string.substring(0,4);
const substrig2 = string.substring(8,11);
const substrig3 = string.substring(24,25);
console.log("0,4 : ", substrig1);
console.log("8,11 : ", substrig2);
console.log("24,25 : ", substrig3);

//73 숫자로 바꾸기 Number()
console.log("=73========================================================");
//define
const order1 = {no:1, productName:'티셔츠', price:'30000'};
const order2 = {no:2, productName:'청바지', price:'45000'};
const order3 = {no:3, productName:'shose', price:'55.70'};
const order4 = {no:4, productName:'sunglass', price:'120.80'};
//operation
const concatenate = order1.price + order2.price;
const sum1 = parseInt(order1.price, 10) + parseInt(order2.price, 10);
const sumParseInt = parseInt(order3.price, 10) + parseInt(order4.price, 10);
const sumNumber = Number(order3.price) + Number(order4.price);
//print
console.log("order1['price'] + order2['price'] : %s", concatenate);
console.log("parseInt(order1['price']) + parseInt(order2['price']): %s", sum1);
console.log("parseInt(order3['price']) + parseInt(order4['price']): %s", sumParseInt);
console.log("Number(order3['price']) + Number(order4['price']) : %s", sumNumber);

//74 정규표현식 \ 이스케이프
console.log("=74========================================================");
const string_74 = "<h1>:::특별가 - 99,000원:::</h1>";
const result_74 = string_74.replace(/<h1>/g, '');
console.log('result_74 : ',result_74);
const result_74_2 = string_74.replace(/<h1>/g, '').replace(/<\/h1>/g, '');
console.log('result_74_2 : ',result_74_2);

//75 정규표현식 . 점
console.log("=75========================================================");
const string_75 = "<h1>특별가 - </h1><h2>99,000원</h2>";
const result_75 =   string_75.replace(/<..>/g, '');
const result_75_2 = string_75.replace(/<.../g, '');
console.log('<..> : ',result_75);
console.log('<... : ',result_75_2);

//76 정규표현식 {0,1}
console.log("=76========================================================");
const string_76 = "<h1>특별가 - </h1><h2>99,000원</h2>";
const stringDiv = "<div>특별가 - </div><h2>99,000원</h2>";
const replaceH1 = string_76.replace(/<.{0,1}h1>/g, '');
const replaceTags = stringDiv.replace(/<.{0,4}>/g, '');
console.log(replaceH1);
console.log(replaceTags);

//77 정규 표현식 []
console.log("=77========================================================");
const string_77 = "(<h1>:::특별가 - 99,000원:::</h1>)";
const replacedBracket = string_77.replace(/[()]/g ,'');
const replacedBracketOrSlashHyphenComma = string_77.replace(/[()/\-,]/g ,'');
console.log('바꾸기 전 ----> ', string_77);
console.log('()없애기 ----> ', replacedBracket);
console.log('/-없애기 ----> ', replacedBracketOrSlashHyphenComma);

//78 정규 표현식 .match()
console.log("=78========================================================");
const text = 'hello my name s KangAgee';
const matched = text.match(/[a-l]{1,3}/g);
console.log(matched);

//79 정기적으로 실행하기(fn, milsec)
console.log("=79========================================================");
// setInterval(() => console.log('Hello'), 1000);
// const printBye = () => console.log('bye');
// setInterval(printBye, 2000);
console.log("=80========================================================");
//80 몇 초 후에 실행 setTimeout(fn, milsec)
setTimeout(() => console.log('hello'), 3000);
console.log("=81========================================================");
//81 clearInterval(fn)
const playInterval = setInterval(() => console.log("HAHAHA"), 1000);
setTimeout( () => {clearInterval(playInterval); }, 5000 );
