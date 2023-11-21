const pageLimitData = require("./pageLimit");
const filteringOnRequest = require("./filteringOnRequest");

module.exports = function sortByRequest(req) {
  //переданные параметры
  const option = req.query;
  // ключи объекта
  const keysObject = Object.keys(option);
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

  if (Object.keys(option).length === 2) {
    // для ограничения элементов страницы
    if (pageLimit[0][`${keysObject[0]}`] && pageLimit[1][`${keysObject[1]}`]) {
      console.log("if №1", option, req.body, req.path);
      return pageLimitData(
        `./files/json dase${req.path}.json`,
        option[`${keysObject[0]}`],
        option[`${keysObject[1]}`],
      );
    }
    // для сортировки элементов
    if (sortingElements[0][`${keysObject[0]}`] && sortingElements[1][`${keysObject[1]}`]) {
      console.log("if №2");
      return filteringOnRequest(
        `./files/json dase${req.path}.json`,
        option[`${keysObject[0]}`],
        option[`${keysObject[1]}`],
      );
    }
  }
};
