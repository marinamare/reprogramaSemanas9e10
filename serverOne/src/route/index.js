const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        titulo: "Alguns filmes legais",
        data: "26/09/2020"
    })
})

module.exports = router; 