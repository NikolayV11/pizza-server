const fs = require("fs");
// перпизывание файла
const createWriteFile = require("./createWriteFile");
// чтение файла
const getDataFile = require("./getDataFile");
let numberArr = 0;
// запись полученных данных
module.exports = function dataChange(filePath, data) {
  let numberArr = 0;

  let arr = [...[data]];

  // console.log(data);
  // console.log("arr", arr);
  if (!fs.existsSync(filePath)) return console.log(false);

  let dataFile = getDataFile(filePath);
  // console.log("dataFile", dataFile);
  for (let i = 0; i < dataFile.length; i++) {
    dataFile[i].id = i + 1;
    numberArr = i + 1;
  }
  for (let i = 0; i < arr.length; i++) {
    numberArr += 1;
    arr[i].id = numberArr;
  }
  dataFile = [...dataFile, ...arr];
  // console.log("dataFile.length", dataFile.length);

  return createWriteFile(filePath, dataFile) ? true : false;
};
