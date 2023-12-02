// сщртировка по(возрастанию/убыванию)
module.exports = function sortOnRequest(data, sort, order = "desc") {
  const fileData = data;
  console.log("sortOnRequest", data.length);
  if (fileData.length === 0) return false;

  console.log("sort", sort);
  console.log("order", order);
  if (order === "") order = "desc";
  if (order === "desc" || order === "asc") {
    fileData.sort((a, b) => {
      // По убыванию
      if (order === "desc") {
        return a[`${sort}`] < b[`${sort}`] ? 1 : -1;
      }
      // По возрастанию
      if (order === "asc") {
        return a[`${sort}`] > b[`${sort}`] ? 1 : -1;
      }
    });
    return fileData;
  }
  return false;
};
