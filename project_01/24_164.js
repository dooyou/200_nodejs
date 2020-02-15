const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/multimedia`));

app.use((req,res) => {
  const result = [];
  const multipleNumber = 9;
  for (let i = 1; i<6; i++){
    result.push({
      number:`${multipleNumber}X${i}`
    });
  }
  response.send(result);


  res.writeHead('200', {'Content-Type' : 'text/html;charset=utf8' });
  res.end('<img src="sample.jpg" width="100%"/>');
});

app.listen(3000, () => {
  console.log('Server is running port 3000!');
})
