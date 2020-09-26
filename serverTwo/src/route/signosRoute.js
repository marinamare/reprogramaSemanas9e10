const express = require('express');
const router = express.Router();
const controller = require('../controller/signosController');

router.get("/", controller.getAll);
router.get("/signos", controller.getAll);

module.exports = router; 