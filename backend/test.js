// const dataChange = require("./edit files/dataChange");

// console.log(dataChange("./files/json dase/basket.json", { q: "q" }));

// // добавление в карзину
// app.post("/basket", (req, res) => {
//   Object.keys(req.body).length === 0 ? console.log("нет данных") : console.log("есть данные");
//   console.log(req.body, "bascet");
//   dataChange("./files/json dase/basket.json", req.body);

//   res.end();
// });
// // добавление в избраное
// app.post("/like", (req, res) => {
//   Object.keys(req.body).length === 0 ? console.log("нет данных") : console.log("есть данные");
//   console.log(req.body);
//   dataChange("./files/json dase/likedProducts.json", req.body);

//   res.end();
// });
// // удаление с карзины
// app.delete("/basket", (req, res) => {
//   let a = req.body;
//   console.log(req);
//
//   res.end();
// });

// // удаление из избраного
// app.delete("/like", (req, res) => {
//   let a = req.body;
//   console.log(a.name);
//   delData("./files/json dase/likedProducts.json", "name", a.name);
//   res.end();
// });
// удаление из избраного
// app.delete("*", (req, res) => {
//   let a = req.body;
//   console.log(a.name);
//   delData("./files/json dase/likedProducts.json", "name", a.name);
//   res.end();
// });

// // отправка общих данный
// app.get("/data", (req, res) => {
//   res.send(getDataFile("./files/json dase/data.json"));
//   res.status(200);
//   res.end();
// });
// // отправка данных из карзины
// app.get("/basket", (req, res) => {
//   res.send(getDataFile("./files/json dase/basket.json"));
//   res.status(200);
//   res.end();
// });
// // отправка данных из избранного
// app.get("/like", (req, res) => {
//   res.send(getDataFile("./files/json dase/likedProducts.json"));
//   res.status(200);
//   res.end();
// });

// const arr = [
//   { title: "a", c: "f" },
//   { title: "u", c: "d" },
// ];

// console.log(arr[0].title ? "a" : false);

const getDataFile = require("./edit files/getDataFile");

const pathFaile = "./files/json dase/data.json";

const data = getDataFile(pathFaile);

console.log(
  data.sort((a, b) => {
    return a.rating > b.rating ? 1 : -1;
  }),
);
