// поиск по всем полям
module.exports = function getSearch(data, searchEl) {
  const dataFile = data;

  const result = dataFile.filter((item) => {
    for (let key in item) {
      // проверка на число целых и дробных чисел
      if (!isNaN(Number(searchEl))) {
        if (typeof item[`${key}`] === "number") {
          if (item[`${key}`].toString().includes(searchEl)) return item;
        }
      }

      //проверка на строку
      if (isNaN(Number(searchEl))) {
        if (typeof item[`${key}`] === "string") {
          if (item[`${key}`].toLowerCase().includes(searchEl.toLowerCase())) return item;
        }
      }
    }
  });
  return result;
};
