const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
    titulo: 'informações astrológicas básicas',
})
});

module.exports = router;