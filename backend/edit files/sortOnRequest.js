const getDataFile = require("./getDataFile");

module.exports = function sortOnRequest(path, sort, order = "desc") {
  if (!getDataFile(path)) return false;

  const fileData = getDataFile(path);
  if (fileData.length === 0) return false;

  console.log("sort", sort);
  console.log("order", order);

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
