const delDataFile = require("./delDataFile.js");
const getDataFile = require("./getDataFile.js");
const dataChange = require("./dataChange.js");

module.exports = function processingRequest(req) {
  let method = req.method;
  let path = req.url;
  let obj = req.body;

  const pathFiles = "./files/json dase/";
  const pathes = path.split("/").filter((item) => {
    return item != "";
  });

  if (method === "GET") {
    console.log("GET");
    // console.log(pathes[0]);
    return getDataFile(pathFiles + `${pathes[0]}.json`);
  }

  if (method === "POST") {
    if (pathes[0] === "data") return false;
    console.log("POST");
    console.log(pathes[0]);
    return dataChange(pathFiles + `${pathes[0]}.json`, obj);
  }

  if (method === "OPTIONS") {
    if (pathes[0] === "data") return false;
    if (pathes.length < 2) return false;
    console.log("OPTIONS");
    console.log(pathes);

    return delDataFile(pathFiles + `${pathes[0]}.json`, "id", +pathes[1]) ? 200 : 304;
  }
};
