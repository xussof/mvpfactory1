const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json(["Tony","Gol"]);
})

module.exports.handler = serverless(app);
