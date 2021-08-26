const serverless = require('serverless-http');
const express = require("express");
const app = express();

app.post("/api", (req, res, next) => {
 res.json(["Tony","Gol"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

module.exports.handler = serverless(app);
