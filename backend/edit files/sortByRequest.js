// чтение с файла
const getDataFile = require("./getDataFile");

// обработка методов
// лимит страниц
const pageLimitData = require("./pageLimit");
// сортировка по(возрастанию/убыванию)
const sortOnRequest = require("./sortOnRequest");
// поиск по всем полям
const getSearch = require("./search");
// фильтрация по всем полям
const getFilter = require("./getFilter");
// поиск по заголовоку
const getSearchByTitle = require("./searchByTitle");

/* параметры методов */

// для ограничения элементов страницы
const pageLimit = [
  { page: "page", p: "page" },
  { limit: "limit", l: "limit" },
];

// для сортировки элементов
const sortingElements = [
  { sortBy: "sortBy", sortby: "sortBy" },
  { order: "orderBy", orderby: "orderBy", orderBy: "orderBy" },
];

module.exports = function sortByRequest(req) {
  // запрос на обработку страниц
  let pageRequest = false;
  //переданные параметры
  const option = req.query;
  console.log(option);

  // ключи объекта
  const keysObject = Object.keys(req.query);
  console.log(keysObject);

  // для сохранения выполнения операций функций
  let dataFile = getDataFile(`./files/json dase${req.path}.json`);
  if (dataFile.length === 0) return false;

  // сначало мы обрабатываем страницу (PAGES)
  if (pageLimit[0][`${keysObject[0]}`]) {
    console.log("2", option[`${keysObject[1]}`]);
    // вернули объект с запрашиваемой страницей
    dataFile = pageLimitData(dataFile, option[`${keysObject[0]}`], option[`${keysObject[1]}`]);
    pageRequest = true;
  }
  // console.log(dataFile);
  // проходим по масиве с переданными ключами параметров
  for (let i = 0; i < keysObject.length; i++) {
    // методы для выбранной страницы
    if (pageRequest) {
      // для сортировки элементов (По убыванию/возрастанию)
      if (sortingElements[0][`${keysObject[i]}`]) {
        console.log("if №2", option);

        dataFile.result = sortOnRequest(
          dataFile.result,
          option[`${keysObject[i]}`],
          sortingElements[1][`${keysObject[i + 1]}`] ? option[`${keysObject[i + 1]}`] : "",
        );
      }
      // для поиска
      if (keysObject[i] === "search") {
        console.log("search");
        console.log(option[`${keysObject[i]}`]);
        dataFile.result = getSearch(dataFile.result, option[`${keysObject[i]}`]);
      }
      // для поиска в title
      if (keysObject[i] === "title") {
        console.log("title");
        console.log(option[`${keysObject[0]}`]);
        dataFile.result = getSearchByTitle(dataFile.result, option[`${keysObject[i]}`]);
      } else if (dataFile.result[0]?.[`${keysObject[i]}`] != undefined) {
        // для фильтрации совподения во всех полях
        console.log("filter", keysObject[i]);
        dataFile.result = getFilter(dataFile.result, keysObject[i], option[`${keysObject[i]}`]);
      }

      //
    }
    // методы если страницу не указывали
    if (!pageRequest) {
      // для сортировки элементов (По убыванию/возрастанию)
      if (sortingElements[0][`${keysObject[i]}`]) {
        dataFile = sortOnRequest(
          dataFile,
          option[`${keysObject[i]}`],
          sortingElements[1][`${keysObject[i + 1]}`] ? option[`${keysObject[i + 1]}`] : "",
        );
      }
      // для поиска
      if (keysObject[i] === "search") {
        console.log("search");
        dataFile = getSearch(dataFile, option[`${keysObject[i]}`]);
      }

      // // для поиска в title
      if (keysObject[i] === "title") {
        console.log("title");
        console.log(option[`${keysObject[0]}`]);
        dataFile = getSearchByTitle(dataFile, option[`${keysObject[i]}`]);
      } else if (dataFile[0]?.[`${keysObject[i]}`] != undefined) {
        // для фильтрации совподения во всех полях
        console.log("key", keysObject[i]);
        console.log("значение", option[`${keysObject[i]}`], dataFile[0]?.[`${keysObject[i]}`]);
        dataFile = getFilter(dataFile, keysObject[i], option[`${keysObject[i]}`]);
      }
    }
  }
  console.log("finish", dataFile);
  return dataFile;
};
