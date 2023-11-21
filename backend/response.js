const processingRequest = require("./edit files/processingRequest");
const sortByRequest = require("./edit files/sortByRequest");

module.exports = function processingRequestData({ req }) {
  let as = req.query; //переданные параметры
  if (Object.keys(as).length === 0) {
    // console.log(req);
    return processingRequest(req);
  } else {
    return sortByRequest(req);
  }
};
