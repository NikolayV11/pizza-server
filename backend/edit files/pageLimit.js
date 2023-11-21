const getDataFile = require("./getDataFile");

module.exports = function pageLimit(path, page, limit) {
  if (!getDataFile(path)) return false;

  const maxElem = limit * page;
  //полечение массива
  const dataArr = getDataFile(path);
  // console.log("dataArr", dataArr);
  // количество страниц
  const numberOfPages = Math.ceil(dataArr.length / limit);

  const result = dataArr.splice(maxElem - limit, limit);
  // console.log("result", result);
  // console.log(maxElem, limit, page);

  if (result.length === 0) return { result: false, numberOfPages: numberOfPages };

  return { result: result, numberOfPages: numberOfPages };
};
