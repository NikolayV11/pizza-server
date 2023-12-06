// поиск по заголовоку
module.exports = function getSearchByTitle(data, filterEl) {
  const dataFile = data;
  console.log(data);
  const result = dataFile.filter((item) => {
    return item.title.toLowerCase().includes(filterEl.toLowerCase());
  });
  return result;
};
