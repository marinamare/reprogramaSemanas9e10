const express = require("express");
const app = express();


const index = require("./routes/index.js");
const equipe = require("./routes/equipeRoutes.js");
const livros = require("./routes/livrosRoutes.js");


app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next();
  });

app.use("/", index);
app.use("/equipe", equipe);
app.use("/livros", livros);


module.exports = app