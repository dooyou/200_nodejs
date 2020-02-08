//40 Timestamp(타임스탬프)
console.log("=40========================================================");
const date_ex40 = new Date();
const dateToTimestamp = date_ex40.getTime();
const timestampTodate = new Date(1570274211107);
const timestampToInit = new Date(1);
const timestampToInit_2 = new Date(2);

console.log(dateToTimestamp);
console.log(timestampTodate);
console.log(timestampToInit);
console.log(timestampToInit_2);

//39 yyyy-mm-dd 형식으 날짜 출력하기
console.log("=39========================================================");
const getYymmdd = (date) => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() < 9 ? `0${date.getMonth()+1}` : (date.getMonth()+1);
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : (date.getDate());
  return `${yyyy}-${mm}-${dd}`;
};

const yymmdd = getYymmdd(new Date());
const yymmdd200331 = getYymmdd(new Date(2020,3-1,31));
console.log(yymmdd);
console.log(yymmdd200331);

// 38 날짜 시간 출력하기
console.log("=38========================================================");
const today_1 = new Date();
console.log('Today : %s', today_1.toLocaleString());
console.log('LocalDateString : %s', today_1.toLocaleDateString());
console.log('LocalTimestring : %s', today_1.toLocaleTimeString());

console.log('Year : %s', today_1.getFullYear());
console.log('Month : %s', today_1.getMonth() + 1);
console.log('date : %s', today_1.getDate());
console.log('hours : %s', today_1.getHours());
console.log('minutes : %s', today_1.getMinutes());
console.log('seconds : %s', today_1.getSeconds());


// 37 날짜 시간 생성하기 Date()
console.log("=37========================================================");
const today = new Date();
const date1 = new Date(2020, 9 - 1, 2);
const date2 = new Date(2020, 8, 3);
const date3 = new Date(2020, 8, 3, 18);
const date4 = new Date(2020, 8, 3, 18, 20);
const date5 = new Date(2020, 8, 3, 18, 20, 30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());

// 36 반복문while
console.log("=36========================================================");
let number = 2;
let value = 1;

while(number<10){
  console.log(`${number}단 시작`);

  while (value<10) {
    console.log(`${number}X${value} = ${number*value}`);
    value += 1;
  }
  break;
}
