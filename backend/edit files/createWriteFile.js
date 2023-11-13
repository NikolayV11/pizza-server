const fs = require("fs");
// переписывание файла
module.exports = function createWriteFile(filePath, data) {
  if (!fs.existsSync(filePath)) return false;

  fs.writeFileSync(filePath, JSON.stringify(data), { encoding: "utf8", flag: "w" });
  return true;
};
