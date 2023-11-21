const getDataFile = require("./getDataFile");

module.exports = function filteringOnRequest(path, sort, order) {
  if (!getDataFile(path)) return false;

  const fileData = getDataFile(path);
  if (fileData.length === 0) return false;

  console.log("sort", sort);
  console.log("order", typeof order);
  const result = fileData.filter((item) => {
    if (typeof item[`${sort}`] === "number") {
      return item[`${sort}`] === +order;
    } else {
      return item[`${sort}`] === order;
    }
  });
  return result;
};
