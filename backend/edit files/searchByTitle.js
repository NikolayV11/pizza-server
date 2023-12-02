// поиск по заголовоку
module.exports = function getSearchByTitle(data, filterEl) {
  const dataFile = data;

  const result = dataFile.filter((item) => {
    return item.title.toLowerCase() === filterEl.toLowerCase();
  });
  return result;
};
