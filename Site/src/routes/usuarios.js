var express = require("express");
var router = express.Router();

var usuariosController = require("../controllers/usuariosController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuariosController.js
router.post("/cadastrar", function (req, res) {
    usuariosController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuariosController.autenticar(req, res);
});

module.exports = router;