const cheerio = require('cheerio');
const crawler = require('./ex02_crawler');

const parse = (decodedResult) => {
  //console.log(decodedResult);
  const $ = cheerio.load(decodedResult);
  const titles = $('.goodsList > table').find('p.goods_name');
  for(let i=0; i<titles.length; i += 1){
    const title = $(titles[i]).text();
    console.log(title);
  }
};

crawler.crawl(parse)({ query : 'javascript'});
