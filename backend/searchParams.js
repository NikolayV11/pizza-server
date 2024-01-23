const getDataFile = require("./edit files/getDataFile");

// поиск с 1 параметром
module.exports = function searchParams({ req }) {
  const id = +req.params.id;
  const pathes = req.originalUrl.split("/").filter((item) => {
    return item != "";
  });

  const dataFiles = getDataFile(`./files/json dase/${pathes[0]}.json`).find(
    (item) => item.id === id,
  );
  // ворачивает объект
  // console.log(dataFiles);
  return dataFiles;
};
