var express = require("express");
var app = express();

app.post("/api", (req, res, next) => {
 res.json(["Tony","Gol"]);
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
