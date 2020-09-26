const livros = require("../model/livros.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.send(livros);
}

module.exports = {getAll};