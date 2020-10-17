const express = require("express");
const router = express.Router();
const controller = require("../controllers/equipeController");


router.get("/", controller.getColaboradoras);
router.get("/equipe", controller.getColaboradoras);
router.get("/:id", controller.getPessoaById);

router.post("/", controller.postColaboradora);
router.delete("/:id", controller.deleteColaboradora); 
router.put("/:id", controller.putColaboradora);
router.patch("/:id", controller.patchColaboradora);


module.exports = router;