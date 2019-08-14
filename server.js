const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/api', (req, res) => {
  res.send({ api: 'test' });
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(3000, ()=> {
  console.log('server running');
});
