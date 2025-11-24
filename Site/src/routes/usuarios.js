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

router.get("/buscarUsuariosDoDia", function (req, res) {
    usuariosController.buscarUsuariosDoDia(req, res);
});

router.get("/buscarUsuariosTotal", function (req, res) {
    usuariosController.buscarUsuariosTotal(req, res);
});

module.exports = router;