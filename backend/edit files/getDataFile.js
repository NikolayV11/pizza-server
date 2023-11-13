const fs = require("fs");
// чтение файла
module.exports = function getDataFile(filePath) {
  if (fs.existsSync(filePath)) {
    const dataFile = JSON.parse(fs.readFileSync(filePath, { encoding: "utf8", flag: "r" }));
    return dataFile;
  }
  return false;
};
