var comentariosModel = require("../models/comentariosModel");

function enviar(req, res) {
  var usuario = req.body.usuarioServer;
  var filme = req.body.filmeServer;
  var comentario = req.body.comentarioServer;
  var emocao = req.body.emocaoServer;
  var intensidade = req.body.intensidadeServer;

  if (comentario == undefined) {
    res.status(400).send("comentario está undefined!");
  } else if (usuario == undefined) {
    res.status(400).send("usuario está undefined!");
  } else if (filme == undefined) {
    res.status(400).send("filme está undefined!");
  } else if (emocao == undefined) {
    res.status(400).send("emocao está undefined!");
  } else if (intensidade == undefined) {
    res.status(400).send("intensidade está undefined!");
  } else

    comentariosModel.enviar(usuario, filme, comentario, emocao, intensidade)
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

function buscarEmocoes(req, res) {
  comentariosModel.buscarEmocoes().then(function (resultado) {
  if (resultado.length > 0) {
      res.status(200).json(resultado);
  } else {
      res.status(204).send("Nenhum resultado encontrado!")
  }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar as emoções.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

function buscarIntensidades(req, res) {
  comentariosModel.buscarIntensidades().then(function (resultado) {
  if (resultado.length > 0) {
      res.status(200).json(resultado)
  } else {
      res.status(204).send("Nenhum resultado encontrado!")
  }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar as intensidades.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  enviar,
  buscarEmocoes,
  buscarIntensidades
}