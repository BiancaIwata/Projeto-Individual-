var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.get("/buscarEmocoes", function (req, res) {
  comentariosController.buscarEmocoes(req, res);
});

router.get("/buscarIntensidades", function (req, res) {
  comentariosController.buscarIntensidades(req, res);
});

router.get("/buscarFilmeMaisComentado", function (req, res) {
  comentariosController.buscarFilmeMaisComentado(req, res);
});

router.post("/enviar", function (req, res) {
  comentariosController.enviar(req, res);
})

module.exports = router;