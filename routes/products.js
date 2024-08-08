var express = require("express");
var router = express.Router();
var productsController = require("../controller/productsController");
var token = require("../util/jwt");

/* GET home page. */
router.get("/", productsController.getAll);
router.get("/:id", productsController.getById);
router.post("/", token.validate, productsController.create);
router.delete("/:id", token.validate, productsController.delete);
router.put("/:id", token.validate, productsController.update);

module.exports = router;
