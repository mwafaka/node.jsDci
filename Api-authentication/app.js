const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
//Routes

//Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log("Server listeninig at ${port}");
