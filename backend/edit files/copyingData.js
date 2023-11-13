const fs = require("fs");

// перпизывание файла
const createWriteFile = require("./createWriteFile");
// чтение файла
const getDataFile = require("./getDataFile");

// копирование данных

module.exports = function copyingData(data) {
  // считываем и заменяем значение для счетчика историй базы данных
  console.log(data);
  let numberList = getDataFile("./test.txt");
  numberList++;
  createWriteFile("./test.txt", numberList);

  // делаем копию данных перед удалением

  fs.writeFileSync(`./oldData${numberList}.json`, JSON.stringify(data), {
    encoding: "utf8",
    flag: "w",
  });
};
