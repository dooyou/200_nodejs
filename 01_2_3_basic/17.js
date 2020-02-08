// 111 map() 함수 예제
console.log("=111========================================================");
const listEmployee = [
  {name:'k', age:31, salary:4000 },
  {name:'j', age:31, salary:5000 },
  {name:'m', age:35, salary:6000 },
];
const raisedSalaryList = listEmployee.map(employee => employee.salary*1.1);
raisedSalaryList.forEach(salary => console.log("salary : %d", salary));
// 110 map() 함수
console.log("=110========================================================");
const list = [1,2,3];
const multipledList = list.map(item => item*10);
multipledList.forEach(item => console.log(item));

// 112 reduce() 함수
console.log("=112========================================================");
const scores = [10,20,30,40,50];
const sum = scores.reduce((a,b) => (a + b));
const sumWithInitValue = scores.reduce((a,b) => (a + b), 10);
console.log('sumb : ', sum);
console.log('sumWithInitValue : ', sumWithInitValue);

// 113 reduce() 함수 예제
console.log("=113========================================================");
const students = [
  {name:'k', age:31, score:85 },
  {name:'j', age:31, score:95 },
  {name:'m', age:35, score:76 },
];
const studentScores = students.map(student => student.score);
const studentSum = studentScores.reduce((a,b) => a+b, 0);
console.log('sum : ',studentSum);

// 114 filter(), map(), reduce() 함수 예제
console.log("=114========================================================");
// 점수가 80점 이상인 학생 필터링
const scoreUpper80 = students
.filter(student => student.score > 80)
.map(student => student.score)
.reduce((a,b) => (a+b));
console.log(" 점수가 80점 이상인 학생들의 합 : ", scoreUpper80);

// 115 filter(), map(), reduce() 함수 예제 - 합계 구하기
console.log("=115========================================================");
// 개발팀 나이 합계 구하기
const employeeList = [
  {name:'k', age:31, department:'development' },
  {name:'j', age:31, department:'design' },
  {name:'m', age:35, department:'development' },
];
const developmentAge = employeeList
.filter(depart => depart.department == "development")
.map(age => age.age)
.reduce((a,b) => (a+b));
console.log(developmentAge);

// 116 filter(), map(), reduce() 함수 예제 - 평균 구하기
console.log("=116========================================================");
// 나이가 21이상 30미만의 점수 평균 구하기
const students2 = [
  {name:'k', age:31, score:85 },
  {name:'j', age:31, score:95 },
  {name:'m', age:35, score:76 },
  {name:'d', age:24, score:84 },
  {name:'y', age:26, score:54 },
  {name:'m', age:29, score:34 },
];
const range = students2
.filter(studentsAge => studentsAge.age >= 21 && studentsAge.age < 30);
const rangeLength = range.length;
console.log("rangeLength : ", rangeLength);
const summ = range
.map(studentsScore => studentsScore.score)
.reduce((a,b) => (a+b));
const average = summ / rangeLength ;
console.log("average : ", average);

// 책에 있던 코드
const between21to30StudentsAverage = students2
.filter(student => student.age >= 21 && student.age < 30 )
.map(student => student.score)
.reduce((previous, current, index, array) => previous + (current / array.length), 0);
console.log("average : ", between21to30StudentsAverage);

// 117 promise
console.log("=117========================================================");
const promiseResult = new Promise((resolve) => {
  resolve(1); // 핵심은 첫번째는 resolve() 를 쓴다는 것.
}).then((result) => {
  console.log('first:', result);
  return `${result}hello`;
}).then((result) => {
  console.log('second:', result);
  return `${result}nello`;
});
promiseResult.then(result => console.log(result));

// 118 promise
console.log("=118========================================================");
const promiseFirst = new Promise(resolve => resolve(1))
.then(result => `${result + 10}`);

const promiseSecond = new Promise(resolve => resolve(2))
.then(result => `${result + 20}`);

Promise.all([promiseFirst, promiseSecond])
.then((result) => {
  console.log("result : ", result);
  console.log("sum : ", Number(result[0]) + Number(result[1]));
});

//20
console.log("=120========================================================");
const printSomething = require('./119_exports');
printSomething.printHello();
printSomething.printMessage('bye');
