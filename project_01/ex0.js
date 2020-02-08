const request = require('request');
const iconv = require('iconv-lite');

request({
  url : 'http://www.yes24.com/searchcorner/Search?keywordAd=&keyword=&domain=ALL&qdomain=%C0%FC%C3%BC&Wcode=001_005&query=',
  method : 'GET',
  qs : { q: 'javascript'},
  encoding : null,
}, (error, response, body) => {
  const decodedResult = iconv.decode(body, 'euc-kr');
  console.log(decodedResult);
})
