const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello express module');
});

app.get('/hello', (request, response) => {
  response.send('Hello Worl :-)');
});

app.get('/menu', (request, response) => {
  response.send('this menu is....');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
})
