// 149,150 응용
const request = require('request');
const iconv = require('iconv-lite');

request({
  url : 'http://www.yes24.com/searchcorner/Search',
  method : 'GET',
  qs : { query : 'javascript'},
  encoding : null,
}, (error, response, body) => {
  const decodedResult = iconv.decode(body, 'euc-kr');
  console.log(decodedResult);
})
