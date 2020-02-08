const crawler = require('./20_152_crawler');
const cheerio = require('cheerio');
const fs = require('fs');

const parse = (decodedResult) => {

  const $ = cheerio.load(decodedResult);
  const titles = $('div.rc').find('h3.LC20lb');
  //console.log("titles : ", titles);
  titles.each((index, element) => {
    const title = $(element).text();
    console.log(titles);
    fs.appendFile('./titles.txt', `${title}\n`)
  });
};

crawler.crawl(parse)({ q : '샤로수길 맛집'});
