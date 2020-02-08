const num = process.argv;
console.log(num)
switch (num[2]) {
  case '1':
    console.log('1번은 햄버거입니다.');
    break;
  case '2':
    console.log('2번은 피자입니다.');
    break;
  case '3':
    console.log('3번은 양념통닭입니다.');
    break;
  case '4':
    console.log('4번은 족발입니다.');
    break;
  case '5':
   console.log('5번은 후라이드치킨입니다.');
   break;
  default:
    console.log('맞는게 없네요~');
}

//////////////////////////////////////////////////////////////
function plus(a,b){
  return a+b;
}
function minus(a,b){
  return a-b;
}
function calculate(a,b,func){
  return func(a,b);
}
const cal = calculate(10,20,minus);
console.log(cal)
//////////////////////////////////////////////////////////
// 1 ~ 46번 로또번호 생성하기
const lottoRandom = (min,max) =>
  Math.floor(Math.random() * ((max-min)+1), 10) + min;

for(let num=1; num < 7; num +=1){
  console.log("로또 번호 랜덤 : ", lottoRandom(1,45));
}

//////////////////////////////////////////////////////
// 안보고 다시만들기
const lotto = (min,max) => Math.floor(Math.random() * ((max-min)+1), 10) + min;
for(let numm=1; numm<7; numm+=1){
  console.log(`1~46번 사이의 숫자 6개 ${numm}: `, lotto(1,46));
}


///////////////////////////////////////////////////
const returnFun = () => (a,b) => a+b ;
const pluss = returnFun();
console.log(pluss(10,20));
///////////////////////////////
const countdown = (v) => {
  console.log('v : ', v);

  if(v === 0) {
    return v;
  }  else {
    return countdown(v-1);
  }
}
console.log("result : ", countdown(5));
///////////////////////////////////////////////////
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n-1);
};
console.log(factorial(4));

///109 안보고 다시 만들기////////////////
console.log("=109========================================================");

const sList = [
  {name:'kim', a:'12', m:'35', e:'56' },
  {name:'choi', a:'23', m:'55', e:'69' },
  {name:'back', a:'17', m:'28', e:'21' },
  {name:'kang', a:'21', m:'78', e:'88' },
  {name:'gu', a:'41', m:'89', e:'100' },
];

const up20Andm70 = sList.filter(student => student.a > 20 && student.m > 70);
console.log("up20Andm70 : ",up20Andm70);
