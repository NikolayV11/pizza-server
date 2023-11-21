const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5500;
const fs = require("fs");
const path = require("path");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "DELETE", "PATH", "PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// app.use(express.static("public"));
app.use("/public", express.static(path.resolve(__dirname + "/public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all("*", (req, res, next) => {
  res.send(require("./response")({ req: req }));
  res.end();
  next();
});

app.listen(PORT, () => {
  console.log(`Server PORT: ${PORT} START....`);
});
