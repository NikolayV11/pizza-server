const fs = require("fs");

// перпизывание файла
const createWriteFile = require("./createWriteFile");
// чтение файла
const getDataFile = require("./getDataFile");

// удаление и резервное копирование данных
module.exports = function delDataFile(filePath, argument, data) {
  if (!fs.existsSync(filePath)) return false;

  // считываем данный из файла откуда ходим удалить данные
  let oldData = getDataFile(filePath);
  if (oldData.length === 0) return false;

  // проверяем есть ли полученные данные перед удалением
  let a = oldData.some((item) => {
    return item[`${argument}`] === data;
  });
  console.log("a", a);
  if (!a) return console.log(false);

  //копирование данных
  // copyingData(oldData);

  // удаляем полученный данные перед записью
  let dataFile = oldData.filter((item) => {
    return item[`${argument}`] != data;
  });

  // записываем новые данные
  return createWriteFile(filePath, dataFile) ? true : false;
};
