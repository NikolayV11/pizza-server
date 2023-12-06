module.exports = function pageLimit(data, page, limit) {
  const maxElem = limit * page;
  //полечение массива
  const dataArr = data;

  // количество страниц
  const numberOfPages = Math.ceil(dataArr.length / limit);

  const result = dataArr.splice(maxElem - limit, limit);

  if (result.length === 0) return { result: result, numberOfPages: numberOfPages };

  return { result: result, numberOfPages: numberOfPages, page: page };
};
