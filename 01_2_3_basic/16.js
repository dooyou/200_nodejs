// 108 filter() 함수 사용
console.log("=108========================================================");
const ages = [11,12,13,16,21,31];

const upper16 = ages.filter(age => age > 16);
const under13 = ages.filter(age => age < 13);
const between12And21 = ages.filter(age => age > 12 && age < 21);

console.log('upper16: ', upper16);
console.log('under13: ', under13);
console.log('between12And21 : ', between12And21);

// 109 filter() 함수 예제
console.log("=109========================================================");
const students = [
  {name:'k', age:31, math:85, english:87},
  {name:'j', age:31, math:95, english:97},
  {name:'m', age:35, math:76, english:84},
  {name:'d', age:24, math:84, english:73},
  {name:'y', age:26, math:54, english:67},
  {name:'t', age:29, math:34, english:100},
];

const mathUpper80 = students.filter(student => student.math > 80);
const mathUpper80AndEnglishUpper70 = students.filter(student => student.math > 90 && student.english > 70);
const ageUp30AndMath30under80 = students.filter(student => student.age > 30 && student.math > 30 && student.math < 80);
console.log("mathUpper80 : ", mathUpper80);
console.log("mathUpper80AndEnglishUpper70 : ", mathUpper80AndEnglishUpper70);
console.log("ageUp30AndMath30under80 : ", ageUp30AndMath30under80);
