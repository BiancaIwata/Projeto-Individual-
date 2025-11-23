var comentariosModel = require("../models/comentariosModel");

function enviar(req, res) {
  var usuario = req.body.usuario;
  var filme = req.body.filmeServer;
  var comentario = req.body.comentarioServer;
  var emocao = req.body.emocaoServer;
  var intensidade = req.body.intensidadeServer;

  if (comentario == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (usuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (filme == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (emocao == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (intensidade == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else

    comentariosModel.enviar(filme, comentario, emocao, intensidade, usuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao renviar o formulário! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
    
}

module.exports = {
  enviar
}