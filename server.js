const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

const { Templates } = require('./src/server/templates');

app.use(express.static(__dirname + '/dist'));

app.post('/api/customers', bodyParser.json(), async (req, res) => {
  res.send(await Templates.getCustomers());
});

app.post('/api/customers/add', bodyParser.json(), async (req, res) => {
  res.send(await Templates.addCustomer(customerName));
});

app.post('/api/template', bodyParser.json(), async (req, res) => {
  res.send(await Templates.getTemplate(req.body.customerName));
});

app.post('/api/template/update', bodyParser.json(), async (req, res) => {
  res.send(await Templates.updateTemplate(req.body.customerName, req.body.styles));
});

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html')
});

app.listen(port, ()=> {
  console.log('server running');
});
