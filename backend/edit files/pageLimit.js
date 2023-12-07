module.exports = function pageLimit(data, page, limit) {
  const maxElem = limit * page;
  //полечение массива
  const dataArr = data.result;

  // количество страниц
  const numberOfPages = Math.ceil(dataArr.length / limit);
  console.log("количество страниц", numberOfPages);

  const result = dataArr.splice(maxElem - limit, limit);
  console.log(maxElem, limit);
  if (result.length === 0) return { result: result, numberOfPages: numberOfPages, page: page };
  // console.log(result);
  return { result: result, numberOfPages: +numberOfPages, page: +page };
};
