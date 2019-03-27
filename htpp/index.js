// const http = require("http");
// http
//   .createServer((req, res) => {
//     if (req.url === "/") {
//       res.write("Hello world...");
//       res.end();
//     }
//     if (req.url === "/post") {
//       res.write("post...");
//       res.end();
//     }
//   })
//   .listen(3000);
// console.log("testing");
const express = require("express");
const app = express();
app.use(express.json());

const posts = [
  { id: 1, name: "a" },
  { id: 21, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" }
];

app.get("/", (req, res) => {
  res.send("you are in home page....... ");
});
app.get("/post/:postNo/:message", (req, res) => {
  res.send(req.params);
});
app.get("/post/", (req, res) => {
  res.send(req.query);
});

app.post("/post", (req, res) => {
  let post = {
    id: posts.length + 1,
    name: req.body.name
  };
  res.send(post);
});
app.listen(5000, () => console.log("Server is runing......"));
