// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const bodyParser = require("body-parser");
// const app = express();
// const port = 8000;
// app.use(bodyParser.urlencoded({ extended: true }));
// require("./app/routes")(app, {});
// app.listen(port, () => {
//   console.log("live on " + port);
// });
const fs = require("fs");
const data = require("./data");

// fs.readFile("data.pa", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
let summary = "";
data.data.map(x => {
  console.log(`${x.first_name} ${x.last_name} ${x.place_of_birth} ${x.color}`);
  summary += `${x.first_name} ${x.last_name} ${x.place_of_birth} ${x.color}\n`;
});
fs.writeFile("newFile.txt", summary, "utf8", err => {
  if (!err) console.log("this is new file ");
});
// console.log(line);
