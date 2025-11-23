var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.post("/enviar", function (req, res) {
  comentariosController.enviar(req, res);
})

module.exports = router;