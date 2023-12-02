// фильтрация по всем полям
module.exports = function getFilter(data, filerKey, filterEl) {
  const dataFile = data;

  const result = dataFile.filter((item) => {
    // проверка на число целых и дробных чисел
    if (!isNaN(Number(filterEl))) {
      if (typeof item[`${filerKey}`] === "number") {
        if (item[`${filerKey}`].toString() === filterEl) return item;
      }
    }

    //проверка на строку
    if (isNaN(Number(filterEl))) {
      if (typeof item[`${filerKey}`] === "string") {
        if (item[`${filerKey}`].toLowerCase() === filterEl.toLowerCase()) return item;
      }
    }
  });
  return result;
};
