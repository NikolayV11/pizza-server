const express = require("express");
const app = express();
const PORT = 3030;

require("./routes")(app);
app.listen(PORT, () => {
  console.log("Server PORT: 3030 START....");
});
