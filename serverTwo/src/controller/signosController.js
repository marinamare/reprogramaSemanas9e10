const signos = require("../model/signos.json");

const getAll = (req, res) => {
    console.log(req.url);
    res.send(signos);
}


module.exports = {getAll};