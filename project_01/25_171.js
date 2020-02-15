const schedule = require('node-schedule');

//특정 시간에 한 번
// 2020년 2월 15일 오후 8시 18분
const date = new Date(2020,01,15,20,18,0);

console.log(date);

const j = schedule.scheduleJob(date, () => {
  console.log('no pain, no gain');
});

// 매 시간마다 한 번
const rule = new schedule.RecurrenceRule();
rule.minute = 19;

const k = schedule.scheduleJob(rule, () => {
  console.log('Laziness is nothing more than the habit of resting before you get tired.');
});
