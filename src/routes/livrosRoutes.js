const express = require("express");
const router = express.Router();
const controller = require("../controllers/livrosController");


router.get("/", controller.getLivros);
router.get("/equipe", controller.getLivros);
router.get("/:id", controller.getLivroById);
router.get("/categoria/:categoria", controller.getLivroByCategory); 

router.post("/", controller.postLivro);
router.delete("/:id", controller.deleteLivro); 
router.put("/:id", controller.putLivro); 
router.patch("/:id", controller.patchLivro); 

module.exports = router;