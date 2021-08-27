const serverless = require('serverless-http');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user = {
 username:'',
 password: ''
};

let body = {
 error: false,
 code: 200,
 message: ''
};

app.get('/', function(req, res) {
 body = {
  error: true,
  code: 200,
  message: 'Go to /api'
 };
 res.send(body);
});

app.route('/api')
 .get(function (req, res) {
  body = {
   error: false,
   code: 200,
   message: ''
  };
  body = {
    error: false,
    code: 200,
    body: user
  };
  res.send(body);

 })
 .post(function (req, res) {
  if(!req.body.username || !req.body.password) {
   body = {
    error: true,
    code: 502,
    message: 'Fill username and password field'
   };
  } else {
    user = {
     username: req.body.username,
     password: req.body.password
    };
    body = {
     error: false,
     code: 200,
     message: 'Welcome to our demo API, here are the details of your request:',
     body: user
    };
   }

  res.send(body);
 })



app.use(function(req, res, next) {
 body = {
  error: true,
  code: 404,
  message: 'URL not found'
 };
 res.status(404).send(body);
});

//app.listen(3000, () => {
// console.log("Server started on 3000");
//});

module.exports.handler = serverless(app);
