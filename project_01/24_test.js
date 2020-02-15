const express = require('express');
const pug = require('pug');
const fs = require('fs');
const app = express();

app.use(express.static(`${__dirname}/multimedia`));


app.use((req,res) => {
  res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8' });
  const ppug = pug.compile('test.pug');
  res.end(ppug);
});


app.listen(3000, () => {
  console.log('server is running port 3000!');
})
