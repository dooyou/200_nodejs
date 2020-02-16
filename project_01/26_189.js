const request = require('request');
const cheerio = require('cheerio');
const schedule = require('node-schedule');
const nodemailer = require('nodemailer');

const url = 'https://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=105';
const iconv = require('iconv-lite');

const date = new Date(); // 날짜

let title;
const arrayTitle = [];

function sendMail(arHeadline){
  const transporter = nodemailer.createTransport({
    service : 'Gmail',
    auth : {
      user : 'emilykim0331@gmail.com',
      pass : 'Strawberry31!',
    },
  });

  const mailOptions = {
    from : 'emilykim0331@gmail.com',
    to : 'emilykim0331@gmail.com',
    subject : `${date.toLocaleDateString()} Today News`,
    html : `<h1>IT/과학 실시간 뉴스 헤드라인</h1><h2>${arHeadline}</h2>` +
    `<a href=""><p><img src='' ></p></a>`,
  };

  // send mail width defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log(error);
    } else {
      console.log(`Message sent : ${info.response}`);
    }
    transporter.close();
  });
}

const getNews = () => {
  const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    const titles = $('.cluster_item').find('a');
    for (let i = 0; i < titles.length; i++) {
      title = $(titles[i]).text();
      arrayTitle[i] = title.trim();
    }
    return arrayTitle;
  };

  request({
    uri : url,
    method : 'GET',
    encoding : null,
  }, (err, res, body) => {
    const decodedResult = iconv.decode(body, 'euc-kr');
    const arTitles = parse(decodedResult);
    sendMail(arTitles);
  });
};

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0,6)];
rule.hour = 12;
rule.minute = 46;

const j = schedule.scheduleJob(rule, () => {
  getNews();
});
