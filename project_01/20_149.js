const request = require('request');

request({
  uri: 'https://www.google.com/search',
  method: 'GET',
  qs: { q: '신사역맛집' },
}, (error, response, body) => console.log(body));
