const express = require("express");
const router = express.Router();
const controller = require("../controllers/livrosController");


router.get("/", controller.getLivros);
router.get("/equipe", controller.getLivros);
router.get("/:id", controller.getLivroById);

router.post("/", controller.postLivro);
router.delete("/:id", controller.deleteLivro); 
router.put("/:id", controller.putLivro); 

module.exports = router;