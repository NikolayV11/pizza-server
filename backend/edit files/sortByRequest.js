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
  //переданные параметры
  const option = req.query;
  // console.log(option);

  // ключи объекта
  const keysObject = Object.keys(req.query);
  // console.log(keysObject);

  // для сохранения выполнения операций функций
  let dataFile = { result: [], numberOfPages: 0, page: 0 };
  dataFile.result = getDataFile(`./files/json dase${req.path}.json`);
  if (dataFile.length === 0) return false;

  if (keysObject === "search") {
    dataFile = getSearch(dataFile, option[`${keysObject[i]}`]);
  }

  // проходим по масиве с переданными ключами параметров
  for (let i = 0; i < keysObject.length; i++) {
    // для сортировки элементов (По убыванию/возрастанию)
    if (sortingElements[0][`${keysObject[i]}`]) {
      dataFile.result = sortOnRequest(
        dataFile.result,
        option[`${keysObject[i]}`],
        sortingElements[1][`${keysObject[i + 1]}`] ? option[`${keysObject[i + 1]}`] : "",
      );
    }
    // для поиска
    if (keysObject[i] === "search") {
      console.log(option[`${keysObject[i]}`]);
      dataFile.result = getSearch(dataFile.result, option[`${keysObject[i]}`]);
    }
    // для поиска в title
    if (keysObject[i] === "title") {
      dataFile.result = getSearchByTitle(dataFile.result, option[`${keysObject[i]}`]);
    } else if (dataFile.result[0]?.[`${keysObject[i]}`] != undefined) {
      // для фильтрации совподения во всех полях
      dataFile.result = getFilter(dataFile.result, keysObject[i], option[`${keysObject[i]}`]);
    }
  }

  // сначало мы обрабатываем страницу (PAGES)
  if (pageLimit[0][`${keysObject[0]}`]) {
    let limit = +option[`${keysObject[1]}`];
    let page = +option[`${keysObject[0]}`]; // какую страницу запрашиваем
    let numberPage = Math.ceil(dataFile.result.length / limit); // количество страниц
    if (page > numberPage) {
      if (dataFile.result.length > 0) {
        // вернули объект с запрашиваемой 1
        dataFile = pageLimitData(dataFile, 1, +option[`${keysObject[1]}`]);
      } else {
        console.log("такой страницы нет");
      }
    } else {
      // вернули объект с запрашиваемой страницей
      dataFile = pageLimitData(dataFile, +option[`${keysObject[0]}`], +option[`${keysObject[1]}`]);
    }
  }

  return dataFile;
};
