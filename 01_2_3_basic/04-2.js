// 35 forEach() 포 이치
console.log("=35========================================================");

const listUser = [
  { name : 'kangAgee', age:31},
  { name : 'goYangI', age:31},
  { name : 'tokki', age:35 }
];
listUser.forEach(function(user){
  console.log(user);
});
console.log('==============================');
listUser.forEach(user => console.log(user));

//34 자주 쓰는 반복문 for of
console.log("=34========================================================");
const userList = [
    { name : 'kangAgee', age:31, score:85 },
    { name : 'goYangI', age:31, score:95 },
    { name : 'tokki', age:35, score:76 }
];
for(const user of userList){
  console.log('user : ', user);
}

//33 for문 끝내기 break
console.log("=33========================================================");
const studentList = [
  { name : 'kangAgee', age:31, score:85 },
  { name : 'goYangI', age:31, score:95 },
  { name : 'tokki', age:35, score:76 },
  { name : 'horangI', age:31, score:94 }
];

let resultstudent = '';

for(let index=0; index<studentList.length; index += 1){
  if(studentList[index].name === 'tokki'){
    resultStudent = studentList[index];
    break;
  }
  console.log(studentList[index].name, '은 tokki가 아닙니다.');
}

console.log('resultStudent : ', resultStudent);
