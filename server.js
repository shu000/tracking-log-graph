const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.APP_PORT;

const { Templates } = require('./src/server/templates');

app.use(express.static(__dirname + '/dist'));

// Allow Origin "127.0.0.1:8080" to let webpack-dev-server to access api.
// TODO: Only Debug Flag
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post('/api/customers', bodyParser.json(), async (req, res) => {
  res.send(await Templates.getCustomers());
});

app.post('/api/customers/add', bodyParser.json(), async (req, res) => {
  res.send(await Templates.addCustomer(req.body.customerName));
});

app.post('/api/customers/delete', bodyParser.json(), async (req, res) => {
  res.send(await Templates.deleteCustomer(req.body.customerName));
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
