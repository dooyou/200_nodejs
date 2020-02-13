const express = require('express');
const app = express();

app.get('/', (request, response) => {
  const result = [];
  const multipleNumber = 9;
  for (let i = 1; i<6; i++){
    result.push({
      number:`${multipleNumber}X${i}`
    });
  }
  response.send(result);
});
app.get('/8dan', (req, res) => {
  const result = [];
  const multipleNumber = 8;
  for (let i = 1; i<6; i++){
    result.push({
      number:`${multipleNumber}X${i}`
    });
  }
  res.send(result);
})

app.get('/error', (request, response) => {
  response.status(404).send('404 ERROR');
});

app.listen(3000, () => {
  console.log('server is running port 3000!');
})
