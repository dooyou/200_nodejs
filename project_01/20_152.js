const cheerio = require('cheerio');
const crawler = require('./20_152_crawler');

const parse = (decodedResult) => {
  //console.log(decodedResult);
  const $ = cheerio.load(decodedResult);
  const titles = $('div.rc').find('h3.LC20lb');
  for(let i=0; i<titles.length; i += 1){
    const title = $(titles[i]).text();
    console.log(title);
  }
};

crawler.crawl(parse)({ q : '서울대입구역 맛집'});
