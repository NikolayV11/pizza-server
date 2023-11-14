const delData = require("./edit files/delData");
const getDataFile = require("./edit files/getDataFile");
const dataChange = require("./edit files/dataChange");

module.exports = function processingRequest({ path, method, obj }) {
  console.log(path);
  const pathFiles = "./files/json dase/";
  const pathes = path.split("/").filter((item) => {
    return item != "";
  });

  if (method === "GET") {
    console.log("GET");
    console.log(pathes[0]);
    return getDataFile(pathFiles + `${pathes[0]}.json`);
  }

  if (method === "POST") {
    console.log("POST");
    console.log(pathes[0]);
    // console.log(obj);
    dataChange(pathFiles + `${pathes[0]}.json`, obj);
  }

  if (method === "OPTIONS") {
    console.log("OPTIONS");
    console.log(pathes);

    delData(pathFiles + `${pathes[0]}.json`, "id", +pathes[1]);
  }
};
