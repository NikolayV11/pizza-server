// сщртировка по(возрастанию/убыванию)
module.exports = function sortOnRequest(data, sort, order = "desc") {
  const result = data;
  if (result.length === 0) return result;

  if (order === "") order = "desc";
  if (order === "desc" || order === "asc") {
    result.sort((a, b) => {
      // По убыванию
      if (order === "desc") {
        return a[`${sort}`] < b[`${sort}`] ? 1 : -1;
      }
      // По возрастанию
      if (order === "asc") {
        return a[`${sort}`] > b[`${sort}`] ? 1 : -1;
      }
    });
    return result;
  }
  return result;
};
