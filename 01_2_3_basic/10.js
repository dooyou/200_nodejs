//리스트 list
console.log("=82========================================================");
const studentList = [
  {name:'KangAgee', age:31, score:85 },
  {name:'GoYangI', age:31, score:95 },
  {name:'ttokki', age:35, score:76 }
];
console.log(studentList[0]);
const student1 = {name:'horangi', age:26, score:85 };
studentList.push(student1);
console.log(studentList);
studentList.pop();
console.log(studentList);

//83 배열뒤집기 reverse()
console.log("=83========================================================");
const numbers = [1,2,3,4];
numbers.reverse();
console.log("numbers : ", numbers);
const stringArray = 'Hello'.split('');
stringArray.reverse();
console.log("stringArray : ", stringArray);

//84 정렬, 오름차순 .sort()
console.log("=84========================================================");
const numbers_s = [3,6,2,8,1];
const strings = [
  'timeoutsRemaining',
  'flagrantFouls',
  'defensive3Seconds',
  'jumpshots',
  'dunks',
  'layups',
];
const sortedNumbers = numbers_s.sort();
const sortedStrings = strings.sort();
console.log('sortedNumbers :', sortedNumbers);
console.log('sortedNumbers Desc : ',sortedNumbers.reverse());
console.log('sortedStrings : ', sortedStrings);
console.log('sortedStrings Desc: ', sortedStrings.reverse());

//85 정렬, 여러조건
console.log("=85========================================================");
const studentList2 = [
  {name:'KangAgee', age:31, math:85, english:87 },
  {name:'GoYangI', age:31,  math:95, english:97 },
  {name:'ttokki', age:35,   math:76, english:84 },
  {name:'horangi', age:24,  math:84, english:73 },
  {name:'kokkiri', age:26,  math:54, english:67 },
  {name:'kirin', age:29,  math:34, english:100 },
];
studentList2.sort((beforeStudent, nextStudent) => {
  if(beforeStudent.age > nextStudent.age) return 1;
  else if (beforeStudent.age < nextStudent.age) return -1;
  else if (beforeStudent.math > nextStudent.math) return -1;
  else if (beforeStudent.math < nextStudent.math) return 1;
  return 0;
});
console.log(studentList2);
//86 json 오브젝트 정렬
console.log("=86========================================================");
studentList2.sort((now, next) => now.math - next.math);
const compare = (now, next) => {
console.log("studentList2 : ",studentList2);
  console.log('--------------');
  console.log('now : ', now);
  console.log('next : ', next);
}
studentList2.sort(compare);

//87 .slice()
console.log("=87========================================================");
console.log(strings);
const sliced = strings.slice(1,3);
console.log('sliced : ', sliced);

//88 배열에서 필요한 부분만 뽑기
console.log("=88========================================================");
const sorted = studentList2.sort((now, next) => now.math - next.math);
console.log("sorted : ", sorted);
const reversed = sorted.reverse();
console.log("reverse : ", reversed);
const slicedd = reversed.slice(0,3);
console.log("sliced : ", slicedd);

//89
console.log("=89========================================================");
const part1 = ['KangAgee', 'GoYangI'];
const part2 = ['kokkiri', 'ttokki'];
const part3 = ['horangi', 'kirin'];
const team = part1.concat(part2);
const team2 = part1.concat(part2, part3);
console.log('team : ', team);
console.log('team2 : ', team2);

//90
console.log("=90========================================================");
const destination = ['런던', '파리', '로마'];
console.log(destination);
//shift()
console.log(destination.shift());
console.log(destination);
//unshift()
destination.unshift('뉴욕');
console.log(destination);

//91
console.log("=91========================================================");
console.log(destination.pop());
console.log(destination);
//92
console.log("=92========================================================");
const destinationName = [
  '런던','로마','파리','암스테르담',
];
const serchDestination = '파리';
for(let i=0; i<destinationName.length; i++){
  if(serchDestination === destinationName[i]){
    console.log(serchDestination, '입니다.');
    break;
  }
}
