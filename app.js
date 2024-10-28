const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("My Student ID is 22003340 Welcome to Express.");
});
app.get("/new", function (req, res) {
  res.send("New also worked");
});

app.listen(process.env.PORT || 5000);
module.exports = app;
