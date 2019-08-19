const express = require('express');
const app = express();
const port = 8080;

const { Templates } = require('./src/server/templates');

app.use(express.static(__dirname + '/dist'));

app.get('/api/templates/get', async (req, res) => {
  res.send(await Templates.get());
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
});

app.listen(port, ()=> {
  console.log('server running');
});
