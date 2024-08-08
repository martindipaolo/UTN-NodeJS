var express = require("express");
var router = express.Router();
var usersController = require("../controller/usersController");

router.get("/", usersController.get);
router.post("/register", usersController.register);
router.post("/login", usersController.login);

module.exports = router;
