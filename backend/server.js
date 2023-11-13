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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all("*", (req, res, next) => {
  // console.log(req.url, req.method, req.body);
  // if (req.url === "/data") {
  //   res.send(getDataFile("./files/json dase/data.json"));
  //   res.status(200);
  // }
  res.send(require("./response")({ path: req.url, method: req.method, obj: req.body }));
  res.end();
  next();
});

app.listen(PORT, () => {
  console.log(`Server PORT: ${PORT} START....`);
});
